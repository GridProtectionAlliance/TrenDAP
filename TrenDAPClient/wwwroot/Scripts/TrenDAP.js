/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"TrenDAP": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"DataSources":"DataSources"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "Scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./TypeScript/TrenDAP.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \******************************************************************/
/*! exports provided: createNextState, current, __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore, createSelector, MiddlewareArray, configureStore, createAction, createAsyncThunk, createEntityAdapter, createImmutableStateInvariantMiddleware, createReducer, createSerializableStateInvariantMiddleware, createSlice, findNonSerializableValue, getDefaultMiddleware, getType, isImmutableDefault, isPlain, nanoid, unwrapResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareArray", function() { return MiddlewareArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncThunk", function() { return createAsyncThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImmutableStateInvariantMiddleware", function() { return createImmutableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSerializableStateInvariantMiddleware", function() { return createSerializableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlice", function() { return createSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNonSerializableValue", function() { return findNonSerializableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultMiddleware", function() { return getDefaultMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutableDefault", function() { return isImmutableDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlain", function() { return isPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapResult", function() { return unwrapResult; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../node_modules/immer/dist/immer.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNextState", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "current", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["current"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["__DO_NOT_USE__ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["createStore"]; });

/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"]; });

/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");








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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  return redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * protoype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function measureTime(fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

var isProduction = "development" === 'production';
var prefix = 'Invariant failed'; // Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller

function invariant(condition, message) {
  if (condition) {
    return;
  } // Condition not passed
  // In production we strip the message but still throw


  if (isProduction) {
    throw new Error(prefix);
  } // When not in production we allow the message to pass through
  // *This block will be removed in production builds*


  throw new Error(prefix + ": " + (message || ''));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function decycler(_, value) {
    if (stack[0] === value) return '[Circular ~]';
    return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}
/**
 * The default `isImmutable` function.
 *
 * @public
 */


function isImmutableDefault(value) {
  return typeof value !== 'object' || value === null || typeof value === 'undefined';
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function detectMutations() {
      return _detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = [];
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path.concat(key);

      if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function _detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = [];
  }

  var prevObj = trackedProperty ? trackedProperty.value : undefined;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  } // Gather all keys from prev (tracked) and after objs


  var keysToDetect = {};
  Object.keys(trackedProperty.children).forEach(function (key) {
    keysToDetect[key] = true;
  });
  Object.keys(obj).forEach(function (key) {
    keysToDetect[key] = true;
  });
  var keys = Object.keys(keysToDetect);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var childPath = path.concat(key);

    if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
      continue;
    }

    var result = _detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}
/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */


function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isImmutable = _options.isImmutable,
      isImmutable = _options$isImmutable === void 0 ? isImmutableDefault : _options$isImmutable,
      ignoredPaths = _options.ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter,
      ignore = _options.ignore; // Alias ignore->ignoredPaths, but prefer ignoredPaths if present

  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_ref) {
    var getState = _ref.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, 'ImmutableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          !!result.wasMutated ?  true ? invariant(false, "A state mutation was detected between dispatches, in the path '" + (result.path || []).join('.') + "'.  This may cause incorrect behavior. (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : undefined : void 0;
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          result.wasMutated && (!!result.wasMutated ?  true ? invariant(false, "A state mutation was detected inside a dispatch, in the path: " + (result.path || []).join('.') + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : undefined : void 0);
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */

function isPlain(val) {
  return typeof val === 'undefined' || val === null || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val) || isPlainObject(val);
}
/**
 * @public
 */

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = [];
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path.join('.') || '<root>',
      value: value
    };
  }

  if (typeof value !== 'object' || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        property = _ref2[0],
        nestedValue = _ref2[1];
    var nestedPath = path.concat(property);

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath.join('.')) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath.join('.'),
        value: nestedValue
      };
    }

    if (typeof nestedValue === 'object') {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}
/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isSerializab = _options.isSerializable,
      isSerializable = _options$isSerializab === void 0 ? isPlain : _options$isSerializab,
      getEntries = _options.getEntries,
      _options$ignoredActio = _options.ignoredActions,
      ignoredActions = _options$ignoredActio === void 0 ? [] : _options$ignoredActio,
      _options$ignoredActio2 = _options.ignoredActionPaths,
      ignoredActionPaths = _options$ignoredActio2 === void 0 ? ['meta.arg'] : _options$ignoredActio2,
      _options$ignoredPaths = _options.ignoredPaths,
      ignoredPaths = _options$ignoredPaths === void 0 ? [] : _options$ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
          return next(action);
        }

        var measureUtils = getTimeMeasureUtils(warnAfter, 'SerializableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          var foundActionNonSerializableValue = findNonSerializableValue(action, [], isSerializable, getEntries, ignoredActionPaths);

          if (foundActionNonSerializableValue) {
            var keyPath = foundActionNonSerializableValue.keyPath,
                value = foundActionNonSerializableValue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, '\nTake a look at the logic that dispatched this action: ', action, '\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)', '\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)');
          }
        });
        var result = next(action);
        measureUtils.measureTime(function () {
          var state = storeAPI.getState();
          var foundStateNonSerializableValue = findNonSerializableValue(state, [], isSerializable, getEntries, ignoredPaths);

          if (foundStateNonSerializableValue) {
            var keyPath = foundStateNonSerializableValue.keyPath,
                value = foundStateNonSerializableValue.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
          }
        });
        measureUtils.warnIfExceeded();
        return result;
      };
    };
  };
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      immutableCheck = _options$immutableChe === void 0 ? true : _options$immutableChe,
      _options$serializable = _options.serializableCheck,
      serializableCheck = _options$serializable === void 0 ? true : _options$serializable;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
    } else {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
    }
  }

  if (true) {
    if (immutableCheck) {
      /* PROD_START_REMOVE_UMD */
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      /* PROD_STOP_REMOVE_UMD */
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "development" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}
function isFSA(action) {
  return isPlainObject(action) && typeof action.type === 'string' && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}
/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 *
 * @public
 */


function getType(actionCreator) {
  return "" + actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {
      if (true) {
        /*
         to keep the definition by the user in line with actual behavior,
         we enforce `addCase` to always be called before calling `addMatcher`
         as matching cases take precedence over matchers
         */
        if (actionMatchers.length > 0) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addMatcher`');
        }

        if (defaultCaseReducer) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addDefaultCase`');
        }
      }

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addMatcher` should only be called before calling `builder.addDefaultCase`');
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addDefaultCase` can only be called once');
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  return function (state, action) {
    if (state === void 0) {
      state = initialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraftable"])(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

function getType$1(slice, actionKey) {
  return slice + "/" + actionKey;
}
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 * @public
 */


function createSlice(options) {
  var name = options.name,
      initialState = options.initialState;

  if (!name) {
    throw new Error('`name` is a required option for createSlice');
  }

  var reducers = options.reducers || {};

  var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
      _ref$ = _ref[0],
      extraReducers = _ref$ === void 0 ? {} : _ref$,
      _ref$2 = _ref[1],
      actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
      _ref$3 = _ref[2],
      defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType$1(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ('reducer' in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  var finalCaseReducers = _extends({}, extraReducers, {}, sliceCaseReducersByType);

  var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  return {
    name: name,
    reducer: reducer,
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName
  };
}

function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
}

function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function selectIds(state) {
      return state.ids;
    };

    var selectEntities = function selectEntities(state) {
      return state.entities;
    };

    var selectAll = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function selectId(_, id) {
      return id;
    };

    var selectById = function selectById(entities, id) {
      return entities[id];
    };

    var selectTotal = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectState, selectEntities);
    return {
      selectIds: Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectState, selectAll),
      selectTotal: Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectState, selectTotal),
      selectById: Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
}

function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, undefined);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg) {
      return isFSA(arg);
    }

    var runMutator = function runMutator(draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(state)) {
      // we must already be inside a `createNextState` call, likely because
      // this is being wrapped in `createReducer` or `createSlice`.
      // It's safe to just pass the draft to the mutator.
      runMutator(state); // since it's a draft, we'll just return it

      return state;
    } else {
      // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
      // than an Immutable<S>, and TypeScript cannot find out how to reconcile
      // these two types.
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, runMutator);
    }
  };
}

function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ( true && key === undefined) {
    console.warn('The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
  }

  return key;
}

function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      addOneMutably(entity, state);
    }
  }

  function setAllMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    state.ids = [];
    state.entities = {};
    addManyMutably(entities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      // Only apply updates to entities that currently exist
      if (update.id in state.entities) {
        // If there are multiple updates to one entity, merge them together
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: _extends({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null, {}, update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator2 = entities, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var entity = _ref2;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

function createSortedStateAdapter(selectId, sort) {
  var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
      removeOne = _createUnsortedStateA.removeOne,
      removeMany = _createUnsortedStateA.removeMany,
      removeAll = _createUnsortedStateA.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newModels, state) {
    if (!Array.isArray(newModels)) {
      newModels = Object.values(newModels);
    }

    var models = newModels.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setAllMutably(models, state) {
    if (!Array.isArray(models)) {
      models = Object.values(models);
    }

    state.entities = {};
    state.ids = [];
    addManyMutably(models, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.sort(sort); // Insert/overwrite all new/updated

    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

/**
 *
 * @param options
 *
 * @public
 */

function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _sortComparer$selectI = _extends({
    sortComparer: false,
    selectId: function selectId(instance) {
      return instance.id;
    }
  }, options),
      selectId = _sortComparer$selectI.selectId,
      sortComparer = _sortComparer$selectI.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return _extends({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory, {}, selectorsFactory, {}, stateAdapter);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(value) {
  this.value = value;
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg, payload) {
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: payload,
      error: miniSerializeError(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        aborted: aborted,
        condition: condition
      }
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
      if (true) {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(null, requestId, arg, result.value);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}
/**
 * @public
 */

function unwrapResult(returned) {
  if ('error' in returned) {
    throw returned.error;
  }

  return returned.payload;
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();




/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/app.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-modules-typescript-loader!../node_modules/css-loader/dist/cjs.js??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./Styles/app.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._12ipF4ET7TnnN25SLrGsZQ{color:red;background-color:aqua}._3T2ypdk__j8Afzom4zpHoQ{position:fixed;top:0;bottom:0;left:0;z-index:100;padding:48px 0 0;box-shadow:inset -1px 0 0 rgba(0,0,0,.1)}._3T2ypdk__j8Afzom4zpHoQ a{color:#78828d}._3SD2Q3KVsFSIuHAEj6NBQG{position:-webkit-sticky;position:sticky}._1_JH5WtD7ltDEMAxm7o5vi{font-size:.75em;text-transform:uppercase}", ""]);
// Exports
exports.locals = {
	"red": "_12ipF4ET7TnnN25SLrGsZQ",
	"sidebar": "_3T2ypdk__j8Afzom4zpHoQ",
	"sidebar-sticky": "_3SD2Q3KVsFSIuHAEj6NBQG",
	"sidebar-heading": "_1_JH5WtD7ltDEMAxm7o5vi"
};
module.exports = exports;


/***/ }),

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../node_modules/immer/dist/immer.esm.js":
/*!***********************************************!*\
  !*** ../node_modules/immer/dist/immer.esm.js ***!
  \***********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return sn; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){y(n)||t(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0))}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=tn[t];return r||n( true?18:undefined,t),r}function m(n,t){tn[n]=t}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||b("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function E(n){n.P||(n.P=!0,n.l&&E(n.l))}function k(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").T(t,r):v(t)?b("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),rn.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),rn.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&E(r);break;case 4:o(r)&&E(r)}}}function o(n){for(var t=n.t,r=n.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==Z(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.g&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=nn(t);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,E(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,E(r))}));else if(5===c){if(a(r)&&(E(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function F(){function r(n){if(!n||"object"!=typeof n)return n;if(Array.isArray(n))return n.map(r);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],r(n[1])]})));if(v(n))return new Set(Array.from(n).map(r));var t=Object.create(Object.getPrototypeOf(n));for(var e in n)t[e]=r(n[e]);return t}function e(n){return t(n)?r(n):n}var f="add";m("Patches",{$:function(t,e){return e.forEach((function(e){for(var i=e.path,u=e.op,c=t,s=0;s<i.length-1;s++)"object"!=typeof(c=a(c,i[s]))&&n(15,i.join("/"));var v=o(c),p=r(e.value),l=i[i.length-1];switch(u){case"replace":switch(v){case 2:return c.set(l,p);case 3:n(16);default:return c[l]=p}case f:switch(v){case 1:return c.splice(l,0,p);case 2:return c.set(l,p);case 3:return c.add(p);default:return c[l]=p}case"remove":switch(v){case 1:return c.splice(l,1);case 2:return c.delete(l);case 3:return c.delete(e.value);default:return delete c[l]}default:n(17,u)}})),t},R:function(n,t,r,o){switch(n.i){case 0:case 4:case 2:return function(n,t,r,o){var c=n.t,s=n.o;i(n.D,(function(n,i){var v=a(c,n),p=a(s,n),l=i?u(c,n)?"replace":f:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),o.push(l===f?{op:"remove",path:d}:"remove"===l?{op:f,path:d,value:e(v)}:{op:"replace",path:d,value:e(v)})}}))}(n,t,r,o);case 5:case 1:return function(n,t,r,i){var o=n.t,u=n.D,a=n.o;if(a.length<o.length){var c=[a,o];o=c[0],a=c[1];var s=[i,r];r=s[0],i=s[1]}for(var v=0;v<o.length;v++)if(u[v]&&a[v]!==o[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:e(a[v])}),i.push({op:"replace",path:p,value:e(o[v])})}for(var l=o.length;l<a.length;l++){var d=t.concat([l]);r.push({op:f,path:d,value:e(a[l])})}o.length<a.length&&i.push({op:"replace",path:t.concat(["length"]),value:o.length})}(n,t,r,o);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:f,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:f,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,o)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.g&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),E(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),E(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];return u(n),e(n),E(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear()},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),E(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),E(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];return u(n),o(n),E(n),n.o.clear()},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{T:function(n,t){return new f(n,t)},F:function(n,t){return new c(n,t)}})}function J(){T(),C(),F()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},19:"plugin not loaded",20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n}},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(n.D[t]=!0,!n.P){if(c(r,z(p(n),t))&&(void 0!==r||u(n.t,t)))return!0;k(n),E(n)}return n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),en.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N="production"!=="development","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t)},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);/* harmony default export */ __webpack_exports__["default"] = (an);


/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-redux/es/components/Context.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/components/Context.js ***!
  \************************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "../node_modules/react-redux/es/components/Provider.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-redux/es/components/Provider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "../node_modules/react-redux/es/components/connectAdvanced.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/components/connectAdvanced.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "../node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/connect.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-redux/es/connect/connect.js ***!
  \*********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "../node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "../node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "../node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "../node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "../node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "../node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \********************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "../node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mapStateToProps.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \*****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "../node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mergeProps.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mergeProps.js ***!
  \************************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "../node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/selectorFactory.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/selectorFactory.js ***!
  \*****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "../node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/verifySubselectors.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "../node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \****************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "../node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useDispatch.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useDispatch.js ***!
  \***********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "../node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useReduxContext.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \***************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useSelector.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useSelector.js ***!
  \***********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "../node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestStoreState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useStore.js":
/*!********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useStore.js ***!
  \********************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "../node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "../node_modules/react-redux/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/react-redux/es/index.js ***!
  \***********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "../node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "../node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "../node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "../node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "../node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "../node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "../node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "../node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "../node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "../node_modules/react-redux/es/utils/Subscription.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/Subscription.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "../node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "../node_modules/react-redux/es/utils/batch.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-redux/es/utils/batch.js ***!
  \*****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "../node_modules/react-redux/es/utils/isPlainObject.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/isPlainObject.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \*******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "../node_modules/react-redux/es/utils/shallowEqual.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/shallowEqual.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "../node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "../node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "../node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/warning.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-redux/es/utils/warning.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "../node_modules/redux-thunk/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/redux-thunk/es/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "../node_modules/redux/es/redux.js":
/*!*****************************************!*\
  !*** ../node_modules/redux/es/redux.js ***!
  \*****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "../node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "../node_modules/reselect/es/index.js":
/*!********************************************!*\
  !*** ../node_modules/reselect/es/index.js ***!
  \********************************************/
/*! exports provided: defaultMemoize, createSelectorCreator, createSelector, createStructuredSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorCreator", function() { return createSelectorCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuredSelector", function() { return createStructuredSelector; });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/symbol-observable/es/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/symbol-observable/es/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "../node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../node_modules/symbol-observable/es/ponyfill.js":
/*!********************************************************!*\
  !*** ../node_modules/symbol-observable/es/ponyfill.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./Styles/app.scss":
/*!*************************!*\
  !*** ./Styles/app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-modules-typescript-loader!../../node_modules/css-loader/dist/cjs.js??ref--8-2!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./TypeScript/Feature/DataSources/DataSourcesSlice.ts":
/*!************************************************************!*\
  !*** ./TypeScript/Feature/DataSources/DataSourcesSlice.ts ***!
  \************************************************************/
/*! exports provided: DataSourcesSlice, Add, AddRange, default, SelectDataSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourcesSlice", function() { return DataSourcesSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRange", function() { return AddRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSources", function() { return SelectDataSources; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var _a;
//******************************************************************************************************
//  DataSourcesSlice.ts - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

var DataSourcesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'DataSources',
    initialState: [],
    reducers: {
        Add: function (state, action) {
            state.push(action.payload);
        },
        AddRange: function (state, action) {
            state = action.payload;
        },
        Remove: function (state) {
        }
    }
});
var Add = (_a = DataSourcesSlice.actions, _a.Add), AddRange = _a.AddRange;
/* harmony default export */ __webpack_exports__["default"] = (DataSourcesSlice.reducer);
var SelectDataSources = function (state) { return state; };


/***/ }),

/***/ "./TypeScript/Feature/Workspace/WorkspaceSlice.ts":
/*!********************************************************!*\
  !*** ./TypeScript/Feature/Workspace/WorkspaceSlice.ts ***!
  \********************************************************/
/*! exports provided: WorkspaceSlice, New, Delete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceSlice", function() { return WorkspaceSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var _a;
//******************************************************************************************************
//  WorkspaceSlice.ts - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/09/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

var WorkspaceSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'Workspace',
    initialState: {
        value: 0
    },
    reducers: {
        New: function (state) {
        },
        Delete: function (state) {
        }
    }
});
var New = (_a = WorkspaceSlice.actions, _a.New), Delete = _a.Delete;
/* harmony default export */ __webpack_exports__["default"] = (WorkspaceSlice.reducer);


/***/ }),

/***/ "./TypeScript/Store/Store.ts":
/*!***********************************!*\
  !*** ./TypeScript/Store/Store.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _Feature_Workspace_WorkspaceSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Feature/Workspace/WorkspaceSlice */ "./TypeScript/Feature/Workspace/WorkspaceSlice.ts");
/* harmony import */ var _Feature_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Feature/DataSources/DataSourcesSlice */ "./TypeScript/Feature/DataSources/DataSourcesSlice.ts");
//******************************************************************************************************
//  Store.ts - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/09/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
        Workspace: _Feature_Workspace_WorkspaceSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
        DataSources: _Feature_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
}));


/***/ }),

/***/ "./TypeScript/TrenDAP.tsx":
/*!********************************!*\
  !*** ./TypeScript/TrenDAP.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Store_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store/Store */ "./TypeScript/Store/Store.ts");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
//******************************************************************************************************
//  TrenDAP.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/08/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************






var TrenDAP = function (props) {
    var DataSources = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return __webpack_require__.e(/*! import() | DataSources */ "DataSources").then(__webpack_require__.bind(null, /*! ./Feature/DataSources/DataSources */ "./TypeScript/Feature/DataSources/DataSources.tsx")); });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: window.innerWidth, height: window.innerHeight } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "navbar-brand col-sm-3 col-md-2 mr-0", href: homePath }, "TrenDAP"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav px-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item text-nowrap" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "col-md-2 d-none d-md-block bg-light " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sidebar },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a["sidebar-sticky"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav flex-column" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link active", href: homePath },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-home" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "9 22 9 12 15 12 15 22" })),
                                "Home ",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "(current)"))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link", href: "#" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-file" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M 3,4.5 a 9,4.5 0,0,0 18 3 a 9,4.5 0,0,0 -18 0 l 0,11 a 9,4.5 0,0,0 18 0 l 0,-11" })),
                                "Data Sources"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a["sidebar-heading"] + " d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Saved Workspaces"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "d-flex align-items-center text-muted", href: "#" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-plus-circle" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: "12", cy: "12", r: "10" }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "12", y1: "8", x2: "12", y2: "16" }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "8", y1: "12", x2: "16", y2: "12" })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav flex-column mb-2" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link", href: "#" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-file-text" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "14 2 14 8 20 8" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "10 9 9 9 8 9" })),
                                "Current month")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link", href: "#" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-file-text" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "14 2 14 8 20 8" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "10 9 9 9 8 9" })),
                                "Last quarter")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link", href: "#" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-file-text" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "14 2 14 8 20 8" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "10 9 9 9 8 9" })),
                                "Social engagement")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link", href: "#" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-file-text" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "14 2 14 8 20 8" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polyline", { points: "10 9 9 9 8 9" })),
                                "Year-end sale"))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid", style: { top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 75px)', overflow: 'hidden' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { height: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...") },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], { exact: true, path: "" + homePath }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], { path: homePath + "DataSources" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DataSources, null)))))))));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: _Store_Store__WEBPACK_IMPORTED_MODULE_3__["default"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TrenDAP, null)), document.getElementById('window'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RldnRvb2xzRXh0ZW5zaW9uLnRzIiwid2VicGFjazovLy8uLi9zcmMvaXNQbGFpbk9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uLi9zcmMvc2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hcEJ1aWxkZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvY3JlYXRlUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNsaWNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvZW50aXR5X3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvc3RhdGVfc2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvc3RhdGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvdW5zb3J0ZWRfc3RhdGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvY3JlYXRlX2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWFzeW5jLXRvLXByb21pc2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9uYW5vaWQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVBc3luY1RodW5rLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vU3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy90eXBlcy90eXBlcy1pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL3BsdWdpbnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL3Njb3BlLnRzIiwid2VicGFjazovLy8uLi9zcmMvY29yZS9maW5hbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvcHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2ltbWVyQ2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2N1cnJlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wbHVnaW5zL2VzNS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BsdWdpbnMvcGF0Y2hlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BsdWdpbnMvbWFwc2V0LnRzIiwid2VicGFjazovLy8uLi9zcmMvcGx1Z2lucy9hbGwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbW1lci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2Vudi50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlRGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VSZWR1eENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vU3R5bGVzL2FwcC5zY3NzPzQ0YWMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzU2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlL1dvcmtzcGFjZS9Xb3Jrc3BhY2VTbGljZS50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L1N0b3JlL1N0b3JlLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0Um91dGVyRE9NXCIiXSwibmFtZXMiOlsiY29tcG9zZVdpdGhEZXZUb29scyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbXBvc2UiLCJhcHBseSIsImlzUGxhaW5PYmplY3QiLCJ2YWx1ZSIsInByb3RvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRUaW1lTWVhc3VyZVV0aWxzIiwibWF4RGVsYXkiLCJmbk5hbWUiLCJlbGFwc2VkIiwibWVhc3VyZVRpbWUiLCJmbiIsInN0YXJ0ZWQiLCJEYXRlIiwibm93IiwiZmluaXNoZWQiLCJ3YXJuSWZFeGNlZWRlZCIsImNvbnNvbGUiLCJ3YXJuIiwiTWlkZGxld2FyZUFycmF5IiwiY29uY2F0IiwiYXJyIiwicHJlcGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJwcmVmaXgiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJtZXNzYWdlIiwiRXJyb3IiLCJzdHJpbmdpZnkiLCJvYmoiLCJzZXJpYWxpemVyIiwiaW5kZW50IiwiZGVjeWNsZXIiLCJKU09OIiwiZ2V0U2VyaWFsaXplIiwic3RhY2siLCJrZXlzIiwiXyIsInNsaWNlIiwiaW5kZXhPZiIsImpvaW4iLCJrZXkiLCJ0aGlzUG9zIiwic3BsaWNlIiwicHVzaCIsIkluZmluaXR5IiwiY2FsbCIsImlzSW1tdXRhYmxlRGVmYXVsdCIsInRyYWNrRm9yTXV0YXRpb25zIiwiaXNJbW11dGFibGUiLCJpZ25vcmVQYXRocyIsInRyYWNrZWRQcm9wZXJ0aWVzIiwidHJhY2tQcm9wZXJ0aWVzIiwiZGV0ZWN0TXV0YXRpb25zIiwicGF0aCIsInRyYWNrZWQiLCJjaGlsZHJlbiIsImNoaWxkUGF0aCIsInRyYWNrZWRQcm9wZXJ0eSIsInNhbWVQYXJlbnRSZWYiLCJwcmV2T2JqIiwic2FtZVJlZiIsIk51bWJlciIsImlzTmFOIiwid2FzTXV0YXRlZCIsImtleXNUb0RldGVjdCIsImZvckVhY2giLCJpIiwicmVzdWx0IiwiY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlIiwib3B0aW9ucyIsImlnbm9yZWRQYXRocyIsIndhcm5BZnRlciIsImlnbm9yZSIsInRyYWNrIiwiYmluZCIsImdldFN0YXRlIiwic3RhdGUiLCJ0cmFja2VyIiwibmV4dCIsImFjdGlvbiIsIm1lYXN1cmVVdGlscyIsImRpc3BhdGNoZWRBY3Rpb24iLCJpc1BsYWluIiwidmFsIiwiZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlIiwiaXNTZXJpYWxpemFibGUiLCJnZXRFbnRyaWVzIiwiZm91bmROZXN0ZWRTZXJpYWxpemFibGUiLCJrZXlQYXRoIiwiZW50cmllcyIsImhhc0lnbm9yZWRQYXRocyIsInByb3BlcnR5IiwibmVzdGVkVmFsdWUiLCJuZXN0ZWRQYXRoIiwiY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlIiwiaWdub3JlZEFjdGlvbnMiLCJpZ25vcmVkQWN0aW9uUGF0aHMiLCJzdG9yZUFQSSIsInR5cGUiLCJmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlIiwiZXJyb3IiLCJmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUiLCJpc0Jvb2xlYW4iLCJ4IiwiY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSIsImN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwidGh1bmsiLCJpbW11dGFibGVDaGVjayIsInNlcmlhbGl6YWJsZUNoZWNrIiwibWlkZGxld2FyZUFycmF5IiwidGh1bmtNaWRkbGV3YXJlIiwid2l0aEV4dHJhQXJndW1lbnQiLCJleHRyYUFyZ3VtZW50IiwiaW1tdXRhYmxlT3B0aW9ucyIsInVuc2hpZnQiLCJzZXJpYWxpemFibGVPcHRpb25zIiwiSVNfUFJPRFVDVElPTiIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJkZXZUb29scyIsInByZWxvYWRlZFN0YXRlIiwiZW5oYW5jZXJzIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJtaWRkbGV3YXJlRW5oYW5jZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJmaW5hbENvbXBvc2UiLCJ0cmFjZSIsInN0b3JlRW5oYW5jZXJzIiwiY29tcG9zZWRFbmhhbmNlciIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlQWN0aW9uIiwicHJlcGFyZUFjdGlvbiIsImFjdGlvbkNyZWF0b3IiLCJwcmVwYXJlZCIsInBheWxvYWQiLCJtZXRhIiwidG9TdHJpbmciLCJtYXRjaCIsImlzRlNBIiwiZXZlcnkiLCJpc1ZhbGlkS2V5IiwiZ2V0VHlwZSIsImV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrIiwiYnVpbGRlckNhbGxiYWNrIiwiYWN0aW9uc01hcCIsImFjdGlvbk1hdGNoZXJzIiwiZGVmYXVsdENhc2VSZWR1Y2VyIiwiYnVpbGRlciIsImFkZENhc2UiLCJ0eXBlT3JBY3Rpb25DcmVhdG9yIiwiYWRkTWF0Y2hlciIsIm1hdGNoZXIiLCJhZGREZWZhdWx0Q2FzZSIsImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJtYXBPckJ1aWxkZXJDYWxsYmFjayIsImZpbmFsQWN0aW9uTWF0Y2hlcnMiLCJmaW5hbERlZmF1bHRDYXNlUmVkdWNlciIsImNhc2VSZWR1Y2VycyIsImZpbHRlciIsIm1hcCIsImNyIiwicmVkdWNlIiwicHJldmlvdXNTdGF0ZSIsImNhc2VSZWR1Y2VyIiwiaXNEcmFmdCIsImRyYWZ0IiwiaXNEcmFmdGFibGUiLCJjcmVhdGVOZXh0U3RhdGUiLCJhY3Rpb25LZXkiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJyZWR1Y2VyTmFtZXMiLCJzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSIsInNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlIiwiYWN0aW9uQ3JlYXRvcnMiLCJyZWR1Y2VyTmFtZSIsIm1heWJlUmVkdWNlcldpdGhQcmVwYXJlIiwicHJlcGFyZUNhbGxiYWNrIiwicHJlcGFyZSIsImZpbmFsQ2FzZVJlZHVjZXJzIiwiYWN0aW9ucyIsImdldEluaXRpYWxFbnRpdHlTdGF0ZSIsImlkcyIsImVudGl0aWVzIiwiY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSIsImdldEluaXRpYWxTdGF0ZSIsImFkZGl0aW9uYWxTdGF0ZSIsImFzc2lnbiIsImNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkiLCJnZXRTZWxlY3RvcnMiLCJzZWxlY3RTdGF0ZSIsInNlbGVjdElkcyIsInNlbGVjdEVudGl0aWVzIiwic2VsZWN0QWxsIiwiY3JlYXRlU2VsZWN0b3IiLCJpZCIsInNlbGVjdElkIiwic2VsZWN0QnlJZCIsInNlbGVjdFRvdGFsIiwic2VsZWN0R2xvYmFsaXplZEVudGl0aWVzIiwiY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yIiwibXV0YXRvciIsIm9wZXJhdG9yIiwiY3JlYXRlU3RhdGVPcGVyYXRvciIsIm9wZXJhdGlvbiIsImFyZyIsImlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50IiwicnVuTXV0YXRvciIsInNlbGVjdElkVmFsdWUiLCJlbnRpdHkiLCJjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlciIsImFkZE9uZU11dGFibHkiLCJhZGRNYW55TXV0YWJseSIsInZhbHVlcyIsInNldEFsbE11dGFibHkiLCJyZW1vdmVPbmVNdXRhYmx5IiwicmVtb3ZlTWFueU11dGFibHkiLCJkaWRNdXRhdGUiLCJyZW1vdmVBbGxNdXRhYmx5IiwidGFrZU5ld0tleSIsInVwZGF0ZSIsIm9yaWdpbmFsIiwidXBkYXRlZCIsImNoYW5nZXMiLCJuZXdLZXkiLCJoYXNOZXdLZXkiLCJ1cGRhdGVPbmVNdXRhYmx5IiwidXBkYXRlTWFueU11dGFibHkiLCJ1cGRhdGVzIiwibmV3S2V5cyIsInVwZGF0ZXNQZXJFbnRpdHkiLCJkaWRNdXRhdGVFbnRpdGllcyIsImRpZE11dGF0ZUlkcyIsInVwc2VydE9uZU11dGFibHkiLCJ1cHNlcnRNYW55TXV0YWJseSIsImFkZGVkIiwicmVtb3ZlQWxsIiwiYWRkT25lIiwiYWRkTWFueSIsInNldEFsbCIsInVwZGF0ZU9uZSIsInVwZGF0ZU1hbnkiLCJ1cHNlcnRPbmUiLCJ1cHNlcnRNYW55IiwicmVtb3ZlT25lIiwicmVtb3ZlTWFueSIsImNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlciIsInNvcnQiLCJuZXdNb2RlbHMiLCJtb2RlbHMiLCJtb2RlbCIsIm1lcmdlIiwidGFrZVVwZGF0ZWRNb2RlbCIsImFyZUFycmF5c0VxdWFsIiwiYSIsImIiLCJhbGxFbnRpdGllcyIsIm5ld1NvcnRlZElkcyIsImNyZWF0ZUVudGl0eUFkYXB0ZXIiLCJzb3J0Q29tcGFyZXIiLCJpbnN0YW5jZSIsInN0YXRlRmFjdG9yeSIsInNlbGVjdG9yc0ZhY3RvcnkiLCJzdGF0ZUFkYXB0ZXIiLCJ1cmxBbHBoYWJldCIsIm5hbm9pZCIsInNpemUiLCJNYXRoIiwicmFuZG9tIiwiY29tbW9uUHJvcGVydGllcyIsIlJlamVjdFdpdGhWYWx1ZSIsIm1pbmlTZXJpYWxpemVFcnJvciIsInNpbXBsZUVycm9yIiwiU3RyaW5nIiwiY3JlYXRlQXN5bmNUaHVuayIsInR5cGVQcmVmaXgiLCJwYXlsb2FkQ3JlYXRvciIsImZ1bGZpbGxlZCIsInJlcXVlc3RJZCIsInBlbmRpbmciLCJyZWplY3RlZCIsImFib3J0ZWQiLCJkaXNwbGF5ZWRXYXJuaW5nIiwiQUMiLCJBYm9ydENvbnRyb2xsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIm9uYWJvcnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvcnQiLCJpbmZvIiwiZGlzcGF0Y2giLCJleHRyYSIsImFib3J0Q29udHJvbGxlciIsImFib3J0UmVhc29uIiwiYWJvcnRlZFByb21pc2UiLCJQcm9taXNlIiwicmVqZWN0Iiwic2lnbmFsIiwicmVhc29uIiwicHJvbWlzZSIsInNraXBEaXNwYXRjaCIsImRpc3BhdGNoQ29uZGl0aW9uUmVqZWN0aW9uIiwiZmluYWxBY3Rpb24iLCJyYWNlIiwicmVzb2x2ZSIsInJlamVjdFdpdGhWYWx1ZSIsInRoZW4iLCJlcnIiLCJ1bndyYXBSZXN1bHQiLCJyZXR1cm5lZCIsImVuYWJsZUVTNSIsImRpZSIsImFyZ3MiLCJlIiwiZXJyb3JzIiwibXNnIiwiRFJBRlRfU1RBVEUiLCJwcm90b3R5cGUiLCJEUkFGVEFCTEUiLCJjb25zdHJ1Y3RvciIsImlzTWFwIiwiaXNTZXQiLCJiYXNlXyIsImVhY2giLCJpdGVyIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRBcmNodHlwZSIsIm93bktleXMiLCJlbnRyeSIsImluZGV4IiwidGhpbmciLCJ0eXBlXyIsImhhcyIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImdldCIsInNldCIsInByb3BPck9sZFZhbHVlIiwidCIsImRlbGV0ZSIsImFkZCIsImlzIiwieSIsInRhcmdldCIsImhhc01hcCIsIk1hcCIsImhhc1NldCIsIlNldCIsImxhdGVzdCIsImNvcHlfIiwic2hhbGxvd0NvcHkiLCJiYXNlIiwiZGVzY3JpcHRvcnMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVzYyIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImNyZWF0ZSIsImZyZWV6ZSIsImRlZXAiLCJpc0Zyb3plbiIsImNsZWFyIiwiZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zIiwiZ2V0UGx1Z2luIiwicGx1Z2luS2V5IiwicGx1Z2luIiwicGx1Z2lucyIsImxvYWRQbHVnaW4iLCJpbXBsZW1lbnRhdGlvbiIsImdldEN1cnJlbnRTY29wZSIsImN1cnJlbnRTY29wZSIsInVzZVBhdGNoZXNJblNjb3BlIiwic2NvcGUiLCJwYXRjaExpc3RlbmVyIiwicGF0Y2hlc18iLCJpbnZlcnNlUGF0Y2hlc18iLCJwYXRjaExpc3RlbmVyXyIsInJldm9rZVNjb3BlIiwibGVhdmVTY29wZSIsImRyYWZ0c18iLCJyZXZva2VEcmFmdCIsInBhcmVudF8iLCJlbnRlclNjb3BlIiwiaW1tZXIiLCJpbW1lcl8iLCJjYW5BdXRvRnJlZXplXyIsInVuZmluYWxpemVkRHJhZnRzXyIsInJldm9rZV8iLCJyZXZva2VkXyIsInByb2Nlc3NSZXN1bHQiLCJiYXNlRHJhZnQiLCJpc1JlcGxhY2VkIiwidXNlUHJveGllc18iLCJ3aWxsRmluYWxpemVFUzVfIiwibW9kaWZpZWRfIiwiZmluYWxpemUiLCJtYXliZUZyZWV6ZSIsImdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyIsIk5PVEhJTkciLCJyb290U2NvcGUiLCJjaGlsZFZhbHVlIiwiZmluYWxpemVQcm9wZXJ0eSIsInNjb3BlXyIsImZpbmFsaXplZF8iLCJkcmFmdF8iLCJnZW5lcmF0ZVBhdGNoZXNfIiwicGFyZW50U3RhdGUiLCJ0YXJnZXRPYmplY3QiLCJyb290UGF0aCIsInJlcyIsImFzc2lnbmVkXyIsImF1dG9GcmVlemVfIiwicGVlayIsImdldERlc2NyaXB0b3JGcm9tUHJvdG8iLCJzb3VyY2UiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJtYXJrQ2hhbmdlZCIsInByZXBhcmVDb3B5IiwiY3JlYXRlUHJveHkiLCJwYXJlbnQiLCJwcm94eU1hcF8iLCJwcm94eVNldF8iLCJpc01hbnVhbF8iLCJ0cmFwcyIsIm9iamVjdFRyYXBzIiwiYXJyYXlUcmFwcyIsIlByb3h5IiwicmV2b2NhYmxlIiwicmV2b2tlIiwicHJveHkiLCJjcmVhdGVQcm94eVByb3h5IiwiY3JlYXRlRVM1UHJveHlfIiwiY3VycmVudCIsImN1cnJlbnRJbXBsIiwiY29weSIsImFyY2hUeXBlIiwiaGFzQ2hhbmdlc18iLCJjb3B5SGVscGVyIiwiZnJvbSIsInByb3h5UHJvcGVydHkiLCJ0aGlzIiwiYXNzZXJ0VW5yZXZva2VkIiwibWFya0NoYW5nZXNTd2VlcCIsImRyYWZ0cyIsImhhc0FycmF5Q2hhbmdlcyIsImhhc09iamVjdENoYW5nZXMiLCJiYXNlVmFsdWUiLCJiYXNlSXNEcmFmdCIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImNyZWF0ZUVTNURyYWZ0IiwibWFya0NoYW5nZXNSZWN1cnNpdmVseSIsIm9iamVjdCIsIm1pbiIsImVuYWJsZVBhdGNoZXMiLCJkZWVwQ2xvbmVQYXRjaFZhbHVlIiwiY2xvbmVkIiwiY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQiLCJBREQiLCJhcHBseVBhdGNoZXNfIiwicGF0Y2hlcyIsInBhdGNoIiwib3AiLCJiYXNlUGF0aCIsImludmVyc2VQYXRjaGVzIiwiYXNzaWduZWRWYWx1ZSIsIm9yaWdWYWx1ZSIsImdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZCIsImdlbmVyYXRlQXJyYXlQYXRjaGVzIiwiZ2VuZXJhdGVTZXRQYXRjaGVzIiwicm9vdFN0YXRlIiwicmVwbGFjZW1lbnQiLCJlbmFibGVNYXBTZXQiLCJfX2V4dGVuZHMiLCJkIiwiX18iLCJleHRlbmRTdGF0aWNzIiwicHJlcGFyZU1hcENvcHkiLCJwcmVwYXJlU2V0Q29weSIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwicCIsIkRyYWZ0TWFwIiwiY2IiLCJ0aGlzQXJnIiwiX3ZhbHVlIiwiX3RoaXMiLCJpdGVyYXRvciIsIml0ZXJhdG9yU3ltYm9sIiwiX3RoaXMyIiwiciIsImRvbmUiLCJfdGhpczMiLCJEcmFmdFNldCIsImVuYWJsZUFsbFBsdWdpbnMiLCJjYXN0RHJhZnQiLCJjYXN0SW1tdXRhYmxlIiwiaGFzU3ltYm9sIiwiU3ltYm9sIiwiaGFzUHJveGllcyIsIlJlZmxlY3QiLCJmb3IiLCJkYXRhIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9kZXNjJGdldCIsInJlYWRQcm9wRnJvbVByb3RvIiwiZGVsZXRlUHJvcGVydHkiLCJvd25lciIsInBhcnNlSW50IiwiSW1tZXIiLCJjb25maWciLCJ1c2VQcm94aWVzIiwic2V0VXNlUHJveGllcyIsImF1dG9GcmVlemUiLCJzZXRBdXRvRnJlZXplIiwicHJvZHVjZSIsInByb2R1Y2VXaXRoUGF0Y2hlcyIsInJlY2lwZSIsImRlZmF1bHRCYXNlIiwic2VsZiIsImhhc0Vycm9yIiwiYXJnMSIsImFyZzIiLCJpcCIsImNyZWF0ZURyYWZ0IiwiZmluaXNoRHJhZnQiLCJhcHBseVBhdGNoZXMiLCJhcHBseVBhdGNoZXNJbXBsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLHlDQUF5Qyw0QkFBNEI7UUFDckU7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QixrQ0FBa0M7UUFDMUQsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElB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QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztB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RUFBcUI7NEJBQzNDLG9EQUFDLHNEQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBRSxLQUFHLFFBQVUsR0FBVTs0QkFDMUMsb0RBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUssUUFBUSxnQkFBYTtnQ0FBRSxvREFBQyxXQUFXLE9BQUcsQ0FBUSxDQUNqRCxDQUduQixDQUVKLENBQ0osQ0FDQSxDQUNELENBQ1osQ0FBQztBQUNOLENBQUM7QUFFRCxnREFBZSxDQUFDLG9EQUFDLG9EQUFRLElBQUMsS0FBSyxFQUFFLG9EQUFLO0lBQUUsb0RBQUMsT0FBTyxPQUFFLENBQVcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzFIbEcsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEI7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoiVHJlbkRBUC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiVHJlbkRBUFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiRGF0YVNvdXJjZXNcIjpcIkRhdGFTb3VyY2VzXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlNjcmlwdHMvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vVHlwZVNjcmlwdC9UcmVuREFQLnRzeFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25DcmVhdG9yLCBTdG9yZUVuaGFuY2VyLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmhhbmNlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBpbnN0YW5jZSBuYW1lIHRvIGJlIHNob3dlZCBvbiB0aGUgbW9uaXRvciBwYWdlLiBEZWZhdWx0IHZhbHVlIGlzIGBkb2N1bWVudC50aXRsZWAuXHJcbiAgICogSWYgbm90IHNwZWNpZmllZCBhbmQgdGhlcmUncyBubyBkb2N1bWVudCB0aXRsZSwgaXQgd2lsbCBjb25zaXN0IG9mIGB0YWJJZGAgYW5kIGBpbnN0YW5jZUlkYC5cclxuICAgKi9cclxuICBuYW1lPzogc3RyaW5nXHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNyZWF0b3JzIGZ1bmN0aW9ucyB0byBiZSBhdmFpbGFibGUgaW4gdGhlIERpc3BhdGNoZXIuXHJcbiAgICovXHJcbiAgYWN0aW9uQ3JlYXRvcnM/OiBBY3Rpb25DcmVhdG9yPGFueT5bXSB8IHsgW2tleTogc3RyaW5nXTogQWN0aW9uQ3JlYXRvcjxhbnk+IH1cclxuICAvKipcclxuICAgKiBpZiBtb3JlIHRoYW4gb25lIGFjdGlvbiBpcyBkaXNwYXRjaGVkIGluIHRoZSBpbmRpY2F0ZWQgaW50ZXJ2YWwsIGFsbCBuZXcgYWN0aW9ucyB3aWxsIGJlIGNvbGxlY3RlZCBhbmQgc2VudCBhdCBvbmNlLlxyXG4gICAqIEl0IGlzIHRoZSBqb2ludCBiZXR3ZWVuIHBlcmZvcm1hbmNlIGFuZCBzcGVlZC4gV2hlbiBzZXQgdG8gYDBgLCBhbGwgYWN0aW9ucyB3aWxsIGJlIHNlbnQgaW5zdGFudGx5LlxyXG4gICAqIFNldCBpdCB0byBhIGhpZ2hlciB2YWx1ZSB3aGVuIGV4cGVyaWVuY2luZyBwZXJmIGlzc3VlcyAoYWxzbyBgbWF4QWdlYCB0byBhIGxvd2VyIHZhbHVlKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IDUwMCBtcy5cclxuICAgKi9cclxuICBsYXRlbmN5PzogbnVtYmVyXHJcbiAgLyoqXHJcbiAgICogKD4gMSkgLSBtYXhpbXVtIGFsbG93ZWQgYWN0aW9ucyB0byBiZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgdHJlZS4gVGhlIG9sZGVzdCBhY3Rpb25zIGFyZSByZW1vdmVkIG9uY2UgbWF4QWdlIGlzIHJlYWNoZWQuIEl0J3MgY3JpdGljYWwgZm9yIHBlcmZvcm1hbmNlLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgNTBcclxuICAgKi9cclxuICBtYXhBZ2U/OiBudW1iZXJcclxuICAvKipcclxuICAgKiAtIGB1bmRlZmluZWRgIC0gd2lsbCB1c2UgcmVndWxhciBgSlNPTi5zdHJpbmdpZnlgIHRvIHNlbmQgZGF0YSAoaXQncyB0aGUgZmFzdCBtb2RlKS5cclxuICAgKiAtIGBmYWxzZWAgLSB3aWxsIGhhbmRsZSBhbHNvIGNpcmN1bGFyIHJlZmVyZW5jZXMuXHJcbiAgICogLSBgdHJ1ZWAgLSB3aWxsIGhhbmRsZSBhbHNvIGRhdGUsIHJlZ2V4LCB1bmRlZmluZWQsIGVycm9yIG9iamVjdHMsIHN5bWJvbHMsIG1hcHMsIHNldHMgYW5kIGZ1bmN0aW9ucy5cclxuICAgKiAtIG9iamVjdCwgd2hpY2ggY29udGFpbnMgYGRhdGVgLCBgcmVnZXhgLCBgdW5kZWZpbmVkYCwgYGVycm9yYCwgYHN5bWJvbGAsIGBtYXBgLCBgc2V0YCBhbmQgYGZ1bmN0aW9uYCBrZXlzLlxyXG4gICAqICAgRm9yIGVhY2ggb2YgdGhlbSB5b3UgY2FuIGluZGljYXRlIGlmIHRvIGluY2x1ZGUgKGJ5IHNldHRpbmcgYXMgYHRydWVgKS5cclxuICAgKiAgIEZvciBgZnVuY3Rpb25gIGtleSB5b3UgY2FuIGFsc28gc3BlY2lmeSBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIHNlcmlhbGl6YXRpb24uXHJcbiAgICogICBTZWUgW2Bqc2FuYF0oaHR0cHM6Ly9naXRodWIuY29tL2tvbG9kbnkvanNhbikgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgKi9cclxuICBzZXJpYWxpemU/OlxyXG4gICAgfCBib29sZWFuXHJcbiAgICB8IHtcclxuICAgICAgICBkYXRlPzogYm9vbGVhblxyXG4gICAgICAgIHJlZ2V4PzogYm9vbGVhblxyXG4gICAgICAgIHVuZGVmaW5lZD86IGJvb2xlYW5cclxuICAgICAgICBlcnJvcj86IGJvb2xlYW5cclxuICAgICAgICBzeW1ib2w/OiBib29sZWFuXHJcbiAgICAgICAgbWFwPzogYm9vbGVhblxyXG4gICAgICAgIHNldD86IGJvb2xlYW5cclxuICAgICAgICBmdW5jdGlvbj86IGJvb2xlYW4gfCBGdW5jdGlvblxyXG4gICAgICB9XHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gd2hpY2ggdGFrZXMgYGFjdGlvbmAgb2JqZWN0IGFuZCBpZCBudW1iZXIgYXMgYXJndW1lbnRzLCBhbmQgc2hvdWxkIHJldHVybiBgYWN0aW9uYCBvYmplY3QgYmFjay5cclxuICAgKi9cclxuICBhY3Rpb25TYW5pdGl6ZXI/OiA8QSBleHRlbmRzIEFjdGlvbj4oYWN0aW9uOiBBLCBpZDogbnVtYmVyKSA9PiBBXHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gd2hpY2ggdGFrZXMgYHN0YXRlYCBvYmplY3QgYW5kIGluZGV4IGFzIGFyZ3VtZW50cywgYW5kIHNob3VsZCByZXR1cm4gYHN0YXRlYCBvYmplY3QgYmFjay5cclxuICAgKi9cclxuICBzdGF0ZVNhbml0aXplcj86IDxTPihzdGF0ZTogUywgaW5kZXg6IG51bWJlcikgPT4gU1xyXG4gIC8qKlxyXG4gICAqICpzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBhcyByZWdleCogLSBhY3Rpb25zIHR5cGVzIHRvIGJlIGhpZGRlbiAvIHNob3duIGluIHRoZSBtb25pdG9ycyAod2hpbGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VycykuXHJcbiAgICogSWYgYGFjdGlvbnNXaGl0ZWxpc3RgIHNwZWNpZmllZCwgYGFjdGlvbnNCbGFja2xpc3RgIGlzIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgYWN0aW9uc0JsYWNrbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdXHJcbiAgLyoqXHJcbiAgICogKnN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIGFzIHJlZ2V4KiAtIGFjdGlvbnMgdHlwZXMgdG8gYmUgaGlkZGVuIC8gc2hvd24gaW4gdGhlIG1vbml0b3JzICh3aGlsZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXJzKS5cclxuICAgKiBJZiBgYWN0aW9uc1doaXRlbGlzdGAgc3BlY2lmaWVkLCBgYWN0aW9uc0JsYWNrbGlzdGAgaXMgaWdub3JlZC5cclxuICAgKi9cclxuICBhY3Rpb25zV2hpdGVsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW11cclxuICAvKipcclxuICAgKiBjYWxsZWQgZm9yIGV2ZXJ5IGFjdGlvbiBiZWZvcmUgc2VuZGluZywgdGFrZXMgYHN0YXRlYCBhbmQgYGFjdGlvbmAgb2JqZWN0LCBhbmQgcmV0dXJucyBgdHJ1ZWAgaW4gY2FzZSBpdCBhbGxvd3Mgc2VuZGluZyB0aGUgY3VycmVudCBkYXRhIHRvIHRoZSBtb25pdG9yLlxyXG4gICAqIFVzZSBpdCBhcyBhIG1vcmUgYWR2YW5jZWQgdmVyc2lvbiBvZiBgYWN0aW9uc0JsYWNrbGlzdGAvYGFjdGlvbnNXaGl0ZWxpc3RgIHBhcmFtZXRlcnMuXHJcbiAgICovXHJcbiAgcHJlZGljYXRlPzogPFMsIEEgZXh0ZW5kcyBBY3Rpb24+KHN0YXRlOiBTLCBhY3Rpb246IEEpID0+IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQgYXMgYGZhbHNlYCwgaXQgd2lsbCBub3QgcmVjb3JkIHRoZSBjaGFuZ2VzIHRpbGwgY2xpY2tpbmcgb24gYFN0YXJ0IHJlY29yZGluZ2AgYnV0dG9uLlxyXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBSZWR1eCBlbmhhbmNlciwgZm9yIG90aGVycyB1c2UgYGF1dG9QYXVzZWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgc2hvdWxkUmVjb3JkQ2hhbmdlcz86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQsIHdoZW5ldmVyIGNsaWNraW5nIG9uIGBQYXVzZSByZWNvcmRpbmdgIGJ1dHRvbiBhbmQgdGhlcmUgYXJlIGFjdGlvbnMgaW4gdGhlIGhpc3RvcnkgbG9nLCB3aWxsIGFkZCB0aGlzIGFjdGlvbiB0eXBlLlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgY29tbWl0IHdoZW4gcGF1c2VkLiBBdmFpbGFibGUgb25seSBmb3IgUmVkdXggZW5oYW5jZXIuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBcIkBAUEFVU0VEXCJcIlxyXG4gICAqL1xyXG4gIHBhdXNlQWN0aW9uVHlwZT86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIGF1dG8gcGF1c2VzIHdoZW4gdGhlIGV4dGVuc2lvbuKAmXMgd2luZG93IGlzIG5vdCBvcGVuZWQsIGFuZCBzbyBoYXMgemVybyBpbXBhY3Qgb24geW91ciBhcHAgd2hlbiBub3QgaW4gdXNlLlxyXG4gICAqIE5vdCBhdmFpbGFibGUgZm9yIFJlZHV4IGVuaGFuY2VyIChhcyBpdCBhbHJlYWR5IGRvZXMgaXQgYnV0IHN0b3JpbmcgdGhlIGRhdGEgdG8gYmUgc2VudCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGF1dG9QYXVzZT86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQgYXMgYHRydWVgLCBpdCB3aWxsIG5vdCBhbGxvdyBhbnkgbm9uLW1vbml0b3IgYWN0aW9ucyB0byBiZSBkaXNwYXRjaGVkIHRpbGwgY2xpY2tpbmcgb24gYFVubG9jayBjaGFuZ2VzYCBidXR0b24uXHJcbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIFJlZHV4IGVuaGFuY2VyLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBzaG91bGRTdGFydExvY2tlZD86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzZXQgdG8gYGZhbHNlYCwgd2lsbCBub3QgcmVjb21wdXRlIHRoZSBzdGF0ZXMgb24gaG90IHJlbG9hZGluZyAob3Igb24gcmVwbGFjaW5nIHRoZSByZWR1Y2VycykuIEF2YWlsYWJsZSBvbmx5IGZvciBSZWR1eCBlbmhhbmNlci5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBzaG91bGRIb3RSZWxvYWQ/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogaWYgc3BlY2lmaWVkIGFzIGB0cnVlYCwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGNlcHRpb24gaW4gcmVkdWNlcnMsIHRoZSBtb25pdG9ycyB3aWxsIHNob3cgdGhlIGVycm9yIG1lc3NhZ2UsIGFuZCBuZXh0IGFjdGlvbnMgd2lsbCBub3QgYmUgZGlzcGF0Y2hlZC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgc2hvdWxkQ2F0Y2hFcnJvcnM/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgdGhlIGV4dGVuc2lvbiwgc3BlY2lmeSB0aGUgZmVhdHVyZXMgeW91IGFsbG93LlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGFsbCBvZiB0aGUgZmVhdHVyZXMgYXJlIGVuYWJsZWQuIFdoZW4gc2V0IGFzIGFuIG9iamVjdCwgb25seSB0aG9zZSBpbmNsdWRlZCBhcyBgdHJ1ZWAgd2lsbCBiZSBhbGxvd2VkLlxyXG4gICAqIE5vdGUgdGhhdCBleGNlcHQgYHRydWVgL2BmYWxzZWAsIGBpbXBvcnRgIGFuZCBgZXhwb3J0YCBjYW4gYmUgc2V0IGFzIGBjdXN0b21gICh3aGljaCBpcyBieSBkZWZhdWx0IGZvciBSZWR1eCBlbmhhbmNlciksIG1lYW5pbmcgdGhhdCB0aGUgaW1wb3J0aW5nL2V4cG9ydGluZyBvY2N1cnMgb24gdGhlIGNsaWVudCBzaWRlLlxyXG4gICAqIE90aGVyd2lzZSwgeW91J2xsIGdldC9zZXQgdGhlIGRhdGEgcmlnaHQgZnJvbSB0aGUgbW9uaXRvciBwYXJ0LlxyXG4gICAqL1xyXG4gIGZlYXR1cmVzPzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydC9wYXVzZSByZWNvcmRpbmcgb2YgZGlzcGF0Y2hlZCBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHBhdXNlPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb2NrL3VubG9jayBkaXNwYXRjaGluZyBhY3Rpb25zIGFuZCBzaWRlIGVmZmVjdHNcclxuICAgICAqL1xyXG4gICAgbG9jaz86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogcGVyc2lzdCBzdGF0ZXMgb24gcGFnZSByZWxvYWRpbmdcclxuICAgICAqL1xyXG4gICAgcGVyc2lzdD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZXhwb3J0IGhpc3Rvcnkgb2YgYWN0aW9ucyBpbiBhIGZpbGVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0PzogYm9vbGVhbiB8ICdjdXN0b20nXHJcbiAgICAvKipcclxuICAgICAqIGltcG9ydCBoaXN0b3J5IG9mIGFjdGlvbnMgZnJvbSBhIGZpbGVcclxuICAgICAqL1xyXG4gICAgaW1wb3J0PzogYm9vbGVhbiB8ICdjdXN0b20nXHJcbiAgICAvKipcclxuICAgICAqIGp1bXAgYmFjayBhbmQgZm9ydGggKHRpbWUgdHJhdmVsbGluZylcclxuICAgICAqL1xyXG4gICAganVtcD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogc2tpcCAoY2FuY2VsKSBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHNraXA/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIGRyYWcgYW5kIGRyb3AgYWN0aW9ucyBpbiB0aGUgaGlzdG9yeSBsaXN0XHJcbiAgICAgKi9cclxuICAgIHJlb3JkZXI/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BhdGNoIGN1c3RvbSBhY3Rpb25zIG9yIGFjdGlvbiBjcmVhdG9yc1xyXG4gICAgICovXHJcbiAgICBkaXNwYXRjaD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGUgdGVzdHMgZm9yIHRoZSBzZWxlY3RlZCBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHRlc3Q/OiBib29sZWFuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIG9yIGEgc3RhY2t0cmFjZS1yZXR1cm5pbmcgZnVuY3Rpb24gdG8gcmVjb3JkIGNhbGwgc3RhY2sgdHJhY2VzIGZvciBkaXNwYXRjaGVkIGFjdGlvbnMuXHJcbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgdHJhY2U/OiBib29sZWFuIHwgKDxBIGV4dGVuZHMgQWN0aW9uPihhY3Rpb246IEEpID0+IHN0cmluZylcclxuICAvKipcclxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3RhY2sgdHJhY2UgZW50cmllcyB0byByZWNvcmQgcGVyIGFjdGlvbi4gRGVmYXVsdHMgdG8gMTAuXHJcbiAgICovXHJcbiAgdHJhY2VMaW1pdD86IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXBvc2VXaXRoRGV2VG9vbHM6IHtcclxuICAob3B0aW9uczogRW5oYW5jZXJPcHRpb25zKTogdHlwZW9mIGNvbXBvc2VcclxuICA8U3RvcmVFeHQ+KC4uLmZ1bmNzOiBBcnJheTxTdG9yZUVuaGFuY2VyPFN0b3JlRXh0Pj4pOiBTdG9yZUVuaGFuY2VyPFN0b3JlRXh0PlxyXG59ID1cclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cclxuICAgID8gKHdpbmRvdyBhcyBhbnkpLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xyXG4gICAgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2VcclxuICAgICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCAoYXJndW1lbnRzIGFzIGFueSkgYXMgRnVuY3Rpb25bXSlcclxuICAgICAgfVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBkZXZUb29sc0VuaGFuY2VyOiB7XHJcbiAgKG9wdGlvbnM6IEVuaGFuY2VyT3B0aW9ucyk6IFN0b3JlRW5oYW5jZXI8YW55PlxyXG59ID1cclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xyXG4gICAgPyAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xyXG4gICAgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24obm9vcCkge1xyXG4gICAgICAgICAgcmV0dXJuIG5vb3BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIFwicGxhaW5cIiBvYmplY3QsIGkuZS4gYW4gb2JqZWN0IHdob3NlXHJcbiAqIHByb3RveXBlIGlzIHRoZSByb290IGBPYmplY3QucHJvdG90eXBlYC4gVGhpcyBpbmNsdWRlcyBvYmplY3RzIGNyZWF0ZWRcclxuICogdXNpbmcgb2JqZWN0IGxpdGVyYWxzLCBidXQgbm90IGZvciBpbnN0YW5jZSBmb3IgY2xhc3MgaW5zdGFuY2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIG9iamVjdCB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZVxyXG5cclxuICBsZXQgcHJvdG8gPSB2YWx1ZVxyXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XHJcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bylcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpID09PSBwcm90b1xyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lTWVhc3VyZVV0aWxzKG1heERlbGF5OiBudW1iZXIsIGZuTmFtZTogc3RyaW5nKSB7XHJcbiAgbGV0IGVsYXBzZWQgPSAwXHJcbiAgcmV0dXJuIHtcclxuICAgIG1lYXN1cmVUaW1lPFQ+KGZuOiAoKSA9PiBUKTogVCB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKClcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KClcclxuICAgICAgICBlbGFwc2VkICs9IGZpbmlzaGVkIC0gc3RhcnRlZFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2FybklmRXhjZWVkZWQoKSB7XHJcbiAgICAgIGlmIChlbGFwc2VkID4gbWF4RGVsYXkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYCR7Zm5OYW1lfSB0b29rICR7ZWxhcHNlZH1tcywgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSB3YXJuaW5nIHRocmVzaG9sZCBvZiAke21heERlbGF5fW1zLiBcclxuSWYgeW91ciBzdGF0ZSBvciBhY3Rpb25zIGFyZSB2ZXJ5IGxhcmdlLCB5b3UgbWF5IHdhbnQgdG8gZGlzYWJsZSB0aGUgbWlkZGxld2FyZSBhcyBpdCBtaWdodCBjYXVzZSB0b28gbXVjaCBvZiBhIHNsb3dkb3duIGluIGRldmVsb3BtZW50IG1vZGUuIFNlZSBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9nZXREZWZhdWx0TWlkZGxld2FyZSBmb3IgaW5zdHJ1Y3Rpb25zLlxyXG5JdCBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcywgc28geW91IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdC5gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmVBcnJheTxcclxuICBNaWRkbGV3YXJlcyBleHRlbmRzIE1pZGRsZXdhcmU8YW55LCBhbnk+XHJcbj4gZXh0ZW5kcyBBcnJheTxNaWRkbGV3YXJlcz4ge1xyXG4gIGNvbmNhdDxBZGRpdGlvbmFsTWlkZGxld2FyZXMgZXh0ZW5kcyBSZWFkb25seUFycmF5PE1pZGRsZXdhcmU8YW55LCBhbnk+Pj4oXHJcbiAgICBpdGVtczogQWRkaXRpb25hbE1pZGRsZXdhcmVzXHJcbiAgKTogTWlkZGxld2FyZUFycmF5PE1pZGRsZXdhcmVzIHwgQWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0+XHJcblxyXG4gIGNvbmNhdDxBZGRpdGlvbmFsTWlkZGxld2FyZXMgZXh0ZW5kcyBSZWFkb25seUFycmF5PE1pZGRsZXdhcmU8YW55LCBhbnk+Pj4oXHJcbiAgICAuLi5pdGVtczogQWRkaXRpb25hbE1pZGRsZXdhcmVzXHJcbiAgKTogTWlkZGxld2FyZUFycmF5PE1pZGRsZXdhcmVzIHwgQWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0+XHJcblxyXG4gIGNvbmNhdCguLi5hcnI6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gbmV3IE1pZGRsZXdhcmVBcnJheSguLi5zdXBlci5jb25jYXQoLi4uYXJyKSlcclxuICB9XHJcblxyXG4gIHByZXBlbmQ8QWRkaXRpb25hbE1pZGRsZXdhcmVzIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPGFueSwgYW55Pj4+KFxyXG4gICAgaXRlbXM6IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1xyXG4gICk6IE1pZGRsZXdhcmVBcnJheTxBZGRpdGlvbmFsTWlkZGxld2FyZXNbbnVtYmVyXSB8IE1pZGRsZXdhcmVzPlxyXG5cclxuICBwcmVwZW5kPEFkZGl0aW9uYWxNaWRkbGV3YXJlcyBleHRlbmRzIFJlYWRvbmx5QXJyYXk8TWlkZGxld2FyZTxhbnksIGFueT4+PihcclxuICAgIC4uLml0ZW1zOiBBZGRpdGlvbmFsTWlkZGxld2FyZXNcclxuICApOiBNaWRkbGV3YXJlQXJyYXk8QWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0gfCBNaWRkbGV3YXJlcz5cclxuXHJcbiAgcHJlcGVuZCguLi5hcnI6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyclswXSkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBNaWRkbGV3YXJlQXJyYXkoLi4uYXJyWzBdLmNvbmNhdCh0aGlzKSlcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgTWlkZGxld2FyZUFycmF5KC4uLmFyci5jb25jYXQodGhpcykpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgZ2V0VGltZU1lYXN1cmVVdGlscyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG50eXBlIEVudHJ5UHJvY2Vzc29yID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBhbnlcclxuXHJcbmNvbnN0IGlzUHJvZHVjdGlvbjogYm9vbGVhbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuY29uc3QgcHJlZml4OiBzdHJpbmcgPSAnSW52YXJpYW50IGZhaWxlZCdcclxuXHJcbi8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb25kaXRpb24gZmFpbHNcclxuLy8gU3RyaXAgb3V0IGVycm9yIG1lc3NhZ2VzIGZvciBwcm9kdWN0aW9uXHJcbi8vID4gTm90IHByb3ZpZGluZyBhbiBpbmxpbmUgZGVmYXVsdCBhcmd1bWVudCBmb3IgbWVzc2FnZSBhcyB0aGUgcmVzdWx0IGlzIHNtYWxsZXJcclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbjogYW55LCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIC8vIENvbmRpdGlvbiBub3QgcGFzc2VkXHJcblxyXG4gIC8vIEluIHByb2R1Y3Rpb24gd2Ugc3RyaXAgdGhlIG1lc3NhZ2UgYnV0IHN0aWxsIHRocm93XHJcbiAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeClcclxuICB9XHJcblxyXG4gIC8vIFdoZW4gbm90IGluIHByb2R1Y3Rpb24gd2UgYWxsb3cgdGhlIG1lc3NhZ2UgdG8gcGFzcyB0aHJvdWdoXHJcbiAgLy8gKlRoaXMgYmxvY2sgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24gYnVpbGRzKlxyXG4gIHRocm93IG5ldyBFcnJvcihgJHtwcmVmaXh9OiAke21lc3NhZ2UgfHwgJyd9YClcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5KFxyXG4gIG9iajogYW55LFxyXG4gIHNlcmlhbGl6ZXI/OiBFbnRyeVByb2Nlc3NvcixcclxuICBpbmRlbnQ/OiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgZGVjeWNsZXI/OiBFbnRyeVByb2Nlc3NvclxyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlciksIGluZGVudClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplKFxyXG4gIHNlcmlhbGl6ZXI/OiBFbnRyeVByb2Nlc3NvcixcclxuICBkZWN5Y2xlcj86IEVudHJ5UHJvY2Vzc29yXHJcbik6IEVudHJ5UHJvY2Vzc29yIHtcclxuICBsZXQgc3RhY2s6IGFueVtdID0gW10sXHJcbiAgICBrZXlzOiBhbnlbXSA9IFtdXHJcblxyXG4gIGlmICghZGVjeWNsZXIpXHJcbiAgICBkZWN5Y2xlciA9IGZ1bmN0aW9uKF86IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKSByZXR1cm4gJ1tDaXJjdWxhciB+XSdcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnW0NpcmN1bGFyIH4uJyArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oJy4nKSArICddJ1xyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBhbnksIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcylcclxuICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKVxyXG4gICAgICB+dGhpc1BvcyA/IGtleXMuc3BsaWNlKHRoaXNQb3MsIEluZmluaXR5LCBrZXkpIDoga2V5cy5wdXNoKGtleSlcclxuICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkgdmFsdWUgPSBkZWN5Y2xlciEuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxyXG4gICAgfSBlbHNlIHN0YWNrLnB1c2godmFsdWUpXHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZhbHVlIDogc2VyaWFsaXplci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgYGlzSW1tdXRhYmxlYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW1tdXRhYmxlRGVmYXVsdCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFja0Zvck11dGF0aW9ucyhcclxuICBpc0ltbXV0YWJsZTogSXNJbW11dGFibGVGdW5jLFxyXG4gIGlnbm9yZVBhdGhzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCxcclxuICBvYmo6IGFueVxyXG4pIHtcclxuICBjb25zdCB0cmFja2VkUHJvcGVydGllcyA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iailcclxuICByZXR1cm4ge1xyXG4gICAgZGV0ZWN0TXV0YXRpb25zKCkge1xyXG4gICAgICByZXR1cm4gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnRpZXMsIG9iailcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUcmFja2VkUHJvcGVydHkge1xyXG4gIHZhbHVlOiBhbnlcclxuICBjaGlsZHJlbjogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFja1Byb3BlcnRpZXMoXHJcbiAgaXNJbW11dGFibGU6IElzSW1tdXRhYmxlRnVuYyxcclxuICBpZ25vcmVQYXRoczogSWdub3JlUGF0aHMgPSBbXSxcclxuICBvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sXHJcbiAgcGF0aDogc3RyaW5nW10gPSBbXVxyXG4pIHtcclxuICBjb25zdCB0cmFja2VkOiBQYXJ0aWFsPFRyYWNrZWRQcm9wZXJ0eT4gPSB7IHZhbHVlOiBvYmogfVxyXG5cclxuICBpZiAoIWlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgIHRyYWNrZWQuY2hpbGRyZW4gPSB7fVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICBjb25zdCBjaGlsZFBhdGggPSBwYXRoLmNvbmNhdChrZXkpXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpZ25vcmVQYXRocy5sZW5ndGggJiZcclxuICAgICAgICBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMVxyXG4gICAgICApIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFja2VkLmNoaWxkcmVuW2tleV0gPSB0cmFja1Byb3BlcnRpZXMoXHJcbiAgICAgICAgaXNJbW11dGFibGUsXHJcbiAgICAgICAgaWdub3JlUGF0aHMsXHJcbiAgICAgICAgb2JqW2tleV0sXHJcbiAgICAgICAgY2hpbGRQYXRoXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRyYWNrZWQgYXMgVHJhY2tlZFByb3BlcnR5XHJcbn1cclxuXHJcbnR5cGUgSWdub3JlUGF0aHMgPSBzdHJpbmdbXVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0TXV0YXRpb25zKFxyXG4gIGlzSW1tdXRhYmxlOiBJc0ltbXV0YWJsZUZ1bmMsXHJcbiAgaWdub3JlUGF0aHM6IElnbm9yZVBhdGhzID0gW10sXHJcbiAgdHJhY2tlZFByb3BlcnR5OiBUcmFja2VkUHJvcGVydHksXHJcbiAgb2JqOiBhbnksXHJcbiAgc2FtZVBhcmVudFJlZjogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIHBhdGg6IHN0cmluZ1tdID0gW11cclxuKTogeyB3YXNNdXRhdGVkOiBib29sZWFuOyBwYXRoPzogc3RyaW5nW10gfSB7XHJcbiAgY29uc3QgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHVuZGVmaW5lZFxyXG5cclxuICBjb25zdCBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqXHJcblxyXG4gIGlmIChzYW1lUGFyZW50UmVmICYmICFzYW1lUmVmICYmICFOdW1iZXIuaXNOYU4ob2JqKSkge1xyXG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aCB9XHJcbiAgfVxyXG5cclxuICBpZiAoaXNJbW11dGFibGUocHJldk9iaikgfHwgaXNJbW11dGFibGUob2JqKSkge1xyXG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogZmFsc2UgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2F0aGVyIGFsbCBrZXlzIGZyb20gcHJldiAodHJhY2tlZCkgYW5kIGFmdGVyIG9ianNcclxuICBjb25zdCBrZXlzVG9EZXRlY3Q6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge31cclxuICBPYmplY3Qua2V5cyh0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWVcclxuICB9KVxyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoa2V5c1RvRGV0ZWN0KVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxyXG4gICAgY29uc3QgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoa2V5KVxyXG4gICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGRldGVjdE11dGF0aW9ucyhcclxuICAgICAgaXNJbW11dGFibGUsXHJcbiAgICAgIGlnbm9yZVBhdGhzLFxyXG4gICAgICB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW5ba2V5XSxcclxuICAgICAgb2JqW2tleV0sXHJcbiAgICAgIHNhbWVSZWYsXHJcbiAgICAgIGNoaWxkUGF0aFxyXG4gICAgKVxyXG5cclxuICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH1cclxufVxyXG5cclxudHlwZSBJc0ltbXV0YWJsZUZ1bmMgPSAodmFsdWU6IGFueSkgPT4gYm9vbGVhblxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICBDYWxsYmFjayBmdW5jdGlvbiB0byBjaGVjayBpZiBhIHZhbHVlIGlzIGNvbnNpZGVyZWQgdG8gYmUgaW1tdXRhYmxlLlxyXG4gICAgVGhpcyBmdW5jdGlvbiBpcyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRvIGV2ZXJ5IHZhbHVlIGNvbnRhaW5lZCBpbiB0aGUgc3RhdGUuXHJcbiAgICBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB3aWxsIHJldHVybiB0cnVlIGZvciBwcmltaXRpdmUgdHlwZXMgXHJcbiAgICAobGlrZSBudW1iZXJzLCBzdHJpbmdzLCBib29sZWFucywgbnVsbCBhbmQgdW5kZWZpbmVkKS5cclxuICAgKi9cclxuICBpc0ltbXV0YWJsZT86IElzSW1tdXRhYmxlRnVuY1xyXG4gIC8qKiBcclxuICAgIEFuIGFycmF5IG9mIGRvdC1zZXBhcmF0ZWQgcGF0aCBzdHJpbmdzIHRoYXQgbWF0Y2ggbmFtZWQgbm9kZXMgZnJvbSBcclxuICAgIHRoZSByb290IHN0YXRlIHRvIGlnbm9yZSB3aGVuIGNoZWNraW5nIGZvciBpbW11dGFiaWxpdHkuXHJcbiAgICBEZWZhdWx0cyB0byB1bmRlZmluZWRcclxuICAgKi9cclxuICBpZ25vcmVkUGF0aHM/OiBzdHJpbmdbXVxyXG4gIC8qKiBQcmludCBhIHdhcm5pbmcgaWYgY2hlY2tzIHRha2UgbG9uZ2VyIHRoYW4gTiBtcy4gRGVmYXVsdDogMzJtcyAqL1xyXG4gIHdhcm5BZnRlcj86IG51bWJlclxyXG4gIC8vIEBkZXByZWNhdGVkLiBVc2UgaWdub3JlZFBhdGhzXHJcbiAgaWdub3JlPzogc3RyaW5nW11cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtaWRkbGV3YXJlIHRoYXQgY2hlY2tzIHdoZXRoZXIgYW55IHN0YXRlIHdhcyBtdXRhdGVkIGluIGJldHdlZW5cclxuICogZGlzcGF0Y2hlcyBvciBkdXJpbmcgYSBkaXNwYXRjaC4gSWYgYW55IG11dGF0aW9ucyBhcmUgZGV0ZWN0ZWQsIGFuIGVycm9yIGlzXHJcbiAqIHRocm93bi5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgTWlkZGxld2FyZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKFxyXG4gIG9wdGlvbnM6IEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG4pOiBNaWRkbGV3YXJlIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcmV0dXJuICgpID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoYWN0aW9uKVxyXG4gIH1cclxuXHJcbiAgbGV0IHtcclxuICAgIGlzSW1tdXRhYmxlID0gaXNJbW11dGFibGVEZWZhdWx0LFxyXG4gICAgaWdub3JlZFBhdGhzLFxyXG4gICAgd2FybkFmdGVyID0gMzIsXHJcbiAgICBpZ25vcmVcclxuICB9ID0gb3B0aW9uc1xyXG5cclxuICAvLyBBbGlhcyBpZ25vcmUtPmlnbm9yZWRQYXRocywgYnV0IHByZWZlciBpZ25vcmVkUGF0aHMgaWYgcHJlc2VudFxyXG4gIGlnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocyB8fCBpZ25vcmVcclxuXHJcbiAgY29uc3QgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpXHJcblxyXG4gIHJldHVybiAoeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcbiAgICBsZXQgdHJhY2tlciA9IHRyYWNrKHN0YXRlKVxyXG5cclxuICAgIGxldCByZXN1bHRcclxuICAgIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICAgIGNvbnN0IG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMoXHJcbiAgICAgICAgd2FybkFmdGVyLFxyXG4gICAgICAgICdJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbiAgICAgIClcclxuXHJcbiAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKClcclxuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxyXG4gICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSlcclxuXHJcbiAgICAgICAgaW52YXJpYW50KFxyXG4gICAgICAgICAgIXJlc3VsdC53YXNNdXRhdGVkLFxyXG4gICAgICAgICAgYEEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGJldHdlZW4gZGlzcGF0Y2hlcywgaW4gdGhlIHBhdGggJyR7KFxyXG4gICAgICAgICAgICByZXN1bHQucGF0aCB8fCBbXVxyXG4gICAgICAgICAgKS5qb2luKFxyXG4gICAgICAgICAgICAnLidcclxuICAgICAgICAgICl9Jy4gIFRoaXMgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvci4gKGh0dHBzOi8vcmVkdXguanMub3JnL3Ryb3VibGVzaG9vdGluZyNuZXZlci1tdXRhdGUtcmVkdWNlci1hcmd1bWVudHMpYFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbilcclxuXHJcbiAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKClcclxuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxyXG4gICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSlcclxuXHJcbiAgICAgICAgcmVzdWx0Lndhc011dGF0ZWQgJiZcclxuICAgICAgICAgIGludmFyaWFudChcclxuICAgICAgICAgICAgIXJlc3VsdC53YXNNdXRhdGVkLFxyXG4gICAgICAgICAgICBgQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiAkeyhcclxuICAgICAgICAgICAgICByZXN1bHQucGF0aCB8fCBbXVxyXG4gICAgICAgICAgICApLmpvaW4oXHJcbiAgICAgICAgICAgICAgJy4nXHJcbiAgICAgICAgICAgICl9LiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uICR7c3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICAgICApfS4gKGh0dHBzOi8vcmVkdXguanMub3JnL3Ryb3VibGVzaG9vdGluZyNuZXZlci1tdXRhdGUtcmVkdWNlci1hcmd1bWVudHMpYFxyXG4gICAgICAgICAgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKClcclxuXHJcbiAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCdcclxuaW1wb3J0IHsgTWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBnZXRUaW1lTWVhc3VyZVV0aWxzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBcInBsYWluXCIsIGkuZS4gYSB2YWx1ZSB0aGF0IGlzIGVpdGhlclxyXG4gKiBkaXJlY3RseSBKU09OLXNlcmlhbGl6YWJsZSAoYm9vbGVhbiwgbnVtYmVyLCBzdHJpbmcsIGFycmF5LCBwbGFpbiBvYmplY3QpXHJcbiAqIG9yIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW4odmFsOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgIHZhbCA9PT0gbnVsbCB8fFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHxcclxuICAgIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHxcclxuICAgIEFycmF5LmlzQXJyYXkodmFsKSB8fFxyXG4gICAgaXNQbGFpbk9iamVjdCh2YWwpXHJcbiAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTm9uU2VyaWFsaXphYmxlVmFsdWUge1xyXG4gIGtleVBhdGg6IHN0cmluZ1xyXG4gIHZhbHVlOiB1bmtub3duXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKFxyXG4gIHZhbHVlOiB1bmtub3duLFxyXG4gIHBhdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiA9IFtdLFxyXG4gIGlzU2VyaWFsaXphYmxlOiAodmFsdWU6IHVua25vd24pID0+IGJvb2xlYW4gPSBpc1BsYWluLFxyXG4gIGdldEVudHJpZXM/OiAodmFsdWU6IHVua25vd24pID0+IFtzdHJpbmcsIGFueV1bXSxcclxuICBpZ25vcmVkUGF0aHM6IHN0cmluZ1tdID0gW11cclxuKTogTm9uU2VyaWFsaXphYmxlVmFsdWUgfCBmYWxzZSB7XHJcbiAgbGV0IGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlOiBOb25TZXJpYWxpemFibGVWYWx1ZSB8IGZhbHNlXHJcblxyXG4gIGlmICghaXNTZXJpYWxpemFibGUodmFsdWUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXlQYXRoOiBwYXRoLmpvaW4oJy4nKSB8fCAnPHJvb3Q+JyxcclxuICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb25zdCBlbnRyaWVzID0gZ2V0RW50cmllcyAhPSBudWxsID8gZ2V0RW50cmllcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSlcclxuXHJcbiAgY29uc3QgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDBcclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcGVydHksIG5lc3RlZFZhbHVlXSBvZiBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBuZXN0ZWRQYXRoID0gcGF0aC5jb25jYXQocHJvcGVydHkpXHJcblxyXG4gICAgaWYgKGhhc0lnbm9yZWRQYXRocyAmJiBpZ25vcmVkUGF0aHMuaW5kZXhPZihuZXN0ZWRQYXRoLmpvaW4oJy4nKSkgPj0gMCkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNTZXJpYWxpemFibGUobmVzdGVkVmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aC5qb2luKCcuJyksXHJcbiAgICAgICAgdmFsdWU6IG5lc3RlZFZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShcclxuICAgICAgICBuZXN0ZWRWYWx1ZSxcclxuICAgICAgICBuZXN0ZWRQYXRoLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZFBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSkge1xyXG4gICAgICAgIHJldHVybiBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGEgdmFsdWUgaXMgY29uc2lkZXJlZCBzZXJpYWxpemFibGUuIFRoaXNcclxuICAgKiBmdW5jdGlvbiBpcyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRvIGV2ZXJ5IHZhbHVlIGNvbnRhaW5lZCBpbiB0aGVcclxuICAgKiBzdGF0ZS4gRGVmYXVsdHMgdG8gYGlzUGxhaW4oKWAuXHJcbiAgICovXHJcbiAgaXNTZXJpYWxpemFibGU/OiAodmFsdWU6IGFueSkgPT4gYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXRyaWV2ZSBlbnRyaWVzIGZyb20gZWFjaFxyXG4gICAqIHZhbHVlLiAgSWYgdW5zcGVjaWZpZWQsIGBPYmplY3QuZW50cmllc2Agd2lsbCBiZSB1c2VkLiBEZWZhdWx0c1xyXG4gICAqIHRvIGB1bmRlZmluZWRgLlxyXG4gICAqL1xyXG4gIGdldEVudHJpZXM/OiAodmFsdWU6IGFueSkgPT4gW3N0cmluZywgYW55XVtdXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IG9mIGFjdGlvbiB0eXBlcyB0byBpZ25vcmUgd2hlbiBjaGVja2luZyBmb3Igc2VyaWFsaXphYmlsaXR5LlxyXG4gICAqIERlZmF1bHRzIHRvIFtdXHJcbiAgICovXHJcbiAgaWdub3JlZEFjdGlvbnM/OiBzdHJpbmdbXVxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBkb3Qtc2VwYXJhdGVkIHBhdGggc3RyaW5ncyB0byBpZ25vcmUgd2hlbiBjaGVja2luZ1xyXG4gICAqIGZvciBzZXJpYWxpemFiaWxpdHksIERlZmF1bHRzIHRvIFsnbWV0YS5hcmcnXVxyXG4gICAqL1xyXG4gIGlnbm9yZWRBY3Rpb25QYXRocz86IHN0cmluZ1tdXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IG9mIGRvdC1zZXBhcmF0ZWQgcGF0aCBzdHJpbmdzIHRvIGlnbm9yZSB3aGVuIGNoZWNraW5nXHJcbiAgICogZm9yIHNlcmlhbGl6YWJpbGl0eSwgRGVmYXVsdHMgdG8gW11cclxuICAgKi9cclxuICBpZ25vcmVkUGF0aHM/OiBzdHJpbmdbXVxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGlvbiB0aW1lIHdhcm5pbmcgdGhyZXNob2xkLiBJZiB0aGUgbWlkZGxld2FyZSB0YWtlcyBsb25nZXJcclxuICAgKiB0aGFuIGB3YXJuQWZ0ZXJgIG1zLCBhIHdhcm5pbmcgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNvbnNvbGUuXHJcbiAgICogRGVmYXVsdHMgdG8gMzJtcy5cclxuICAgKi9cclxuICB3YXJuQWZ0ZXI/OiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtaWRkbGV3YXJlIHRoYXQsIGFmdGVyIGV2ZXJ5IHN0YXRlIGNoYW5nZSwgY2hlY2tzIGlmIHRoZSBuZXdcclxuICogc3RhdGUgaXMgc2VyaWFsaXphYmxlLiBJZiBhIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgaXMgZm91bmQgd2l0aGluIHRoZVxyXG4gKiBzdGF0ZSwgYW4gZXJyb3IgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZS5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgTWlkZGxld2FyZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKFxyXG4gIG9wdGlvbnM6IFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG4pOiBNaWRkbGV3YXJlIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcmV0dXJuICgpID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoYWN0aW9uKVxyXG4gIH1cclxuICBjb25zdCB7XHJcbiAgICBpc1NlcmlhbGl6YWJsZSA9IGlzUGxhaW4sXHJcbiAgICBnZXRFbnRyaWVzLFxyXG4gICAgaWdub3JlZEFjdGlvbnMgPSBbXSxcclxuICAgIGlnbm9yZWRBY3Rpb25QYXRocyA9IFsnbWV0YS5hcmcnXSxcclxuICAgIGlnbm9yZWRQYXRocyA9IFtdLFxyXG4gICAgd2FybkFmdGVyID0gMzJcclxuICB9ID0gb3B0aW9uc1xyXG5cclxuICByZXR1cm4gc3RvcmVBUEkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xyXG4gICAgaWYgKGlnbm9yZWRBY3Rpb25zLmxlbmd0aCAmJiBpZ25vcmVkQWN0aW9ucy5pbmRleE9mKGFjdGlvbi50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMoXHJcbiAgICAgIHdhcm5BZnRlcixcclxuICAgICAgJ1NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuICAgIClcclxuICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoXHJcbiAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZEFjdGlvblBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBrZXlQYXRoLCB2YWx1ZSB9ID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgYEEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogXFxgJHtrZXlQYXRofVxcYC4gVmFsdWU6YCxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgJ1xcblRha2UgYSBsb29rIGF0IHRoZSBsb2dpYyB0aGF0IGRpc3BhdGNoZWQgdGhpcyBhY3Rpb246ICcsXHJcbiAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAnXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvYWN0aW9ucyN3aHktc2hvdWxkLXR5cGUtYmUtYS1zdHJpbmctb3ItYXQtbGVhc3Qtc2VyaWFsaXphYmxlLXdoeS1zaG91bGQtbXktYWN0aW9uLXR5cGVzLWJlLWNvbnN0YW50cyknLFxyXG4gICAgICAgICAgJ1xcbihUbyBhbGxvdyBub24tc2VyaWFsaXphYmxlIHZhbHVlcyBzZWU6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdXNhZ2UvdXNhZ2UtZ3VpZGUjd29ya2luZy13aXRoLW5vbi1zZXJpYWxpemFibGUtZGF0YSknXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKVxyXG5cclxuICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKFxyXG4gICAgICAgIHN0YXRlLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZFBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IGtleVBhdGgsIHZhbHVlIH0gPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWVcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIGBBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIHRoZSBzdGF0ZSwgaW4gdGhlIHBhdGg6IFxcYCR7a2V5UGF0aH1cXGAuIFZhbHVlOmAsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIGBcclxuVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhpcyBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX0uXHJcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL29yZ2FuaXppbmctc3RhdGUjY2FuLWktcHV0LWZ1bmN0aW9ucy1wcm9taXNlcy1vci1vdGhlci1ub24tc2VyaWFsaXphYmxlLWl0ZW1zLWluLW15LXN0b3JlLXN0YXRlKWBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKClcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUsIEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlLCB7IFRodW5rTWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQge1xyXG4gIC8qIFBST0RfU1RBUlRfUkVNT1ZFX1VNRCAqL1xyXG4gIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcclxuICAvKiBQUk9EX1NUT1BfUkVNT1ZFX1VNRCAqL1xyXG4gIEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufSBmcm9tICcuL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLFxyXG4gIFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufSBmcm9tICcuL3NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuaW1wb3J0IHsgTWlkZGxld2FyZUFycmF5IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih4OiBhbnkpOiB4IGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nXHJcbn1cclxuXHJcbmludGVyZmFjZSBUaHVua09wdGlvbnM8RSA9IGFueT4ge1xyXG4gIGV4dHJhQXJndW1lbnQ6IEVcclxufVxyXG5cclxuaW50ZXJmYWNlIEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgdGh1bms/OiBib29sZWFuIHwgVGh1bmtPcHRpb25zXHJcbiAgaW1tdXRhYmxlQ2hlY2s/OiBib29sZWFuIHwgSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9uc1xyXG4gIHNlcmlhbGl6YWJsZUNoZWNrPzogYm9vbGVhbiB8IFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGh1bmtNaWRkbGV3YXJlRm9yPFxyXG4gIFMsXHJcbiAgTyBleHRlbmRzIEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucyA9IHt9XHJcbj4gPSBPIGV4dGVuZHMge1xyXG4gIHRodW5rOiBmYWxzZVxyXG59XHJcbiAgPyBuZXZlclxyXG4gIDogTyBleHRlbmRzIHsgdGh1bms6IHsgZXh0cmFBcmd1bWVudDogaW5mZXIgRSB9IH1cclxuICA/IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24sIEU+XHJcbiAgOlxyXG4gICAgICB8IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24sIG51bGw+IC8vVGhlIFRodW5rTWlkZGxld2FyZSB3aXRoIGEgYG51bGxgIEV4dHJhQXJndW1lbnQgaXMgaGVyZSB0byBwcm92aWRlIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LlxyXG4gICAgICB8IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24+XHJcblxyXG5leHBvcnQgdHlwZSBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmU8UyA9IGFueT4gPSA8XHJcbiAgTyBleHRlbmRzIFBhcnRpYWw8R2V0RGVmYXVsdE1pZGRsZXdhcmVPcHRpb25zPiA9IHtcclxuICAgIHRodW5rOiB0cnVlXHJcbiAgICBpbW11dGFibGVDaGVjazogdHJ1ZVxyXG4gICAgc2VyaWFsaXphYmxlQ2hlY2s6IHRydWVcclxuICB9XHJcbj4oXHJcbiAgb3B0aW9ucz86IE9cclxuKSA9PiBNaWRkbGV3YXJlQXJyYXk8TWlkZGxld2FyZTx7fSwgUz4gfCBUaHVua01pZGRsZXdhcmVGb3I8UywgTz4+XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZTxcclxuICBTID0gYW55XHJcbj4oKTogQ3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlPFM+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW55IGFycmF5IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgbWlkZGxld2FyZSBpbnN0YWxsZWQgYnlcclxuICogYGNvbmZpZ3VyZVN0b3JlKClgLiBVc2VmdWwgaWYgeW91IHdhbnQgdG8gY29uZmlndXJlIHlvdXIgc3RvcmUgd2l0aCBhIGN1c3RvbVxyXG4gKiBgbWlkZGxld2FyZWAgYXJyYXkgYnV0IHN0aWxsIGtlZXAgdGhlIGRlZmF1bHQgc2V0LlxyXG4gKlxyXG4gKiBAcmV0dXJuIFRoZSBkZWZhdWx0IG1pZGRsZXdhcmUgdXNlZCBieSBgY29uZmlndXJlU3RvcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZTxcclxuICBTID0gYW55LFxyXG4gIE8gZXh0ZW5kcyBQYXJ0aWFsPEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucz4gPSB7XHJcbiAgICB0aHVuazogdHJ1ZVxyXG4gICAgaW1tdXRhYmxlQ2hlY2s6IHRydWVcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB0cnVlXHJcbiAgfVxyXG4+KFxyXG4gIG9wdGlvbnM6IE8gPSB7fSBhcyBPXHJcbik6IE1pZGRsZXdhcmVBcnJheTxNaWRkbGV3YXJlPHt9LCBTPiB8IFRodW5rTWlkZGxld2FyZUZvcjxTLCBPPj4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRodW5rID0gdHJ1ZSxcclxuICAgIGltbXV0YWJsZUNoZWNrID0gdHJ1ZSxcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrID0gdHJ1ZVxyXG4gIH0gPSBvcHRpb25zXHJcblxyXG4gIGxldCBtaWRkbGV3YXJlQXJyYXk6IE1pZGRsZXdhcmU8e30sIFM+W10gPSBuZXcgTWlkZGxld2FyZUFycmF5KClcclxuXHJcbiAgaWYgKHRodW5rKSB7XHJcbiAgICBpZiAoaXNCb29sZWFuKHRodW5rKSkge1xyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChcclxuICAgICAgICB0aHVua01pZGRsZXdhcmUud2l0aEV4dHJhQXJndW1lbnQodGh1bmsuZXh0cmFBcmd1bWVudClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGlmIChpbW11dGFibGVDaGVjaykge1xyXG4gICAgICAvKiBQUk9EX1NUQVJUX1JFTU9WRV9VTUQgKi9cclxuICAgICAgbGV0IGltbXV0YWJsZU9wdGlvbnM6IEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG5cclxuICAgICAgaWYgKCFpc0Jvb2xlYW4oaW1tdXRhYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgaW1tdXRhYmxlT3B0aW9ucyA9IGltbXV0YWJsZUNoZWNrXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KFxyXG4gICAgICAgIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShpbW11dGFibGVPcHRpb25zKVxyXG4gICAgICApXHJcbiAgICAgIC8qIFBST0RfU1RPUF9SRU1PVkVfVU1EICovXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlcmlhbGl6YWJsZUNoZWNrKSB7XHJcbiAgICAgIGxldCBzZXJpYWxpemFibGVPcHRpb25zOiBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zID0ge31cclxuXHJcbiAgICAgIGlmICghaXNCb29sZWFuKHNlcmlhbGl6YWJsZUNoZWNrKSkge1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVja1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChcclxuICAgICAgICBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoc2VyaWFsaXphYmxlT3B0aW9ucylcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1pZGRsZXdhcmVBcnJheSBhcyBhbnlcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZVN0b3JlLFxyXG4gIGNvbXBvc2UsXHJcbiAgYXBwbHlNaWRkbGV3YXJlLFxyXG4gIGNvbWJpbmVSZWR1Y2VycyxcclxuICBSZWR1Y2VyLFxyXG4gIFJlZHVjZXJzTWFwT2JqZWN0LFxyXG4gIE1pZGRsZXdhcmUsXHJcbiAgQWN0aW9uLFxyXG4gIEFueUFjdGlvbixcclxuICBTdG9yZUVuaGFuY2VyLFxyXG4gIFN0b3JlLFxyXG4gIERlZXBQYXJ0aWFsLFxyXG4gIERpc3BhdGNoXHJcbn0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyxcclxuICBFbmhhbmNlck9wdGlvbnMgYXMgRGV2VG9vbHNPcHRpb25zXHJcbn0gZnJvbSAnLi9kZXZ0b29sc0V4dGVuc2lvbidcclxuXHJcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCdcclxuaW1wb3J0IHtcclxuICBUaHVua01pZGRsZXdhcmVGb3IsXHJcbiAgY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSxcclxuICBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmVcclxufSBmcm9tICcuL2dldERlZmF1bHRNaWRkbGV3YXJlJ1xyXG5pbXBvcnQgeyBEaXNwYXRjaEZvck1pZGRsZXdhcmVzIH0gZnJvbSAnLi90c0hlbHBlcnMnXHJcblxyXG5jb25zdCBJU19QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIGZ1bmN0aW9uIHR5cGUsIHRvIGJlIHVzZWQgaW4gYENvbmZpZ3VyZVN0b3JlT3B0aW9ucy5lbmhhbmNlcnNgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmZpZ3VyZUVuaGFuY2Vyc0NhbGxiYWNrID0gKFxyXG4gIGRlZmF1bHRFbmhhbmNlcnM6IFN0b3JlRW5oYW5jZXJbXVxyXG4pID0+IFN0b3JlRW5oYW5jZXJbXVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjb25maWd1cmVTdG9yZSgpYC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmVTdG9yZU9wdGlvbnM8XHJcbiAgUyA9IGFueSxcclxuICBBIGV4dGVuZHMgQWN0aW9uID0gQW55QWN0aW9uLFxyXG4gIE0gZXh0ZW5kcyBNaWRkbGV3YXJlczxTPiA9IE1pZGRsZXdhcmVzPFM+XHJcbj4ge1xyXG4gIC8qKlxyXG4gICAqIEEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3QgcmVkdWNlciwgb3IgYW5cclxuICAgKiBvYmplY3Qgb2Ygc2xpY2UgcmVkdWNlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBgY29tYmluZVJlZHVjZXJzKClgLlxyXG4gICAqL1xyXG4gIHJlZHVjZXI6IFJlZHVjZXI8UywgQT4gfCBSZWR1Y2Vyc01hcE9iamVjdDxTLCBBPlxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBSZWR1eCBtaWRkbGV3YXJlIHRvIGluc3RhbGwuIElmIG5vdCBzdXBwbGllZCwgZGVmYXVsdHMgdG9cclxuICAgKiB0aGUgc2V0IG9mIG1pZGRsZXdhcmUgcmV0dXJuZWQgYnkgYGdldERlZmF1bHRNaWRkbGV3YXJlKClgLlxyXG4gICAqL1xyXG4gIG1pZGRsZXdhcmU/OiAoKGdldERlZmF1bHRNaWRkbGV3YXJlOiBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmU8Uz4pID0+IE0pIHwgTVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBSZWR1eCBEZXZUb29scyBpbnRlZ3JhdGlvbi4gRGVmYXVsdHMgdG8gYHRydWVgLlxyXG4gICAqXHJcbiAgICogQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGNhbiBiZSBkb25lIGJ5IHBhc3NpbmcgUmVkdXggRGV2VG9vbHMgb3B0aW9uc1xyXG4gICAqL1xyXG4gIGRldlRvb2xzPzogYm9vbGVhbiB8IERldlRvb2xzT3B0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSwgc2FtZSBhcyBSZWR1eCdzIGNyZWF0ZVN0b3JlLlxyXG4gICAqIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0IHRvIGh5ZHJhdGUgdGhlIHN0YXRlXHJcbiAgICogZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGEgcHJldmlvdXNseSBzZXJpYWxpemVkXHJcbiAgICogdXNlciBzZXNzaW9uLiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnMoKWAgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyXHJcbiAgICogZnVuY3Rpb24gKGVpdGhlciBkaXJlY3RseSBvciBpbmRpcmVjdGx5IGJ5IHBhc3NpbmcgYW4gb2JqZWN0IGFzIGByZWR1Y2VyYCksXHJcbiAgICogdGhpcyBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIHRoZSByZWR1Y2VyIG1hcCBrZXlzLlxyXG4gICAqL1xyXG4gIC8vIE5PVEU6IFRoZSBuZWVkbGVzc2x5IGNvbXBsaWNhdGVkIGBTIGV4dGVuZHMgYW55ID8gUyA6IFNgIGluc3RlYWQgb2YganVzdFxyXG4gIC8vIGBTYCBlbnN1cmVzIHRoYXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgZG9lc24ndCBhdHRlbXB0IHRvIGluZmVyIGBTYFxyXG4gIC8vIGJhc2VkIG9uIHRoZSB2YWx1ZSBwYXNzZWQgYXMgYHByZWxvYWRlZFN0YXRlYCwgd2hpY2ggbWlnaHQgYmUgYSBwYXJ0aWFsXHJcbiAgLy8gc3RhdGUgcmF0aGVyIHRoYW4gdGhlIGZ1bGwgdGhpbmcuXHJcbiAgcHJlbG9hZGVkU3RhdGU/OiBEZWVwUGFydGlhbDxTIGV4dGVuZHMgYW55ID8gUyA6IFM+XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzdG9yZSBlbmhhbmNlcnMgdG8gYXBwbHkuIFNlZSBSZWR1eCdzIGBjcmVhdGVTdG9yZSgpYC5cclxuICAgKiBBbGwgZW5oYW5jZXJzIHdpbGwgYmUgaW5jbHVkZWQgYmVmb3JlIHRoZSBEZXZUb29scyBFeHRlbnNpb24gZW5oYW5jZXIuXHJcbiAgICogSWYgeW91IG5lZWQgdG8gY3VzdG9taXplIHRoZSBvcmRlciBvZiBlbmhhbmNlcnMsIHN1cHBseSBhIGNhbGxiYWNrXHJcbiAgICogZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgdGhlIG9yaWdpbmFsIGFycmF5IChpZSwgYFthcHBseU1pZGRsZXdhcmVdYCksXHJcbiAgICogYW5kIHNob3VsZCByZXR1cm4gYSBuZXcgYXJyYXkgKHN1Y2ggYXMgYFthcHBseU1pZGRsZXdhcmUsIG9mZmxpbmVdYCkuXHJcbiAgICogSWYgeW91IG9ubHkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSwgeW91IGNhbiB1c2UgdGhlIGBtaWRkbGV3YXJlYCBwYXJhbWV0ZXIgaW5zdGVhZC5cclxuICAgKi9cclxuICBlbmhhbmNlcnM/OiBTdG9yZUVuaGFuY2VyW10gfCBDb25maWd1cmVFbmhhbmNlcnNDYWxsYmFja1xyXG59XHJcblxyXG50eXBlIE1pZGRsZXdhcmVzPFM+ID0gUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPHt9LCBTPj5cclxuXHJcbi8qKlxyXG4gKiBBIFJlZHV4IHN0b3JlIHJldHVybmVkIGJ5IGBjb25maWd1cmVTdG9yZSgpYC4gU3VwcG9ydHMgZGlzcGF0Y2hpbmdcclxuICogc2lkZS1lZmZlY3RmdWwgX3RodW5rc18gaW4gYWRkaXRpb24gdG8gcGxhaW4gYWN0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmhhbmNlZFN0b3JlPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBNaWRkbGV3YXJlczxTPlxyXG4+IGV4dGVuZHMgU3RvcmU8UywgQT4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBgZGlzcGF0Y2hgIG1ldGhvZCBvZiB5b3VyIHN0b3JlLCBlbmhhbmNlZCBieSBhbGwgaXQncyBtaWRkbGV3YXJlcy5cclxuICAgKlxyXG4gICAqIEBpbmhlcml0ZG9jXHJcbiAgICovXHJcbiAgZGlzcGF0Y2g6IERpc3BhdGNoRm9yTWlkZGxld2FyZXM8TT4gJiBEaXNwYXRjaDxBPlxyXG59XHJcblxyXG4vKipcclxuICogQSBmcmllbmRseSBhYnN0cmFjdGlvbiBvdmVyIHRoZSBzdGFuZGFyZCBSZWR1eCBgY3JlYXRlU3RvcmUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWcgVGhlIHN0b3JlIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgY29uZmlndXJlZCBSZWR1eCBzdG9yZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBbVGh1bmtNaWRkbGV3YXJlRm9yPFM+XVxyXG4+KG9wdGlvbnM6IENvbmZpZ3VyZVN0b3JlT3B0aW9uczxTLCBBLCBNPik6IEVuaGFuY2VkU3RvcmU8UywgQSwgTT4ge1xyXG4gIGNvbnN0IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmU8Uz4oKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWR1Y2VyID0gdW5kZWZpbmVkLFxyXG4gICAgbWlkZGxld2FyZSA9IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpLFxyXG4gICAgZGV2VG9vbHMgPSB0cnVlLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQsXHJcbiAgICBlbmhhbmNlcnMgPSB1bmRlZmluZWRcclxuICB9ID0gb3B0aW9ucyB8fCB7fVxyXG5cclxuICBsZXQgcm9vdFJlZHVjZXI6IFJlZHVjZXI8UywgQT5cclxuXHJcbiAgaWYgKHR5cGVvZiByZWR1Y2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByb290UmVkdWNlciA9IHJlZHVjZXJcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ1wicmVkdWNlclwiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQsIGFuZCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzJ1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZUVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgLi4uKHR5cGVvZiBtaWRkbGV3YXJlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgID8gbWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpXHJcbiAgICAgIDogbWlkZGxld2FyZSlcclxuICApXHJcblxyXG4gIGxldCBmaW5hbENvbXBvc2UgPSBjb21wb3NlXHJcblxyXG4gIGlmIChkZXZUb29scykge1xyXG4gICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyh7XHJcbiAgICAgIC8vIEVuYWJsZSBjYXB0dXJlIG9mIHN0YWNrIHRyYWNlcyBmb3IgZGlzcGF0Y2hlZCBSZWR1eCBhY3Rpb25zXHJcbiAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTixcclxuICAgICAgLi4uKHR5cGVvZiBkZXZUb29scyA9PT0gJ29iamVjdCcgJiYgZGV2VG9vbHMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHN0b3JlRW5oYW5jZXJzOiBTdG9yZUVuaGFuY2VyW10gPSBbbWlkZGxld2FyZUVuaGFuY2VyXVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICBzdG9yZUVuaGFuY2VycyA9IFttaWRkbGV3YXJlRW5oYW5jZXIsIC4uLmVuaGFuY2Vyc11cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmhhbmNlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHN0b3JlRW5oYW5jZXJzID0gZW5oYW5jZXJzKHN0b3JlRW5oYW5jZXJzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZSguLi5zdG9yZUVuaGFuY2VycykgYXMgYW55XHJcblxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUgYXMgRGVlcFBhcnRpYWw8Uz4sXHJcbiAgICBjb21wb3NlZEVuaGFuY2VyXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIElzVW5rbm93bk9yTm9uSW5mZXJyYWJsZSxcclxuICBJZk1heWJlVW5kZWZpbmVkLFxyXG4gIElmVm9pZCxcclxuICBJc0FueVxyXG59IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnXHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIHdpdGggYSBzdHJpbmcgdHlwZSBhbmQgYW4gYXNzb2NpYXRlZCBwYXlsb2FkLiBUaGlzIGlzIHRoZVxyXG4gKiB0eXBlIG9mIGFjdGlvbiByZXR1cm5lZCBieSBgY3JlYXRlQWN0aW9uKClgIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQHRlbXBsYXRlIFAgVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIHBheWxvYWQuXHJcbiAqIEB0ZW1wbGF0ZSBUIHRoZSB0eXBlIHVzZWQgZm9yIHRoZSBhY3Rpb24gdHlwZS5cclxuICogQHRlbXBsYXRlIE0gVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIG1ldGEgKG9wdGlvbmFsKVxyXG4gKiBAdGVtcGxhdGUgRSBUaGUgdHlwZSBvZiB0aGUgYWN0aW9uJ3MgZXJyb3IgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQYXlsb2FkQWN0aW9uPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgTSA9IG5ldmVyLFxyXG4gIEUgPSBuZXZlclxyXG4+ID0ge1xyXG4gIHBheWxvYWQ6IFBcclxuICB0eXBlOiBUXHJcbn0gJiAoW01dIGV4dGVuZHMgW25ldmVyXVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgbWV0YTogTVxyXG4gICAgfSkgJlxyXG4gIChbRV0gZXh0ZW5kcyBbbmV2ZXJdXHJcbiAgICA/IHt9XHJcbiAgICA6IHtcclxuICAgICAgICBlcnJvcjogRVxyXG4gICAgICB9KVxyXG5cclxuLyoqXHJcbiAqIEEgXCJwcmVwYXJlXCIgbWV0aG9kIHRvIGJlIHVzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNyZWF0ZUFjdGlvbmAuXHJcbiAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgRmx1eCBTdGFuZGFyZCBBY3Rpb24gd2l0aG91dFxyXG4gKiB0eXBlICh3aWxsIGJlIGFkZGVkIGxhdGVyKSB0aGF0ICptdXN0KiBjb250YWluIGEgcGF5bG9hZCAobWlnaHQgYmUgdW5kZWZpbmVkKS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJlcGFyZUFjdGlvbjxQPiA9XHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFAgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55IH0pXHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFA7IGVycm9yOiBhbnkgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55OyBlcnJvcjogYW55IH0pXHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgdmVyc2lvbiBvZiBgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWRgLiBOb3QgdG8gYmUgdXNlZCBleHRlcm5hbGx5LlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCB0eXBlIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBQQSBleHRlbmRzIFByZXBhcmVBY3Rpb248YW55PiB8IHZvaWQsXHJcbiAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+ID0gUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGluZmVyIFA+XHJcbiAgPyBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICAgICAgUGFyYW1ldGVyczxQQT4sXHJcbiAgICAgIFAsXHJcbiAgICAgIFQsXHJcbiAgICAgIFJldHVyblR5cGU8UEE+IGV4dGVuZHMge1xyXG4gICAgICAgIGVycm9yOiBpbmZlciBFXHJcbiAgICAgIH1cclxuICAgICAgICA/IEVcclxuICAgICAgICA6IG5ldmVyLFxyXG4gICAgICBSZXR1cm5UeXBlPFBBPiBleHRlbmRzIHtcclxuICAgICAgICBtZXRhOiBpbmZlciBNXHJcbiAgICAgIH1cclxuICAgICAgICA/IE1cclxuICAgICAgICA6IG5ldmVyXHJcbiAgICA+XHJcbiAgOiB2b2lkXHJcblxyXG4vKipcclxuICogQmFzaWMgdHlwZSBmb3IgYWxsIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqL1xyXG5pbnRlcmZhY2UgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCBleHRlbmRzIHN0cmluZywgTSA9IG5ldmVyLCBFID0gbmV2ZXI+IHtcclxuICB0eXBlOiBUXHJcbiAgbWF0Y2goYWN0aW9uOiBBY3Rpb248dW5rbm93bj4pOiBhY3Rpb24gaXMgUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3IgdGhhdCB0YWtlcyBtdWx0aXBsZSBhcmd1bWVudHMgdGhhdCBhcmUgcGFzc2VkXHJcbiAqIHRvIGEgYFByZXBhcmVBY3Rpb25gIG1ldGhvZCB0byBjcmVhdGUgdGhlIGZpbmFsIEFjdGlvbi5cclxuICogQHR5cGVQYXJhbSBBcmdzIGFyZ3VtZW50cyBmb3IgdGhlIGFjdGlvbiBjcmVhdG9yIGZ1bmN0aW9uXHJcbiAqIEB0eXBlUGFyYW0gUCBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgYHR5cGVgIG5hbWVcclxuICogQHR5cGVQYXJhbSBFIG9wdGlvbmFsIGBlcnJvcmAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIE0gb3B0aW9uYWwgYG1ldGFgIHR5cGVcclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8XHJcbiAgQXJncyBleHRlbmRzIHVua25vd25bXSxcclxuICBQLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgRSA9IG5ldmVyLFxyXG4gIE0gPSBuZXZlclxyXG4+IGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCwgTSwgRT4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBgQXJnc2Agd2lsbCByZXR1cm5cclxuICAgKiBhbiBBY3Rpb24gd2l0aCBhIHBheWxvYWQgb2YgdHlwZSBgUGAgYW5kIChkZXBlbmRpbmcgb24gdGhlIGBQcmVwYXJlQWN0aW9uYFxyXG4gICAqIG1ldGhvZCB1c2VkKSBhIGBtZXRhYC0gYW5kIGBlcnJvcmAgcHJvcGVydHkgb2YgdHlwZXMgYE1gIGFuZCBgRWAgcmVzcGVjdGl2ZWx5LlxyXG4gICAqL1xyXG4gICguLi5hcmdzOiBBcmdzKTogUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBwYXlsb2FkIG9mIHR5cGUgYFBgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYC5cclxuICAgKiBDYWxsaW5nIGl0IHdpdGhvdXQgYW4gYXJndW1lbnQgd2lsbCByZXR1cm4gYSBQYXlsb2FkQWN0aW9uIHdpdGggYSBwYXlsb2FkIG9mIGB1bmRlZmluZWRgLlxyXG4gICAqL1xyXG4gIChwYXlsb2FkPzogUCk6IFBheWxvYWRBY3Rpb248UCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIG9mIHR5cGUgYFRgIHRoYXQgdGFrZXMgbm8gcGF5bG9hZC5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+XHJcbiAgZXh0ZW5kcyBCYXNlQWN0aW9uQ3JlYXRvcjx1bmRlZmluZWQsIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpbGxcclxuICAgKiByZXR1cm4gYSB7QGxpbmsgUGF5bG9hZEFjdGlvbn0gb2YgdHlwZSBgVGAgd2l0aCBhIHBheWxvYWQgb2YgYHVuZGVmaW5lZGBcclxuICAgKi9cclxuICAoKTogUGF5bG9hZEFjdGlvbjx1bmRlZmluZWQsIFQ+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhY3Rpb24gY3JlYXRvciBvZiB0eXBlIGBUYCB0aGF0IHJlcXVpcmVzIGEgcGF5bG9hZCBvZiB0eXBlIFAuXHJcbiAqXHJcbiAqIEBpbmhlcml0ZG9jIHtyZWR1eCNBY3Rpb25DcmVhdG9yfVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYFxyXG4gICAqL1xyXG4gIChwYXlsb2FkOiBQKTogUGF5bG9hZEFjdGlvbjxQLCBUPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgd2hvc2UgYHBheWxvYWRgIHR5cGUgY291bGQgbm90IGJlIGluZmVycmVkLiBBY2NlcHRzIGV2ZXJ5dGhpbmcgYXMgYHBheWxvYWRgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmdcclxuPiBleHRlbmRzIEJhc2VBY3Rpb25DcmVhdG9yPHVua25vd24sIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpdGggYW4gYXJndW1lbnQgd2lsbFxyXG4gICAqIHJldHVybiBhIHtAbGluayBQYXlsb2FkQWN0aW9ufSBvZiB0eXBlIGBUYCB3aXRoIGEgcGF5bG9hZFxyXG4gICAqIG9mIGV4YWN0bHkgdGhlIHR5cGUgb2YgdGhlIGFyZ3VtZW50LlxyXG4gICAqL1xyXG4gIDxQVCBleHRlbmRzIHVua25vd24+KHBheWxvYWQ6IFBUKTogUGF5bG9hZEFjdGlvbjxQVCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIHRoYXQgcHJvZHVjZXMgYWN0aW9ucyB3aXRoIGEgYHBheWxvYWRgIGF0dHJpYnV0ZS5cclxuICpcclxuICogQHR5cGVQYXJhbSBQIHRoZSBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgdGhlIGB0eXBlYCBvZiB0aGUgcmVzdWx0aW5nIGFjdGlvblxyXG4gKiBAdHlwZVBhcmFtIFBBIGlmIHRoZSByZXN1bHRpbmcgYWN0aW9uIGlzIHByZXByb2Nlc3NlZCBieSBhIGBwcmVwYXJlYCBtZXRob2QsIHRoZSBzaWduYXR1cmUgb2Ygc2FpZCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIFBheWxvYWRBY3Rpb25DcmVhdG9yPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPFA+IHwgdm9pZCA9IHZvaWRcclxuPiA9IElmUHJlcGFyZUFjdGlvbk1ldGhvZFByb3ZpZGVkPFxyXG4gIFBBLFxyXG4gIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxQQSwgVD4sXHJcbiAgLy8gZWxzZVxyXG4gIElzQW55PFxyXG4gICAgUCxcclxuICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxhbnksIFQ+LFxyXG4gICAgSXNVbmtub3duT3JOb25JbmZlcnJhYmxlPFxyXG4gICAgICBQLFxyXG4gICAgICBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFQ+LFxyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIElmVm9pZDxcclxuICAgICAgICBQLFxyXG4gICAgICAgIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZDxUPixcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgSWZNYXliZVVuZGVmaW5lZDxcclxuICAgICAgICAgIFAsXHJcbiAgICAgICAgICBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUPixcclxuICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUPlxyXG4gICAgICAgID5cclxuICAgICAgPlxyXG4gICAgPlxyXG4gID5cclxuPlxyXG5cclxuLyoqXHJcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWN0aW9uIGNyZWF0b3IgZm9yIHRoZSBnaXZlbiBhY3Rpb24gdHlwZVxyXG4gKiBzdHJpbmcuIFRoZSBhY3Rpb24gY3JlYXRvciBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkXHJcbiAqIGluIHRoZSBhY3Rpb24gb2JqZWN0IGFzIGEgZmllbGQgY2FsbGVkIHBheWxvYWQuIFRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvblxyXG4gKiB3aWxsIGFsc28gaGF2ZSBpdHMgdG9TdHJpbmcoKSBvdmVycmlkZW4gc28gdGhhdCBpdCByZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSxcclxuICogYWxsb3dpbmcgaXQgdG8gYmUgdXNlZCBpbiByZWR1Y2VyIGxvZ2ljIHRoYXQgaXMgbG9va2luZyBmb3IgdGhhdCBhY3Rpb24gdHlwZS5cclxuICpcclxuICogQHBhcmFtIHR5cGUgVGhlIGFjdGlvbiB0eXBlIHRvIHVzZSBmb3IgY3JlYXRlZCBhY3Rpb25zLlxyXG4gKiBAcGFyYW0gcHJlcGFyZSAob3B0aW9uYWwpIGEgbWV0aG9kIHRoYXQgdGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgeyBwYXlsb2FkIH0gb3IgeyBwYXlsb2FkLCBtZXRhIH0uXHJcbiAqICAgICAgICAgICAgICAgIElmIHRoaXMgaXMgZ2l2ZW4sIHRoZSByZXN1bHRpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBwYXNzIGl0J3MgYXJndW1lbnRzIHRvIHRoaXMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBwYXlsb2FkICYgbWV0YS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQID0gdm9pZCwgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4oXHJcbiAgdHlwZTogVFxyXG4pOiBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxQLCBUPlxyXG5cclxuLyoqXHJcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWN0aW9uIGNyZWF0b3IgZm9yIHRoZSBnaXZlbiBhY3Rpb24gdHlwZVxyXG4gKiBzdHJpbmcuIFRoZSBhY3Rpb24gY3JlYXRvciBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkXHJcbiAqIGluIHRoZSBhY3Rpb24gb2JqZWN0IGFzIGEgZmllbGQgY2FsbGVkIHBheWxvYWQuIFRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvblxyXG4gKiB3aWxsIGFsc28gaGF2ZSBpdHMgdG9TdHJpbmcoKSBvdmVycmlkZW4gc28gdGhhdCBpdCByZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSxcclxuICogYWxsb3dpbmcgaXQgdG8gYmUgdXNlZCBpbiByZWR1Y2VyIGxvZ2ljIHRoYXQgaXMgbG9va2luZyBmb3IgdGhhdCBhY3Rpb24gdHlwZS5cclxuICpcclxuICogQHBhcmFtIHR5cGUgVGhlIGFjdGlvbiB0eXBlIHRvIHVzZSBmb3IgY3JlYXRlZCBhY3Rpb25zLlxyXG4gKiBAcGFyYW0gcHJlcGFyZSAob3B0aW9uYWwpIGEgbWV0aG9kIHRoYXQgdGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgeyBwYXlsb2FkIH0gb3IgeyBwYXlsb2FkLCBtZXRhIH0uXHJcbiAqICAgICAgICAgICAgICAgIElmIHRoaXMgaXMgZ2l2ZW4sIHRoZSByZXN1bHRpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBwYXNzIGl0J3MgYXJndW1lbnRzIHRvIHRoaXMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBwYXlsb2FkICYgbWV0YS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxcclxuICBQQSBleHRlbmRzIFByZXBhcmVBY3Rpb248YW55PixcclxuICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nXHJcbj4oXHJcbiAgdHlwZTogVCxcclxuICBwcmVwYXJlQWN0aW9uOiBQQVxyXG4pOiBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxSZXR1cm5UeXBlPFBBPlsncGF5bG9hZCddLCBULCBQQT5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZTogc3RyaW5nLCBwcmVwYXJlQWN0aW9uPzogRnVuY3Rpb24pOiBhbnkge1xyXG4gIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICAgIGxldCBwcmVwYXJlZCA9IHByZXBhcmVBY3Rpb24oLi4uYXJncylcclxuICAgICAgaWYgKCFwcmVwYXJlZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJlcGFyZUFjdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3QnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZCxcclxuICAgICAgICAuLi4oJ21ldGEnIGluIHByZXBhcmVkICYmIHsgbWV0YTogcHJlcGFyZWQubWV0YSB9KSxcclxuICAgICAgICAuLi4oJ2Vycm9yJyBpbiBwcmVwYXJlZCAmJiB7IGVycm9yOiBwcmVwYXJlZC5lcnJvciB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB0eXBlLCBwYXlsb2FkOiBhcmdzWzBdIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkNyZWF0b3IudG9TdHJpbmcgPSAoKSA9PiBgJHt0eXBlfWBcclxuXHJcbiAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZVxyXG5cclxuICBhY3Rpb25DcmVhdG9yLm1hdGNoID0gKGFjdGlvbjogQWN0aW9uPHVua25vd24+KTogYWN0aW9uIGlzIFBheWxvYWRBY3Rpb24gPT5cclxuICAgIGFjdGlvbi50eXBlID09PSB0eXBlXHJcblxyXG4gIHJldHVybiBhY3Rpb25DcmVhdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZTQShcclxuICBhY3Rpb246IHVua25vd25cclxuKTogYWN0aW9uIGlzIHtcclxuICB0eXBlOiBzdHJpbmdcclxuICBwYXlsb2FkPzogdW5rbm93blxyXG4gIGVycm9yPzogdW5rbm93blxyXG4gIG1ldGE/OiB1bmtub3duXHJcbn0ge1xyXG4gIHJldHVybiAoXHJcbiAgICBpc1BsYWluT2JqZWN0KGFjdGlvbikgJiZcclxuICAgIHR5cGVvZiAoYWN0aW9uIGFzIGFueSkudHlwZSA9PT0gJ3N0cmluZycgJiZcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbikuZXZlcnkoaXNWYWxpZEtleSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5OiBzdHJpbmcpIHtcclxuICByZXR1cm4gWyd0eXBlJywgJ3BheWxvYWQnLCAnZXJyb3InLCAnbWV0YSddLmluZGV4T2Yoa2V5KSA+IC0xXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSBvZiB0aGUgYWN0aW9ucyBjcmVhdGVkIGJ5IHRoZSBwYXNzZWRcclxuICogYGNyZWF0ZUFjdGlvbigpYC1nZW5lcmF0ZWQgYWN0aW9uIGNyZWF0b3IgKGFyYml0cmFyeSBhY3Rpb24gY3JlYXRvcnNcclxuICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gY3JlYXRvciB3aG9zZSBhY3Rpb24gdHlwZSB0byBnZXQuXHJcbiAqIEByZXR1cm5zIFRoZSBhY3Rpb24gdHlwZSB1c2VkIGJ5IHRoZSBhY3Rpb24gY3JlYXRvci5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGU8VCBleHRlbmRzIHN0cmluZz4oXHJcbiAgYWN0aW9uQ3JlYXRvcjogUGF5bG9hZEFjdGlvbkNyZWF0b3I8YW55LCBUPlxyXG4pOiBUIHtcclxuICByZXR1cm4gYCR7YWN0aW9uQ3JlYXRvcn1gIGFzIFRcclxufVxyXG5cclxuLy8gaGVscGVyIHR5cGVzIGZvciBtb3JlIHJlYWRhYmxlIHR5cGluZ3NcclxuXHJcbnR5cGUgSWZQcmVwYXJlQWN0aW9uTWV0aG9kUHJvdmlkZWQ8XHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGFueT4gfCB2b2lkLFxyXG4gIFRydWUsXHJcbiAgRmFsc2VcclxuPiA9IFBBIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPyBUcnVlIDogRmFsc2VcclxuIiwiaW1wb3J0IHsgQWN0aW9uLCBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtcclxuICBDYXNlUmVkdWNlcixcclxuICBDYXNlUmVkdWNlcnMsXHJcbiAgQWN0aW9uTWF0Y2hlcixcclxuICBBY3Rpb25NYXRjaGVyRGVzY3JpcHRpb25Db2xsZWN0aW9uXHJcbn0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlZEFjdGlvbkNyZWF0b3I8VHlwZSBleHRlbmRzIHN0cmluZz4ge1xyXG4gICguLi5hcmdzOiBhbnlbXSk6IEFjdGlvbjxUeXBlPlxyXG4gIHR5cGU6IFR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgYnVpbGRlciBmb3IgYW4gYWN0aW9uIDwtPiByZWR1Y2VyIG1hcC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGNhc2UgcmVkdWNlciBmb3IgYWN0aW9ucyBjcmVhdGVkIGJ5IHRoaXMgYWN0aW9uIGNyZWF0b3IuXHJcbiAgICogQHBhcmFtIGFjdGlvbkNyZWF0b3JcclxuICAgKiBAcGFyYW0gcmVkdWNlclxyXG4gICAqL1xyXG4gIGFkZENhc2U8QWN0aW9uQ3JlYXRvciBleHRlbmRzIFR5cGVkQWN0aW9uQ3JlYXRvcjxzdHJpbmc+PihcclxuICAgIGFjdGlvbkNyZWF0b3I6IEFjdGlvbkNyZWF0b3IsXHJcbiAgICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgUmV0dXJuVHlwZTxBY3Rpb25DcmVhdG9yPj5cclxuICApOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT5cclxuICAvKipcclxuICAgKiBBZGQgYSBjYXNlIHJlZHVjZXIgZm9yIGFjdGlvbnMgd2l0aCB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICogQHBhcmFtIHR5cGVcclxuICAgKiBAcGFyYW0gcmVkdWNlclxyXG4gICAqL1xyXG4gIGFkZENhc2U8VHlwZSBleHRlbmRzIHN0cmluZywgQSBleHRlbmRzIEFjdGlvbjxUeXBlPj4oXHJcbiAgICB0eXBlOiBUeXBlLFxyXG4gICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8U3RhdGUsIEE+XHJcbiAgKTogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSByZWR1Y2VyIGZvciBhbGwgYWN0aW9ucywgdXNpbmcgYG1hdGNoZXJgIGFzIGEgZmlsdGVyIGZ1bmN0aW9uLlxyXG4gICAqIElmIG11bHRpcGxlIG1hdGNoZXIgcmVkdWNlcnMgbWF0Y2gsIGFsbCBvZiB0aGVtIHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyXHJcbiAgICogdGhleSB3ZXJlIGRlZmluZWQgaWYgLSBldmVuIGlmIGEgY2FzZSByZWR1Y2VyIGFscmVhZHkgbWF0Y2hlZC5cclxuICAgKiBAcGFyYW0gbWF0Y2hlciBBIG1hdGNoZXIgZnVuY3Rpb24uIEluIFR5cGVTY3JpcHQsIHRoaXMgc2hvdWxkIGJlIGEgW3R5cGUgcHJlZGljYXRlXShodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9hZHZhbmNlZC10eXBlcy5odG1sI3VzaW5nLXR5cGUtcHJlZGljYXRlcylcclxuICAgKiAgIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHJlZHVjZXJcclxuICAgKi9cclxuICBhZGRNYXRjaGVyPEEgZXh0ZW5kcyBBbnlBY3Rpb24+KFxyXG4gICAgbWF0Y2hlcjogQWN0aW9uTWF0Y2hlcjxBPixcclxuICAgIHJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBBPlxyXG4gICk6IE9taXQ8QWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+LCAnYWRkQ2FzZSc+XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBcImRlZmF1bHQgY2FzZVwiIHJlZHVjZXIgdGhhdCBpcyBleGVjdXRlZCBpZiBubyBjYXNlIHJlZHVjZXIgYW5kIG5vIG1hdGNoZXJcclxuICAgKiByZWR1Y2VyIHdhcyBleGVjdXRlZCBmb3IgdGhpcyBhY3Rpb24uXHJcbiAgICogQHBhcmFtIHJlZHVjZXJcclxuICAgKi9cclxuICBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgQW55QWN0aW9uPik6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjazxTPihcclxuICBidWlsZGVyQ2FsbGJhY2s6IChidWlsZGVyOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTPikgPT4gdm9pZFxyXG4pOiBbXHJcbiAgQ2FzZVJlZHVjZXJzPFMsIGFueT4sXHJcbiAgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPixcclxuICBDYXNlUmVkdWNlcjxTLCBBbnlBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbl0ge1xyXG4gIGNvbnN0IGFjdGlvbnNNYXA6IENhc2VSZWR1Y2VyczxTLCBhbnk+ID0ge31cclxuICBjb25zdCBhY3Rpb25NYXRjaGVyczogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IFtdXHJcbiAgbGV0IGRlZmF1bHRDYXNlUmVkdWNlcjogQ2FzZVJlZHVjZXI8UywgQW55QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ1aWxkZXIgPSB7XHJcbiAgICBhZGRDYXNlKFxyXG4gICAgICB0eXBlT3JBY3Rpb25DcmVhdG9yOiBzdHJpbmcgfCBUeXBlZEFjdGlvbkNyZWF0b3I8YW55PixcclxuICAgICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8Uz5cclxuICAgICkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgIHRvIGtlZXAgdGhlIGRlZmluaXRpb24gYnkgdGhlIHVzZXIgaW4gbGluZSB3aXRoIGFjdHVhbCBiZWhhdmlvciwgXHJcbiAgICAgICAgIHdlIGVuZm9yY2UgYGFkZENhc2VgIHRvIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGFkZE1hdGNoZXJgXHJcbiAgICAgICAgIGFzIG1hdGNoaW5nIGNhc2VzIHRha2UgcHJlY2VkZW5jZSBvdmVyIG1hdGNoZXJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGFjdGlvbk1hdGNoZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgJ2BidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGRNYXRjaGVyYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAnYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdHlwZSA9XHJcbiAgICAgICAgdHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHR5cGVPckFjdGlvbkNyZWF0b3JcclxuICAgICAgICAgIDogdHlwZU9yQWN0aW9uQ3JlYXRvci50eXBlXHJcbiAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnYWRkQ2FzZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZSdcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uc01hcFt0eXBlXSA9IHJlZHVjZXJcclxuICAgICAgcmV0dXJuIGJ1aWxkZXJcclxuICAgIH0sXHJcbiAgICBhZGRNYXRjaGVyPEEgZXh0ZW5kcyBBbnlBY3Rpb24+KFxyXG4gICAgICBtYXRjaGVyOiBBY3Rpb25NYXRjaGVyPEE+LFxyXG4gICAgICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBBPlxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAnYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uTWF0Y2hlcnMucHVzaCh7IG1hdGNoZXIsIHJlZHVjZXIgfSlcclxuICAgICAgcmV0dXJuIGJ1aWxkZXJcclxuICAgIH0sXHJcbiAgICBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBBbnlBY3Rpb24+KSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyXHJcbiAgICAgIHJldHVybiBidWlsZGVyXHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKVxyXG4gIHJldHVybiBbYWN0aW9uc01hcCwgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl1cclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlTmV4dFN0YXRlLCB7IERyYWZ0LCBpc0RyYWZ0LCBpc0RyYWZ0YWJsZSB9IGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrLFxyXG4gIEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyXHJcbn0gZnJvbSAnLi9tYXBCdWlsZGVycydcclxuaW1wb3J0IHsgTm9JbmZlciB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGNvcnJlc3BvbmRpbmcgYWN0aW9uIG9iamVjdCBzaGFwZXMuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIG1hbnVhbGx5IC0gaXQgaXMgb25seSB1c2VkIGZvciBpbnRlcm5hbFxyXG4gKiAgICAgICAgICAgICBpbmZlcmVuY2UgcHVycG9zZXMgYW5kIHNob3VsZCBub3QgaGF2ZSBhbnkgZnVydGhlciB2YWx1ZS5cclxuICogICAgICAgICAgICAgSXQgbWlnaHQgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBY3Rpb25zPFQgZXh0ZW5kcyBrZXlvZiBhbnkgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIEFjdGlvbj5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTWF0Y2hlcjxBIGV4dGVuZHMgQW55QWN0aW9uPiB7XHJcbiAgKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIEFcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uPFMsIEEgZXh0ZW5kcyBBbnlBY3Rpb24+ID0ge1xyXG4gIG1hdGNoZXI6IEFjdGlvbk1hdGNoZXI8QT5cclxuICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBOb0luZmVyPEE+PlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25NYXRjaGVyRGVzY3JpcHRpb25Db2xsZWN0aW9uPFM+ID0gQXJyYXk8XHJcbiAgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uPFMsIGFueT5cclxuPlxyXG5cclxuLyoqXHJcbiAqIEFuICpjYXNlIHJlZHVjZXIqIGlzIGEgcmVkdWNlciBmdW5jdGlvbiBmb3IgYSBzcGVjaWZpYyBhY3Rpb24gdHlwZS4gQ2FzZVxyXG4gKiByZWR1Y2VycyBjYW4gYmUgY29tcG9zZWQgdG8gZnVsbCByZWR1Y2VycyB1c2luZyBgY3JlYXRlUmVkdWNlcigpYC5cclxuICpcclxuICogVW5saWtlIGEgbm9ybWFsIFJlZHV4IHJlZHVjZXIsIGEgY2FzZSByZWR1Y2VyIGlzIG5ldmVyIGNhbGxlZCB3aXRoIGFuXHJcbiAqIGB1bmRlZmluZWRgIHN0YXRlIHRvIGRldGVybWluZSB0aGUgaW5pdGlhbCBzdGF0ZS4gSW5zdGVhZCwgdGhlIGluaXRpYWxcclxuICogc3RhdGUgaXMgZXhwbGljaXRseSBzcGVjaWZpZWQgYXMgYW4gYXJndW1lbnQgdG8gYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEluIGFkZGl0aW9uLCBhIGNhc2UgcmVkdWNlciBjYW4gY2hvb3NlIHRvIG11dGF0ZSB0aGUgcGFzc2VkLWluIGBzdGF0ZWBcclxuICogdmFsdWUgZGlyZWN0bHkgaW5zdGVhZCBvZiByZXR1cm5pbmcgYSBuZXcgc3RhdGUuIFRoaXMgZG9lcyBub3QgYWN0dWFsbHlcclxuICogY2F1c2UgdGhlIHN0b3JlIHN0YXRlIHRvIGJlIG11dGF0ZWQgZGlyZWN0bHk7IGluc3RlYWQsIHRoYW5rcyB0b1xyXG4gKiBbaW1tZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9td2VzdHN0cmF0ZS9pbW1lciksIHRoZSBtdXRhdGlvbnMgYXJlXHJcbiAqIHRyYW5zbGF0ZWQgdG8gY29weSBvcGVyYXRpb25zIHRoYXQgcmVzdWx0IGluIGEgbmV3IHN0YXRlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXNlUmVkdWNlcjxTID0gYW55LCBBIGV4dGVuZHMgQWN0aW9uID0gQW55QWN0aW9uPiA9IChcclxuICBzdGF0ZTogRHJhZnQ8Uz4sXHJcbiAgYWN0aW9uOiBBXHJcbikgPT4gUyB8IHZvaWRcclxuXHJcbi8qKlxyXG4gKiBBIG1hcHBpbmcgZnJvbSBhY3Rpb24gdHlwZXMgdG8gY2FzZSByZWR1Y2VycyBmb3IgYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIG1hbnVhbGx5IC0gaXQgaXMgb25seSB1c2VkXHJcbiAqICAgICAgICAgICAgIGZvciBpbnRlcm5hbCBpbmZlcmVuY2UgcHVycG9zZXMgYW5kIHVzaW5nIGl0IG1hbnVhbGx5XHJcbiAqICAgICAgICAgICAgIHdvdWxkIGxlYWQgdG8gdHlwZSBlcmFzdXJlLlxyXG4gKiAgICAgICAgICAgICBJdCBtaWdodCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENhc2VSZWR1Y2VyczxTLCBBUyBleHRlbmRzIEFjdGlvbnM+ID0ge1xyXG4gIFtUIGluIGtleW9mIEFTXTogQVNbVF0gZXh0ZW5kcyBBY3Rpb24gPyBDYXNlUmVkdWNlcjxTLCBBU1tUXT4gOiB2b2lkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZGVmaW5pbmcgYSByZWR1Y2VyIGFzIGEgbWFwcGluZyBmcm9tIGFjdGlvblxyXG4gKiB0eXBlIHRvICpjYXNlIHJlZHVjZXIqIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZSB0aGVzZSBhY3Rpb24gdHlwZXMuIFRoZVxyXG4gKiByZWR1Y2VyJ3MgaW5pdGlhbCBzdGF0ZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGUgYm9keSBvZiBldmVyeSBjYXNlIHJlZHVjZXIgaXMgaW1wbGljaXRseSB3cmFwcGVkIHdpdGggYSBjYWxsIHRvXHJcbiAqIGBwcm9kdWNlKClgIGZyb20gdGhlIFtpbW1lcl0oaHR0cHM6Ly9naXRodWIuY29tL213ZXN0c3RyYXRlL2ltbWVyKSBsaWJyYXJ5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgcmF0aGVyIHRoYW4gcmV0dXJuaW5nIGEgbmV3IHN0YXRlIG9iamVjdCwgeW91IGNhbiBhbHNvXHJcbiAqIG11dGF0ZSB0aGUgcGFzc2VkLWluIHN0YXRlIG9iamVjdCBkaXJlY3RseTsgdGhlc2UgbXV0YXRpb25zIHdpbGwgdGhlbiBiZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGFuZCBlZmZpY2llbnRseSB0cmFuc2xhdGVkIGludG8gY29waWVzLCBnaXZpbmcgeW91IGJvdGhcclxuICogY29udmVuaWVuY2UgYW5kIGltbXV0YWJpbGl0eS5cclxuICpcclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSB0byBiZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci5cclxuICogQHBhcmFtIGFjdGlvbnNNYXAgQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljXHJcbiAqICAgY2FzZSByZWR1Y2Vycy5cclxuICogQHBhcmFtIGFjdGlvbk1hdGNoZXJzIEFuIGFycmF5IG9mIG1hdGNoZXIgZGVmaW5pdGlvbnMgaW4gdGhlIGZvcm0gYHttYXRjaGVyLCByZWR1Y2VyfWAuXHJcbiAqICAgQWxsIG1hdGNoaW5nIHJlZHVjZXJzIHdpbGwgYmUgZXhlY3V0ZWQgaW4gb3JkZXIsIGluZGVwZW5kZW50bHkgaWYgYSBjYXNlIHJlZHVjZXIgbWF0Y2hlZCBvciBub3QuXHJcbiAqIEBwYXJhbSBkZWZhdWx0Q2FzZVJlZHVjZXIgQSBcImRlZmF1bHQgY2FzZVwiIHJlZHVjZXIgdGhhdCBpcyBleGVjdXRlZCBpZiBubyBjYXNlIHJlZHVjZXIgYW5kIG5vIG1hdGNoZXJcclxuICogICByZWR1Y2VyIHdhcyBleGVjdXRlZCBmb3IgdGhpcyBhY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyPFxyXG4gIFMsXHJcbiAgQ1IgZXh0ZW5kcyBDYXNlUmVkdWNlcnM8UywgYW55PiA9IENhc2VSZWR1Y2VyczxTLCBhbnk+XHJcbj4oXHJcbiAgaW5pdGlhbFN0YXRlOiBTLFxyXG4gIGFjdGlvbnNNYXA6IENSLFxyXG4gIGFjdGlvbk1hdGNoZXJzPzogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPixcclxuICBkZWZhdWx0Q2FzZVJlZHVjZXI/OiBDYXNlUmVkdWNlcjxTPlxyXG4pOiBSZWR1Y2VyPFM+XHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZGVmaW5pbmcgYSByZWR1Y2VyIGFzIGEgbWFwcGluZyBmcm9tIGFjdGlvblxyXG4gKiB0eXBlIHRvICpjYXNlIHJlZHVjZXIqIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZSB0aGVzZSBhY3Rpb24gdHlwZXMuIFRoZVxyXG4gKiByZWR1Y2VyJ3MgaW5pdGlhbCBzdGF0ZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGUgYm9keSBvZiBldmVyeSBjYXNlIHJlZHVjZXIgaXMgaW1wbGljaXRseSB3cmFwcGVkIHdpdGggYSBjYWxsIHRvXHJcbiAqIGBwcm9kdWNlKClgIGZyb20gdGhlIFtpbW1lcl0oaHR0cHM6Ly9naXRodWIuY29tL213ZXN0c3RyYXRlL2ltbWVyKSBsaWJyYXJ5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgcmF0aGVyIHRoYW4gcmV0dXJuaW5nIGEgbmV3IHN0YXRlIG9iamVjdCwgeW91IGNhbiBhbHNvXHJcbiAqIG11dGF0ZSB0aGUgcGFzc2VkLWluIHN0YXRlIG9iamVjdCBkaXJlY3RseTsgdGhlc2UgbXV0YXRpb25zIHdpbGwgdGhlbiBiZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGFuZCBlZmZpY2llbnRseSB0cmFuc2xhdGVkIGludG8gY29waWVzLCBnaXZpbmcgeW91IGJvdGhcclxuICogY29udmVuaWVuY2UgYW5kIGltbXV0YWJpbGl0eS5cclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSB0byBiZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci5cclxuICogQHBhcmFtIGJ1aWxkZXJDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgYSAqYnVpbGRlciogb2JqZWN0IHRvIGRlZmluZVxyXG4gKiAgIGNhc2UgcmVkdWNlcnMgdmlhIGNhbGxzIHRvIGBidWlsZGVyLmFkZENhc2UoYWN0aW9uQ3JlYXRvck9yVHlwZSwgcmVkdWNlcilgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlcjxTPihcclxuICBpbml0aWFsU3RhdGU6IFMsXHJcbiAgYnVpbGRlckNhbGxiYWNrOiAoYnVpbGRlcjogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8Uz4pID0+IHZvaWRcclxuKTogUmVkdWNlcjxTPlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXI8Uz4oXHJcbiAgaW5pdGlhbFN0YXRlOiBTLFxyXG4gIG1hcE9yQnVpbGRlckNhbGxiYWNrOlxyXG4gICAgfCBDYXNlUmVkdWNlcnM8UywgYW55PlxyXG4gICAgfCAoKGJ1aWxkZXI6IEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyPFM+KSA9PiB2b2lkKSxcclxuICBhY3Rpb25NYXRjaGVyczogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IFtdLFxyXG4gIGRlZmF1bHRDYXNlUmVkdWNlcj86IENhc2VSZWR1Y2VyPFM+XHJcbik6IFJlZHVjZXI8Uz4ge1xyXG4gIGxldCBbYWN0aW9uc01hcCwgZmluYWxBY3Rpb25NYXRjaGVycywgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdID1cclxuICAgIHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKVxyXG4gICAgICA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pOiBTIHtcclxuICAgIGxldCBjYXNlUmVkdWNlcnMgPSBbXHJcbiAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdLFxyXG4gICAgICAuLi5maW5hbEFjdGlvbk1hdGNoZXJzXHJcbiAgICAgICAgLmZpbHRlcigoeyBtYXRjaGVyIH0pID0+IG1hdGNoZXIoYWN0aW9uKSlcclxuICAgICAgICAubWFwKCh7IHJlZHVjZXIgfSkgPT4gcmVkdWNlcilcclxuICAgIF1cclxuICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGNyID0+ICEhY3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjYXNlUmVkdWNlcnMgPSBbZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKTogUyA9PiB7XHJcbiAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgIGlmIChpc0RyYWZ0KHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBkcmFmdCwgd2UgbXVzdCBhbHJlYWR5IGJlIGluc2lkZSBhIGBjcmVhdGVOZXh0U3RhdGVgIGNhbGwsXHJcbiAgICAgICAgICAvLyBsaWtlbHkgYmVjYXVzZSB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgLCBgY3JlYXRlU2xpY2VgLCBvciBuZXN0ZWRcclxuICAgICAgICAgIC8vIGluc2lkZSBhbiBleGlzdGluZyBkcmFmdC4gSXQncyBzYWZlIHRvIGp1c3QgcGFzcyB0aGUgZHJhZnQgdG8gdGhlIG11dGF0b3IuXHJcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IHByZXZpb3VzU3RhdGUgYXMgRHJhZnQ8Uz4gLy8gV2UgY2FuIGFzc3VtZSB0aGlzIGlzIGFscmVhZHkgYSBkcmFmdFxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbilcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNEcmFmdGFibGUocHJldmlvdXNTdGF0ZSkpIHtcclxuICAgICAgICAgIC8vIElmIHN0YXRlIGlzIG5vdCBkcmFmdGFibGUgKGV4OiBhIHByaW1pdGl2ZSwgc3VjaCBhcyAwKSwgd2Ugd2FudCB0byBkaXJlY3RseVxyXG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSBjYXNlUmVkdWNlciBmdW5jIGFuZCBub3Qgd3JhcCBpdCB3aXRoIHByb2R1Y2UuXHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYXNlUmVkdWNlcihwcmV2aW91c1N0YXRlIGFzIGFueSwgYWN0aW9uKVxyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAnQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWQnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgY3JlYXRlTmV4dFN0YXRlKCkgcHJvZHVjZXMgYW4gSW1tdXRhYmxlPERyYWZ0PFM+PiByYXRoZXJcclxuICAgICAgICAgIC8vIHRoYW4gYW4gSW1tdXRhYmxlPFM+LCBhbmQgVHlwZVNjcmlwdCBjYW5ub3QgZmluZCBvdXQgaG93IHRvIHJlY29uY2lsZVxyXG4gICAgICAgICAgLy8gdGhlc2UgdHdvIHR5cGVzLlxyXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZShwcmV2aW91c1N0YXRlLCAoZHJhZnQ6IERyYWZ0PFM+KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlXHJcbiAgICB9LCBzdGF0ZSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZCxcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbixcclxuICBQYXlsb2FkQWN0aW9uQ3JlYXRvcixcclxuICBQcmVwYXJlQWN0aW9uLFxyXG4gIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZFxyXG59IGZyb20gJy4vY3JlYXRlQWN0aW9uJ1xyXG5pbXBvcnQgeyBDYXNlUmVkdWNlciwgQ2FzZVJlZHVjZXJzLCBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJ1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyLFxyXG4gIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrXHJcbn0gZnJvbSAnLi9tYXBCdWlsZGVycydcclxuaW1wb3J0IHsgT21pdCwgTm9JbmZlciB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIGF0dGFjaGVkIHRvIGEgc2xpY2UuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgUGF5bG9hZEFjdGlvbkNyZWF0b3IgZGlyZWN0bHlcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2VBY3Rpb25DcmVhdG9yPFA+ID0gUGF5bG9hZEFjdGlvbkNyZWF0b3I8UD5cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmV0dXJuIHZhbHVlIG9mIGBjcmVhdGVTbGljZWBcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbGljZTxcclxuICBTdGF0ZSA9IGFueSxcclxuICBDYXNlUmVkdWNlcnMgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4sXHJcbiAgTmFtZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+IHtcclxuICAvKipcclxuICAgKiBUaGUgc2xpY2UgbmFtZS5cclxuICAgKi9cclxuICBuYW1lOiBOYW1lXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGljZSdzIHJlZHVjZXIuXHJcbiAgICovXHJcbiAgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT5cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aW9uIGNyZWF0b3JzIGZvciB0aGUgdHlwZXMgb2YgYWN0aW9ucyB0aGF0IGFyZSBoYW5kbGVkIGJ5IHRoZSBzbGljZVxyXG4gICAqIHJlZHVjZXIuXHJcbiAgICovXHJcbiAgYWN0aW9uczogQ2FzZVJlZHVjZXJBY3Rpb25zPENhc2VSZWR1Y2Vycz5cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGl2aWR1YWwgY2FzZSByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBgcmVkdWNlcnNgIHBhcmFtZXRlci5cclxuICAgKiBUaGlzIGVuYWJsZXMgcmV1c2UgYW5kIHRlc3RpbmcgaWYgdGhleSB3ZXJlIGRlZmluZWQgaW5saW5lIHdoZW4gY2FsbGluZyBgY3JlYXRlU2xpY2VgLlxyXG4gICAqL1xyXG4gIGNhc2VSZWR1Y2VyczogU2xpY2VEZWZpbmVkQ2FzZVJlZHVjZXJzPENhc2VSZWR1Y2Vycz5cclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVTbGljZSgpYC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTbGljZU9wdGlvbnM8XHJcbiAgU3RhdGUgPSBhbnksXHJcbiAgQ1IgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4sXHJcbiAgTmFtZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+IHtcclxuICAvKipcclxuICAgKiBUaGUgc2xpY2UncyBuYW1lLiBVc2VkIHRvIG5hbWVzcGFjZSB0aGUgZ2VuZXJhdGVkIGFjdGlvbiB0eXBlcy5cclxuICAgKi9cclxuICBuYW1lOiBOYW1lXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHN0YXRlIHRvIGJlIHJldHVybmVkIGJ5IHRoZSBzbGljZSByZWR1Y2VyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxTdGF0ZTogU3RhdGVcclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljICpjYXNlIHJlZHVjZXIqXHJcbiAgICogZnVuY3Rpb25zLiBGb3IgZXZlcnkgYWN0aW9uIHR5cGUsIGEgbWF0Y2hpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBiZVxyXG4gICAqIGdlbmVyYXRlZCB1c2luZyBgY3JlYXRlQWN0aW9uKClgLlxyXG4gICAqL1xyXG4gIHJlZHVjZXJzOiBWYWxpZGF0ZVNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlLCBDUj5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljICpjYXNlIHJlZHVjZXIqXHJcbiAgICogZnVuY3Rpb25zLiBUaGVzZSByZWR1Y2VycyBzaG91bGQgaGF2ZSBleGlzdGluZyBhY3Rpb24gdHlwZXMgdXNlZFxyXG4gICAqIGFzIHRoZSBrZXlzLCBhbmQgYWN0aW9uIGNyZWF0b3JzIHdpbGwgX25vdF8gYmUgZ2VuZXJhdGVkLlxyXG4gICAqIEFsdGVybmF0aXZlbHksIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyBhICpidWlsZGVyKiBvYmplY3QgdG8gZGVmaW5lXHJcbiAgICogY2FzZSByZWR1Y2VycyB2aWEgY2FsbHMgdG8gYGJ1aWxkZXIuYWRkQ2FzZShhY3Rpb25DcmVhdG9yT3JUeXBlLCByZWR1Y2VyKWAuXHJcbiAgICovXHJcbiAgZXh0cmFSZWR1Y2Vycz86XHJcbiAgICB8IENhc2VSZWR1Y2VyczxOb0luZmVyPFN0YXRlPiwgYW55PlxyXG4gICAgfCAoKGJ1aWxkZXI6IEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyPE5vSW5mZXI8U3RhdGU+PikgPT4gdm9pZClcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgQ2FzZVJlZHVjZXIgd2l0aCBhIGBwcmVwYXJlYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENhc2VSZWR1Y2VyV2l0aFByZXBhcmU8U3RhdGUsIEFjdGlvbiBleHRlbmRzIFBheWxvYWRBY3Rpb24+ID0ge1xyXG4gIHJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBBY3Rpb24+XHJcbiAgcHJlcGFyZTogUHJlcGFyZUFjdGlvbjxBY3Rpb25bJ3BheWxvYWQnXT5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIGRlc2NyaWJpbmcgYSBzbGljZSdzIGByZWR1Y2Vyc2Agb3B0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSB7XHJcbiAgW0s6IHN0cmluZ106XHJcbiAgICB8IENhc2VSZWR1Y2VyPFN0YXRlLCBQYXlsb2FkQWN0aW9uPGFueT4+XHJcbiAgICB8IENhc2VSZWR1Y2VyV2l0aFByZXBhcmU8U3RhdGUsIFBheWxvYWRBY3Rpb248YW55LCBzdHJpbmcsIGFueSwgYW55Pj5cclxufVxyXG5cclxuLyoqXHJcbiAqIERlcml2ZXMgdGhlIHNsaWNlJ3MgYGFjdGlvbnNgIHByb3BlcnR5IGZyb20gdGhlIGByZWR1Y2Vyc2Agb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXNlUmVkdWNlckFjdGlvbnM8Q2FzZVJlZHVjZXJzIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8YW55Pj4gPSB7XHJcbiAgW1R5cGUgaW4ga2V5b2YgQ2FzZVJlZHVjZXJzXTogQ2FzZVJlZHVjZXJzW1R5cGVdIGV4dGVuZHMgeyBwcmVwYXJlOiBhbnkgfVxyXG4gICAgPyBBY3Rpb25DcmVhdG9yRm9yQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZTxDYXNlUmVkdWNlcnNbVHlwZV0+XHJcbiAgICA6IEFjdGlvbkNyZWF0b3JGb3JDYXNlUmVkdWNlcjxDYXNlUmVkdWNlcnNbVHlwZV0+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBgUGF5bG9hZEFjdGlvbkNyZWF0b3JgIHR5cGUgZm9yIGEgcGFzc2VkIGBDYXNlUmVkdWNlcldpdGhQcmVwYXJlYFxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnR5cGUgQWN0aW9uQ3JlYXRvckZvckNhc2VSZWR1Y2VyV2l0aFByZXBhcmU8XHJcbiAgQ1IgZXh0ZW5kcyB7IHByZXBhcmU6IGFueSB9XHJcbj4gPSBfQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8Q1JbJ3ByZXBhcmUnXSwgc3RyaW5nPlxyXG5cclxuLyoqXHJcbiAqIEdldCBhIGBQYXlsb2FkQWN0aW9uQ3JlYXRvcmAgdHlwZSBmb3IgYSBwYXNzZWQgYENhc2VSZWR1Y2VyYFxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnR5cGUgQWN0aW9uQ3JlYXRvckZvckNhc2VSZWR1Y2VyPENSPiA9IENSIGV4dGVuZHMgKFxyXG4gIHN0YXRlOiBhbnksXHJcbiAgYWN0aW9uOiBpbmZlciBBY3Rpb25cclxuKSA9PiBhbnlcclxuICA/IEFjdGlvbiBleHRlbmRzIHsgcGF5bG9hZDogaW5mZXIgUCB9XHJcbiAgICA/IFBheWxvYWRBY3Rpb25DcmVhdG9yPFA+XHJcbiAgICA6IEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZFxyXG4gIDogQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkXHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgdGhlIENhc2VSZWR1Y2VycyBvdXQgb2YgYSBgcmVkdWNlcnNgIG9iamVjdCwgZXZlbiBpZiB0aGV5IGFyZVxyXG4gKiB0ZXN0ZWQgaW50byBhIGBDYXNlUmVkdWNlcldpdGhQcmVwYXJlYC5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG50eXBlIFNsaWNlRGVmaW5lZENhc2VSZWR1Y2VyczxDYXNlUmVkdWNlcnMgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2Vyczxhbnk+PiA9IHtcclxuICBbVHlwZSBpbiBrZXlvZiBDYXNlUmVkdWNlcnNdOiBDYXNlUmVkdWNlcnNbVHlwZV0gZXh0ZW5kcyB7XHJcbiAgICByZWR1Y2VyOiBpbmZlciBSZWR1Y2VyXHJcbiAgfVxyXG4gICAgPyBSZWR1Y2VyXHJcbiAgICA6IENhc2VSZWR1Y2Vyc1tUeXBlXVxyXG59XHJcblxyXG4vKipcclxuICogVXNlZCBvbiBhIFNsaWNlQ2FzZVJlZHVjZXJzIG9iamVjdC5cclxuICogRW5zdXJlcyB0aGF0IGlmIGEgQ2FzZVJlZHVjZXIgaXMgYSBgQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZWAsIHRoYXRcclxuICogdGhlIGByZWR1Y2VyYCBhbmQgdGhlIGBwcmVwYXJlYCBmdW5jdGlvbiB1c2UgdGhlIHNhbWUgdHlwZSBvZiBgcGF5bG9hZGAuXHJcbiAqXHJcbiAqIE1pZ2h0IGRvIGFkZGl0aW9uYWwgc3VjaCBjaGVja3MgaW4gdGhlIGZ1dHVyZS5cclxuICpcclxuICogVGhpcyB0eXBlIGlzIG9ubHkgZXZlciB1c2VmdWwgaWYgeW91IHdhbnQgdG8gd3JpdGUgeW91ciBvd24gd3JhcHBlciBhcm91bmRcclxuICogYGNyZWF0ZVNsaWNlYC4gUGxlYXNlIGRvbid0IHVzZSBpdCBvdGhlcndpc2UhXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIFZhbGlkYXRlU2xpY2VDYXNlUmVkdWNlcnM8XHJcbiAgUyxcclxuICBBQ1IgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTPlxyXG4+ID0gQUNSICZcclxuICB7XHJcbiAgICBbVCBpbiBrZXlvZiBBQ1JdOiBBQ1JbVF0gZXh0ZW5kcyB7XHJcbiAgICAgIHJlZHVjZXIoczogUywgYWN0aW9uPzogaW5mZXIgQSk6IGFueVxyXG4gICAgfVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHByZXBhcmUoLi4uYTogbmV2ZXJbXSk6IE9taXQ8QSwgJ3R5cGUnPlxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGdldFR5cGUoc2xpY2U6IHN0cmluZywgYWN0aW9uS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBgJHtzbGljZX0vJHthY3Rpb25LZXl9YFxyXG59XHJcblxyXG4vKipcclxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYW4gaW5pdGlhbCBzdGF0ZSwgYW4gb2JqZWN0IGZ1bGwgb2YgcmVkdWNlclxyXG4gKiBmdW5jdGlvbnMsIGFuZCBhIFwic2xpY2UgbmFtZVwiLCBhbmQgYXV0b21hdGljYWxseSBnZW5lcmF0ZXNcclxuICogYWN0aW9uIGNyZWF0b3JzIGFuZCBhY3Rpb24gdHlwZXMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZVxyXG4gKiByZWR1Y2VycyBhbmQgc3RhdGUuXHJcbiAqXHJcbiAqIFRoZSBgcmVkdWNlcmAgYXJndW1lbnQgaXMgcGFzc2VkIHRvIGBjcmVhdGVSZWR1Y2VyKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2xpY2U8XHJcbiAgU3RhdGUsXHJcbiAgQ2FzZVJlZHVjZXJzIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8U3RhdGU+LFxyXG4gIE5hbWUgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmdcclxuPihcclxuICBvcHRpb25zOiBDcmVhdGVTbGljZU9wdGlvbnM8U3RhdGUsIENhc2VSZWR1Y2VycywgTmFtZT5cclxuKTogU2xpY2U8U3RhdGUsIENhc2VSZWR1Y2VycywgTmFtZT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgaW5pdGlhbFN0YXRlIH0gPSBvcHRpb25zXHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BuYW1lYCBpcyBhIHJlcXVpcmVkIG9wdGlvbiBmb3IgY3JlYXRlU2xpY2UnKVxyXG4gIH1cclxuICBjb25zdCByZWR1Y2VycyA9IG9wdGlvbnMucmVkdWNlcnMgfHwge31cclxuICBjb25zdCBbXHJcbiAgICBleHRyYVJlZHVjZXJzID0ge30sXHJcbiAgICBhY3Rpb25NYXRjaGVycyA9IFtdLFxyXG4gICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gdW5kZWZpbmVkXHJcbiAgXSA9XHJcbiAgICB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IFtdXHJcbiAgICAgIDogdHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG9wdGlvbnMuZXh0cmFSZWR1Y2VycylcclxuICAgICAgOiBbb3B0aW9ucy5leHRyYVJlZHVjZXJzXVxyXG5cclxuICBjb25zdCByZWR1Y2VyTmFtZXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycylcclxuXHJcbiAgY29uc3Qgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWU6IFJlY29yZDxzdHJpbmcsIENhc2VSZWR1Y2VyPiA9IHt9XHJcbiAgY29uc3Qgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGU6IFJlY29yZDxzdHJpbmcsIENhc2VSZWR1Y2VyPiA9IHt9XHJcbiAgY29uc3QgYWN0aW9uQ3JlYXRvcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9XHJcblxyXG4gIHJlZHVjZXJOYW1lcy5mb3JFYWNoKHJlZHVjZXJOYW1lID0+IHtcclxuICAgIGNvbnN0IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlID0gcmVkdWNlcnNbcmVkdWNlck5hbWVdXHJcbiAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShuYW1lLCByZWR1Y2VyTmFtZSlcclxuXHJcbiAgICBsZXQgY2FzZVJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBhbnk+XHJcbiAgICBsZXQgcHJlcGFyZUNhbGxiYWNrOiBQcmVwYXJlQWN0aW9uPGFueT4gfCB1bmRlZmluZWRcclxuXHJcbiAgICBpZiAoJ3JlZHVjZXInIGluIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlKSB7XHJcbiAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucmVkdWNlclxyXG4gICAgICBwcmVwYXJlQ2FsbGJhY2sgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5wcmVwYXJlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlXHJcbiAgICB9XHJcblxyXG4gICAgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVbcmVkdWNlck5hbWVdID0gY2FzZVJlZHVjZXJcclxuICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlW3R5cGVdID0gY2FzZVJlZHVjZXJcclxuICAgIGFjdGlvbkNyZWF0b3JzW3JlZHVjZXJOYW1lXSA9IHByZXBhcmVDYWxsYmFja1xyXG4gICAgICA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spXHJcbiAgICAgIDogY3JlYXRlQWN0aW9uKHR5cGUpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZmluYWxDYXNlUmVkdWNlcnMgPSB7IC4uLmV4dHJhUmVkdWNlcnMsIC4uLnNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlIH1cclxuICBjb25zdCByZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGZpbmFsQ2FzZVJlZHVjZXJzIGFzIGFueSxcclxuICAgIGFjdGlvbk1hdGNoZXJzLFxyXG4gICAgZGVmYXVsdENhc2VSZWR1Y2VyXHJcbiAgKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHJlZHVjZXIsXHJcbiAgICBhY3Rpb25zOiBhY3Rpb25DcmVhdG9ycyBhcyBhbnksXHJcbiAgICBjYXNlUmVkdWNlcnM6IHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lIGFzIGFueVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxFbnRpdHlTdGF0ZTxWPigpOiBFbnRpdHlTdGF0ZTxWPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge31cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5PFY+KCkge1xyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpOiBFbnRpdHlTdGF0ZTxWPlxyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZTxTIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIGFkZGl0aW9uYWxTdGF0ZTogU1xyXG4gICk6IEVudGl0eVN0YXRlPFY+ICYgU1xyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShhZGRpdGlvbmFsU3RhdGU6IGFueSA9IHt9KTogYW55IHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpLCBhZGRpdGlvbmFsU3RhdGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRJbml0aWFsU3RhdGUgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBFbnRpdHlTZWxlY3RvcnMsIERpY3Rpb25hcnksIEVudGl0eUlkIH0gZnJvbSAnLi9tb2RlbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeTxUPigpIHtcclxuICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMoKTogRW50aXR5U2VsZWN0b3JzPFQsIEVudGl0eVN0YXRlPFQ+PlxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9yczxWPihcclxuICAgIHNlbGVjdFN0YXRlOiAoc3RhdGU6IFYpID0+IEVudGl0eVN0YXRlPFQ+XHJcbiAgKTogRW50aXR5U2VsZWN0b3JzPFQsIFY+XHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKFxyXG4gICAgc2VsZWN0U3RhdGU/OiAoc3RhdGU6IGFueSkgPT4gRW50aXR5U3RhdGU8VD5cclxuICApOiBFbnRpdHlTZWxlY3RvcnM8VCwgYW55PiB7XHJcbiAgICBjb25zdCBzZWxlY3RJZHMgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGUuaWRzXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RW50aXRpZXMgPSAoc3RhdGU6IEVudGl0eVN0YXRlPFQ+KSA9PiBzdGF0ZS5lbnRpdGllc1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEFsbCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICBzZWxlY3RJZHMsXHJcbiAgICAgIHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAoaWRzOiBUW10sIGVudGl0aWVzOiBEaWN0aW9uYXJ5PFQ+KTogYW55ID0+XHJcbiAgICAgICAgaWRzLm1hcCgoaWQ6IGFueSkgPT4gKGVudGl0aWVzIGFzIGFueSlbaWRdKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdElkID0gKF86IGFueSwgaWQ6IEVudGl0eUlkKSA9PiBpZFxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJ5SWQgPSAoZW50aXRpZXM6IERpY3Rpb25hcnk8VD4sIGlkOiBFbnRpdHlJZCkgPT4gZW50aXRpZXNbaWRdXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0VG90YWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RJZHMsIGlkcyA9PiBpZHMubGVuZ3RoKVxyXG5cclxuICAgIGlmICghc2VsZWN0U3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RJZHMsXHJcbiAgICAgICAgc2VsZWN0RW50aXRpZXMsXHJcbiAgICAgICAgc2VsZWN0QWxsLFxyXG4gICAgICAgIHNlbGVjdFRvdGFsLFxyXG4gICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RJZHM6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RJZHMpLFxyXG4gICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLFxyXG4gICAgICBzZWxlY3RBbGw6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RBbGwpLFxyXG4gICAgICBzZWxlY3RUb3RhbDogY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdFRvdGFsKSxcclxuICAgICAgc2VsZWN0QnlJZDogY3JlYXRlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldFNlbGVjdG9ycyB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBpc0RyYWZ0IH0gZnJvbSAnaW1tZXInXHJcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBQcmV2ZW50QW55IH0gZnJvbSAnLi9tb2RlbHMnXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGlzRlNBIH0gZnJvbSAnLi4vY3JlYXRlQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcjxWPihcclxuICBtdXRhdG9yOiAoc3RhdGU6IEVudGl0eVN0YXRlPFY+KSA9PiB2b2lkXHJcbikge1xyXG4gIGNvbnN0IG9wZXJhdG9yID0gY3JlYXRlU3RhdGVPcGVyYXRvcigoXzogdW5kZWZpbmVkLCBzdGF0ZTogRW50aXR5U3RhdGU8Vj4pID0+XHJcbiAgICBtdXRhdG9yKHN0YXRlKVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbjxTIGV4dGVuZHMgRW50aXR5U3RhdGU8Vj4+KFxyXG4gICAgc3RhdGU6IFByZXZlbnRBbnk8UywgVj5cclxuICApOiBTIHtcclxuICAgIHJldHVybiBvcGVyYXRvcihzdGF0ZSBhcyBTLCB1bmRlZmluZWQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGVPcGVyYXRvcjxWLCBSPihcclxuICBtdXRhdG9yOiAoYXJnOiBSLCBzdGF0ZTogRW50aXR5U3RhdGU8Vj4pID0+IHZvaWRcclxuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbjxTIGV4dGVuZHMgRW50aXR5U3RhdGU8Vj4+KFxyXG4gICAgc3RhdGU6IFMsXHJcbiAgICBhcmc6IFIgfCBQYXlsb2FkQWN0aW9uPFI+XHJcbiAgKTogUyB7XHJcbiAgICBmdW5jdGlvbiBpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChcclxuICAgICAgYXJnOiBSIHwgUGF5bG9hZEFjdGlvbjxSPlxyXG4gICAgKTogYXJnIGlzIFBheWxvYWRBY3Rpb248Uj4ge1xyXG4gICAgICByZXR1cm4gaXNGU0EoYXJnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJ1bk11dGF0b3IgPSAoZHJhZnQ6IEVudGl0eVN0YXRlPFY+KSA9PiB7XHJcbiAgICAgIGlmIChpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcpKSB7XHJcbiAgICAgICAgbXV0YXRvcihhcmcucGF5bG9hZCwgZHJhZnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXV0YXRvcihhcmcsIGRyYWZ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRHJhZnQoc3RhdGUpKSB7XHJcbiAgICAgIC8vIHdlIG11c3QgYWxyZWFkeSBiZSBpbnNpZGUgYSBgY3JlYXRlTmV4dFN0YXRlYCBjYWxsLCBsaWtlbHkgYmVjYXVzZVxyXG4gICAgICAvLyB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgIG9yIGBjcmVhdGVTbGljZWAuXHJcbiAgICAgIC8vIEl0J3Mgc2FmZSB0byBqdXN0IHBhc3MgdGhlIGRyYWZ0IHRvIHRoZSBtdXRhdG9yLlxyXG4gICAgICBydW5NdXRhdG9yKHN0YXRlKVxyXG5cclxuICAgICAgLy8gc2luY2UgaXQncyBhIGRyYWZ0LCB3ZSdsbCBqdXN0IHJldHVybiBpdFxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmUgY3JlYXRlTmV4dFN0YXRlKCkgcHJvZHVjZXMgYW4gSW1tdXRhYmxlPERyYWZ0PFM+PiByYXRoZXJcclxuICAgICAgLy8gdGhhbiBhbiBJbW11dGFibGU8Uz4sIGFuZCBUeXBlU2NyaXB0IGNhbm5vdCBmaW5kIG91dCBob3cgdG8gcmVjb25jaWxlXHJcbiAgICAgIC8vIHRoZXNlIHR3byB0eXBlcy5cclxuICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZShzdGF0ZSwgcnVuTXV0YXRvcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSWRTZWxlY3RvciB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdElkVmFsdWU8VD4oZW50aXR5OiBULCBzZWxlY3RJZDogSWRTZWxlY3RvcjxUPikge1xyXG4gIGNvbnN0IGtleSA9IHNlbGVjdElkKGVudGl0eSlcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgJ1RoZSBlbnRpdHkgcGFzc2VkIHRvIHRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uIHJldHVybmVkIHVuZGVmaW5lZC4nLFxyXG4gICAgICAnWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24uJyxcclxuICAgICAgJ1RoZSBlbnRpdHkgdGhhdCB3YXMgcGFzc2VkOicsXHJcbiAgICAgIGVudGl0eSxcclxuICAgICAgJ1RoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uOicsXHJcbiAgICAgIHNlbGVjdElkLnRvU3RyaW5nKClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiBrZXlcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEVudGl0eVN0YXRlLFxyXG4gIEVudGl0eVN0YXRlQWRhcHRlcixcclxuICBJZFNlbGVjdG9yLFxyXG4gIFVwZGF0ZSxcclxuICBFbnRpdHlJZFxyXG59IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVN0YXRlT3BlcmF0b3IsXHJcbiAgY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yXHJcbn0gZnJvbSAnLi9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBzZWxlY3RJZFZhbHVlIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcjxUPihcclxuICBzZWxlY3RJZDogSWRTZWxlY3RvcjxUPlxyXG4pOiBFbnRpdHlTdGF0ZUFkYXB0ZXI8VD4ge1xyXG4gIHR5cGUgUiA9IEVudGl0eVN0YXRlPFQ+XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5OiBULCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKVxyXG5cclxuICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUuaWRzLnB1c2goa2V5KVxyXG4gICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkoZW50aXRpZXM6IFRbXSB8IFJlY29yZDxFbnRpdHlJZCwgVD4sIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcylcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcykge1xyXG4gICAgICBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KGVudGl0aWVzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUuaWRzID0gW11cclxuICAgIHN0YXRlLmVudGl0aWVzID0ge31cclxuXHJcbiAgICBhZGRNYW55TXV0YWJseShlbnRpdGllcywgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVPbmVNdXRhYmx5KGtleTogRW50aXR5SWQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gcmVtb3ZlTWFueU11dGFibHkoW2tleV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlTWFueU11dGFibHkoa2V5czogRW50aXR5SWRbXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGxldCBkaWRNdXRhdGUgPSBmYWxzZVxyXG5cclxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW2tleV1cclxuICAgICAgICBkaWRNdXRhdGUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRpZE11dGF0ZSkge1xyXG4gICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKGlkID0+IGlkIGluIHN0YXRlLmVudGl0aWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWxsTXV0YWJseShzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgICBpZHM6IFtdLFxyXG4gICAgICBlbnRpdGllczoge31cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0YWtlTmV3S2V5KFxyXG4gICAga2V5czogeyBbaWQ6IHN0cmluZ106IEVudGl0eUlkIH0sXHJcbiAgICB1cGRhdGU6IFVwZGF0ZTxUPixcclxuICAgIHN0YXRlOiBSXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF1cclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKVxyXG4gICAgY29uc3QgaGFzTmV3S2V5ID0gbmV3S2V5ICE9PSB1cGRhdGUuaWRcclxuXHJcbiAgICBpZiAoaGFzTmV3S2V5KSB7XHJcbiAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleVxyXG4gICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkXHJcblxyXG4gICAgcmV0dXJuIGhhc05ld0tleVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGU6IFVwZGF0ZTxUPiwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzOiBVcGRhdGU8VD5bXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld0tleXM6IHsgW2lkOiBzdHJpbmddOiBFbnRpdHlJZCB9ID0ge31cclxuXHJcbiAgICBjb25zdCB1cGRhdGVzUGVyRW50aXR5OiB7IFtpZDogc3RyaW5nXTogVXBkYXRlPFQ+IH0gPSB7fVxyXG5cclxuICAgIHVwZGF0ZXMuZm9yRWFjaCh1cGRhdGUgPT4ge1xyXG4gICAgICAvLyBPbmx5IGFwcGx5IHVwZGF0ZXMgdG8gZW50aXRpZXMgdGhhdCBjdXJyZW50bHkgZXhpc3RcclxuICAgICAgaWYgKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSB1cGRhdGVzIHRvIG9uZSBlbnRpdHksIG1lcmdlIHRoZW0gdG9nZXRoZXJcclxuICAgICAgICB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPSB7XHJcbiAgICAgICAgICBpZDogdXBkYXRlLmlkLFxyXG4gICAgICAgICAgLy8gU3ByZWFkcyBpZ25vcmUgZmFsc3kgdmFsdWVzLCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgdGhlcmUgaXNuJ3RcclxuICAgICAgICAgIC8vIGFuIGV4aXN0aW5nIHVwZGF0ZSBhbHJlYWR5IGF0IHRoaXMga2V5XHJcbiAgICAgICAgICBjaGFuZ2VzOiB7XHJcbiAgICAgICAgICAgIC4uLih1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF1cclxuICAgICAgICAgICAgICA/IHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXS5jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgOiBudWxsKSxcclxuICAgICAgICAgICAgLi4udXBkYXRlLmNoYW5nZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlcyA9IE9iamVjdC52YWx1ZXModXBkYXRlc1BlckVudGl0eSlcclxuXHJcbiAgICBjb25zdCBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMFxyXG5cclxuICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xyXG4gICAgICBjb25zdCBkaWRNdXRhdGVJZHMgPVxyXG4gICAgICAgIHVwZGF0ZXMuZmlsdGVyKHVwZGF0ZSA9PiB0YWtlTmV3S2V5KG5ld0tleXMsIHVwZGF0ZSwgc3RhdGUpKS5sZW5ndGggPiAwXHJcblxyXG4gICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XHJcbiAgICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLm1hcChpZCA9PiBuZXdLZXlzW2lkXSB8fCBpZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHk6IFQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkoXHJcbiAgICBlbnRpdGllczogVFtdIHwgUmVjb3JkPEVudGl0eUlkLCBUPixcclxuICAgIHN0YXRlOiBSXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRlZDogVFtdID0gW11cclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFVwZGF0ZTxUPltdID0gW11cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcykge1xyXG4gICAgICBjb25zdCBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZClcclxuICAgICAgaWYgKGlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgdXBkYXRlZC5wdXNoKHsgaWQsIGNoYW5nZXM6IGVudGl0eSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZGVkLnB1c2goZW50aXR5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpXHJcbiAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXHJcbiAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXHJcbiAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcclxuICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSksXHJcbiAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXHJcbiAgICByZW1vdmVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU1hbnlNdXRhYmx5KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEVudGl0eVN0YXRlLFxyXG4gIElkU2VsZWN0b3IsXHJcbiAgQ29tcGFyZXIsXHJcbiAgRW50aXR5U3RhdGVBZGFwdGVyLFxyXG4gIFVwZGF0ZSxcclxuICBFbnRpdHlJZFxyXG59IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlciB9IGZyb20gJy4vdW5zb3J0ZWRfc3RhdGVfYWRhcHRlcidcclxuaW1wb3J0IHsgc2VsZWN0SWRWYWx1ZSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyPFQ+KFxyXG4gIHNlbGVjdElkOiBJZFNlbGVjdG9yPFQ+LFxyXG4gIHNvcnQ6IENvbXBhcmVyPFQ+XHJcbik6IEVudGl0eVN0YXRlQWRhcHRlcjxUPiB7XHJcbiAgdHlwZSBSID0gRW50aXR5U3RhdGU8VD5cclxuXHJcbiAgY29uc3QgeyByZW1vdmVPbmUsIHJlbW92ZU1hbnksIHJlbW92ZUFsbCB9ID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoXHJcbiAgICBzZWxlY3RJZFxyXG4gIClcclxuXHJcbiAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHk6IFQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkoXHJcbiAgICBuZXdNb2RlbHM6IFRbXSB8IFJlY29yZDxFbnRpdHlJZCwgVD4sXHJcbiAgICBzdGF0ZTogUlxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld01vZGVscykpIHtcclxuICAgICAgbmV3TW9kZWxzID0gT2JqZWN0LnZhbHVlcyhuZXdNb2RlbHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZWxzID0gbmV3TW9kZWxzLmZpbHRlcihcclxuICAgICAgbW9kZWwgPT4gIShzZWxlY3RJZFZhbHVlKG1vZGVsLCBzZWxlY3RJZCkgaW4gc3RhdGUuZW50aXRpZXMpXHJcbiAgICApXHJcblxyXG4gICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbWVyZ2UobW9kZWxzLCBzdGF0ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobW9kZWxzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGVscykpIHtcclxuICAgICAgbW9kZWxzID0gT2JqZWN0LnZhbHVlcyhtb2RlbHMpXHJcbiAgICB9XHJcbiAgICBzdGF0ZS5lbnRpdGllcyA9IHt9XHJcbiAgICBzdGF0ZS5pZHMgPSBbXVxyXG5cclxuICAgIGFkZE1hbnlNdXRhYmx5KG1vZGVscywgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZTogVXBkYXRlPFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRha2VVcGRhdGVkTW9kZWwobW9kZWxzOiBUW10sIHVwZGF0ZTogVXBkYXRlPFQ+LCBzdGF0ZTogUik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCEodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF1cclxuICAgIGNvbnN0IHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKVxyXG5cclxuICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdXHJcblxyXG4gICAgbW9kZWxzLnB1c2godXBkYXRlZClcclxuXHJcbiAgICByZXR1cm4gbmV3S2V5ICE9PSB1cGRhdGUuaWRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXM6IFVwZGF0ZTxUPltdLCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZWxzOiBUW10gPSBbXVxyXG5cclxuICAgIHVwZGF0ZXMuZm9yRWFjaCh1cGRhdGUgPT4gdGFrZVVwZGF0ZWRNb2RlbChtb2RlbHMsIHVwZGF0ZSwgc3RhdGUpKVxyXG5cclxuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIG1lcmdlKG1vZGVscywgc3RhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eTogVCwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShcclxuICAgIGVudGl0aWVzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LFxyXG4gICAgc3RhdGU6IFJcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcclxuICAgICAgZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKGVudGl0aWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZGVkOiBUW10gPSBbXVxyXG4gICAgY29uc3QgdXBkYXRlZDogVXBkYXRlPFQ+W10gPSBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKVxyXG4gICAgICBpZiAoaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICB1cGRhdGVkLnB1c2goeyBpZCwgY2hhbmdlczogZW50aXR5IH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkZWQucHVzaChlbnRpdHkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSlcclxuICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGE6IHVua25vd25bXSwgYjogdW5rbm93bltdKSB7XHJcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lcmdlKG1vZGVsczogVFtdLCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgbW9kZWxzLnNvcnQoc29ydClcclxuXHJcbiAgICAvLyBJbnNlcnQvb3ZlcndyaXRlIGFsbCBuZXcvdXBkYXRlZFxyXG4gICAgbW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xyXG4gICAgICBzdGF0ZS5lbnRpdGllc1tzZWxlY3RJZChtb2RlbCldID0gbW9kZWxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYWxsRW50aXRpZXMgPSBPYmplY3QudmFsdWVzKHN0YXRlLmVudGl0aWVzKSBhcyBUW11cclxuICAgIGFsbEVudGl0aWVzLnNvcnQoc29ydClcclxuXHJcbiAgICBjb25zdCBuZXdTb3J0ZWRJZHMgPSBhbGxFbnRpdGllcy5tYXAoc2VsZWN0SWQpXHJcbiAgICBjb25zdCB7IGlkcyB9ID0gc3RhdGVcclxuXHJcbiAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xyXG4gICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW1vdmVPbmUsXHJcbiAgICByZW1vdmVNYW55LFxyXG4gICAgcmVtb3ZlQWxsLFxyXG4gICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxyXG4gICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVudGl0eURlZmluaXRpb24sIENvbXBhcmVyLCBJZFNlbGVjdG9yLCBFbnRpdHlBZGFwdGVyIH0gZnJvbSAnLi9tb2RlbHMnXHJcbmltcG9ydCB7IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkgfSBmcm9tICcuL2VudGl0eV9zdGF0ZSdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSB9IGZyb20gJy4vc3RhdGVfc2VsZWN0b3JzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3NvcnRlZF9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlciB9IGZyb20gJy4vdW5zb3J0ZWRfc3RhdGVfYWRhcHRlcidcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW50aXR5QWRhcHRlcjxUPihcclxuICBvcHRpb25zOiB7XHJcbiAgICBzZWxlY3RJZD86IElkU2VsZWN0b3I8VD5cclxuICAgIHNvcnRDb21wYXJlcj86IGZhbHNlIHwgQ29tcGFyZXI8VD5cclxuICB9ID0ge31cclxuKTogRW50aXR5QWRhcHRlcjxUPiB7XHJcbiAgY29uc3QgeyBzZWxlY3RJZCwgc29ydENvbXBhcmVyIH06IEVudGl0eURlZmluaXRpb248VD4gPSB7XHJcbiAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxyXG4gICAgc2VsZWN0SWQ6IChpbnN0YW5jZTogYW55KSA9PiBpbnN0YW5jZS5pZCxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3Rvcnk8VD4oKVxyXG4gIGNvbnN0IHNlbGVjdG9yc0ZhY3RvcnkgPSBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5PFQ+KClcclxuICBjb25zdCBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXJcclxuICAgID8gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0Q29tcGFyZXIpXHJcbiAgICA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0SWQsXHJcbiAgICBzb3J0Q29tcGFyZXIsXHJcbiAgICAuLi5zdGF0ZUZhY3RvcnksXHJcbiAgICAuLi5zZWxlY3RvcnNGYWN0b3J5LFxyXG4gICAgLi4uc3RhdGVBZGFwdGVyXHJcbiAgfVxyXG59XHJcbiIsIi8vIEEgdHlwZSBvZiBwcm9taXNlLWxpa2UgdGhhdCByZXNvbHZlcyBzeW5jaHJvbm91c2x5IGFuZCBzdXBwb3J0cyBvbmx5IG9uZSBvYnNlcnZlclxuZXhwb3J0IGNvbnN0IF9QYWN0ID0gLyojX19QVVJFX18qLyhmdW5jdGlvbigpIHtcblx0ZnVuY3Rpb24gX1BhY3QoKSB7fVxuXHRfUGFjdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IF9QYWN0KCk7XG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnM7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlICYgMSA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBjYWxsYmFjayh0aGlzLnYpKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubyA9IGZ1bmN0aW9uKF90aGlzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IF90aGlzLnY7XG5cdFx0XHRcdGlmIChfdGhpcy5zICYgMSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvblJlamVjdGVkKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIG9uUmVqZWN0ZWQodmFsdWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0cmV0dXJuIF9QYWN0O1xufSkoKTtcblxuLy8gU2V0dGxlcyBhIHBhY3Qgc3luY2hyb25vdXNseVxuZXhwb3J0IGZ1bmN0aW9uIF9zZXR0bGUocGFjdCwgc3RhdGUsIHZhbHVlKSB7XG5cdGlmICghcGFjdC5zKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgX1BhY3QpIHtcblx0XHRcdGlmICh2YWx1ZS5zKSB7XG5cdFx0XHRcdGlmIChzdGF0ZSAmIDEpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHZhbHVlLnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUubyA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdHZhbHVlLnRoZW4oX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKSwgX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cGFjdC5zID0gc3RhdGU7XG5cdFx0cGFjdC52ID0gdmFsdWU7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBwYWN0Lm87XG5cdFx0aWYgKG9ic2VydmVyKSB7XG5cdFx0XHRvYnNlcnZlcihwYWN0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1NldHRsZWRQYWN0KHRoZW5hYmxlKSB7XG5cdHJldHVybiB0aGVuYWJsZSBpbnN0YW5jZW9mIF9QYWN0ICYmIHRoZW5hYmxlLnMgJiAxO1xufVxuXG4vLyBDb252ZXJ0cyBhcmd1bWVudCB0byBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYSBQcm9taXNlXG5leHBvcnQgZnVuY3Rpb24gX2FzeW5jKGYpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIGFyZ3MgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYXBwbHkodGhpcywgYXJncykpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSAoZXF1aXZhbGVudCB0byB0aGUgYXdhaXQga2V5d29yZCBpbiBFUzIwMTUsIHdpdGggY29udGludWF0aW9ucyBwYXNzZWQgZXhwbGljaXRseSlcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXQodmFsdWUsIHRoZW4sIGRpcmVjdCkge1xuXHRpZiAoZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHRoZW4gPyB0aGVuKHZhbHVlKSA6IHZhbHVlO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgIXZhbHVlLnRoZW4pIHtcblx0XHR2YWx1ZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHRoZW4gPyB2YWx1ZS50aGVuKHRoZW4pIDogdmFsdWU7XG59XG5cbi8vIEF3YWl0cyBvbiBhIHZhbHVlIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYSBQcm9taXNlLCB0aGVuIGlnbm9yZXMgaXRcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXRJZ25vcmVkKHZhbHVlLCBkaXJlY3QpIHtcblx0aWYgKCFkaXJlY3QpIHtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX2VtcHR5KSA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cbi8vIFByb2NlZWRzIGFmdGVyIGEgdmFsdWUgaGFzIHJlc29sdmVkLCBvciBwcm9jZWVkcyBpbW1lZGlhdGVseSBpZiB0aGUgdmFsdWUgaXMgbm90IHRoZW5hYmxlXG5leHBvcnQgZnVuY3Rpb24gX2NvbnRpbnVlKHZhbHVlLCB0aGVuKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHRoZW4odmFsdWUpO1xufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZUlnbm9yZWQodmFsdWUpIHtcblx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRyZXR1cm4gdmFsdWUudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QgdGhhdCBoYXMgYSBsZW5ndGggcHJvcGVydHksIHBhc3NpbmcgdGhlIGluZGV4IGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGV2ZW4gYXMgdGhlIGxlbmd0aCBwcm9wZXJ0eSBjaGFuZ2VzKVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JUbyhhcnJheSwgYm9keSwgY2hlY2spIHtcblx0dmFyIGkgPSAtMSwgcGFjdCwgcmVqZWN0O1xuXHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlICgrK2kgPCBhcnJheS5sZW5ndGggJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keShpKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWN0ID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdF9zZXR0bGUocGFjdCB8fCAocGFjdCA9IG5ldyBfUGFjdCgpKSwgMiwgZSk7XG5cdFx0fVxuXHR9XG5cdF9jeWNsZSgpO1xuXHRyZXR1cm4gcGFjdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHByb3BlcnRpZXMgKGluY2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9ySW4odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyAoZXhjbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPd24odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IF9pdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpIDogXCJAQGl0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyB2YWx1ZXNcbi8vIFVzZXMgZm9yLi4ub2YgaWYgdGhlIHJ1bnRpbWUgc3VwcG9ydHMgaXQsIG90aGVyd2lzZSBpdGVyYXRlcyB1bnRpbCBsZW5ndGggb24gYSBjb3B5XG5leHBvcnQgZnVuY3Rpb24gX2Zvck9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0oKSwgc3RlcCwgcGFjdCwgcmVqZWN0O1xuXHRcdGZ1bmN0aW9uIF9jeWNsZShyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUgJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBib2R5KHN0ZXAudmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfY3ljbGUoKTtcblx0XHRpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHR2YXIgX2ZpeHVwID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoIXN0ZXAuZG9uZSkge1xuXHRcdFx0XHRcdFx0aXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCAmJiBwYWN0LnRoZW4pIHtcblx0XHRcdFx0cmV0dXJuIHBhY3QudGhlbihfZml4dXAsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHR0aHJvdyBfZml4dXAoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0X2ZpeHVwKCk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWN0O1xuXHR9XG5cdC8vIE5vIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvclxuXHRpZiAoIShcImxlbmd0aFwiIGluIHRhcmdldCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0fVxuXHQvLyBIYW5kbGUgbGl2ZSBjb2xsZWN0aW9ucyBwcm9wZXJseVxuXHR2YXIgdmFsdWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKHZhbHVlcywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keSh2YWx1ZXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSBvbiBhIHZhbHVlIHVzaW5nIGl0J3MgYXN5bmMgaXRlcmF0b3IgaWYgcHJlc2VudCwgb3IgaXRzIHN5bmNocm9ub3VzIGl0ZXJhdG9yIGlmIG1pc3NpbmdcbmV4cG9ydCBmdW5jdGlvbiBfZm9yQXdhaXRPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHR2YXIgaXRlcmF0b3IgPSB0YXJnZXRbX2FzeW5jSXRlcmF0b3JTeW1ib2xdKCk7XG5cdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdHJldHVybiBwYWN0O1xuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KSB7XG5cdFx0XHRpZiAoY2hlY2sgJiYgY2hlY2soKSkge1xuXHRcdFx0XHRyZXR1cm4gX3NldHRsZShwYWN0LCAxLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVzdWx0OyB9KSA6IHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0XHRpdGVyYXRvci5uZXh0KCkudGhlbihfcmVzdW1lQWZ0ZXJOZXh0KS50aGVuKHZvaWQgMCwgX3JlamVjdCk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlck5leHQoc3RlcCkge1xuXHRcdFx0aWYgKHN0ZXAuZG9uZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKGJvZHkoc3RlcC52YWx1ZSkpLnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVqZWN0KGVycm9yKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDIsIGl0ZXJhdG9yLnJldHVybiA/IGl0ZXJhdG9yLnJldHVybigpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBlcnJvcjsgfSkgOiBlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoX2Zvck9mKHRhcmdldCwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihib2R5KTsgfSwgY2hlY2spKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgZ2VuZXJpYyBmb3IgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9mb3IodGVzdCwgdXBkYXRlLCBib2R5KSB7XG5cdHZhciBzdGFnZTtcblx0Zm9yICg7Oykge1xuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRzdGFnZSA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YWdlID0gMTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdHZhciB1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRzdGFnZSA9IDI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2YXIgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR2YXIgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoc3RhZ2UgPT09IDAgPyBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpIDogc3RhZ2UgPT09IDEgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHZhbHVlKSB7XG5cdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHVwZGF0ZSkge1xuXHRcdFx0XHR1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAodXBkYXRlVmFsdWUgJiYgdXBkYXRlVmFsdWUudGhlbiAmJiAhX2lzU2V0dGxlZFBhY3QodXBkYXRlVmFsdWUpKSB7XG5cdFx0XHRcdFx0dXBkYXRlVmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJVcGRhdGUpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlIHx8IChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkgJiYgIXNob3VsZENvbnRpbnVlLnYpKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoIXJlc3VsdCB8fCAhcmVzdWx0LnRoZW4pO1xuXHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVXBkYXRlKCkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSA9IHRlc3QoKSkge1xuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGRvIC4uLiB3aGlsZSBsb29wXG5leHBvcnQgZnVuY3Rpb24gX2RvKGJvZHksIHRlc3QpIHtcblx0dmFyIGF3YWl0Qm9keTtcblx0ZG8ge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHR9XG5cdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoIXNob3VsZENvbnRpbnVlLnRoZW4pO1xuXHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBzd2l0Y2ggc3RhdGVtZW50XG5leHBvcnQgZnVuY3Rpb24gX3N3aXRjaChkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG5cdHZhciBkaXNwYXRjaEluZGV4ID0gLTE7XG5cdHZhciBhd2FpdEJvZHk7XG5cdG91dGVyOiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRlc3QgPSBjYXNlc1tpXVswXTtcblx0XHRcdGlmICh0ZXN0KSB7XG5cdFx0XHRcdHZhciB0ZXN0VmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh0ZXN0VmFsdWUgJiYgdGVzdFZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGVzdFZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRm91bmQgdGhlIGRlZmF1bHQgY2FzZSwgc2V0IGl0IGFzIHRoZSBwZW5kaW5nIGRpc3BhdGNoIGNhc2Vcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkaXNwYXRjaEluZGV4ICE9PSAtMSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdH0gd2hpbGUgKGZhbGx0aHJvdWdoQ2hlY2sgJiYgIWZhbGx0aHJvdWdoQ2hlY2soKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdGNvbnN0IHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KGF3YWl0Qm9keSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogdGVzdFZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdCh2YWx1ZSkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICgrK2kgPT09IGNhc2VzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YWx1ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHR2YWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvIHtcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRpZiAoIWZhbGx0aHJvdWdoQ2hlY2sgfHwgZmFsbHRocm91Z2hDaGVjaygpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbChib2R5LCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbihib2R5KCkpIDogYm9keSgpO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShib2R5KCkpO1xuXHRcdHJldHVybiB0aGVuID8gcmVzdWx0LnRoZW4odGhlbikgOiByZXN1bHQ7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbElnbm9yZWQoYm9keSwgZGlyZWN0KSB7XG5cdHJldHVybiBfY2FsbChib2R5LCBfZW1wdHksIGRpcmVjdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlKGJvZHksIHRoZW4pIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih0aGVuKTtcblx0fVxuXHRyZXR1cm4gdGhlbihyZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHN3YWxsb3cgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9pbnZva2VJZ25vcmVkKGJvZHkpIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoKGJvZHksIHJlY292ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRyZXR1cm4gcmVjb3ZlcihlKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKHZvaWQgMCwgcmVjb3Zlcik7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5UmV0aHJvd3MoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIodHJ1ZSwgZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIuYmluZChudWxsLCBmYWxzZSksIGZpbmFsaXplci5iaW5kKG51bGwsIHRydWUpKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKGZhbHNlLCByZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIGludm9rZSBhIGZpbmFsbHkgY29udGludWF0aW9uIHRoYXQgYWx3YXlzIG92ZXJyaWRlcyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2ZpbmFsbHkoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIoKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKGZpbmFsaXplciwgZmluYWxpemVyKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKCk7XG59XG5cbi8vIFJldGhyb3cgb3IgcmV0dXJuIGEgdmFsdWUgZnJvbSBhIGZpbmFsbHkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX3JldGhyb3codGhyb3duLCB2YWx1ZSkge1xuXHRpZiAodGhyb3duKVxuXHRcdHRocm93IHZhbHVlO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8vIEVtcHR5IGZ1bmN0aW9uIHRvIGltcGxlbWVudCBicmVhayBhbmQgb3RoZXIgY29udHJvbCBmbG93IHRoYXQgaWdub3JlcyBhc3luY2hyb25vdXMgcmVzdWx0c1xuZXhwb3J0IGZ1bmN0aW9uIF9lbXB0eSgpIHtcbn1cblxuLy8gU2VudGluZWwgdmFsdWUgZm9yIGVhcmx5IHJldHVybnMgaW4gZ2VuZXJhdG9ycyBcbmV4cG9ydCBjb25zdCBfZWFybHlSZXR1cm4gPSAvKiNfX1BVUkVfXyovIHt9O1xuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvbiwgc2tpcHBpbmcgZWFybHkgcmV0dXJuc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEluR2VuZXJhdG9yKGJvZHksIHJlY292ZXIpIHtcblx0cmV0dXJuIF9jYXRjaChib2R5LCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH0pO1xufVxuXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yIGNsYXNzOyBhY2NlcHRzIHRoZSBlbnRyeXBvaW50IG9mIHRoZSBnZW5lcmF0b3IsIHRvIHdoaWNoIGl0IHBhc3NlcyBpdHNlbGYgd2hlbiB0aGUgZ2VuZXJhdG9yIHNob3VsZCBzdGFydFxuZXhwb3J0IGNvbnN0IF9Bc3luY0dlbmVyYXRvciA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlbnRyeSkge1xuXHRcdHRoaXMuX2VudHJ5ID0gZW50cnk7XG5cdFx0dGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0dGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0dGhpcy5fcmV0dXJuID0gbnVsbDtcblx0XHR0aGlzLl9wcm9taXNlID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuXHR9XG5cdGZ1bmN0aW9uIF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuXHR9XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5feWllbGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIFlpZWxkIHRoZSB2YWx1ZSB0byB0aGUgcGVuZGluZyBuZXh0IGNhbGxcblx0XHR0aGlzLl9yZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwWWllbGRlZFZhbHVlKSA6IF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSk7XG5cdFx0Ly8gUmV0dXJuIGEgcGFjdCBmb3IgYW4gdXBjb21pbmcgbmV4dC9yZXR1cm4vdGhyb3cgY2FsbFxuXHRcdHJldHVybiB0aGlzLl9wYWN0ID0gbmV3IF9QYWN0KCk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gQWR2YW5jZSB0aGUgZ2VuZXJhdG9yLCBzdGFydGluZyBpdCBpZiBpdCBoYXMgeWV0IHRvIGJlIHN0YXJ0ZWRcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgX2VudHJ5ID0gX3RoaXMuX2VudHJ5O1xuXHRcdFx0XHRpZiAoX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgbmV4dCBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTdGFydCB0aGUgZ2VuZXJhdG9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0ZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWUpIHtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX2VudHJ5KF90aGlzKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKHJldHVyblZhbHVlLCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUoX3RoaXMuX3JldHVybik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlKHBhY3QpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0X3Jlc29sdmUocGFjdCwgMiwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkIGFuZCBhIHlpZWxkIGV4cHJlc3Npb24gaXMgcGVuZGluZywgc2V0dGxlIGl0XG5cdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRfc2V0dGxlKF9wYWN0LCAxLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBFYXJseSByZXR1cm4gZnJvbSB0aGUgZ2VuZXJhdG9yIGlmIHN0YXJ0ZWQsIG90aGVyd2lzZSBhYmFuZG9ucyB0aGUgZ2VuZXJhdG9yXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSByZXR1cm4gY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCBhIHJlamVjdGVkIFwiZWFybHkgcmV0dXJuXCIgdmFsdWVcblx0XHRcdF90aGlzLl9yZXR1cm4gPSB2YWx1ZTtcblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIF9lYXJseVJldHVybik7XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdC8vIEluamVjdCBhbiBleGNlcHRpb24gaW50byB0aGUgcGVuZGluZyB5aWVsZCBleHByZXNzaW9uXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHRocm93IGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIGEgcmVqZWN0ZWQgUHJvbWlzZSBjb250YWluaW5nIHRoZSBlcnJvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIHRoZSB2YWx1ZSBhcyBhIHJlamVjdGlvblxuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbX2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdFxuXHRyZXR1cm4gX0FzeW5jR2VuZXJhdG9yO1xufSkoKTtcbiIsIi8vIEJvcnJvd2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FpL25hbm9pZC9ibG9iLzMuMC4yL25vbi1zZWN1cmUvaW5kZXguanNcclxuLy8gVGhpcyBhbHBoYWJldCB1c2VzIGBBLVphLXowLTlfLWAgc3ltYm9scy4gQSBnZW5ldGljIGFsZ29yaXRobSBoZWxwZWRcclxuLy8gb3B0aW1pemUgdGhlIGd6aXAgY29tcHJlc3Npb24gZm9yIHRoaXMgYWxwaGFiZXQuXHJcbmxldCB1cmxBbHBoYWJldCA9XHJcbiAgJ01vZHVsZVN5bWJoYXNPd25Qci0wMTIzNDU2Nzg5QUJDREVGR0hOUlZmZ2N0aVV2el9LcVlUSmtMeHBaWElqUVcnXHJcblxyXG4vKipcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XHJcbiAgbGV0IGlkID0gJydcclxuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxyXG4gIGxldCBpID0gc2l6ZVxyXG4gIHdoaWxlIChpLS0pIHtcclxuICAgIC8vIGB8IDBgIGlzIG1vcmUgY29tcGFjdCBhbmQgZmFzdGVyIHRoYW4gYE1hdGguZmxvb3IoKWAuXHJcbiAgICBpZCArPSB1cmxBbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIDY0KSB8IDBdXHJcbiAgfVxyXG4gIHJldHVybiBpZFxyXG59XHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbixcclxuICBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZFxyXG59IGZyb20gJy4vY3JlYXRlQWN0aW9uJ1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCB7IEZhbGxiYWNrSWZVbmtub3duLCBJc0FueSB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICcuL25hbm9pZCdcclxuXHJcbi8vIEB0cy1pZ25vcmUgd2UgbmVlZCB0aGUgaW1wb3J0IG9mIHRoZXNlIHR5cGVzIGR1ZSB0byBhIGJ1bmRsaW5nIGlzc3VlLlxyXG50eXBlIF9LZWVwID0gUGF5bG9hZEFjdGlvbiB8IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPGFueSwgdW5rbm93bj5cclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VUaHVua0FQSTxcclxuICBTLFxyXG4gIEUsXHJcbiAgRCBleHRlbmRzIERpc3BhdGNoID0gRGlzcGF0Y2gsXHJcbiAgUmVqZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZFxyXG4+ID0ge1xyXG4gIGRpc3BhdGNoOiBEXHJcbiAgZ2V0U3RhdGU6ICgpID0+IFNcclxuICBleHRyYTogRVxyXG4gIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgc2lnbmFsOiBBYm9ydFNpZ25hbFxyXG4gIHJlamVjdFdpdGhWYWx1ZSh2YWx1ZTogUmVqZWN0ZWRWYWx1ZSk6IFJlamVjdFdpdGhWYWx1ZTxSZWplY3RlZFZhbHVlPlxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkRXJyb3Ige1xyXG4gIG5hbWU/OiBzdHJpbmdcclxuICBtZXNzYWdlPzogc3RyaW5nXHJcbiAgc3RhY2s/OiBzdHJpbmdcclxuICBjb2RlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGNvbW1vblByb3BlcnRpZXM6IEFycmF5PGtleW9mIFNlcmlhbGl6ZWRFcnJvcj4gPSBbXHJcbiAgJ25hbWUnLFxyXG4gICdtZXNzYWdlJyxcclxuICAnc3RhY2snLFxyXG4gICdjb2RlJ1xyXG5dXHJcblxyXG5jbGFzcyBSZWplY3RXaXRoVmFsdWU8UmVqZWN0VmFsdWU+IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IFJlamVjdFZhbHVlKSB7fVxyXG59XHJcblxyXG4vLyBSZXdvcmtlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2VyaWFsaXplLWVycm9yXHJcbmV4cG9ydCBjb25zdCBtaW5pU2VyaWFsaXplRXJyb3IgPSAodmFsdWU6IGFueSk6IFNlcmlhbGl6ZWRFcnJvciA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHNpbXBsZUVycm9yOiBTZXJpYWxpemVkRXJyb3IgPSB7fVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBjb21tb25Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpbXBsZUVycm9yXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBtZXNzYWdlOiBTdHJpbmcodmFsdWUpIH1cclxufVxyXG5cclxudHlwZSBBc3luY1RodW5rQ29uZmlnID0ge1xyXG4gIHN0YXRlPzogdW5rbm93blxyXG4gIGRpc3BhdGNoPzogRGlzcGF0Y2hcclxuICBleHRyYT86IHVua25vd25cclxuICByZWplY3RWYWx1ZT86IHVua25vd25cclxufVxyXG5cclxudHlwZSBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICBzdGF0ZTogaW5mZXIgU3RhdGVcclxufVxyXG4gID8gU3RhdGVcclxuICA6IHVua25vd25cclxudHlwZSBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHsgZXh0cmE6IGluZmVyIEV4dHJhIH1cclxuICA/IEV4dHJhXHJcbiAgOiB1bmtub3duXHJcbnR5cGUgR2V0RGlzcGF0Y2g8VGh1bmtBcGlDb25maWc+ID0gVGh1bmtBcGlDb25maWcgZXh0ZW5kcyB7XHJcbiAgZGlzcGF0Y2g6IGluZmVyIERpc3BhdGNoXHJcbn1cclxuICA/IEZhbGxiYWNrSWZVbmtub3duPFxyXG4gICAgICBEaXNwYXRjaCxcclxuICAgICAgVGh1bmtEaXNwYXRjaDxcclxuICAgICAgICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gICAgICAgIEFueUFjdGlvblxyXG4gICAgICA+XHJcbiAgICA+XHJcbiAgOiBUaHVua0Rpc3BhdGNoPEdldFN0YXRlPFRodW5rQXBpQ29uZmlnPiwgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LCBBbnlBY3Rpb24+XHJcblxyXG50eXBlIEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiA9IEJhc2VUaHVua0FQSTxcclxuICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gIEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz5cclxuPlxyXG5cclxudHlwZSBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICByZWplY3RWYWx1ZTogaW5mZXIgUmVqZWN0VmFsdWVcclxufVxyXG4gID8gUmVqZWN0VmFsdWVcclxuICA6IHVua25vd25cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBwYXlsb2FkQ3JlYXRvcmAgYXJndW1lbnQgdG8gYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBNaWdodCBiZSB1c2VmdWwgZm9yIHdyYXBwaW5nIGBjcmVhdGVBc3luY1RodW5rYCBpbiBjdXN0b20gYWJzdHJhY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rUGF5bG9hZENyZWF0b3JSZXR1cm5WYWx1ZTxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWdcclxuPiA9XHJcbiAgfCBQcm9taXNlPFJldHVybmVkIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj4+XHJcbiAgfCBSZXR1cm5lZFxyXG4gIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSBgcGF5bG9hZENyZWF0b3JgIGFyZ3VtZW50IHRvIGBjcmVhdGVBc3luY1RodW5rYC5cclxuICogTWlnaHQgYmUgdXNlZnVsIGZvciB3cmFwcGluZyBgY3JlYXRlQXN5bmNUaHVua2AgaW4gY3VzdG9tIGFic3RyYWN0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnID0gdm9pZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWcgPSB7fVxyXG4+ID0gKFxyXG4gIGFyZzogVGh1bmtBcmcsXHJcbiAgdGh1bmtBUEk6IEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPlxyXG4pID0+IEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvclJldHVyblZhbHVlPFJldHVybmVkLCBUaHVua0FwaUNvbmZpZz5cclxuXHJcbi8qKlxyXG4gKiBBIFRodW5rQWN0aW9uIGNyZWF0ZWQgYnkgYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBEaXNwYXRjaGluZyBpdCByZXR1cm5zIGEgUHJvbWlzZSBmb3IgZWl0aGVyIGFcclxuICogZnVsZmlsbGVkIG9yIHJlamVjdGVkIGFjdGlvbi5cclxuICogQWxzbywgdGhlIHJldHVybmVkIHZhbHVlIGNvbnRhaW5zIGEgYGFib3J0KClgIG1ldGhvZFxyXG4gKiB0aGF0IGFsbG93cyB0aGUgYXN5bmNBY3Rpb24gdG8gYmUgY2FuY2VsbGVkIGZyb20gdGhlIG91dHNpZGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIEFzeW5jVGh1bmtBY3Rpb248XHJcbiAgUmV0dXJuZWQsXHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnXHJcbj4gPSAoXHJcbiAgZGlzcGF0Y2g6IEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBnZXRTdGF0ZTogKCkgPT4gR2V0U3RhdGU8VGh1bmtBcGlDb25maWc+LFxyXG4gIGV4dHJhOiBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz5cclxuKSA9PiBQcm9taXNlPFxyXG4gIHwgUGF5bG9hZEFjdGlvbjxSZXR1cm5lZCwgc3RyaW5nLCB7IGFyZzogVGh1bmtBcmc7IHJlcXVlc3RJZDogc3RyaW5nIH0+XHJcbiAgfCBQYXlsb2FkQWN0aW9uPFxyXG4gICAgICB1bmRlZmluZWQgfCBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgIHN0cmluZyxcclxuICAgICAge1xyXG4gICAgICAgIGFyZzogVGh1bmtBcmdcclxuICAgICAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gICAgICAgIGFib3J0ZWQ6IGJvb2xlYW5cclxuICAgICAgICBjb25kaXRpb246IGJvb2xlYW5cclxuICAgICAgfSxcclxuICAgICAgU2VyaWFsaXplZEVycm9yXHJcbiAgICA+XHJcbj4gJiB7XHJcbiAgYWJvcnQocmVhc29uPzogc3RyaW5nKTogdm9pZFxyXG59XHJcblxyXG50eXBlIEFzeW5jVGh1bmtBY3Rpb25DcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnIGV4dGVuZHMgQXN5bmNUaHVua0NvbmZpZ1xyXG4+ID0gSXNBbnk8XHJcbiAgVGh1bmtBcmcsXHJcbiAgLy8gYW55IGhhbmRsaW5nXHJcbiAgKGFyZzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgLy8gdW5rbm93biBoYW5kbGluZ1xyXG4gIHVua25vd24gZXh0ZW5kcyBUaHVua0FyZ1xyXG4gICAgPyAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBub3Qgc3BlY2lmaWVkIG9yIHNwZWNpZmllZCBhcyB2b2lkIG9yIHVuZGVmaW5lZFxyXG4gICAgOiBbVGh1bmtBcmddIGV4dGVuZHMgW3ZvaWRdIHwgW3VuZGVmaW5lZF1cclxuICAgID8gKCkgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBjb250YWlucyB2b2lkXHJcbiAgICA6IFt2b2lkXSBleHRlbmRzIFtUaHVua0FyZ10gLy8gbWFrZSBvcHRpb25hbFxyXG4gICAgPyAoYXJnPzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4gLy8gYXJndW1lbnQgY29udGFpbnMgdW5kZWZpbmVkXHJcbiAgICA6IFt1bmRlZmluZWRdIGV4dGVuZHMgW1RodW5rQXJnXVxyXG4gICAgPyBXaXRoU3RyaWN0TnVsbENoZWNrczxcclxuICAgICAgICAvLyB3aXRoIHN0cmljdCBudWxsQ2hlY2tzOiBtYWtlIG9wdGlvbmFsXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgYXJnPzogVGh1bmtBcmdcclxuICAgICAgICApID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgLy8gd2l0aG91dCBzdHJpY3QgbnVsbCBjaGVja3MgdGhpcyB3aWxsIG1hdGNoIGV2ZXJ5dGhpbmcsIHNvIGRvbid0IG1ha2UgaXQgb3B0aW9uYWxcclxuICAgICAgICAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4gICAgICA+IC8vIGRlZmF1bHQgY2FzZTogbm9ybWFsIGFyZ3VtZW50XHJcbiAgICA6IChhcmc6IFRodW5rQXJnKSA9PiBBc3luY1RodW5rQWN0aW9uPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+XHJcbj5cclxuXHJcbmludGVyZmFjZSBBc3luY1RodW5rT3B0aW9uczxcclxuICBUaHVua0FyZyA9IHZvaWQsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnID0ge31cclxuPiB7XHJcbiAgLyoqXHJcbiAgICogQSBtZXRob2QgdG8gY29udHJvbCB3aGV0aGVyIHRoZSBhc3luY1RodW5rIHNob3VsZCBiZSBleGVjdXRlZC4gSGFzIGFjY2VzcyB0byB0aGVcclxuICAgKiBgYXJnYCwgYGFwaS5nZXRTdGF0ZSgpYCBhbmQgYGFwaS5leHRyYWAgYXJndW1lbnRzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgYGZhbHNlYCBpZiBpdCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gICAqL1xyXG4gIGNvbmRpdGlvbj8oXHJcbiAgICBhcmc6IFRodW5rQXJnLFxyXG4gICAgYXBpOiBQaWNrPEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiwgJ2dldFN0YXRlJyB8ICdleHRyYSc+XHJcbiAgKTogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gIC8qKlxyXG4gICAqIElmIGBjb25kaXRpb25gIHJldHVybnMgYGZhbHNlYCwgdGhlIGFzeW5jVGh1bmsgd2lsbCBiZSBza2lwcGVkLlxyXG4gICAqIFRoaXMgb3B0aW9uIGFsbG93cyB5b3UgdG8gY29udHJvbCB3aGV0aGVyIGEgYHJlamVjdGVkYCBhY3Rpb24gd2l0aCBgbWV0YS5jb25kaXRpb24gPT0gZmFsc2VgXHJcbiAgICogd2lsbCBiZSBkaXNwYXRjaGVkIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBkaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbj86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBBc3luY1RodW5rUGVuZGluZ0FjdGlvbkNyZWF0b3I8XHJcbiAgVGh1bmtBcmdcclxuPiA9IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPFxyXG4gIFtzdHJpbmcsIFRodW5rQXJnXSxcclxuICB1bmRlZmluZWQsXHJcbiAgc3RyaW5nLFxyXG4gIG5ldmVyLFxyXG4gIHtcclxuICAgIGFyZzogVGh1bmtBcmdcclxuICAgIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgfVxyXG4+XHJcblxyXG50eXBlIEFzeW5jVGh1bmtSZWplY3RlZEFjdGlvbkNyZWF0b3I8XHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWdcclxuPiA9IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPFxyXG4gIFtcclxuICAgIEVycm9yIHwgbnVsbCxcclxuICAgIHN0cmluZyxcclxuICAgIFRodW5rQXJnLFxyXG4gICAgKEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPiB8IHVuZGVmaW5lZCk/XHJcbiAgXSxcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gfCB1bmRlZmluZWQsXHJcbiAgc3RyaW5nLFxyXG4gIFNlcmlhbGl6ZWRFcnJvcixcclxuICB7XHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gICAgYWJvcnRlZDogYm9vbGVhblxyXG4gICAgY29uZGl0aW9uOiBib29sZWFuXHJcbiAgfVxyXG4+XHJcblxyXG50eXBlIEFzeW5jVGh1bmtGdWxmaWxsZWRBY3Rpb25DcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnXHJcbj4gPSBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBbUmV0dXJuZWQsIHN0cmluZywgVGh1bmtBcmddLFxyXG4gIFJldHVybmVkLFxyXG4gIHN0cmluZyxcclxuICBuZXZlcixcclxuICB7XHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gIH1cclxuPlxyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBNaWdodCBiZSB1c2VmdWwgZm9yIHdyYXBwaW5nIGBjcmVhdGVBc3luY1RodW5rYCBpbiBjdXN0b20gYWJzdHJhY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnIGV4dGVuZHMgQXN5bmNUaHVua0NvbmZpZ1xyXG4+ID0gQXN5bmNUaHVua0FjdGlvbkNyZWF0b3I8UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4gJiB7XHJcbiAgcGVuZGluZzogQXN5bmNUaHVua1BlbmRpbmdBY3Rpb25DcmVhdG9yPFRodW5rQXJnPlxyXG4gIHJlamVjdGVkOiBBc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25DcmVhdG9yPFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz5cclxuICBmdWxmaWxsZWQ6IEFzeW5jVGh1bmtGdWxmaWxsZWRBY3Rpb25DcmVhdG9yPFJldHVybmVkLCBUaHVua0FyZz5cclxuICB0eXBlUHJlZml4OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB0eXBlUHJlZml4XHJcbiAqIEBwYXJhbSBwYXlsb2FkQ3JlYXRvclxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXN5bmNUaHVuazxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FyZyA9IHZvaWQsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnID0ge31cclxuPihcclxuICB0eXBlUHJlZml4OiBzdHJpbmcsXHJcbiAgcGF5bG9hZENyZWF0b3I6IEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvcjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPixcclxuICBvcHRpb25zPzogQXN5bmNUaHVua09wdGlvbnM8VGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4pOiBBc3luY1RodW5rPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+IHtcclxuICB0eXBlIFJlamVjdGVkVmFsdWUgPSBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz5cclxuXHJcbiAgY29uc3QgZnVsZmlsbGVkID0gY3JlYXRlQWN0aW9uKFxyXG4gICAgdHlwZVByZWZpeCArICcvZnVsZmlsbGVkJyxcclxuICAgIChyZXN1bHQ6IFJldHVybmVkLCByZXF1ZXN0SWQ6IHN0cmluZywgYXJnOiBUaHVua0FyZykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcclxuICAgICAgICBtZXRhOiB7IGFyZywgcmVxdWVzdElkIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgY29uc3QgcGVuZGluZyA9IGNyZWF0ZUFjdGlvbihcclxuICAgIHR5cGVQcmVmaXggKyAnL3BlbmRpbmcnLFxyXG4gICAgKHJlcXVlc3RJZDogc3RyaW5nLCBhcmc6IFRodW5rQXJnKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF5bG9hZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1ldGE6IHsgYXJnLCByZXF1ZXN0SWQgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihcclxuICAgIHR5cGVQcmVmaXggKyAnL3JlamVjdGVkJyxcclxuICAgIChcclxuICAgICAgZXJyb3I6IEVycm9yIHwgbnVsbCxcclxuICAgICAgcmVxdWVzdElkOiBzdHJpbmcsXHJcbiAgICAgIGFyZzogVGh1bmtBcmcsXHJcbiAgICAgIHBheWxvYWQ/OiBSZWplY3RlZFZhbHVlXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgYWJvcnRlZCA9ICEhZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InXHJcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEhZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ0NvbmRpdGlvbkVycm9yJ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgZXJyb3I6IG1pbmlTZXJpYWxpemVFcnJvcihlcnJvciB8fCAnUmVqZWN0ZWQnKSxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICBhcmcsXHJcbiAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICBhYm9ydGVkLFxyXG4gICAgICAgICAgY29uZGl0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBsZXQgZGlzcGxheWVkV2FybmluZyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IEFDID1cclxuICAgIHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gQWJvcnRDb250cm9sbGVyXHJcbiAgICAgIDogY2xhc3MgaW1wbGVtZW50cyBBYm9ydENvbnRyb2xsZXIge1xyXG4gICAgICAgICAgc2lnbmFsOiBBYm9ydFNpZ25hbCA9IHtcclxuICAgICAgICAgICAgYWJvcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25hYm9ydCgpIHt9LFxyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCkge31cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgIGlmICghZGlzcGxheWVkV2FybmluZykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkV2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICAgICAgICAgICAgYFRoaXMgcGxhdGZvcm0gZG9lcyBub3QgaW1wbGVtZW50IEFib3J0Q29udHJvbGxlci4gXHJcbklmIHlvdSB3YW50IHRvIHVzZSB0aGUgQWJvcnRDb250cm9sbGVyIHRvIHJlYWN0IHRvIFxcYGFib3J0XFxgIGV2ZW50cywgcGxlYXNlIGNvbnNpZGVyIGltcG9ydGluZyBhIHBvbHlmaWxsIGxpa2UgJ2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5Jy5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKFxyXG4gICAgYXJnOiBUaHVua0FyZ1xyXG4gICk6IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IG5hbm9pZCgpXHJcblxyXG4gICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQUMoKVxyXG4gICAgICBsZXQgYWJvcnRSZWFzb246IHN0cmluZyB8IHVuZGVmaW5lZFxyXG5cclxuICAgICAgY29uc3QgYWJvcnRlZFByb21pc2UgPSBuZXcgUHJvbWlzZTxuZXZlcj4oKF8sIHJlamVjdCkgPT5cclxuICAgICAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT5cclxuICAgICAgICAgIHJlamVjdCh7IG5hbWU6ICdBYm9ydEVycm9yJywgbWVzc2FnZTogYWJvcnRSZWFzb24gfHwgJ0Fib3J0ZWQnIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcblxyXG4gICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlXHJcbiAgICAgIGZ1bmN0aW9uIGFib3J0KHJlYXNvbj86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgICBhYm9ydFJlYXNvbiA9IHJlYXNvblxyXG4gICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSAoYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGZpbmFsQWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBmdWxmaWxsZWQgfCB0eXBlb2YgcmVqZWN0ZWQ+XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLmNvbmRpdGlvbiAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLmNvbmRpdGlvbihhcmcsIHsgZ2V0U3RhdGUsIGV4dHJhIH0pID09PSBmYWxzZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IHtcclxuICAgICAgICAgICAgICBuYW1lOiAnQ29uZGl0aW9uRXJyb3InLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdBYm9ydGVkIGR1ZSB0byBjb25kaXRpb24gY2FsbGJhY2sgcmV0dXJuaW5nIGZhbHNlLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhcnRlZCA9IHRydWVcclxuICAgICAgICAgIGRpc3BhdGNoKHBlbmRpbmcocmVxdWVzdElkLCBhcmcpKVxyXG4gICAgICAgICAgZmluYWxBY3Rpb24gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgICAgICBhYm9ydGVkUHJvbWlzZSxcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFxyXG4gICAgICAgICAgICAgIHBheWxvYWRDcmVhdG9yKGFyZywge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gsXHJcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0V2l0aFZhbHVlKHZhbHVlOiBSZWplY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3RlZChudWxsLCByZXF1ZXN0SWQsIGFyZywgcmVzdWx0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgZmluYWxBY3Rpb24gPSByZWplY3RlZChlcnIsIHJlcXVlc3RJZCwgYXJnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSBkaXNwYXRjaCB0aGUgcmVzdWx0IGFjdGlvbiBfYWZ0ZXJfIHRoZSBjYXRjaCwgdG8gYXZvaWQgaGF2aW5nIGFueSBlcnJvcnNcclxuICAgICAgICAvLyBoZXJlIGdldCBzd2FsbG93ZWQgYnkgdGhlIHRyeS9jYXRjaCBibG9jayxcclxuICAgICAgICAvLyBwZXIgaHR0cHM6Ly90d2l0dGVyLmNvbS9kYW5fYWJyYW1vdi9zdGF0dXMvNzcwOTE0MjIxNjM4OTQyNzIwXHJcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdHV0b3JpYWxzL2FkdmFuY2VkLXR1dG9yaWFsI2FzeW5jLWVycm9yLWhhbmRsaW5nLWxvZ2ljLWluLXRodW5rc1xyXG5cclxuICAgICAgICBjb25zdCBza2lwRGlzcGF0Y2ggPVxyXG4gICAgICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICAgICAgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiZcclxuICAgICAgICAgIHJlamVjdGVkLm1hdGNoKGZpbmFsQWN0aW9uKSAmJlxyXG4gICAgICAgICAgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb25cclxuXHJcbiAgICAgICAgaWYgKCFza2lwRGlzcGF0Y2gpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKGZpbmFsQWN0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxBY3Rpb25cclxuICAgICAgfSkoKVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IGFib3J0IH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgIGFjdGlvbkNyZWF0b3IgYXMgQXN5bmNUaHVua0FjdGlvbkNyZWF0b3I8XHJcbiAgICAgIFJldHVybmVkLFxyXG4gICAgICBUaHVua0FyZyxcclxuICAgICAgVGh1bmtBcGlDb25maWdcclxuICAgID4sXHJcbiAgICB7XHJcbiAgICAgIHBlbmRpbmcsXHJcbiAgICAgIHJlamVjdGVkLFxyXG4gICAgICBmdWxmaWxsZWQsXHJcbiAgICAgIHR5cGVQcmVmaXhcclxuICAgIH1cclxuICApXHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uVHlwZXNXaXRoT3B0aW9uYWxFcnJvckFjdGlvbiA9XHJcbiAgfCB7IGVycm9yOiBhbnkgfVxyXG4gIHwgeyBlcnJvcj86IG5ldmVyOyBwYXlsb2FkOiBhbnkgfVxyXG50eXBlIFBheWxvYWRGb3JBY3Rpb25UeXBlc0V4Y2x1ZGluZ0Vycm9yQWN0aW9uczxUPiA9IFQgZXh0ZW5kcyB7IGVycm9yOiBhbnkgfVxyXG4gID8gbmV2ZXJcclxuICA6IFQgZXh0ZW5kcyB7IHBheWxvYWQ6IGluZmVyIFAgfVxyXG4gID8gUFxyXG4gIDogbmV2ZXJcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwUmVzdWx0PFIgZXh0ZW5kcyBBY3Rpb25UeXBlc1dpdGhPcHRpb25hbEVycm9yQWN0aW9uPihcclxuICByZXR1cm5lZDogUlxyXG4pOiBQYXlsb2FkRm9yQWN0aW9uVHlwZXNFeGNsdWRpbmdFcnJvckFjdGlvbnM8Uj4ge1xyXG4gIGlmICgnZXJyb3InIGluIHJldHVybmVkKSB7XHJcbiAgICB0aHJvdyByZXR1cm5lZC5lcnJvclxyXG4gIH1cclxuICByZXR1cm4gKHJldHVybmVkIGFzIGFueSkucGF5bG9hZFxyXG59XHJcblxyXG50eXBlIFdpdGhTdHJpY3ROdWxsQ2hlY2tzPFRydWUsIEZhbHNlPiA9IHVuZGVmaW5lZCBleHRlbmRzIGJvb2xlYW5cclxuICA/IEZhbHNlXHJcbiAgOiBUcnVlXHJcbiIsImltcG9ydCB7IGVuYWJsZUVTNSB9IGZyb20gJ2ltbWVyJ1xyXG5leHBvcnQgKiBmcm9tICdyZWR1eCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVOZXh0U3RhdGUsIERyYWZ0LCBjdXJyZW50IH0gZnJvbSAnaW1tZXInXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU2VsZWN0b3IsXHJcbiAgU2VsZWN0b3IsXHJcbiAgT3V0cHV0UGFyYW1ldHJpY1NlbGVjdG9yLFxyXG4gIE91dHB1dFNlbGVjdG9yLFxyXG4gIFBhcmFtZXRyaWNTZWxlY3RvclxyXG59IGZyb20gJ3Jlc2VsZWN0J1xyXG5leHBvcnQgeyBUaHVua0FjdGlvbiwgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuLy8gV2UgZGVsaWJlcmF0ZWx5IGVuYWJsZSBJbW1lcidzIEVTNSBzdXBwb3J0LCBvbiB0aGUgZ3JvdW5kcyB0aGF0XHJcbi8vIHdlIGFzc3VtZSBSVEsgd2lsbCBiZSB1c2VkIHdpdGggUmVhY3QgTmF0aXZlIGFuZCBvdGhlciBQcm94eS1sZXNzXHJcbi8vIGVudmlyb25tZW50cy4gIEluIGFkZGl0aW9uLCB0aGF0J3MgaG93IEltbWVyIDQgYmVoYXZlZCwgYW5kIHNpbmNlXHJcbi8vIHdlIHdhbnQgdG8gc2hpcCB0aGlzIGluIGFuIFJUSyBtaW5vciwgd2Ugc2hvdWxkIGtlZXAgdGhlIHNhbWUgYmVoYXZpb3IuXHJcbmVuYWJsZUVTNSgpXHJcblxyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgY29uZmlndXJlU3RvcmUsXHJcbiAgLy8gdHlwZXNcclxuICBDb25maWd1cmVFbmhhbmNlcnNDYWxsYmFjayxcclxuICBDb25maWd1cmVTdG9yZU9wdGlvbnMsXHJcbiAgRW5oYW5jZWRTdG9yZVxyXG59IGZyb20gJy4vY29uZmlndXJlU3RvcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgZ2V0VHlwZSxcclxuICAvLyB0eXBlc1xyXG4gIFBheWxvYWRBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbkNyZWF0b3IsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhOb25JbmZlcnJhYmxlUGF5bG9hZCxcclxuICBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZCxcclxuICBBY3Rpb25DcmVhdG9yV2l0aFBheWxvYWQsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkLFxyXG4gIEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkLFxyXG4gIFByZXBhcmVBY3Rpb25cclxufSBmcm9tICcuL2NyZWF0ZUFjdGlvbidcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZVJlZHVjZXIsXHJcbiAgLy8gdHlwZXNcclxuICBBY3Rpb25zLFxyXG4gIENhc2VSZWR1Y2VyLFxyXG4gIENhc2VSZWR1Y2Vyc1xyXG59IGZyb20gJy4vY3JlYXRlUmVkdWNlcidcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZVNsaWNlLFxyXG4gIC8vIHR5cGVzXHJcbiAgQ3JlYXRlU2xpY2VPcHRpb25zLFxyXG4gIFNsaWNlLFxyXG4gIENhc2VSZWR1Y2VyQWN0aW9ucyxcclxuICBTbGljZUNhc2VSZWR1Y2VycyxcclxuICBWYWxpZGF0ZVNsaWNlQ2FzZVJlZHVjZXJzLFxyXG4gIENhc2VSZWR1Y2VyV2l0aFByZXBhcmUsXHJcbiAgU2xpY2VBY3Rpb25DcmVhdG9yXHJcbn0gZnJvbSAnLi9jcmVhdGVTbGljZSdcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcclxuICBpc0ltbXV0YWJsZURlZmF1bHQsXHJcbiAgLy8gdHlwZXNcclxuICBJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9pbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsXHJcbiAgZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlLFxyXG4gIGlzUGxhaW4sXHJcbiAgLy8gdHlwZXNcclxuICBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBnZXREZWZhdWx0TWlkZGxld2FyZVxyXG59IGZyb20gJy4vZ2V0RGVmYXVsdE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8gdHlwZXNcclxuICBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlclxyXG59IGZyb20gJy4vbWFwQnVpbGRlcnMnXHJcbmV4cG9ydCB7IE1pZGRsZXdhcmVBcnJheSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gZnJvbSAnLi9lbnRpdGllcy9jcmVhdGVfYWRhcHRlcidcclxuZXhwb3J0IHtcclxuICBEaWN0aW9uYXJ5LFxyXG4gIEVudGl0eVN0YXRlLFxyXG4gIEVudGl0eUFkYXB0ZXIsXHJcbiAgRW50aXR5U2VsZWN0b3JzLFxyXG4gIEVudGl0eVN0YXRlQWRhcHRlcixcclxuICBFbnRpdHlJZCxcclxuICBVcGRhdGUsXHJcbiAgSWRTZWxlY3RvcixcclxuICBDb21wYXJlclxyXG59IGZyb20gJy4vZW50aXRpZXMvbW9kZWxzJ1xyXG5cclxuZXhwb3J0IHtcclxuICBBc3luY1RodW5rLFxyXG4gIEFzeW5jVGh1bmtBY3Rpb24sXHJcbiAgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yUmV0dXJuVmFsdWUsXHJcbiAgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yLFxyXG4gIGNyZWF0ZUFzeW5jVGh1bmssXHJcbiAgdW53cmFwUmVzdWx0LFxyXG4gIFNlcmlhbGl6ZWRFcnJvclxyXG59IGZyb20gJy4vY3JlYXRlQXN5bmNUaHVuaydcclxuXHJcbmV4cG9ydCB7IG5hbm9pZCB9IGZyb20gJy4vbmFub2lkJ1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8xMmlwRjRFVDdUbm5OMjVTTHJHc1pRe2NvbG9yOnJlZDtiYWNrZ3JvdW5kLWNvbG9yOmFxdWF9Ll8zVDJ5cGRrX19qOEFmem9tNHpwSG9Re3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjEwMDtwYWRkaW5nOjQ4cHggMCAwO2JveC1zaGFkb3c6aW5zZXQgLTFweCAwIDAgcmdiYSgwLDAsMCwuMSl9Ll8zVDJ5cGRrX19qOEFmem9tNHpwSG9RIGF7Y29sb3I6Izc4ODI4ZH0uXzNTRDJRM0tWc0ZTSXVIQUVqNk5CUUd7cG9zaXRpb246LXdlYmtpdC1zdGlja3k7cG9zaXRpb246c3RpY2t5fS5fMV9KSDVXdEQ3bHRERU1BeG03bzV2aXtmb250LXNpemU6Ljc1ZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyZWRcIjogXCJfMTJpcEY0RVQ3VG5uTjI1U0xyR3NaUVwiLFxuXHRcInNpZGViYXJcIjogXCJfM1QyeXBka19fajhBZnpvbTR6cEhvUVwiLFxuXHRcInNpZGViYXItc3RpY2t5XCI6IFwiXzNTRDJRM0tWc0ZTSXVIQUVqNk5CUUdcIixcblx0XCJzaWRlYmFyLWhlYWRpbmdcIjogXCJfMV9KSDVXdEQ3bHRERU1BeG03bzV2aVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJjb25zdCBlcnJvcnMgPSB7XG5cdDA6IFwiSWxsZWdhbCBzdGF0ZVwiLFxuXHQxOiBcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsXG5cdDI6IFwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIixcblx0MyhkYXRhOiBhbnkpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICtcblx0XHRcdGRhdGFcblx0XHQpXG5cdH0sXG5cdDQ6IFwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIixcblx0NTogXCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIixcblx0NjogXCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIixcblx0NzogXCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIixcblx0ODogXCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsXG5cdDk6IFwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLFxuXHQxMDogXCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIixcblx0MTE6IFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcblx0MTI6IFwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcblx0MTM6IFwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsXG5cdDE0OiBcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIixcblx0MTUocGF0aDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoXG5cdH0sXG5cdDE2OiAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG5cdDE3KG9wOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiICsgb3Bcblx0fSxcblx0MTgocGx1Z2luOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYFRoZSBwbHVnaW4gZm9yICcke3BsdWdpbn0nIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBcXGBlbmFibGUke3BsdWdpbn0oKVxcYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLmBcblx0fSxcblx0MTk6IFwicGx1Z2luIG5vdCBsb2FkZWRcIixcblx0MjA6IFwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLFxuXHQyMSh0aGluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIGBwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICcke3RoaW5nfSdgXG5cdH0sXG5cdDIyKHRoaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYCdjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gXG5cdH0sXG5cdDIzKHRoaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYCdvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YFxuXHR9XG59IGFzIGNvbnN0XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWUoZXJyb3I6IGtleW9mIHR5cGVvZiBlcnJvcnMsIC4uLmFyZ3M6IGFueVtdKTogbmV2ZXIge1xuXHRpZiAoX19ERVZfXykge1xuXHRcdGNvbnN0IGUgPSBlcnJvcnNbZXJyb3JdXG5cdFx0Y29uc3QgbXNnID0gIWVcblx0XHRcdD8gXCJ1bmtub3duIGVycm9yIG5yOiBcIiArIGVycm9yXG5cdFx0XHQ6IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCJcblx0XHRcdD8gZS5hcHBseShudWxsLCBhcmdzIGFzIGFueSlcblx0XHRcdDogZVxuXHRcdHRocm93IG5ldyBFcnJvcihgW0ltbWVyXSAke21zZ31gKVxuXHR9XG5cdHRocm93IG5ldyBFcnJvcihcblx0XHRgW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogJHtlcnJvcn0ke1xuXHRcdFx0YXJncy5sZW5ndGggPyBcIiBcIiArIGFyZ3Muam9pbihcIixcIikgOiBcIlwiXG5cdFx0fS4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcblx0KVxufVxuIiwiaW1wb3J0IHtcblx0RFJBRlRfU1RBVEUsXG5cdERSQUZUQUJMRSxcblx0aGFzU2V0LFxuXHRPYmplY3Rpc2gsXG5cdERyYWZ0ZWQsXG5cdEFueU9iamVjdCxcblx0QW55TWFwLFxuXHRBbnlTZXQsXG5cdEltbWVyU3RhdGUsXG5cdGhhc01hcCxcblx0QXJjaHR5cGVPYmplY3QsXG5cdEFyY2h0eXBlQXJyYXksXG5cdEFyY2h0eXBlTWFwLFxuXHRBcmNodHlwZVNldCxcblx0ZGllXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIEltbWVyIGRyYWZ0ICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdXG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGNhbiBiZSBkcmFmdGVkIGJ5IEltbWVyICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNEcmFmdGFibGUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIChcblx0XHRpc1BsYWluT2JqZWN0KHZhbHVlKSB8fFxuXHRcdEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG5cdFx0ISF2YWx1ZVtEUkFGVEFCTEVdIHx8XG5cdFx0ISF2YWx1ZS5jb25zdHJ1Y3RvcltEUkFGVEFCTEVdIHx8XG5cdFx0aXNNYXAodmFsdWUpIHx8XG5cdFx0aXNTZXQodmFsdWUpXG5cdClcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlXG5cdGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKVxuXHRyZXR1cm4gIXByb3RvIHx8IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlXG59XG5cbi8qKiBHZXQgdGhlIHVuZGVybHlpbmcgb2JqZWN0IHRoYXQgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGRyYWZ0ICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gb3JpZ2luYWw8VD4odmFsdWU6IFQpOiBUIHwgdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gb3JpZ2luYWwodmFsdWU6IERyYWZ0ZWQ8YW55Pik6IGFueSB7XG5cdGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMywgdmFsdWUpXG5cdHJldHVybiB2YWx1ZVtEUkFGVF9TVEFURV0uYmFzZV9cbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGNvbnN0IG93bktleXM6ICh0YXJnZXQ6IEFueU9iamVjdCkgPT4gUHJvcGVydHlLZXlbXSA9XG5cdHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5c1xuXHRcdD8gUmVmbGVjdC5vd25LZXlzXG5cdFx0OiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdD8gb2JqID0+XG5cdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuY29uY2F0KFxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSBhcyBhbnlcblx0XHRcdFx0KVxuXHRcdDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcblxuZXhwb3J0IGNvbnN0IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPVxuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuXHRmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldDogYW55KSB7XG5cdFx0Ly8gUG9seWZpbGwgbmVlZGVkIGZvciBIZXJtZXMgYW5kIElFLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2hlcm1lcy9pc3N1ZXMvMjc0XG5cdFx0Y29uc3QgcmVzOiBhbnkgPSB7fVxuXHRcdG93bktleXModGFyZ2V0KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRyZXNba2V5XSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpXG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzXG5cdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2g8VCBleHRlbmRzIE9iamVjdGlzaD4oXG5cdG9iajogVCxcblx0aXRlcjogKGtleTogc3RyaW5nIHwgbnVtYmVyLCB2YWx1ZTogYW55LCBzb3VyY2U6IFQpID0+IHZvaWQsXG5cdGVudW1lcmFibGVPbmx5PzogYm9vbGVhblxuKTogdm9pZFxuZXhwb3J0IGZ1bmN0aW9uIGVhY2gob2JqOiBhbnksIGl0ZXI6IGFueSwgZW51bWVyYWJsZU9ubHkgPSBmYWxzZSkge1xuXHRpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gQXJjaHR5cGVPYmplY3QpIHtcblx0XHQ7KGVudW1lcmFibGVPbmx5ID8gT2JqZWN0LmtleXMgOiBvd25LZXlzKShvYmopLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdGlmICghZW51bWVyYWJsZU9ubHkgfHwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIikgaXRlcihrZXksIG9ialtrZXldLCBvYmopXG5cdFx0fSlcblx0fSBlbHNlIHtcblx0XHRvYmouZm9yRWFjaCgoZW50cnk6IGFueSwgaW5kZXg6IGFueSkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpXG5cdH1cbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyY2h0eXBlKHRoaW5nOiBhbnkpOiAwIHwgMSB8IDIgfCAzIHtcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0Y29uc3Qgc3RhdGU6IHVuZGVmaW5lZCB8IEltbWVyU3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV1cblx0cmV0dXJuIHN0YXRlXG5cdFx0PyBzdGF0ZS50eXBlXyA+IDNcblx0XHRcdD8gc3RhdGUudHlwZV8gLSA0IC8vIGNhdXNlIE9iamVjdCBhbmQgQXJyYXkgbWFwIGJhY2sgZnJvbSA0IGFuZCA1XG5cdFx0XHQ6IChzdGF0ZS50eXBlXyBhcyBhbnkpIC8vIG90aGVycyBhcmUgdGhlIHNhbWVcblx0XHQ6IEFycmF5LmlzQXJyYXkodGhpbmcpXG5cdFx0PyBBcmNodHlwZUFycmF5XG5cdFx0OiBpc01hcCh0aGluZylcblx0XHQ/IEFyY2h0eXBlTWFwXG5cdFx0OiBpc1NldCh0aGluZylcblx0XHQ/IEFyY2h0eXBlU2V0XG5cdFx0OiBBcmNodHlwZU9iamVjdFxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaGFzKHRoaW5nOiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhbiB7XG5cdHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IEFyY2h0eXBlTWFwXG5cdFx0PyB0aGluZy5oYXMocHJvcClcblx0XHQ6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGluZywgcHJvcClcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh0aGluZzogQW55TWFwIHwgQW55T2JqZWN0LCBwcm9wOiBQcm9wZXJ0eUtleSk6IGFueSB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gQXJjaHR5cGVNYXAgPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gc2V0KHRoaW5nOiBhbnksIHByb3BPck9sZFZhbHVlOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSkge1xuXHRjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpXG5cdGlmICh0ID09PSBBcmNodHlwZU1hcCkgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSlcblx0ZWxzZSBpZiAodCA9PT0gQXJjaHR5cGVTZXQpIHtcblx0XHR0aGluZy5kZWxldGUocHJvcE9yT2xkVmFsdWUpXG5cdFx0dGhpbmcuYWRkKHZhbHVlKVxuXHR9IGVsc2UgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWVcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKHg6IGFueSwgeTogYW55KTogYm9vbGVhbiB7XG5cdC8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuXHRpZiAoeCA9PT0geSkge1xuXHRcdHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHlcblx0fVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNNYXAodGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgQW55TWFwIHtcblx0cmV0dXJuIGhhc01hcCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBNYXBcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0KHRhcmdldDogYW55KTogdGFyZ2V0IGlzIEFueVNldCB7XG5cdHJldHVybiBoYXNTZXQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU2V0XG59XG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gbGF0ZXN0KHN0YXRlOiBJbW1lclN0YXRlKTogYW55IHtcblx0cmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfXG59XG5cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93Q29weShiYXNlOiBhbnkpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKVxuXHRjb25zdCBkZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSlcblx0ZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFIGFzIGFueV1cblx0bGV0IGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBrZXk6IGFueSA9IGtleXNbaV1cblx0XHRjb25zdCBkZXNjID0gZGVzY3JpcHRvcnNba2V5XVxuXHRcdGlmIChkZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuXHRcdFx0ZGVzYy53cml0YWJsZSA9IHRydWVcblx0XHRcdGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZVxuXHRcdH1cblx0XHQvLyBsaWtlIG9iamVjdC5hc3NpZ24sIHdlIHdpbGwgcmVhZCBhbnkgX293bl8sIGdldC9zZXQgYWNjZXNzb3JzLiBUaGlzIGhlbHBzIGluIGRlYWxpbmdcblx0XHQvLyB3aXRoIGxpYnJhcmllcyB0aGF0IHRyYXAgdmFsdWVzLCBsaWtlIG1vYnggb3IgdnVlXG5cdFx0Ly8gdW5saWtlIG9iamVjdC5hc3NpZ24sIG5vbi1lbnVtZXJhYmxlcyB3aWxsIGJlIGNvcGllZCBhcyB3ZWxsXG5cdFx0aWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KVxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XSA9IHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSwgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG5cdFx0XHRcdGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcblx0XHRcdFx0dmFsdWU6IGJhc2Vba2V5XVxuXHRcdFx0fVxuXHR9XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemUob2JqOiBhbnksIGRlZXA6IGJvb2xlYW4pOiB2b2lkIHtcblx0aWYgKGlzRnJvemVuKG9iaikgfHwgaXNEcmFmdChvYmopIHx8ICFpc0RyYWZ0YWJsZShvYmopKSByZXR1cm5cblx0aWYgKGdldEFyY2h0eXBlKG9iaikgPiAxIC8qIE1hcCBvciBTZXQgKi8pIHtcblx0XHRvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMgYXMgYW55XG5cdH1cblx0T2JqZWN0LmZyZWV6ZShvYmopXG5cdGlmIChkZWVwKSBlYWNoKG9iaiwgKGtleSwgdmFsdWUpID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSksIHRydWUpXG59XG5cbmZ1bmN0aW9uIGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucygpIHtcblx0ZGllKDIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb3plbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuXHRpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHRydWVcblx0Ly8gU2VlICM2MDAsIElFIGRpZXMgb24gbm9uLW9iamVjdHMgaW4gT2JqZWN0LmlzRnJvemVuXG5cdHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKVxufVxuIiwiaW1wb3J0IHtcblx0U2V0U3RhdGUsXG5cdEltbWVyU2NvcGUsXG5cdFByb3h5T2JqZWN0U3RhdGUsXG5cdFByb3h5QXJyYXlTdGF0ZSxcblx0RVM1T2JqZWN0U3RhdGUsXG5cdEVTNUFycmF5U3RhdGUsXG5cdE1hcFN0YXRlLFxuXHREUkFGVF9TVEFURVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgdHlwZSBPYmplY3Rpc2ggPSBBbnlPYmplY3QgfCBBbnlBcnJheSB8IEFueU1hcCB8IEFueVNldFxuZXhwb3J0IHR5cGUgT2JqZWN0aXNoTm9TZXQgPSBBbnlPYmplY3QgfCBBbnlBcnJheSB8IEFueU1hcFxuXG5leHBvcnQgdHlwZSBBbnlPYmplY3QgPSB7W2tleTogc3RyaW5nXTogYW55fVxuZXhwb3J0IHR5cGUgQW55QXJyYXkgPSBBcnJheTxhbnk+XG5leHBvcnQgdHlwZSBBbnlTZXQgPSBTZXQ8YW55PlxuZXhwb3J0IHR5cGUgQW55TWFwID0gTWFwPGFueSwgYW55PlxuXG5leHBvcnQgY29uc3QgQXJjaHR5cGVPYmplY3QgPSAwXG5leHBvcnQgY29uc3QgQXJjaHR5cGVBcnJheSA9IDFcbmV4cG9ydCBjb25zdCBBcmNodHlwZU1hcCA9IDJcbmV4cG9ydCBjb25zdCBBcmNodHlwZVNldCA9IDNcblxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZVByb3h5T2JqZWN0ID0gMFxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZVByb3h5QXJyYXkgPSAxXG5leHBvcnQgY29uc3QgUHJveHlUeXBlRVM1T2JqZWN0ID0gNFxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZUVTNUFycmF5ID0gNVxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZU1hcCA9IDJcbmV4cG9ydCBjb25zdCBQcm94eVR5cGVTZXQgPSAzXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1tZXJCYXNlU3RhdGUge1xuXHRwYXJlbnRfPzogSW1tZXJTdGF0ZVxuXHRzY29wZV86IEltbWVyU2NvcGVcblx0bW9kaWZpZWRfOiBib29sZWFuXG5cdGZpbmFsaXplZF86IGJvb2xlYW5cblx0aXNNYW51YWxfOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIEltbWVyU3RhdGUgPVxuXHR8IFByb3h5T2JqZWN0U3RhdGVcblx0fCBQcm94eUFycmF5U3RhdGVcblx0fCBFUzVPYmplY3RTdGF0ZVxuXHR8IEVTNUFycmF5U3RhdGVcblx0fCBNYXBTdGF0ZVxuXHR8IFNldFN0YXRlXG5cbi8vIFRoZSBfaW50ZXJuYWxfIHR5cGUgdXNlZCBmb3IgZHJhZnRzIChub3QgdG8gYmUgY29uZnVzZWQgd2l0aCBEcmFmdCwgd2hpY2ggaXMgcHVibGljIGZhY2luZylcbmV4cG9ydCB0eXBlIERyYWZ0ZWQ8QmFzZSA9IGFueSwgVCBleHRlbmRzIEltbWVyU3RhdGUgPSBJbW1lclN0YXRlPiA9IHtcblx0W0RSQUZUX1NUQVRFXTogVFxufSAmIEJhc2VcbiIsImltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdFBhdGNoLFxuXHRJbW1lclNjb3BlLFxuXHREcmFmdGVkLFxuXHRBbnlPYmplY3QsXG5cdEltbWVyQmFzZVN0YXRlLFxuXHRBbnlNYXAsXG5cdEFueVNldCxcblx0UHJveHlUeXBlRVM1QXJyYXksXG5cdFByb3h5VHlwZUVTNU9iamVjdCxcblx0UHJveHlUeXBlTWFwLFxuXHRQcm94eVR5cGVTZXQsXG5cdGRpZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vKiogUGx1Z2luIHV0aWxpdGllcyAqL1xuY29uc3QgcGx1Z2luczoge1xuXHRQYXRjaGVzPzoge1xuXHRcdGdlbmVyYXRlUGF0Y2hlc18oXG5cdFx0XHRzdGF0ZTogSW1tZXJTdGF0ZSxcblx0XHRcdGJhc2VQYXRoOiBQYXRjaFBhdGgsXG5cdFx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0XHQpOiB2b2lkXG5cdFx0Z2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKFxuXHRcdFx0cm9vdFN0YXRlOiBJbW1lclN0YXRlLFxuXHRcdFx0cmVwbGFjZW1lbnQ6IGFueSxcblx0XHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHRcdCk6IHZvaWRcblx0XHRhcHBseVBhdGNoZXNfPFQ+KGRyYWZ0OiBULCBwYXRjaGVzOiBQYXRjaFtdKTogVFxuXHR9XG5cdEVTNT86IHtcblx0XHR3aWxsRmluYWxpemVFUzVfKHNjb3BlOiBJbW1lclNjb3BlLCByZXN1bHQ6IGFueSwgaXNSZXBsYWNlZDogYm9vbGVhbik6IHZvaWRcblx0XHRjcmVhdGVFUzVQcm94eV88VD4oXG5cdFx0XHRiYXNlOiBULFxuXHRcdFx0cGFyZW50PzogSW1tZXJTdGF0ZVxuXHRcdCk6IERyYWZ0ZWQ8VCwgRVM1T2JqZWN0U3RhdGUgfCBFUzVBcnJheVN0YXRlPlxuXHRcdGhhc0NoYW5nZXNfKHN0YXRlOiBFUzVBcnJheVN0YXRlIHwgRVM1T2JqZWN0U3RhdGUpOiBib29sZWFuXG5cdH1cblx0TWFwU2V0Pzoge1xuXHRcdHByb3h5TWFwXzxUIGV4dGVuZHMgQW55TWFwPih0YXJnZXQ6IFQsIHBhcmVudD86IEltbWVyU3RhdGUpOiBUXG5cdFx0cHJveHlTZXRfPFQgZXh0ZW5kcyBBbnlTZXQ+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFRcblx0fVxufSA9IHt9XG5cbnR5cGUgUGx1Z2lucyA9IHR5cGVvZiBwbHVnaW5zXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbHVnaW48SyBleHRlbmRzIGtleW9mIFBsdWdpbnM+KFxuXHRwbHVnaW5LZXk6IEtcbik6IEV4Y2x1ZGU8UGx1Z2luc1tLXSwgdW5kZWZpbmVkPiB7XG5cdGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XVxuXHRpZiAoIXBsdWdpbikge1xuXHRcdGRpZShfX0RFVl9fID8gMTggOiAxOSwgcGx1Z2luS2V5KVxuXHR9XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIHBsdWdpblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBsdWdpbjxLIGV4dGVuZHMga2V5b2YgUGx1Z2lucz4oXG5cdHBsdWdpbktleTogSyxcblx0aW1wbGVtZW50YXRpb246IFBsdWdpbnNbS11cbik6IHZvaWQge1xuXHRwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvblxufVxuXG4vKiogRVM1IFBsdWdpbiAqL1xuXG5pbnRlcmZhY2UgRVM1QmFzZVN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHRhc3NpZ25lZF86IHtba2V5OiBzdHJpbmddOiBhbnl9XG5cdHBhcmVudF8/OiBJbW1lclN0YXRlXG5cdHJldm9rZWRfOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRVM1T2JqZWN0U3RhdGUgZXh0ZW5kcyBFUzVCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZUVTNU9iamVjdFxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55T2JqZWN0LCBFUzVPYmplY3RTdGF0ZT5cblx0YmFzZV86IEFueU9iamVjdFxuXHRjb3B5XzogQW55T2JqZWN0IHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVTNUFycmF5U3RhdGUgZXh0ZW5kcyBFUzVCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZUVTNUFycmF5XG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlPYmplY3QsIEVTNUFycmF5U3RhdGU+XG5cdGJhc2VfOiBhbnlcblx0Y29weV86IGFueVxufVxuXG4vKiogTWFwIC8gU2V0IHBsdWdpbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZU1hcFxuXHRjb3B5XzogQW55TWFwIHwgdW5kZWZpbmVkXG5cdGFzc2lnbmVkXzogTWFwPGFueSwgYm9vbGVhbj4gfCB1bmRlZmluZWRcblx0YmFzZV86IEFueU1hcFxuXHRyZXZva2VkXzogYm9vbGVhblxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55TWFwLCBNYXBTdGF0ZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRTdGF0ZSBleHRlbmRzIEltbWVyQmFzZVN0YXRlIHtcblx0dHlwZV86IHR5cGVvZiBQcm94eVR5cGVTZXRcblx0Y29weV86IEFueVNldCB8IHVuZGVmaW5lZFxuXHRiYXNlXzogQW55U2V0XG5cdGRyYWZ0c186IE1hcDxhbnksIERyYWZ0ZWQ+IC8vIG1hcHMgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHRoZSBkcmFmdCB2YWx1ZSBpbiB0aGUgbmV3IHNldFxuXHRyZXZva2VkXzogYm9vbGVhblxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55U2V0LCBTZXRTdGF0ZT5cbn1cblxuLyoqIFBhdGNoZXMgcGx1Z2luICovXG5cbmV4cG9ydCB0eXBlIFBhdGNoUGF0aCA9IChzdHJpbmcgfCBudW1iZXIpW11cbiIsImltcG9ydCB7XG5cdFBhdGNoLFxuXHRQYXRjaExpc3RlbmVyLFxuXHREcmFmdGVkLFxuXHRJbW1lcixcblx0RFJBRlRfU1RBVEUsXG5cdEltbWVyU3RhdGUsXG5cdFByb3h5VHlwZVByb3h5T2JqZWN0LFxuXHRQcm94eVR5cGVQcm94eUFycmF5LFxuXHRnZXRQbHVnaW5cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcbmltcG9ydCB7ZGllfSBmcm9tIFwiLi4vdXRpbHMvZXJyb3JzXCJcblxuLyoqIEVhY2ggc2NvcGUgcmVwcmVzZW50cyBhIGBwcm9kdWNlYCBjYWxsLiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEltbWVyU2NvcGUge1xuXHRwYXRjaGVzXz86IFBhdGNoW11cblx0aW52ZXJzZVBhdGNoZXNfPzogUGF0Y2hbXVxuXHRjYW5BdXRvRnJlZXplXzogYm9vbGVhblxuXHRkcmFmdHNfOiBhbnlbXVxuXHRwYXJlbnRfPzogSW1tZXJTY29wZVxuXHRwYXRjaExpc3RlbmVyXz86IFBhdGNoTGlzdGVuZXJcblx0aW1tZXJfOiBJbW1lclxuXHR1bmZpbmFsaXplZERyYWZ0c186IG51bWJlclxufVxuXG5sZXQgY3VycmVudFNjb3BlOiBJbW1lclNjb3BlIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG5cdGlmIChfX0RFVl9fICYmICFjdXJyZW50U2NvcGUpIGRpZSgwKVxuXHRyZXR1cm4gY3VycmVudFNjb3BlIVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTY29wZShcblx0cGFyZW50XzogSW1tZXJTY29wZSB8IHVuZGVmaW5lZCxcblx0aW1tZXJfOiBJbW1lclxuKTogSW1tZXJTY29wZSB7XG5cdHJldHVybiB7XG5cdFx0ZHJhZnRzXzogW10sXG5cdFx0cGFyZW50Xyxcblx0XHRpbW1lcl8sXG5cdFx0Ly8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuXHRcdC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG5cdFx0Y2FuQXV0b0ZyZWV6ZV86IHRydWUsXG5cdFx0dW5maW5hbGl6ZWREcmFmdHNfOiAwXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKFxuXHRzY29wZTogSW1tZXJTY29wZSxcblx0cGF0Y2hMaXN0ZW5lcj86IFBhdGNoTGlzdGVuZXJcbikge1xuXHRpZiAocGF0Y2hMaXN0ZW5lcikge1xuXHRcdGdldFBsdWdpbihcIlBhdGNoZXNcIikgLy8gYXNzZXJ0IHdlIGhhdmUgdGhlIHBsdWdpblxuXHRcdHNjb3BlLnBhdGNoZXNfID0gW11cblx0XHRzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXVxuXHRcdHNjb3BlLnBhdGNoTGlzdGVuZXJfID0gcGF0Y2hMaXN0ZW5lclxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2VTY29wZShzY29wZTogSW1tZXJTY29wZSkge1xuXHRsZWF2ZVNjb3BlKHNjb3BlKVxuXHRzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpXG5cdC8vIEB0cy1pZ25vcmVcblx0c2NvcGUuZHJhZnRzXyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGU6IEltbWVyU2NvcGUpIHtcblx0aWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcblx0XHRjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXI6IEltbWVyKSB7XG5cdHJldHVybiAoY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcikpXG59XG5cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0OiBEcmFmdGVkKSB7XG5cdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdXG5cdGlmIChcblx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlUHJveHlPYmplY3QgfHxcblx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlUHJveHlBcnJheVxuXHQpXG5cdFx0c3RhdGUucmV2b2tlXygpXG5cdGVsc2Ugc3RhdGUucmV2b2tlZF8gPSB0cnVlXG59XG4iLCJpbXBvcnQge1xuXHRJbW1lclNjb3BlLFxuXHREUkFGVF9TVEFURSxcblx0aXNEcmFmdGFibGUsXG5cdE5PVEhJTkcsXG5cdFBhdGNoUGF0aCxcblx0ZWFjaCxcblx0aGFzLFxuXHRmcmVlemUsXG5cdEltbWVyU3RhdGUsXG5cdGlzRHJhZnQsXG5cdFNldFN0YXRlLFxuXHRzZXQsXG5cdFByb3h5VHlwZUVTNU9iamVjdCxcblx0UHJveHlUeXBlRVM1QXJyYXksXG5cdFByb3h5VHlwZVNldCxcblx0Z2V0UGx1Z2luLFxuXHRkaWUsXG5cdHJldm9rZVNjb3BlLFxuXHRpc0Zyb3plbixcblx0c2hhbGxvd0NvcHlcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0OiBhbnksIHNjb3BlOiBJbW1lclNjb3BlKSB7XG5cdHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoXG5cdGNvbnN0IGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c18hWzBdXG5cdGNvbnN0IGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdFxuXHRpZiAoIXNjb3BlLmltbWVyXy51c2VQcm94aWVzXylcblx0XHRnZXRQbHVnaW4oXCJFUzVcIikud2lsbEZpbmFsaXplRVM1XyhzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKVxuXHRpZiAoaXNSZXBsYWNlZCkge1xuXHRcdGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuXHRcdFx0cmV2b2tlU2NvcGUoc2NvcGUpXG5cdFx0XHRkaWUoNClcblx0XHR9XG5cdFx0aWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcblx0XHRcdC8vIEZpbmFsaXplIHRoZSByZXN1bHQgaW4gY2FzZSBpdCBjb250YWlucyAob3IgaXMpIGEgc3Vic2V0IG9mIHRoZSBkcmFmdC5cblx0XHRcdHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCByZXN1bHQpXG5cdFx0XHRpZiAoIXNjb3BlLnBhcmVudF8pIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpXG5cdFx0fVxuXHRcdGlmIChzY29wZS5wYXRjaGVzXykge1xuXHRcdFx0Z2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG5cdFx0XHRcdGJhc2VEcmFmdFtEUkFGVF9TVEFURV0sXG5cdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0c2NvcGUucGF0Y2hlc18sXG5cdFx0XHRcdHNjb3BlLmludmVyc2VQYXRjaGVzXyFcblx0XHRcdClcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gRmluYWxpemUgdGhlIGJhc2UgZHJhZnQuXG5cdFx0cmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pXG5cdH1cblx0cmV2b2tlU2NvcGUoc2NvcGUpXG5cdGlmIChzY29wZS5wYXRjaGVzXykge1xuXHRcdHNjb3BlLnBhdGNoTGlzdGVuZXJfIShzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfISlcblx0fVxuXHRyZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZTogSW1tZXJTY29wZSwgdmFsdWU6IGFueSwgcGF0aD86IFBhdGNoUGF0aCkge1xuXHQvLyBEb24ndCByZWN1cnNlIGluIHRobyByZWN1cnNpdmUgZGF0YSBzdHJ1Y3R1cmVzXG5cdGlmIChpc0Zyb3plbih2YWx1ZSkpIHJldHVybiB2YWx1ZVxuXG5cdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdXG5cdC8vIEEgcGxhaW4gb2JqZWN0LCBtaWdodCBuZWVkIGZyZWV6aW5nLCBtaWdodCBjb250YWluIGRyYWZ0c1xuXHRpZiAoIXN0YXRlKSB7XG5cdFx0ZWFjaChcblx0XHRcdHZhbHVlLFxuXHRcdFx0KGtleSwgY2hpbGRWYWx1ZSkgPT5cblx0XHRcdFx0ZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKSxcblx0XHRcdHRydWUgLy8gU2VlICM1OTAsIGRvbid0IHJlY3Vyc2UgaW50byBub24tZW51bWFyYWJsZSBvZiBub24gZHJhZnRlZCBvYmplY3RzXG5cdFx0KVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9XG5cdC8vIE5ldmVyIGZpbmFsaXplIGRyYWZ0cyBvd25lZCBieSBhbm90aGVyIHNjb3BlLlxuXHRpZiAoc3RhdGUuc2NvcGVfICE9PSByb290U2NvcGUpIHJldHVybiB2YWx1ZVxuXHQvLyBVbm1vZGlmaWVkIGRyYWZ0LCByZXR1cm4gdGhlIChmcm96ZW4pIG9yaWdpbmFsXG5cdGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG5cdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSlcblx0XHRyZXR1cm4gc3RhdGUuYmFzZV9cblx0fVxuXHQvLyBOb3QgZmluYWxpemVkIHlldCwgbGV0J3MgZG8gdGhhdCBub3dcblx0aWYgKCFzdGF0ZS5maW5hbGl6ZWRfKSB7XG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IHRydWVcblx0XHRzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS1cblx0XHRjb25zdCByZXN1bHQgPVxuXHRcdFx0Ly8gRm9yIEVTNSwgY3JlYXRlIGEgZ29vZCBjb3B5IGZyb20gdGhlIGRyYWZ0IGZpcnN0LCB3aXRoIGFkZGVkIGtleXMgYW5kIHdpdGhvdXQgZGVsZXRlZCBrZXlzLlxuXHRcdFx0c3RhdGUudHlwZV8gPT09IFByb3h5VHlwZUVTNU9iamVjdCB8fCBzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlRVM1QXJyYXlcblx0XHRcdFx0PyAoc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5kcmFmdF8pKVxuXHRcdFx0XHQ6IHN0YXRlLmNvcHlfXG5cdFx0Ly8gRmluYWxpemUgYWxsIGNoaWxkcmVuIG9mIHRoZSBjb3B5XG5cdFx0Ly8gRm9yIHNldHMgd2UgY2xvbmUgYmVmb3JlIGl0ZXJhdGluZywgb3RoZXJ3aXNlIHdlIGNhbiBnZXQgaW4gZW5kbGVzcyBsb29wIGR1ZSB0byBtb2RpZnlpbmcgZHVyaW5nIGl0ZXJhdGlvbiwgc2VlICM2Mjhcblx0XHQvLyBBbHRob3VnaCB0aGUgb3JpZ2luYWwgdGVzdCBjYXNlIGRvZXNuJ3Qgc2VlbSB2YWxpZCBhbnl3YXksIHNvIGlmIHRoaXMgaW4gdGhlIHdheSB3ZSBjYW4gdHVybiB0aGUgbmV4dCBsaW5lXG5cdFx0Ly8gYmFjayB0byBlYWNoKHJlc3VsdCwgLi4uLilcblx0XHRlYWNoKFxuXHRcdFx0c3RhdGUudHlwZV8gPT09IFByb3h5VHlwZVNldCA/IG5ldyBTZXQocmVzdWx0KSA6IHJlc3VsdCxcblx0XHRcdChrZXksIGNoaWxkVmFsdWUpID0+XG5cdFx0XHRcdGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgcmVzdWx0LCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpXG5cdFx0KVxuXHRcdC8vIGV2ZXJ5dGhpbmcgaW5zaWRlIGlzIGZyb3plbiwgd2UgY2FuIGZyZWV6ZSBoZXJlXG5cdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCByZXN1bHQsIGZhbHNlKVxuXHRcdC8vIGZpcnN0IHRpbWUgZmluYWxpemluZywgbGV0J3MgY3JlYXRlIHRob3NlIHBhdGNoZXNcblx0XHRpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcblx0XHRcdGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhcblx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdHBhdGgsXG5cdFx0XHRcdHJvb3RTY29wZS5wYXRjaGVzXyxcblx0XHRcdFx0cm9vdFNjb3BlLmludmVyc2VQYXRjaGVzXyFcblx0XHRcdClcblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0YXRlLmNvcHlfXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkoXG5cdHJvb3RTY29wZTogSW1tZXJTY29wZSxcblx0cGFyZW50U3RhdGU6IHVuZGVmaW5lZCB8IEltbWVyU3RhdGUsXG5cdHRhcmdldE9iamVjdDogYW55LFxuXHRwcm9wOiBzdHJpbmcgfCBudW1iZXIsXG5cdGNoaWxkVmFsdWU6IGFueSxcblx0cm9vdFBhdGg/OiBQYXRjaFBhdGhcbikge1xuXHRpZiAoX19ERVZfXyAmJiBjaGlsZFZhbHVlID09PSB0YXJnZXRPYmplY3QpIGRpZSg1KVxuXHRpZiAoaXNEcmFmdChjaGlsZFZhbHVlKSkge1xuXHRcdGNvbnN0IHBhdGggPVxuXHRcdFx0cm9vdFBhdGggJiZcblx0XHRcdHBhcmVudFN0YXRlICYmXG5cdFx0XHRwYXJlbnRTdGF0ZSEudHlwZV8gIT09IFByb3h5VHlwZVNldCAmJiAvLyBTZXQgb2JqZWN0cyBhcmUgYXRvbWljIHNpbmNlIHRoZXkgaGF2ZSBubyBrZXlzLlxuXHRcdFx0IWhhcygocGFyZW50U3RhdGUgYXMgRXhjbHVkZTxJbW1lclN0YXRlLCBTZXRTdGF0ZT4pLmFzc2lnbmVkXyEsIHByb3ApIC8vIFNraXAgZGVlcCBwYXRjaGVzIGZvciBhc3NpZ25lZCBrZXlzLlxuXHRcdFx0XHQ/IHJvb3RQYXRoIS5jb25jYXQocHJvcClcblx0XHRcdFx0OiB1bmRlZmluZWRcblx0XHQvLyBEcmFmdHMgb3duZWQgYnkgYHNjb3BlYCBhcmUgZmluYWxpemVkIGhlcmUuXG5cdFx0Y29uc3QgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKVxuXHRcdHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcylcblx0XHQvLyBEcmFmdHMgZnJvbSBhbm90aGVyIHNjb3BlIG11c3QgcHJldmVudGVkIHRvIGJlIGZyb3plblxuXHRcdC8vIGlmIHdlIGdvdCBhIGRyYWZ0IGJhY2sgZnJvbSBmaW5hbGl6ZSwgd2UncmUgaW4gYSBuZXN0ZWQgcHJvZHVjZSBhbmQgc2hvdWxkbid0IGZyZWV6ZVxuXHRcdGlmIChpc0RyYWZ0KHJlcykpIHtcblx0XHRcdHJvb3RTY29wZS5jYW5BdXRvRnJlZXplXyA9IGZhbHNlXG5cdFx0fSBlbHNlIHJldHVyblxuXHR9XG5cdC8vIFNlYXJjaCBuZXcgb2JqZWN0cyBmb3IgdW5maW5hbGl6ZWQgZHJhZnRzLiBGcm96ZW4gb2JqZWN0cyBzaG91bGQgbmV2ZXIgY29udGFpbiBkcmFmdHMuXG5cdGlmIChpc0RyYWZ0YWJsZShjaGlsZFZhbHVlKSAmJiAhaXNGcm96ZW4oY2hpbGRWYWx1ZSkpIHtcblx0XHRpZiAoIXJvb3RTY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgcm9vdFNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA8IDEpIHtcblx0XHRcdC8vIG9wdGltaXphdGlvbjogaWYgYW4gb2JqZWN0IGlzIG5vdCBhIGRyYWZ0LCBhbmQgd2UgZG9uJ3QgaGF2ZSB0b1xuXHRcdFx0Ly8gZGVlcGZyZWV6ZSBldmVyeXRoaW5nLCBhbmQgd2UgYXJlIHN1cmUgdGhhdCBubyBkcmFmdHMgYXJlIGxlZnQgaW4gdGhlIHJlbWFpbmluZyBvYmplY3Rcblx0XHRcdC8vIGNhdXNlIHdlIHNhdyBhbmQgZmluYWxpemVkIGFsbCBkcmFmdHMgYWxyZWFkeTsgd2UgY2FuIHN0b3AgdmlzaXRpbmcgdGhlIHJlc3Qgb2YgdGhlIHRyZWUuXG5cdFx0XHQvLyBUaGlzIGJlbmVmaXRzIGVzcGVjaWFsbHkgYWRkaW5nIGxhcmdlIGRhdGEgdHJlZSdzIHdpdGhvdXQgZnVydGhlciBwcm9jZXNzaW5nLlxuXHRcdFx0Ly8gU2VlIGFkZC1kYXRhLmpzIHBlcmYgdGVzdFxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSlcblx0XHQvLyBpbW1lciBkZWVwIGZyZWV6ZXMgcGxhaW4gb2JqZWN0cywgc28gaWYgdGhlcmUgaXMgbm8gcGFyZW50IHN0YXRlLCB3ZSBmcmVlemUgYXMgd2VsbFxuXHRcdGlmICghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKVxuXHRcdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlOiBJbW1lclNjb3BlLCB2YWx1ZTogYW55LCBkZWVwID0gZmFsc2UpIHtcblx0aWYgKHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuXHRcdGZyZWV6ZSh2YWx1ZSwgZGVlcClcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0ZWFjaCxcblx0aGFzLFxuXHRpcyxcblx0aXNEcmFmdGFibGUsXG5cdHNoYWxsb3dDb3B5LFxuXHRsYXRlc3QsXG5cdEltbWVyQmFzZVN0YXRlLFxuXHRJbW1lclN0YXRlLFxuXHREcmFmdGVkLFxuXHRBbnlPYmplY3QsXG5cdEFueUFycmF5LFxuXHRPYmplY3Rpc2gsXG5cdGdldEN1cnJlbnRTY29wZSxcblx0RFJBRlRfU1RBVEUsXG5cdGRpZSxcblx0Y3JlYXRlUHJveHksXG5cdFByb3h5VHlwZVByb3h5T2JqZWN0LFxuXHRQcm94eVR5cGVQcm94eUFycmF5XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmludGVyZmFjZSBQcm94eUJhc2VTdGF0ZSBleHRlbmRzIEltbWVyQmFzZVN0YXRlIHtcblx0YXNzaWduZWRfOiB7XG5cdFx0W3Byb3BlcnR5OiBzdHJpbmddOiBib29sZWFuXG5cdH1cblx0cGFyZW50Xz86IEltbWVyU3RhdGVcblx0cmV2b2tlXygpOiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJveHlPYmplY3RTdGF0ZSBleHRlbmRzIFByb3h5QmFzZVN0YXRlIHtcblx0dHlwZV86IHR5cGVvZiBQcm94eVR5cGVQcm94eU9iamVjdFxuXHRiYXNlXzogYW55XG5cdGNvcHlfOiBhbnlcblx0ZHJhZnRfOiBEcmFmdGVkPEFueU9iamVjdCwgUHJveHlPYmplY3RTdGF0ZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm94eUFycmF5U3RhdGUgZXh0ZW5kcyBQcm94eUJhc2VTdGF0ZSB7XG5cdHR5cGVfOiB0eXBlb2YgUHJveHlUeXBlUHJveHlBcnJheVxuXHRiYXNlXzogQW55QXJyYXlcblx0Y29weV86IEFueUFycmF5IHwgbnVsbFxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55QXJyYXksIFByb3h5QXJyYXlTdGF0ZT5cbn1cblxudHlwZSBQcm94eVN0YXRlID0gUHJveHlPYmplY3RTdGF0ZSB8IFByb3h5QXJyYXlTdGF0ZVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgZHJhZnQgb2YgdGhlIGBiYXNlYCBvYmplY3QuXG4gKlxuICogVGhlIHNlY29uZCBhcmd1bWVudCBpcyB0aGUgcGFyZW50IGRyYWZ0LXN0YXRlICh1c2VkIGludGVybmFsbHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eTxUIGV4dGVuZHMgT2JqZWN0aXNoPihcblx0YmFzZTogVCxcblx0cGFyZW50PzogSW1tZXJTdGF0ZVxuKTogRHJhZnRlZDxULCBQcm94eVN0YXRlPiB7XG5cdGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpXG5cdGNvbnN0IHN0YXRlOiBQcm94eVN0YXRlID0ge1xuXHRcdHR5cGVfOiBpc0FycmF5ID8gUHJveHlUeXBlUHJveHlBcnJheSA6IChQcm94eVR5cGVQcm94eU9iamVjdCBhcyBhbnkpLFxuXHRcdC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cblx0XHRzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSEsXG5cdFx0Ly8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG5cdFx0bW9kaWZpZWRfOiBmYWxzZSxcblx0XHQvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG5cdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0Ly8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cblx0XHRhc3NpZ25lZF86IHt9LFxuXHRcdC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG5cdFx0cGFyZW50XzogcGFyZW50LFxuXHRcdC8vIFRoZSBiYXNlIHN0YXRlLlxuXHRcdGJhc2VfOiBiYXNlLFxuXHRcdC8vIFRoZSBiYXNlIHByb3h5LlxuXHRcdGRyYWZ0XzogbnVsbCBhcyBhbnksIC8vIHNldCBiZWxvd1xuXHRcdC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG5cdFx0Y29weV86IG51bGwsXG5cdFx0Ly8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG5cdFx0cmV2b2tlXzogbnVsbCBhcyBhbnksXG5cdFx0aXNNYW51YWxfOiBmYWxzZVxuXHR9XG5cblx0Ly8gdGhlIHRyYXBzIG11c3QgdGFyZ2V0IHNvbWV0aGluZywgYSBiaXQgbGlrZSB0aGUgJ3JlYWwnIGJhc2UuXG5cdC8vIGJ1dCBhbHNvLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIGZyb20gdGhlIHRhcmdldCB3aGF0IHRoZSByZWxldmFudCBzdGF0ZSBpc1xuXHQvLyAodG8gYXZvaWQgY3JlYXRpbmcgdHJhcHMgcGVyIGluc3RhbmNlIHRvIGNhcHR1cmUgdGhlIHN0YXRlIGluIGNsb3N1cmUsXG5cdC8vIGFuZCB0byBhdm9pZCBjcmVhdGluZyB3ZWlyZCBoaWRkZW4gcHJvcGVydGllcyBhcyB3ZWxsKVxuXHQvLyBTbyB0aGUgdHJpY2sgaXMgdG8gdXNlICdzdGF0ZScgYXMgdGhlIGFjdHVhbCAndGFyZ2V0JyEgKGFuZCBtYWtlIHN1cmUgd2UgaW50ZXJjZXB0IGV2ZXJ5dGhpbmcpXG5cdC8vIE5vdGUgdGhhdCBpbiB0aGUgY2FzZSBvZiBhbiBhcnJheSwgd2UgcHV0IHRoZSBzdGF0ZSBpbiBhbiBhcnJheSB0byBoYXZlIGJldHRlciBSZWZsZWN0IGRlZmF1bHRzIG9vdGJcblx0bGV0IHRhcmdldDogVCA9IHN0YXRlIGFzIGFueVxuXHRsZXQgdHJhcHM6IFByb3h5SGFuZGxlcjxvYmplY3QgfCBBcnJheTxhbnk+PiA9IG9iamVjdFRyYXBzXG5cdGlmIChpc0FycmF5KSB7XG5cdFx0dGFyZ2V0ID0gW3N0YXRlXSBhcyBhbnlcblx0XHR0cmFwcyA9IGFycmF5VHJhcHNcblx0fVxuXG5cdGNvbnN0IHtyZXZva2UsIHByb3h5fSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIHRyYXBzKVxuXHRzdGF0ZS5kcmFmdF8gPSBwcm94eSBhcyBhbnlcblx0c3RhdGUucmV2b2tlXyA9IHJldm9rZVxuXHRyZXR1cm4gcHJveHkgYXMgYW55XG59XG5cbi8qKlxuICogT2JqZWN0IGRyYWZ0c1xuICovXG5leHBvcnQgY29uc3Qgb2JqZWN0VHJhcHM6IFByb3h5SGFuZGxlcjxQcm94eVN0YXRlPiA9IHtcblx0Z2V0KHN0YXRlLCBwcm9wKSB7XG5cdFx0aWYgKHByb3AgPT09IERSQUZUX1NUQVRFKSByZXR1cm4gc3RhdGVcblxuXHRcdGNvbnN0IHNvdXJjZSA9IGxhdGVzdChzdGF0ZSlcblx0XHRpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG5cdFx0XHQvLyBub24tZXhpc3Rpbmcgb3Igbm9uLW93biBwcm9wZXJ0eS4uLlxuXHRcdFx0cmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApXG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdXG5cdFx0aWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0fVxuXHRcdC8vIENoZWNrIGZvciBleGlzdGluZyBkcmFmdCBpbiBtb2RpZmllZCBzdGF0ZS5cblx0XHQvLyBBc3NpZ25lZCB2YWx1ZXMgYXJlIG5ldmVyIGRyYWZ0ZWQuIFRoaXMgY2F0Y2hlcyBhbnkgZHJhZnRzIHdlIGNyZWF0ZWQsIHRvby5cblx0XHRpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG5cdFx0XHRwcmVwYXJlQ29weShzdGF0ZSlcblx0XHRcdHJldHVybiAoc3RhdGUuY29weV8hW3Byb3AgYXMgYW55XSA9IGNyZWF0ZVByb3h5KFxuXHRcdFx0XHRzdGF0ZS5zY29wZV8uaW1tZXJfLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0c3RhdGVcblx0XHRcdCkpXG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9LFxuXHRoYXMoc3RhdGUsIHByb3ApIHtcblx0XHRyZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpXG5cdH0sXG5cdG93bktleXMoc3RhdGUpIHtcblx0XHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpXG5cdH0sXG5cdHNldChzdGF0ZSwgcHJvcDogc3RyaW5nIC8qIHN0cmljdGx5IG5vdCwgYnV0IGhlbHBzIFRTICovLCB2YWx1ZSkge1xuXHRcdGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKGxhdGVzdChzdGF0ZSksIHByb3ApXG5cdFx0aWYgKGRlc2M/LnNldCkge1xuXHRcdFx0Ly8gc3BlY2lhbCBjYXNlOiBpZiB0aGlzIHdyaXRlIGlzIGNhcHR1cmVkIGJ5IGEgc2V0dGVyLCB3ZSBoYXZlXG5cdFx0XHQvLyB0byB0cmlnZ2VyIGl0IHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuXHRcdFx0ZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0c3RhdGUuYXNzaWduZWRfW3Byb3BdID0gdHJ1ZVxuXHRcdGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG5cdFx0XHQvLyB0aGUgbGFzdCBjaGVjayBpcyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkaXN0aW5ndWlzaCBzZXR0aW5nIGEgbm9uLWV4aXN0aWcgdG8gdW5kZWZpbmVkICh3aGljaCBpcyBhIGNoYW5nZSlcblx0XHRcdC8vIGZyb20gc2V0dGluZyBhbiBleGlzdGluZyBwcm9wZXJ0eSB3aXRoIHZhbHVlIHVuZGVmaW5lZCB0byB1bmRlZmluZWQgKHdoaWNoIGlzIG5vdCBhIGNoYW5nZSlcblx0XHRcdGlmIChcblx0XHRcdFx0aXModmFsdWUsIHBlZWsobGF0ZXN0KHN0YXRlKSwgcHJvcCkpICYmXG5cdFx0XHRcdCh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGhhcyhzdGF0ZS5iYXNlXywgcHJvcCkpXG5cdFx0XHQpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRwcmVwYXJlQ29weShzdGF0ZSlcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdH1cblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0c3RhdGUuY29weV8hW3Byb3BdID0gdmFsdWVcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9LFxuXHRkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcDogc3RyaW5nKSB7XG5cdFx0Ly8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblx0XHRpZiAocGVlayhzdGF0ZS5iYXNlXywgcHJvcCkgIT09IHVuZGVmaW5lZCB8fCBwcm9wIGluIHN0YXRlLmJhc2VfKSB7XG5cdFx0XHRzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZVxuXHRcdFx0cHJlcGFyZUNvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaWYgYW4gb3JpZ2luYWxseSBub3QgYXNzaWduZWQgcHJvcGVydHkgd2FzIGRlbGV0ZWRcblx0XHRcdGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF1cblx0XHR9XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGlmIChzdGF0ZS5jb3B5XykgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdXG5cdFx0cmV0dXJuIHRydWVcblx0fSxcblx0Ly8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2Vcblx0Ly8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcblx0XHRjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSlcblx0XHRjb25zdCBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApXG5cdFx0aWYgKCFkZXNjKSByZXR1cm4gZGVzY1xuXHRcdHJldHVybiB7XG5cdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogc3RhdGUudHlwZV8gIT09IFByb3h5VHlwZVByb3h5QXJyYXkgfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcblx0XHRcdGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcblx0XHRcdHZhbHVlOiBvd25lcltwcm9wXVxuXHRcdH1cblx0fSxcblx0ZGVmaW5lUHJvcGVydHkoKSB7XG5cdFx0ZGllKDExKVxuXHR9LFxuXHRnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuXHRcdHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pXG5cdH0sXG5cdHNldFByb3RvdHlwZU9mKCkge1xuXHRcdGRpZSgxMilcblx0fVxufVxuXG4vKipcbiAqIEFycmF5IGRyYWZ0c1xuICovXG5cbmNvbnN0IGFycmF5VHJhcHM6IFByb3h5SGFuZGxlcjxbUHJveHlBcnJheVN0YXRlXT4gPSB7fVxuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbigpIHtcblx0XHRhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF1cblx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXHR9XG59KVxuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wKSB7XG5cdGlmIChfX0RFVl9fICYmIGlzTmFOKHBhcnNlSW50KHByb3AgYXMgYW55KSkpIGRpZSgxMylcblx0cmV0dXJuIG9iamVjdFRyYXBzLmRlbGV0ZVByb3BlcnR5IS5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wKVxufVxuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcblx0aWYgKF9fREVWX18gJiYgcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wIGFzIGFueSkpKSBkaWUoMTQpXG5cdHJldHVybiBvYmplY3RUcmFwcy5zZXQhLmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSlcbn1cblxuLy8gQWNjZXNzIGEgcHJvcGVydHkgd2l0aG91dCBjcmVhdGluZyBhbiBJbW1lciBkcmFmdC5cbmZ1bmN0aW9uIHBlZWsoZHJhZnQ6IERyYWZ0ZWQsIHByb3A6IFByb3BlcnR5S2V5KSB7XG5cdGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdXG5cdGNvbnN0IHNvdXJjZSA9IHN0YXRlID8gbGF0ZXN0KHN0YXRlKSA6IGRyYWZ0XG5cdHJldHVybiBzb3VyY2VbcHJvcF1cbn1cblxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGU6IEltbWVyU3RhdGUsIHNvdXJjZTogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSkge1xuXHRjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApXG5cdHJldHVybiBkZXNjXG5cdFx0PyBgdmFsdWVgIGluIGRlc2Ncblx0XHRcdD8gZGVzYy52YWx1ZVxuXHRcdFx0OiAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG5cdFx0XHQgIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuXHRcdFx0ICBkZXNjLmdldD8uY2FsbChzdGF0ZS5kcmFmdF8pXG5cdFx0OiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhcblx0c291cmNlOiBhbnksXG5cdHByb3A6IFByb3BlcnR5S2V5XG4pOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQge1xuXHQvLyAnaW4nIGNoZWNrcyBwcm90byFcblx0aWYgKCEocHJvcCBpbiBzb3VyY2UpKSByZXR1cm4gdW5kZWZpbmVkXG5cdGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpXG5cdHdoaWxlIChwcm90bykge1xuXHRcdGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKVxuXHRcdGlmIChkZXNjKSByZXR1cm4gZGVzY1xuXHRcdHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKHN0YXRlOiBJbW1lclN0YXRlKSB7XG5cdGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG5cdFx0c3RhdGUubW9kaWZpZWRfID0gdHJ1ZVxuXHRcdGlmIChzdGF0ZS5wYXJlbnRfKSB7XG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZS5wYXJlbnRfKVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGU6IHtiYXNlXzogYW55OyBjb3B5XzogYW55fSkge1xuXHRpZiAoIXN0YXRlLmNvcHlfKSB7XG5cdFx0c3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5iYXNlXylcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0SVByb2R1Y2VXaXRoUGF0Y2hlcyxcblx0SVByb2R1Y2UsXG5cdEltbWVyU3RhdGUsXG5cdERyYWZ0ZWQsXG5cdGlzRHJhZnRhYmxlLFxuXHRwcm9jZXNzUmVzdWx0LFxuXHRQYXRjaCxcblx0T2JqZWN0aXNoLFxuXHREUkFGVF9TVEFURSxcblx0RHJhZnQsXG5cdFBhdGNoTGlzdGVuZXIsXG5cdGlzRHJhZnQsXG5cdGlzTWFwLFxuXHRpc1NldCxcblx0Y3JlYXRlUHJveHlQcm94eSxcblx0Z2V0UGx1Z2luLFxuXHRkaWUsXG5cdGhhc1Byb3hpZXMsXG5cdGlzTWluaWZpZWQsXG5cdGVudGVyU2NvcGUsXG5cdHJldm9rZVNjb3BlLFxuXHRsZWF2ZVNjb3BlLFxuXHR1c2VQYXRjaGVzSW5TY29wZSxcblx0Z2V0Q3VycmVudFNjb3BlLFxuXHROT1RISU5HLFxuXHRmcmVlemUsXG5cdGN1cnJlbnRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuaW50ZXJmYWNlIFByb2R1Y2Vyc0ZucyB7XG5cdHByb2R1Y2U6IElQcm9kdWNlXG5cdHByb2R1Y2VXaXRoUGF0Y2hlczogSVByb2R1Y2VXaXRoUGF0Y2hlc1xufVxuXG5leHBvcnQgY2xhc3MgSW1tZXIgaW1wbGVtZW50cyBQcm9kdWNlcnNGbnMge1xuXHR1c2VQcm94aWVzXzogYm9vbGVhbiA9IGhhc1Byb3hpZXNcblxuXHRhdXRvRnJlZXplXzogYm9vbGVhbiA9IF9fREVWX18gPyB0cnVlIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDogIWlzTWluaWZpZWRcblxuXHRjb25zdHJ1Y3Rvcihjb25maWc/OiB7dXNlUHJveGllcz86IGJvb2xlYW47IGF1dG9GcmVlemU/OiBib29sZWFufSkge1xuXHRcdGlmICh0eXBlb2YgY29uZmlnPy51c2VQcm94aWVzID09PSBcImJvb2xlYW5cIilcblx0XHRcdHRoaXMuc2V0VXNlUHJveGllcyhjb25maWchLnVzZVByb3hpZXMpXG5cdFx0aWYgKHR5cGVvZiBjb25maWc/LmF1dG9GcmVlemUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0dGhpcy5zZXRBdXRvRnJlZXplKGNvbmZpZyEuYXV0b0ZyZWV6ZSlcblx0XHR0aGlzLnByb2R1Y2UgPSB0aGlzLnByb2R1Y2UuYmluZCh0aGlzKVxuXHRcdHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZCh0aGlzKVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuXHQgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcblx0ICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG5cdCAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG5cdCAqXG5cdCAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuXHQgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuXHQgKlxuXHQgKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcblx0ICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuXHQgKlxuXHQgKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXG5cdCAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuXHQgKi9cblx0cHJvZHVjZShiYXNlOiBhbnksIHJlY2lwZT86IGFueSwgcGF0Y2hMaXN0ZW5lcj86IGFueSkge1xuXHRcdC8vIGN1cnJpZWQgaW52b2NhdGlvblxuXHRcdGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Y29uc3QgZGVmYXVsdEJhc2UgPSByZWNpcGVcblx0XHRcdHJlY2lwZSA9IGJhc2VcblxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRcdHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShcblx0XHRcdFx0dGhpczogYW55LFxuXHRcdFx0XHRiYXNlID0gZGVmYXVsdEJhc2UsXG5cdFx0XHRcdC4uLmFyZ3M6IGFueVtdXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYucHJvZHVjZShiYXNlLCAoZHJhZnQ6IERyYWZ0ZWQpID0+IHJlY2lwZS5jYWxsKHRoaXMsIGRyYWZ0LCAuLi5hcmdzKSkgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikgZGllKDYpXG5cdFx0aWYgKHBhdGNoTGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0ZGllKDcpXG5cblx0XHRsZXQgcmVzdWx0XG5cblx0XHQvLyBPbmx5IHBsYWluIG9iamVjdHMsIGFycmF5cywgYW5kIFwiaW1tZXJhYmxlIGNsYXNzZXNcIiBhcmUgZHJhZnRlZC5cblx0XHRpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcblx0XHRcdGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKVxuXHRcdFx0Y29uc3QgcHJveHkgPSBjcmVhdGVQcm94eSh0aGlzLCBiYXNlLCB1bmRlZmluZWQpXG5cdFx0XHRsZXQgaGFzRXJyb3IgPSB0cnVlXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXN1bHQgPSByZWNpcGUocHJveHkpXG5cdFx0XHRcdGhhc0Vycm9yID0gZmFsc2Vcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdC8vIGZpbmFsbHkgaW5zdGVhZCBvZiBjYXRjaCArIHJldGhyb3cgYmV0dGVyIHByZXNlcnZlcyBvcmlnaW5hbCBzdGFja1xuXHRcdFx0XHRpZiAoaGFzRXJyb3IpIHJldm9rZVNjb3BlKHNjb3BlKVxuXHRcdFx0XHRlbHNlIGxlYXZlU2NvcGUoc2NvcGUpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oXG5cdFx0XHRcdFx0cmVzdWx0ID0+IHtcblx0XHRcdFx0XHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRcdHJldm9rZVNjb3BlKHNjb3BlKVxuXHRcdFx0XHRcdFx0dGhyb3cgZXJyb3Jcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdFx0cmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSlcblx0XHR9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRyZXN1bHQgPSByZWNpcGUoYmFzZSlcblx0XHRcdGlmIChyZXN1bHQgPT09IE5PVEhJTkcpIHJldHVybiB1bmRlZmluZWRcblx0XHRcdGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gYmFzZVxuXHRcdFx0aWYgKHRoaXMuYXV0b0ZyZWV6ZV8pIGZyZWV6ZShyZXN1bHQsIHRydWUpXG5cdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0fSBlbHNlIGRpZSgyMSwgYmFzZSlcblx0fVxuXG5cdHByb2R1Y2VXaXRoUGF0Y2hlcyhhcmcxOiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnkpOiBhbnkge1xuXHRcdGlmICh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gKHN0YXRlOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PlxuXHRcdFx0XHR0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0OiBhbnkpID0+IGFyZzEoZHJhZnQsIC4uLmFyZ3MpKVxuXHRcdH1cblxuXHRcdGxldCBwYXRjaGVzOiBQYXRjaFtdLCBpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHRcdGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMucHJvZHVjZShhcmcxLCBhcmcyLCAocDogUGF0Y2hbXSwgaXA6IFBhdGNoW10pID0+IHtcblx0XHRcdHBhdGNoZXMgPSBwXG5cdFx0XHRpbnZlcnNlUGF0Y2hlcyA9IGlwXG5cdFx0fSlcblx0XHRyZXR1cm4gW25leHRTdGF0ZSwgcGF0Y2hlcyEsIGludmVyc2VQYXRjaGVzIV1cblx0fVxuXG5cdGNyZWF0ZURyYWZ0PFQgZXh0ZW5kcyBPYmplY3Rpc2g+KGJhc2U6IFQpOiBEcmFmdDxUPiB7XG5cdFx0aWYgKCFpc0RyYWZ0YWJsZShiYXNlKSkgZGllKDgpXG5cdFx0aWYgKGlzRHJhZnQoYmFzZSkpIGJhc2UgPSBjdXJyZW50KGJhc2UpXG5cdFx0Y29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpXG5cdFx0Y29uc3QgcHJveHkgPSBjcmVhdGVQcm94eSh0aGlzLCBiYXNlLCB1bmRlZmluZWQpXG5cdFx0cHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWVcblx0XHRsZWF2ZVNjb3BlKHNjb3BlKVxuXHRcdHJldHVybiBwcm94eSBhcyBhbnlcblx0fVxuXG5cdGZpbmlzaERyYWZ0PEQgZXh0ZW5kcyBEcmFmdDxhbnk+Pihcblx0XHRkcmFmdDogRCxcblx0XHRwYXRjaExpc3RlbmVyPzogUGF0Y2hMaXN0ZW5lclxuXHQpOiBEIGV4dGVuZHMgRHJhZnQ8aW5mZXIgVD4gPyBUIDogbmV2ZXIge1xuXHRcdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gZHJhZnQgJiYgKGRyYWZ0IGFzIGFueSlbRFJBRlRfU1RBVEVdXG5cdFx0aWYgKF9fREVWX18pIHtcblx0XHRcdGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXykgZGllKDkpXG5cdFx0XHRpZiAoc3RhdGUuZmluYWxpemVkXykgZGllKDEwKVxuXHRcdH1cblx0XHRjb25zdCB7c2NvcGVfOiBzY29wZX0gPSBzdGF0ZVxuXHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdHJldHVybiBwcm9jZXNzUmVzdWx0KHVuZGVmaW5lZCwgc2NvcGUpXG5cdH1cblxuXHQvKipcblx0ICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cblx0ICpcblx0ICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uLlxuXHQgKi9cblx0c2V0QXV0b0ZyZWV6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZVxuXHR9XG5cblx0LyoqXG5cdCAqIFBhc3MgdHJ1ZSB0byB1c2UgdGhlIEVTMjAxNSBgUHJveHlgIGNsYXNzIHdoZW4gY3JlYXRpbmcgZHJhZnRzLCB3aGljaCBpc1xuXHQgKiBhbHdheXMgZmFzdGVyIHRoYW4gdXNpbmcgRVM1IHByb3hpZXMuXG5cdCAqXG5cdCAqIEJ5IGRlZmF1bHQsIGZlYXR1cmUgZGV0ZWN0aW9uIGlzIHVzZWQsIHNvIGNhbGxpbmcgdGhpcyBpcyByYXJlbHkgbmVjZXNzYXJ5LlxuXHQgKi9cblx0c2V0VXNlUHJveGllcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdGlmICh2YWx1ZSAmJiAhaGFzUHJveGllcykge1xuXHRcdFx0ZGllKDIwKVxuXHRcdH1cblx0XHR0aGlzLnVzZVByb3hpZXNfID0gdmFsdWVcblx0fVxuXG5cdGFwcGx5UGF0Y2hlcyhiYXNlOiBPYmplY3Rpc2gsIHBhdGNoZXM6IFBhdGNoW10pIHtcblx0XHQvLyBJZiBhIHBhdGNoIHJlcGxhY2VzIHRoZSBlbnRpcmUgc3RhdGUsIHRha2UgdGhhdCByZXBsYWNlbWVudCBhcyBiYXNlXG5cdFx0Ly8gYmVmb3JlIGFwcGx5aW5nIHBhdGNoZXNcblx0XHRsZXQgaTogbnVtYmVyXG5cdFx0Zm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldXG5cdFx0XHRpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG5cdFx0XHRcdGJhc2UgPSBwYXRjaC52YWx1ZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc19cblx0XHRpZiAoaXNEcmFmdChiYXNlKSkge1xuXHRcdFx0Ly8gTi5COiBuZXZlciBoaXRzIGlmIHNvbWUgcGF0Y2ggYSByZXBsYWNlbWVudCwgcGF0Y2hlcyBhcmUgbmV2ZXIgZHJhZnRzXG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaGVzSW1wbChiYXNlLCBwYXRjaGVzKVxuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIHByb2R1Y2UgYSBjb3B5IG9mIHRoZSBiYXNlIHN0YXRlLlxuXHRcdHJldHVybiB0aGlzLnByb2R1Y2UoYmFzZSwgKGRyYWZ0OiBEcmFmdGVkKSA9PlxuXHRcdFx0YXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcy5zbGljZShpICsgMSkpXG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eTxUIGV4dGVuZHMgT2JqZWN0aXNoPihcblx0aW1tZXI6IEltbWVyLFxuXHR2YWx1ZTogVCxcblx0cGFyZW50PzogSW1tZXJTdGF0ZVxuKTogRHJhZnRlZDxULCBJbW1lclN0YXRlPiB7XG5cdC8vIHByZWNvbmRpdGlvbjogY3JlYXRlUHJveHkgc2hvdWxkIGJlIGd1YXJkZWQgYnkgaXNEcmFmdGFibGUsIHNvIHdlIGtub3cgd2UgY2FuIHNhZmVseSBkcmFmdFxuXHRjb25zdCBkcmFmdDogRHJhZnRlZCA9IGlzTWFwKHZhbHVlKVxuXHRcdD8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KVxuXHRcdDogaXNTZXQodmFsdWUpXG5cdFx0PyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpXG5cdFx0OiBpbW1lci51c2VQcm94aWVzX1xuXHRcdD8gY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KVxuXHRcdDogZ2V0UGx1Z2luKFwiRVM1XCIpLmNyZWF0ZUVTNVByb3h5Xyh2YWx1ZSwgcGFyZW50KVxuXG5cdGNvbnN0IHNjb3BlID0gcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpXG5cdHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdClcblx0cmV0dXJuIGRyYWZ0XG59XG4iLCJpbXBvcnQge1xuXHRkaWUsXG5cdGlzRHJhZnQsXG5cdHNoYWxsb3dDb3B5LFxuXHRlYWNoLFxuXHREUkFGVF9TVEFURSxcblx0Z2V0LFxuXHRzZXQsXG5cdEltbWVyU3RhdGUsXG5cdGlzRHJhZnRhYmxlLFxuXHRBcmNodHlwZU1hcCxcblx0QXJjaHR5cGVTZXQsXG5cdGdldEFyY2h0eXBlLFxuXHRnZXRQbHVnaW5cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuLyoqIFRha2VzIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBkcmFmdCBhbmQgZmluYWxpemVzIGl0IChidXQgd2l0aG91dCBmcmVlemluZykuIFRoaXMgaXMgYSBncmVhdCB1dGlsaXR5IHRvIHByaW50IHRoZSBjdXJyZW50IHN0YXRlIGR1cmluZyBkZWJ1Z2dpbmcgKG5vIFByb3hpZXMgaW4gdGhlIHdheSkuIFRoZSBvdXRwdXQgb2YgY3VycmVudCBjYW4gYWxzbyBiZSBzYWZlbHkgbGVha2VkIG91dHNpZGUgdGhlIHByb2R1Y2VyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnQ8VD4odmFsdWU6IFQpOiBUXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudCh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKCFpc0RyYWZ0KHZhbHVlKSkgZGllKDIyLCB2YWx1ZSlcblx0cmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuXHRjb25zdCBzdGF0ZTogSW1tZXJTdGF0ZSB8IHVuZGVmaW5lZCA9IHZhbHVlW0RSQUZUX1NUQVRFXVxuXHRsZXQgY29weTogYW55XG5cdGNvbnN0IGFyY2hUeXBlID0gZ2V0QXJjaHR5cGUodmFsdWUpXG5cdGlmIChzdGF0ZSkge1xuXHRcdGlmIChcblx0XHRcdCFzdGF0ZS5tb2RpZmllZF8gJiZcblx0XHRcdChzdGF0ZS50eXBlXyA8IDQgfHwgIWdldFBsdWdpbihcIkVTNVwiKS5oYXNDaGFuZ2VzXyhzdGF0ZSBhcyBhbnkpKVxuXHRcdClcblx0XHRcdHJldHVybiBzdGF0ZS5iYXNlX1xuXHRcdC8vIE9wdGltaXphdGlvbjogYXZvaWQgZ2VuZXJhdGluZyBuZXcgZHJhZnRzIGR1cmluZyBjb3B5aW5nXG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IHRydWVcblx0XHRjb3B5ID0gY29weUhlbHBlcih2YWx1ZSwgYXJjaFR5cGUpXG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IGZhbHNlXG5cdH0gZWxzZSB7XG5cdFx0Y29weSA9IGNvcHlIZWxwZXIodmFsdWUsIGFyY2hUeXBlKVxuXHR9XG5cblx0ZWFjaChjb3B5LCAoa2V5LCBjaGlsZFZhbHVlKSA9PiB7XG5cdFx0aWYgKHN0YXRlICYmIGdldChzdGF0ZS5iYXNlXywga2V5KSA9PT0gY2hpbGRWYWx1ZSkgcmV0dXJuIC8vIG5vIG5lZWQgdG8gY29weSBvciBzZWFyY2ggaW4gc29tZXRoaW5nIHRoYXQgZGlkbid0IGNoYW5nZVxuXHRcdHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKVxuXHR9KVxuXHQvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtaWdodCBjb25zaWRlciBmcmVlemluZyBoZXJlLCBiYXNlZCBvbiB0aGUgY3VycmVudCBzZXR0aW5nc1xuXHRyZXR1cm4gYXJjaFR5cGUgPT09IEFyY2h0eXBlU2V0ID8gbmV3IFNldChjb3B5KSA6IGNvcHlcbn1cblxuZnVuY3Rpb24gY29weUhlbHBlcih2YWx1ZTogYW55LCBhcmNoVHlwZTogbnVtYmVyKTogYW55IHtcblx0Ly8gY3JlYXRlcyBhIHNoYWxsb3cgY29weSwgZXZlbiBpZiBpdCBpcyBhIG1hcCBvciBzZXRcblx0c3dpdGNoIChhcmNoVHlwZSkge1xuXHRcdGNhc2UgQXJjaHR5cGVNYXA6XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCh2YWx1ZSlcblx0XHRjYXNlIEFyY2h0eXBlU2V0OlxuXHRcdFx0Ly8gU2V0IHdpbGwgYmUgY2xvbmVkIGFzIGFycmF5IHRlbXBvcmFyaWx5LCBzbyB0aGF0IHdlIGNhbiByZXBsYWNlIGluZGl2aWR1YWwgaXRlbXNcblx0XHRcdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKVxuXHR9XG5cdHJldHVybiBzaGFsbG93Q29weSh2YWx1ZSlcbn1cbiIsImltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdERyYWZ0ZWQsXG5cdEVTNUFycmF5U3RhdGUsXG5cdEVTNU9iamVjdFN0YXRlLFxuXHRlYWNoLFxuXHRoYXMsXG5cdGlzRHJhZnQsXG5cdGxhdGVzdCxcblx0RFJBRlRfU1RBVEUsXG5cdGlzLFxuXHRsb2FkUGx1Z2luLFxuXHRJbW1lclNjb3BlLFxuXHRQcm94eVR5cGVFUzVBcnJheSxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRnZXRDdXJyZW50U2NvcGUsXG5cdGRpZSxcblx0bWFya0NoYW5nZWQsXG5cdG9iamVjdFRyYXBzLFxuXHRvd25LZXlzLFxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbnR5cGUgRVM1U3RhdGUgPSBFUzVBcnJheVN0YXRlIHwgRVM1T2JqZWN0U3RhdGVcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUVTNSgpIHtcblx0ZnVuY3Rpb24gd2lsbEZpbmFsaXplRVM1Xyhcblx0XHRzY29wZTogSW1tZXJTY29wZSxcblx0XHRyZXN1bHQ6IGFueSxcblx0XHRpc1JlcGxhY2VkOiBib29sZWFuXG5cdCkge1xuXHRcdGlmICghaXNSZXBsYWNlZCkge1xuXHRcdFx0aWYgKHNjb3BlLnBhdGNoZXNfKSB7XG5cdFx0XHRcdG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoc2NvcGUuZHJhZnRzXyFbMF0pXG5cdFx0XHR9XG5cdFx0XHQvLyBUaGlzIGlzIGZhc3RlciB3aGVuIHdlIGRvbid0IGNhcmUgYWJvdXQgd2hpY2ggYXR0cmlidXRlcyBjaGFuZ2VkLlxuXHRcdFx0bWFya0NoYW5nZXNTd2VlcChzY29wZS5kcmFmdHNfKVxuXHRcdH1cblx0XHQvLyBXaGVuIGEgY2hpbGQgZHJhZnQgaXMgcmV0dXJuZWQsIGxvb2sgZm9yIGNoYW5nZXMuXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHRpc0RyYWZ0KHJlc3VsdCkgJiZcblx0XHRcdChyZXN1bHRbRFJBRlRfU1RBVEVdIGFzIEVTNVN0YXRlKS5zY29wZV8gPT09IHNjb3BlXG5cdFx0KSB7XG5cdFx0XHRtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRVM1RHJhZnQoaXNBcnJheTogYm9vbGVhbiwgYmFzZTogYW55KSB7XG5cdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdGNvbnN0IGRyYWZ0ID0gbmV3IEFycmF5KGJhc2UubGVuZ3RoKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIFwiXCIgKyBpLCBwcm94eVByb3BlcnR5KGksIHRydWUpKVxuXHRcdFx0cmV0dXJuIGRyYWZ0XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKVxuXHRcdFx0ZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFIGFzIGFueV1cblx0XHRcdGNvbnN0IGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGtleTogYW55ID0ga2V5c1tpXVxuXHRcdFx0XHRkZXNjcmlwdG9yc1trZXldID0gcHJveHlQcm9wZXJ0eShcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0aXNBcnJheSB8fCAhIWRlc2NyaXB0b3JzW2tleV0uZW51bWVyYWJsZVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUVTNVByb3h5XzxUPihcblx0XHRiYXNlOiBULFxuXHRcdHBhcmVudD86IEltbWVyU3RhdGVcblx0KTogRHJhZnRlZDxULCBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGU+IHtcblx0XHRjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKVxuXHRcdGNvbnN0IGRyYWZ0ID0gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSlcblxuXHRcdGNvbnN0IHN0YXRlOiBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGUgPSB7XG5cdFx0XHR0eXBlXzogaXNBcnJheSA/IFByb3h5VHlwZUVTNUFycmF5IDogKFByb3h5VHlwZUVTNU9iamVjdCBhcyBhbnkpLFxuXHRcdFx0c2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG5cdFx0XHRtb2RpZmllZF86IGZhbHNlLFxuXHRcdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0XHRhc3NpZ25lZF86IHt9LFxuXHRcdFx0cGFyZW50XzogcGFyZW50LFxuXHRcdFx0Ly8gYmFzZSBpcyB0aGUgb2JqZWN0IHdlIGFyZSBkcmFmdGluZ1xuXHRcdFx0YmFzZV86IGJhc2UsXG5cdFx0XHQvLyBkcmFmdCBpcyB0aGUgZHJhZnQgb2JqZWN0IGl0c2VsZiwgdGhhdCB0cmFwcyBhbGwgcmVhZHMgYW5kIHJlYWRzIGZyb20gZWl0aGVyIHRoZSBiYXNlIChpZiB1bm1vZGlmaWVkKSBvciBjb3B5IChpZiBtb2RpZmllZClcblx0XHRcdGRyYWZ0XzogZHJhZnQsXG5cdFx0XHRjb3B5XzogbnVsbCxcblx0XHRcdHJldm9rZWRfOiBmYWxzZSxcblx0XHRcdGlzTWFudWFsXzogZmFsc2Vcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIERSQUZUX1NUQVRFLCB7XG5cdFx0XHR2YWx1ZTogc3RhdGUsXG5cdFx0XHQvLyBlbnVtZXJhYmxlOiBmYWxzZSA8LSB0aGUgZGVmYXVsdFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KVxuXHRcdHJldHVybiBkcmFmdFxuXHR9XG5cblx0Ly8gcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHJlY3ljbGVkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBjcmVhdGUgYSBnZXQgYW5kIHNldCBjbG9zdXJlIHBlciBwcm9wZXJ0eSxcblx0Ly8gYnV0IHNoYXJlIHRoZW0gYWxsIGluc3RlYWRcblx0Y29uc3QgZGVzY3JpcHRvcnM6IHtbcHJvcDogc3RyaW5nXTogUHJvcGVydHlEZXNjcmlwdG9yfSA9IHt9XG5cblx0ZnVuY3Rpb24gcHJveHlQcm9wZXJ0eShcblx0XHRwcm9wOiBzdHJpbmcgfCBudW1iZXIsXG5cdFx0ZW51bWVyYWJsZTogYm9vbGVhblxuXHQpOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuXHRcdGxldCBkZXNjID0gZGVzY3JpcHRvcnNbcHJvcF1cblx0XHRpZiAoZGVzYykge1xuXHRcdFx0ZGVzYy5lbnVtZXJhYmxlID0gZW51bWVyYWJsZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXNjcmlwdG9yc1twcm9wXSA9IGRlc2MgPSB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZW51bWVyYWJsZSxcblx0XHRcdFx0Z2V0KHRoaXM6IGFueSkge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdFx0XHRpZiAoX19ERVZfXykgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHJhcHMuZ2V0KHN0YXRlLCBwcm9wKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQodGhpczogYW55LCB2YWx1ZSkge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdFx0XHRpZiAoX19ERVZfXykgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRvYmplY3RUcmFwcy5zZXQoc3RhdGUsIHByb3AsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjXG5cdH1cblxuXHQvLyBUaGlzIGxvb2tzIGV4cGVuc2l2ZSwgYnV0IG9ubHkgcHJveGllcyBhcmUgdmlzaXRlZCwgYW5kIG9ubHkgb2JqZWN0cyB3aXRob3V0IGtub3duIGNoYW5nZXMgYXJlIHNjYW5uZWQuXG5cdGZ1bmN0aW9uIG1hcmtDaGFuZ2VzU3dlZXAoZHJhZnRzOiBEcmFmdGVkPGFueSwgSW1tZXJTdGF0ZT5bXSkge1xuXHRcdC8vIFRoZSBuYXR1cmFsIG9yZGVyIG9mIGRyYWZ0cyBpbiB0aGUgYHNjb3BlYCBhcnJheSBpcyBiYXNlZCBvbiB3aGVuIHRoZXlcblx0XHQvLyB3ZXJlIGFjY2Vzc2VkLiBCeSBwcm9jZXNzaW5nIGRyYWZ0cyBpbiByZXZlcnNlIG5hdHVyYWwgb3JkZXIsIHdlIGhhdmUgYVxuXHRcdC8vIGJldHRlciBjaGFuY2Ugb2YgcHJvY2Vzc2luZyBsZWFmIG5vZGVzIGZpcnN0LiBXaGVuIGEgbGVhZiBub2RlIGlzIGtub3duIHRvXG5cdFx0Ly8gaGF2ZSBjaGFuZ2VkLCB3ZSBjYW4gYXZvaWQgYW55IHRyYXZlcnNhbCBvZiBpdHMgYW5jZXN0b3Igbm9kZXMuXG5cdFx0Zm9yIChsZXQgaSA9IGRyYWZ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IEVTNVN0YXRlID0gZHJhZnRzW2ldW0RSQUZUX1NUQVRFXVxuXHRcdFx0aWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcblx0XHRcdFx0c3dpdGNoIChzdGF0ZS50eXBlXykge1xuXHRcdFx0XHRcdGNhc2UgUHJveHlUeXBlRVM1QXJyYXk6XG5cdFx0XHRcdFx0XHRpZiAoaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSkgbWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdGNhc2UgUHJveHlUeXBlRVM1T2JqZWN0OlxuXHRcdFx0XHRcdFx0aWYgKGhhc09iamVjdENoYW5nZXMoc3RhdGUpKSBtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KG9iamVjdDogYW55KSB7XG5cdFx0aWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIikgcmV0dXJuXG5cdFx0Y29uc3Qgc3RhdGU6IEVTNVN0YXRlIHwgdW5kZWZpbmVkID0gb2JqZWN0W0RSQUZUX1NUQVRFXVxuXHRcdGlmICghc3RhdGUpIHJldHVyblxuXHRcdGNvbnN0IHtiYXNlXywgZHJhZnRfLCBhc3NpZ25lZF8sIHR5cGVffSA9IHN0YXRlXG5cdFx0aWYgKHR5cGVfID09PSBQcm94eVR5cGVFUzVPYmplY3QpIHtcblx0XHRcdC8vIExvb2sgZm9yIGFkZGVkIGtleXMuXG5cdFx0XHQvLyBwcm9iYWJseSB0aGVyZSBpcyBhIGZhc3RlciB3YXkgdG8gZGV0ZWN0IGNoYW5nZXMsIGFzIHN3ZWVwICsgcmVjdXJzZSBzZWVtcyB0byBkbyBzb21lXG5cdFx0XHQvLyB1bm5lY2Vzc2FyeSB3b3JrLlxuXHRcdFx0Ly8gYWxzbzogcHJvYmFibHkgd2UgY2FuIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiB3ZSBkZXRlY3QgaGVyZSwgdG8gc3BlZWQgdXAgdHJlZSBmaW5hbGl6YXRpb24hXG5cdFx0XHRlYWNoKGRyYWZ0Xywga2V5ID0+IHtcblx0XHRcdFx0aWYgKChrZXkgYXMgYW55KSA9PT0gRFJBRlRfU1RBVEUpIHJldHVyblxuXHRcdFx0XHQvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXHRcdFx0XHRpZiAoKGJhc2VfIGFzIGFueSlba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoYmFzZV8sIGtleSkpIHtcblx0XHRcdFx0XHRhc3NpZ25lZF9ba2V5XSA9IHRydWVcblx0XHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0fSBlbHNlIGlmICghYXNzaWduZWRfW2tleV0pIHtcblx0XHRcdFx0XHQvLyBPbmx5IHVudG91Y2hlZCBwcm9wZXJ0aWVzIHRyaWdnZXIgcmVjdXJzaW9uLlxuXHRcdFx0XHRcdG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoZHJhZnRfW2tleV0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQvLyBMb29rIGZvciByZW1vdmVkIGtleXMuXG5cdFx0XHRlYWNoKGJhc2VfLCBrZXkgPT4ge1xuXHRcdFx0XHQvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXHRcdFx0XHRpZiAoZHJhZnRfW2tleV0gPT09IHVuZGVmaW5lZCAmJiAhaGFzKGRyYWZ0Xywga2V5KSkge1xuXHRcdFx0XHRcdGFzc2lnbmVkX1trZXldID0gZmFsc2Vcblx0XHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHR5cGVfID09PSBQcm94eVR5cGVFUzVBcnJheSkge1xuXHRcdFx0aWYgKGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSBhcyBFUzVBcnJheVN0YXRlKSkge1xuXHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0YXNzaWduZWRfLmxlbmd0aCA9IHRydWVcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRyYWZ0Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGRyYWZ0Xy5sZW5ndGg7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykgYXNzaWduZWRfW2ldID0gZmFsc2Vcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBkcmFmdF8ubGVuZ3RoOyBpKyspIGFzc2lnbmVkX1tpXSA9IHRydWVcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWluaW11bSBjb3VudCBpcyBlbm91Z2gsIHRoZSBvdGhlciBwYXJ0cyBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdFx0XHRjb25zdCBtaW4gPSBNYXRoLm1pbihkcmFmdF8ubGVuZ3RoLCBiYXNlXy5sZW5ndGgpXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWluOyBpKyspIHtcblx0XHRcdFx0Ly8gT25seSB1bnRvdWNoZWQgaW5kaWNlcyB0cmlnZ2VyIHJlY3Vyc2lvbi5cblx0XHRcdFx0aWYgKGFzc2lnbmVkX1tpXSA9PT0gdW5kZWZpbmVkKSBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KGRyYWZ0X1tpXSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNPYmplY3RDaGFuZ2VzKHN0YXRlOiBFUzVPYmplY3RTdGF0ZSkge1xuXHRcdGNvbnN0IHtiYXNlXywgZHJhZnRffSA9IHN0YXRlXG5cblx0XHQvLyBTZWFyY2ggZm9yIGFkZGVkIGtleXMgYW5kIGNoYW5nZWQga2V5cy4gU3RhcnQgYXQgdGhlIGJhY2ssIGJlY2F1c2Vcblx0XHQvLyBub24tbnVtZXJpYyBrZXlzIGFyZSBvcmRlcmVkIGJ5IHRpbWUgb2YgZGVmaW5pdGlvbiBvbiB0aGUgb2JqZWN0LlxuXHRcdGNvbnN0IGtleXMgPSBvd25LZXlzKGRyYWZ0Xylcblx0XHRmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qga2V5OiBhbnkgPSBrZXlzW2ldXG5cdFx0XHRpZiAoa2V5ID09PSBEUkFGVF9TVEFURSkgY29udGludWVcblx0XHRcdGNvbnN0IGJhc2VWYWx1ZSA9IGJhc2VfW2tleV1cblx0XHRcdC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG5cdFx0XHRpZiAoYmFzZVZhbHVlID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0Ly8gT25jZSBhIGJhc2Uga2V5IGlzIGRlbGV0ZWQsIGZ1dHVyZSBjaGFuZ2VzIGdvIHVuZGV0ZWN0ZWQsIGJlY2F1c2UgaXRzXG5cdFx0XHQvLyBkZXNjcmlwdG9yIGlzIGVyYXNlZC4gVGhpcyBicmFuY2ggZGV0ZWN0cyBhbnkgbWlzc2VkIGNoYW5nZXMuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBkcmFmdF9ba2V5XVxuXHRcdFx0XHRjb25zdCBzdGF0ZTogSW1tZXJTdGF0ZSA9IHZhbHVlICYmIHZhbHVlW0RSQUZUX1NUQVRFXVxuXHRcdFx0XHRpZiAoc3RhdGUgPyBzdGF0ZS5iYXNlXyAhPT0gYmFzZVZhbHVlIDogIWlzKHZhbHVlLCBiYXNlVmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEF0IHRoaXMgcG9pbnQsIG5vIGtleXMgd2VyZSBhZGRlZCBvciBjaGFuZ2VkLlxuXHRcdC8vIENvbXBhcmUga2V5IGNvdW50IHRvIGRldGVybWluZSBpZiBrZXlzIHdlcmUgZGVsZXRlZC5cblx0XHRjb25zdCBiYXNlSXNEcmFmdCA9ICEhYmFzZV9bRFJBRlRfU1RBVEUgYXMgYW55XVxuXHRcdHJldHVybiBrZXlzLmxlbmd0aCAhPT0gb3duS2V5cyhiYXNlXykubGVuZ3RoICsgKGJhc2VJc0RyYWZ0ID8gMCA6IDEpIC8vICsgMSB0byBjb3JyZWN0IGZvciBEUkFGVF9TVEFURVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFzQXJyYXlDaGFuZ2VzKHN0YXRlOiBFUzVBcnJheVN0YXRlKSB7XG5cdFx0Y29uc3Qge2RyYWZ0X30gPSBzdGF0ZVxuXHRcdGlmIChkcmFmdF8ubGVuZ3RoICE9PSBzdGF0ZS5iYXNlXy5sZW5ndGgpIHJldHVybiB0cnVlXG5cdFx0Ly8gU2VlICMxMTZcblx0XHQvLyBJZiB3ZSBmaXJzdCBzaG9ydGVuIHRoZSBsZW5ndGgsIG91ciBhcnJheSBpbnRlcmNlcHRvcnMgd2lsbCBiZSByZW1vdmVkLlxuXHRcdC8vIElmIGFmdGVyIHRoYXQgbmV3IGl0ZW1zIGFyZSBhZGRlZCwgcmVzdWx0IGluIHRoZSBzYW1lIG9yaWdpbmFsIGxlbmd0aCxcblx0XHQvLyB0aG9zZSBsYXN0IGl0ZW1zIHdpbGwgaGF2ZSBubyBpbnRlcmNlcHRpbmcgcHJvcGVydHkuXG5cdFx0Ly8gU28gaWYgdGhlcmUgaXMgbm8gb3duIGRlc2NyaXB0b3Igb24gdGhlIGxhc3QgcG9zaXRpb24sIHdlIGtub3cgdGhhdCBpdGVtcyB3ZXJlIHJlbW92ZWQgYW5kIGFkZGVkXG5cdFx0Ly8gTi5CLjogc3BsaWNlLCB1bnNoaWZ0LCBldGMgb25seSBzaGlmdCB2YWx1ZXMgYXJvdW5kLCBidXQgbm90IHByb3AgZGVzY3JpcHRvcnMsIHNvIHdlIG9ubHkgaGF2ZSB0byBjaGVja1xuXHRcdC8vIHRoZSBsYXN0IG9uZVxuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuXHRcdFx0ZHJhZnRfLFxuXHRcdFx0ZHJhZnRfLmxlbmd0aCAtIDFcblx0XHQpXG5cdFx0Ly8gZGVzY3JpcHRvciBjYW4gYmUgbnVsbCwgYnV0IG9ubHkgZm9yIG5ld2x5IGNyZWF0ZWQgc3BhcnNlIGFycmF5cywgZWcuIG5ldyBBcnJheSgxMClcblx0XHRpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5nZXQpIHJldHVybiB0cnVlXG5cdFx0Ly8gRm9yIGFsbCBvdGhlciBjYXNlcywgd2UgZG9uJ3QgaGF2ZSB0byBjb21wYXJlLCBhcyB0aGV5IHdvdWxkIGhhdmUgYmVlbiBwaWNrZWQgdXAgYnkgdGhlIGluZGV4IHNldHRlcnNcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIGhhc0NoYW5nZXNfKHN0YXRlOiBFUzVTdGF0ZSkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlRVM1T2JqZWN0XG5cdFx0XHQ/IGhhc09iamVjdENoYW5nZXMoc3RhdGUpXG5cdFx0XHQ6IGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZTogYW55IC8qRVM1U3RhdGUgfCBNYXBTdGF0ZSB8IFNldFN0YXRlKi8pIHtcblx0XHRpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSlcblx0fVxuXG5cdGxvYWRQbHVnaW4oXCJFUzVcIiwge1xuXHRcdGNyZWF0ZUVTNVByb3h5Xyxcblx0XHR3aWxsRmluYWxpemVFUzVfLFxuXHRcdGhhc0NoYW5nZXNfXG5cdH0pXG59XG4iLCJpbXBvcnQge1xuXHRJbW1lclN0YXRlLFxuXHRQYXRjaCxcblx0U2V0U3RhdGUsXG5cdEVTNUFycmF5U3RhdGUsXG5cdFByb3h5QXJyYXlTdGF0ZSxcblx0TWFwU3RhdGUsXG5cdEVTNU9iamVjdFN0YXRlLFxuXHRQcm94eU9iamVjdFN0YXRlLFxuXHRQYXRjaFBhdGgsXG5cdGdldCxcblx0ZWFjaCxcblx0aGFzLFxuXHRnZXRBcmNodHlwZSxcblx0aXNTZXQsXG5cdGlzTWFwLFxuXHRsb2FkUGx1Z2luLFxuXHRQcm94eVR5cGVQcm94eU9iamVjdCxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRQcm94eVR5cGVNYXAsXG5cdFByb3h5VHlwZUVTNUFycmF5LFxuXHRQcm94eVR5cGVQcm94eUFycmF5LFxuXHRQcm94eVR5cGVTZXQsXG5cdEFyY2h0eXBlTWFwLFxuXHRBcmNodHlwZVNldCxcblx0QXJjaHR5cGVBcnJheSxcblx0ZGllLFxuXHRpc0RyYWZ0XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuXHRjb25zdCBSRVBMQUNFID0gXCJyZXBsYWNlXCJcblx0Y29uc3QgQUREID0gXCJhZGRcIlxuXHRjb25zdCBSRU1PVkUgPSBcInJlbW92ZVwiXG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhcblx0XHRzdGF0ZTogSW1tZXJTdGF0ZSxcblx0XHRiYXNlUGF0aDogUGF0Y2hQYXRoLFxuXHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0KTogdm9pZCB7XG5cdFx0c3dpdGNoIChzdGF0ZS50eXBlXykge1xuXHRcdFx0Y2FzZSBQcm94eVR5cGVQcm94eU9iamVjdDpcblx0XHRcdGNhc2UgUHJveHlUeXBlRVM1T2JqZWN0OlxuXHRcdFx0Y2FzZSBQcm94eVR5cGVNYXA6XG5cdFx0XHRcdHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoXG5cdFx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdFx0YmFzZVBhdGgsXG5cdFx0XHRcdFx0cGF0Y2hlcyxcblx0XHRcdFx0XHRpbnZlcnNlUGF0Y2hlc1xuXHRcdFx0XHQpXG5cdFx0XHRjYXNlIFByb3h5VHlwZUVTNUFycmF5OlxuXHRcdFx0Y2FzZSBQcm94eVR5cGVQcm94eUFycmF5OlxuXHRcdFx0XHRyZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcylcblx0XHRcdGNhc2UgUHJveHlUeXBlU2V0OlxuXHRcdFx0XHRyZXR1cm4gZ2VuZXJhdGVTZXRQYXRjaGVzKFxuXHRcdFx0XHRcdChzdGF0ZSBhcyBhbnkpIGFzIFNldFN0YXRlLFxuXHRcdFx0XHRcdGJhc2VQYXRoLFxuXHRcdFx0XHRcdHBhdGNoZXMsXG5cdFx0XHRcdFx0aW52ZXJzZVBhdGNoZXNcblx0XHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKFxuXHRcdHN0YXRlOiBFUzVBcnJheVN0YXRlIHwgUHJveHlBcnJheVN0YXRlLFxuXHRcdGJhc2VQYXRoOiBQYXRjaFBhdGgsXG5cdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHQpIHtcblx0XHRsZXQge2Jhc2VfLCBhc3NpZ25lZF99ID0gc3RhdGVcblx0XHRsZXQgY29weV8gPSBzdGF0ZS5jb3B5XyFcblxuXHRcdC8vIFJlZHVjZSBjb21wbGV4aXR5IGJ5IGVuc3VyaW5nIGBiYXNlYCBpcyBuZXZlciBsb25nZXIuXG5cdFx0aWYgKGNvcHlfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0O1tiYXNlXywgY29weV9dID0gW2NvcHlfLCBiYXNlX11cblx0XHRcdDtbcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXVxuXHRcdH1cblxuXHRcdC8vIFByb2Nlc3MgcmVwbGFjZWQgaW5kaWNlcy5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXNzaWduZWRfW2ldICYmIGNvcHlfW2ldICE9PSBiYXNlX1tpXSkge1xuXHRcdFx0XHRjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSlcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0XHRvcDogUkVQTEFDRSxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuXHRcdFx0XHRcdC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuXHRcdFx0XHRcdHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcblx0XHRcdFx0fSlcblx0XHRcdFx0aW52ZXJzZVBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdFx0b3A6IFJFUExBQ0UsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHR2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoYmFzZV9baV0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJvY2VzcyBhZGRlZCBpbmRpY2VzLlxuXHRcdGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBjb3B5Xy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pXG5cdFx0XHRwYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRvcDogQURELFxuXHRcdFx0XHRwYXRoLFxuXHRcdFx0XHQvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcblx0XHRcdFx0Ly8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRcdHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmIChiYXNlXy5sZW5ndGggPCBjb3B5Xy5sZW5ndGgpIHtcblx0XHRcdGludmVyc2VQYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRvcDogUkVQTEFDRSxcblx0XHRcdFx0cGF0aDogYmFzZVBhdGguY29uY2F0KFtcImxlbmd0aFwiXSksXG5cdFx0XHRcdHZhbHVlOiBiYXNlXy5sZW5ndGhcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0Ly8gVGhpcyBpcyB1c2VkIGZvciBib3RoIE1hcCBvYmplY3RzIGFuZCBub3JtYWwgb2JqZWN0cy5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuXHRcdHN0YXRlOiBNYXBTdGF0ZSB8IEVTNU9iamVjdFN0YXRlIHwgUHJveHlPYmplY3RTdGF0ZSxcblx0XHRiYXNlUGF0aDogUGF0Y2hQYXRoLFxuXHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0KSB7XG5cdFx0Y29uc3Qge2Jhc2VfLCBjb3B5X30gPSBzdGF0ZVxuXHRcdGVhY2goc3RhdGUuYXNzaWduZWRfISwgKGtleSwgYXNzaWduZWRWYWx1ZSkgPT4ge1xuXHRcdFx0Y29uc3Qgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldChjb3B5XyEsIGtleSlcblx0XHRcdGNvbnN0IG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREXG5cdFx0XHRpZiAob3JpZ1ZhbHVlID09PSB2YWx1ZSAmJiBvcCA9PT0gUkVQTEFDRSkgcmV0dXJuXG5cdFx0XHRjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSBhcyBhbnkpXG5cdFx0XHRwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHtvcCwgcGF0aH0gOiB7b3AsIHBhdGgsIHZhbHVlfSlcblx0XHRcdGludmVyc2VQYXRjaGVzLnB1c2goXG5cdFx0XHRcdG9wID09PSBBRERcblx0XHRcdFx0XHQ/IHtvcDogUkVNT1ZFLCBwYXRofVxuXHRcdFx0XHRcdDogb3AgPT09IFJFTU9WRVxuXHRcdFx0XHRcdD8ge29wOiBBREQsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpfVxuXHRcdFx0XHRcdDoge29wOiBSRVBMQUNFLCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKX1cblx0XHRcdClcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVTZXRQYXRjaGVzKFxuXHRcdHN0YXRlOiBTZXRTdGF0ZSxcblx0XHRiYXNlUGF0aDogUGF0Y2hQYXRoLFxuXHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0KSB7XG5cdFx0bGV0IHtiYXNlXywgY29weV99ID0gc3RhdGVcblxuXHRcdGxldCBpID0gMFxuXHRcdGJhc2VfLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdGlmICghY29weV8hLmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pXG5cdFx0XHRcdHBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdFx0b3A6IFJFTU9WRSxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuXHRcdFx0XHRcdG9wOiBBREQsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0aSsrXG5cdFx0fSlcblx0XHRpID0gMFxuXHRcdGNvcHlfIS5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRpZiAoIWJhc2VfLmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pXG5cdFx0XHRcdHBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdFx0b3A6IEFERCxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuXHRcdFx0XHRcdG9wOiBSRU1PVkUsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0aSsrXG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhcblx0XHRyb290U3RhdGU6IEltbWVyU3RhdGUsXG5cdFx0cmVwbGFjZW1lbnQ6IGFueSxcblx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdCk6IHZvaWQge1xuXHRcdHBhdGNoZXMucHVzaCh7XG5cdFx0XHRvcDogUkVQTEFDRSxcblx0XHRcdHBhdGg6IFtdLFxuXHRcdFx0dmFsdWU6IHJlcGxhY2VtZW50XG5cdFx0fSlcblx0XHRpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcblx0XHRcdG9wOiBSRVBMQUNFLFxuXHRcdFx0cGF0aDogW10sXG5cdFx0XHR2YWx1ZTogcm9vdFN0YXRlLmJhc2VfXG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGx5UGF0Y2hlc188VD4oZHJhZnQ6IFQsIHBhdGNoZXM6IFBhdGNoW10pOiBUIHtcblx0XHRwYXRjaGVzLmZvckVhY2gocGF0Y2ggPT4ge1xuXHRcdFx0Y29uc3Qge3BhdGgsIG9wfSA9IHBhdGNoXG5cblx0XHRcdGxldCBiYXNlOiBhbnkgPSBkcmFmdFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHRiYXNlID0gZ2V0KGJhc2UsIHBhdGhbaV0pXG5cdFx0XHRcdGlmICh0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIikgZGllKDE1LCBwYXRoLmpvaW4oXCIvXCIpKVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0eXBlID0gZ2V0QXJjaHR5cGUoYmFzZSlcblx0XHRcdGNvbnN0IHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSkgLy8gdXNlZCB0byBjbG9uZSBwYXRjaCB0byBlbnN1cmUgb3JpZ2luYWwgcGF0Y2ggaXMgbm90IG1vZGlmaWVkLCBzZWUgIzQxMVxuXHRcdFx0Y29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXG5cdFx0XHRzd2l0Y2ggKG9wKSB7XG5cdFx0XHRcdGNhc2UgUkVQTEFDRTpcblx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVNYXA6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKVxuXHRcdFx0XHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVTZXQ6XG5cdFx0XHRcdFx0XHRcdGRpZSgxNilcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdC8vIGlmIHZhbHVlIGlzIGFuIG9iamVjdCwgdGhlbiBpdCdzIGFzc2lnbmVkIGJ5IHJlZmVyZW5jZVxuXHRcdFx0XHRcdFx0XHQvLyBpbiB0aGUgZm9sbG93aW5nIGFkZCBvciByZW1vdmUgb3BzLCB0aGUgdmFsdWUgZmllbGQgaW5zaWRlIHRoZSBwYXRjaCB3aWxsIGFsc28gYmUgbW9kaWZ5ZWRcblx0XHRcdFx0XHRcdFx0Ly8gc28gd2UgdXNlIHZhbHVlIGZyb20gdGhlIGNsb25lZCBwYXRjaFxuXHRcdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoYmFzZVtrZXldID0gdmFsdWUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIEFERDpcblx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVBcnJheTpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2Uuc3BsaWNlKGtleSBhcyBhbnksIDAsIHZhbHVlKVxuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZU1hcDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpXG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlU2V0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5hZGQodmFsdWUpXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKGJhc2Vba2V5XSA9IHZhbHVlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBSRU1PVkU6XG5cdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlQXJyYXk6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLnNwbGljZShrZXkgYXMgYW55LCAxKVxuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZU1hcDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2UuZGVsZXRlKGtleSlcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVTZXQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLmRlbGV0ZShwYXRjaC52YWx1ZSlcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkZWxldGUgYmFzZVtrZXldXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGRpZSgxNywgb3ApXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBkcmFmdFxuXHR9XG5cblx0Ly8gb3B0aW1pemU6IHRoaXMgaXMgcXVpdGUgYSBwZXJmb3JtYW5jZSBoaXQsIGNhbiB3ZSBkZXRlY3QgaW50ZWxsaWdlbnRseSB3aGVuIGl0IGlzIG5lZWRlZD9cblx0Ly8gRS5nLiBhdXRvLWRyYWZ0IHdoZW4gbmV3IG9iamVjdHMgZnJvbSBvdXRzaWRlIGFyZSBhc3NpZ25lZCBhbmQgbW9kaWZpZWQ/XG5cdC8vIChTZWUgZmFpbGluZyB0ZXN0IHdoZW4gZGVlcENsb25lIGp1c3QgcmV0dXJucyBvYmopXG5cdGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWU8VD4ob2JqOiBUKTogVFxuXHRmdW5jdGlvbiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iajogYW55KSB7XG5cdFx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIG9ialxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpXG5cdFx0aWYgKGlzTWFwKG9iaikpXG5cdFx0XHRyZXR1cm4gbmV3IE1hcChcblx0XHRcdFx0QXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuXHRcdFx0KVxuXHRcdGlmIChpc1NldChvYmopKSByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG9iaikubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpKVxuXHRcdGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqKSBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqW2tleV0pXG5cdFx0cmV0dXJuIGNsb25lZFxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQ8VD4ob2JqOiBUKTogVCB7XG5cdFx0aWYgKGlzRHJhZnQob2JqKSkge1xuXHRcdFx0cmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKVxuXHRcdH0gZWxzZSByZXR1cm4gb2JqXG5cdH1cblxuXHRsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG5cdFx0YXBwbHlQYXRjaGVzXyxcblx0XHRnZW5lcmF0ZVBhdGNoZXNfLFxuXHRcdGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuXHR9KVxufVxuIiwiLy8gdHlwZXMgb25seSFcbmltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdEFueU1hcCxcblx0QW55U2V0LFxuXHRNYXBTdGF0ZSxcblx0U2V0U3RhdGUsXG5cdERSQUZUX1NUQVRFLFxuXHRnZXRDdXJyZW50U2NvcGUsXG5cdGxhdGVzdCxcblx0aXRlcmF0b3JTeW1ib2wsXG5cdGlzRHJhZnRhYmxlLFxuXHRjcmVhdGVQcm94eSxcblx0bG9hZFBsdWdpbixcblx0bWFya0NoYW5nZWQsXG5cdFByb3h5VHlwZU1hcCxcblx0UHJveHlUeXBlU2V0LFxuXHRkaWUsXG5cdGVhY2hcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZU1hcFNldCgpIHtcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0dmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkOiBhbnksIGI6IGFueSk6IGFueSB7XG5cdFx0ZXh0ZW5kU3RhdGljcyA9XG5cdFx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcblx0XHRcdCh7X19wcm90b19fOiBbXX0gaW5zdGFuY2VvZiBBcnJheSAmJlxuXHRcdFx0XHRmdW5jdGlvbihkLCBiKSB7XG5cdFx0XHRcdFx0ZC5fX3Byb3RvX18gPSBiXG5cdFx0XHRcdH0pIHx8XG5cdFx0XHRmdW5jdGlvbihkLCBiKSB7XG5cdFx0XHRcdGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdXG5cdFx0XHR9XG5cdFx0cmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYilcblx0fVxuXG5cdC8vIFVnbHkgaGFjayB0byByZXNvbHZlICM1MDIgYW5kIGluaGVyaXQgYnVpbHQgaW4gTWFwIC8gU2V0XG5cdGZ1bmN0aW9uIF9fZXh0ZW5kcyhkOiBhbnksIGI6IGFueSk6IGFueSB7XG5cdFx0ZXh0ZW5kU3RhdGljcyhkLCBiKVxuXHRcdGZ1bmN0aW9uIF9fKHRoaXM6IGFueSk6IGFueSB7XG5cdFx0XHR0aGlzLmNvbnN0cnVjdG9yID0gZFxuXHRcdH1cblx0XHRkLnByb3RvdHlwZSA9XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQoKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlKSwgbmV3IF9fKCkpXG5cdH1cblxuXHRjb25zdCBEcmFmdE1hcCA9IChmdW5jdGlvbihfc3VwZXIpIHtcblx0XHRfX2V4dGVuZHMoRHJhZnRNYXAsIF9zdXBlcilcblx0XHQvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblx0XHRmdW5jdGlvbiBEcmFmdE1hcCh0aGlzOiBhbnksIHRhcmdldDogQW55TWFwLCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogYW55IHtcblx0XHRcdHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuXHRcdFx0XHR0eXBlXzogUHJveHlUeXBlTWFwLFxuXHRcdFx0XHRwYXJlbnRfOiBwYXJlbnQsXG5cdFx0XHRcdHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpISxcblx0XHRcdFx0bW9kaWZpZWRfOiBmYWxzZSxcblx0XHRcdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0XHRcdGNvcHlfOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFzc2lnbmVkXzogdW5kZWZpbmVkLFxuXHRcdFx0XHRiYXNlXzogdGFyZ2V0LFxuXHRcdFx0XHRkcmFmdF86IHRoaXMgYXMgYW55LFxuXHRcdFx0XHRpc01hbnVhbF86IGZhbHNlLFxuXHRcdFx0XHRyZXZva2VkXzogZmFsc2Vcblx0XHRcdH0gYXMgTWFwU3RhdGVcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBEcmFmdE1hcC5wcm90b3R5cGVcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInNpemVcIiwge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZVxuXHRcdFx0fVxuXHRcdFx0Ly8gZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHQvLyBjb25maWd1cmFibGU6IHRydWVcblx0XHR9KVxuXG5cdFx0cC5oYXMgPSBmdW5jdGlvbihrZXk6IGFueSk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSlcblx0XHR9XG5cblx0XHRwLnNldCA9IGZ1bmN0aW9uKGtleTogYW55LCB2YWx1ZTogYW55KSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0aWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG5cdFx0XHRcdHByZXBhcmVNYXBDb3B5KHN0YXRlKVxuXHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0c3RhdGUuYXNzaWduZWRfIS5zZXQoa2V5LCB0cnVlKVxuXHRcdFx0XHRzdGF0ZS5jb3B5XyEuc2V0KGtleSwgdmFsdWUpXG5cdFx0XHRcdHN0YXRlLmFzc2lnbmVkXyEuc2V0KGtleSwgdHJ1ZSlcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0cC5kZWxldGUgPSBmdW5jdGlvbihrZXk6IGFueSk6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKCF0aGlzLmhhcyhrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdHN0YXRlLmFzc2lnbmVkXyEuc2V0KGtleSwgZmFsc2UpXG5cdFx0XHRzdGF0ZS5jb3B5XyEuZGVsZXRlKGtleSlcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXG5cdFx0cC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IE1hcFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdHByZXBhcmVNYXBDb3B5KHN0YXRlKVxuXHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKClcblx0XHRcdGVhY2goc3RhdGUuYmFzZV8sIGtleSA9PiB7XG5cdFx0XHRcdHN0YXRlLmFzc2lnbmVkXyEuc2V0KGtleSwgZmFsc2UpXG5cdFx0XHR9KVxuXHRcdFx0cmV0dXJuIHN0YXRlLmNvcHlfIS5jbGVhcigpXG5cdFx0fVxuXG5cdFx0cC5mb3JFYWNoID0gZnVuY3Rpb24oXG5cdFx0XHRjYjogKHZhbHVlOiBhbnksIGtleTogYW55LCBzZWxmOiBhbnkpID0+IHZvaWQsXG5cdFx0XHR0aGlzQXJnPzogYW55XG5cdFx0KSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0bGF0ZXN0KHN0YXRlKS5mb3JFYWNoKChfdmFsdWU6IGFueSwga2V5OiBhbnksIF9tYXA6IGFueSkgPT4ge1xuXHRcdFx0XHRjYi5jYWxsKHRoaXNBcmcsIHRoaXMuZ2V0KGtleSksIGtleSwgdGhpcylcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cC5nZXQgPSBmdW5jdGlvbihrZXk6IGFueSk6IGFueSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0Y29uc3QgdmFsdWUgPSBsYXRlc3Qoc3RhdGUpLmdldChrZXkpXG5cdFx0XHRpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgLy8gZWl0aGVyIGFscmVhZHkgZHJhZnRlZCBvciByZWFzc2lnbmVkXG5cdFx0XHR9XG5cdFx0XHQvLyBkZXNwaXRlIHdoYXQgaXQgbG9va3MsIHRoaXMgY3JlYXRlcyBhIGRyYWZ0IG9ubHkgb25jZSwgc2VlIGFib3ZlIGNvbmRpdGlvblxuXHRcdFx0Y29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eShzdGF0ZS5zY29wZV8uaW1tZXJfLCB2YWx1ZSwgc3RhdGUpXG5cdFx0XHRwcmVwYXJlTWFwQ29weShzdGF0ZSlcblx0XHRcdHN0YXRlLmNvcHlfIS5zZXQoa2V5LCBkcmFmdClcblx0XHRcdHJldHVybiBkcmFmdFxuXHRcdH1cblxuXHRcdHAua2V5cyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG5cdFx0XHRyZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5rZXlzKClcblx0XHR9XG5cblx0XHRwLnZhbHVlcyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG5cdFx0XHRjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRbaXRlcmF0b3JTeW1ib2xdOiAoKSA9PiB0aGlzLnZhbHVlcygpLFxuXHRcdFx0XHRuZXh0OiAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKVxuXHRcdFx0XHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0XHRcdFx0aWYgKHIuZG9uZSkgcmV0dXJuIHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGRvbmU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gYXMgYW55XG5cdFx0fVxuXG5cdFx0cC5lbnRyaWVzID0gZnVuY3Rpb24oKTogSXRlcmFibGVJdGVyYXRvcjxbYW55LCBhbnldPiB7XG5cdFx0XHRjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRbaXRlcmF0b3JTeW1ib2xdOiAoKSA9PiB0aGlzLmVudHJpZXMoKSxcblx0XHRcdFx0bmV4dDogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KClcblx0XHRcdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdFx0XHRcdGlmIChyLmRvbmUpIHJldHVybiByXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkb25lOiBmYWxzZSxcblx0XHRcdFx0XHRcdHZhbHVlOiBbci52YWx1ZSwgdmFsdWVdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGFzIGFueVxuXHRcdH1cblxuXHRcdHBbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lbnRyaWVzKClcblx0XHR9XG5cblx0XHRyZXR1cm4gRHJhZnRNYXBcblx0fSkoTWFwKVxuXG5cdGZ1bmN0aW9uIHByb3h5TWFwXzxUIGV4dGVuZHMgQW55TWFwPih0YXJnZXQ6IFQsIHBhcmVudD86IEltbWVyU3RhdGUpOiBUIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIG5ldyBEcmFmdE1hcCh0YXJnZXQsIHBhcmVudClcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVNYXBDb3B5KHN0YXRlOiBNYXBTdGF0ZSkge1xuXHRcdGlmICghc3RhdGUuY29weV8pIHtcblx0XHRcdHN0YXRlLmFzc2lnbmVkXyA9IG5ldyBNYXAoKVxuXHRcdFx0c3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IERyYWZ0U2V0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXHRcdF9fZXh0ZW5kcyhEcmFmdFNldCwgX3N1cGVyKVxuXHRcdC8vIENyZWF0ZSBjbGFzcyBtYW51YWxseSwgY2F1c2UgIzUwMlxuXHRcdGZ1bmN0aW9uIERyYWZ0U2V0KHRoaXM6IGFueSwgdGFyZ2V0OiBBbnlTZXQsIHBhcmVudD86IEltbWVyU3RhdGUpIHtcblx0XHRcdHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuXHRcdFx0XHR0eXBlXzogUHJveHlUeXBlU2V0LFxuXHRcdFx0XHRwYXJlbnRfOiBwYXJlbnQsXG5cdFx0XHRcdHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpISxcblx0XHRcdFx0bW9kaWZpZWRfOiBmYWxzZSxcblx0XHRcdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0XHRcdGNvcHlfOiB1bmRlZmluZWQsXG5cdFx0XHRcdGJhc2VfOiB0YXJnZXQsXG5cdFx0XHRcdGRyYWZ0XzogdGhpcyxcblx0XHRcdFx0ZHJhZnRzXzogbmV3IE1hcCgpLFxuXHRcdFx0XHRyZXZva2VkXzogZmFsc2UsXG5cdFx0XHRcdGlzTWFudWFsXzogZmFsc2Vcblx0XHRcdH0gYXMgU2V0U3RhdGVcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBEcmFmdFNldC5wcm90b3R5cGVcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInNpemVcIiwge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZVxuXHRcdFx0fVxuXHRcdFx0Ly8gZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0cC5oYXMgPSBmdW5jdGlvbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0Ly8gYml0IG9mIHRyaWNrZXJ5IGhlcmUsIHRvIGJlIGFibGUgdG8gcmVjb2duaXplIGJvdGggdGhlIHZhbHVlLCBhbmQgdGhlIGRyYWZ0IG9mIGl0cyB2YWx1ZVxuXHRcdFx0aWYgKCFzdGF0ZS5jb3B5Xykge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUuYmFzZV8uaGFzKHZhbHVlKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpIHJldHVybiB0cnVlXG5cdFx0XHRpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXG5cdFx0cC5hZGQgPSBmdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcblx0XHRcdGNvbnN0IHN0YXRlOiBTZXRTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRwcmVwYXJlU2V0Q29weShzdGF0ZSlcblx0XHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRcdHN0YXRlLmNvcHlfIS5hZGQodmFsdWUpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblxuXHRcdHAuZGVsZXRlID0gZnVuY3Rpb24odmFsdWU6IGFueSk6IGFueSB7XG5cdFx0XHRpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdHByZXBhcmVTZXRDb3B5KHN0YXRlKVxuXHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdGF0ZS5jb3B5XyEuZGVsZXRlKHZhbHVlKSB8fFxuXHRcdFx0XHQoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpXG5cdFx0XHRcdFx0PyBzdGF0ZS5jb3B5XyEuZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSlcblx0XHRcdFx0XHQ6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZhbHNlKVxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdHAuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0IHN0YXRlOiBTZXRTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRwcmVwYXJlU2V0Q29weShzdGF0ZSlcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0cmV0dXJuIHN0YXRlLmNvcHlfIS5jbGVhcigpXG5cdFx0fVxuXG5cdFx0cC52YWx1ZXMgPSBmdW5jdGlvbigpOiBJdGVyYWJsZUl0ZXJhdG9yPGFueT4ge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdHByZXBhcmVTZXRDb3B5KHN0YXRlKVxuXHRcdFx0cmV0dXJuIHN0YXRlLmNvcHlfIS52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHAuZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKTogSXRlcmFibGVJdGVyYXRvcjxbYW55LCBhbnldPiB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZVNldENvcHkoc3RhdGUpXG5cdFx0XHRyZXR1cm4gc3RhdGUuY29weV8hLmVudHJpZXMoKVxuXHRcdH1cblxuXHRcdHAua2V5cyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHBbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHAuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2I6IGFueSwgdGhpc0FyZz86IGFueSkge1xuXHRcdFx0Y29uc3QgaXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpXG5cdFx0XHRsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG5cdFx0XHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0XHRcdGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpXG5cdFx0XHRcdHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBEcmFmdFNldFxuXHR9KShTZXQpXG5cblx0ZnVuY3Rpb24gcHJveHlTZXRfPFQgZXh0ZW5kcyBBbnlTZXQ+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFQge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KVxuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGU6IFNldFN0YXRlKSB7XG5cdFx0aWYgKCFzdGF0ZS5jb3B5Xykge1xuXHRcdFx0Ly8gY3JlYXRlIGRyYWZ0cyBmb3IgYWxsIGVudHJpZXMgdG8gcHJlc2VydmUgaW5zZXJ0aW9uIG9yZGVyXG5cdFx0XHRzdGF0ZS5jb3B5XyA9IG5ldyBTZXQoKVxuXHRcdFx0c3RhdGUuYmFzZV8uZm9yRWFjaCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSlcblx0XHRcdFx0XHRzdGF0ZS5kcmFmdHNfLnNldCh2YWx1ZSwgZHJhZnQpXG5cdFx0XHRcdFx0c3RhdGUuY29weV8hLmFkZChkcmFmdClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZS5jb3B5XyEuYWRkKHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZTogYW55IC8qRVM1U3RhdGUgfCBNYXBTdGF0ZSB8IFNldFN0YXRlKi8pIHtcblx0XHRpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSlcblx0fVxuXG5cdGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwge3Byb3h5TWFwXywgcHJveHlTZXRffSlcbn1cbiIsImltcG9ydCB7ZW5hYmxlRVM1fSBmcm9tIFwiLi9lczVcIlxuaW1wb3J0IHtlbmFibGVNYXBTZXR9IGZyb20gXCIuL21hcHNldFwiXG5pbXBvcnQge2VuYWJsZVBhdGNoZXN9IGZyb20gXCIuL3BhdGNoZXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQWxsUGx1Z2lucygpIHtcblx0ZW5hYmxlRVM1KClcblx0ZW5hYmxlTWFwU2V0KClcblx0ZW5hYmxlUGF0Y2hlcygpXG59XG4iLCJpbXBvcnQge1xuXHRJUHJvZHVjZSxcblx0SVByb2R1Y2VXaXRoUGF0Y2hlcyxcblx0SW1tZXIsXG5cdERyYWZ0LFxuXHRJbW11dGFibGVcbn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxuXG5leHBvcnQge1xuXHREcmFmdCxcblx0SW1tdXRhYmxlLFxuXHRQYXRjaCxcblx0UGF0Y2hMaXN0ZW5lcixcblx0b3JpZ2luYWwsXG5cdGN1cnJlbnQsXG5cdGlzRHJhZnQsXG5cdGlzRHJhZnRhYmxlLFxuXHROT1RISU5HIGFzIG5vdGhpbmcsXG5cdERSQUZUQUJMRSBhcyBpbW1lcmFibGVcbn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxuXG5jb25zdCBpbW1lciA9IG5ldyBJbW1lcigpXG5cbi8qKlxuICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG4gKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcbiAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAqXG4gKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG4gKlxuICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG4gKlxuICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZHVjZXIgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcbiAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICovXG5leHBvcnQgY29uc3QgcHJvZHVjZTogSVByb2R1Y2UgPSBpbW1lci5wcm9kdWNlXG5leHBvcnQgZGVmYXVsdCBwcm9kdWNlXG5cbi8qKlxuICogTGlrZSBgcHJvZHVjZWAsIGJ1dCBgcHJvZHVjZVdpdGhQYXRjaGVzYCBhbHdheXMgcmV0dXJucyBhIHR1cGxlXG4gKiBbbmV4dFN0YXRlLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gKGluc3RlYWQgb2YganVzdCB0aGUgbmV4dCBzdGF0ZSlcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2R1Y2VXaXRoUGF0Y2hlczogSVByb2R1Y2VXaXRoUGF0Y2hlcyA9IGltbWVyLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKFxuXHRpbW1lclxuKVxuXG4vKipcbiAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXG4gKlxuICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgc2V0QXV0b0ZyZWV6ZSA9IGltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcilcblxuLyoqXG4gKiBQYXNzIHRydWUgdG8gdXNlIHRoZSBFUzIwMTUgYFByb3h5YCBjbGFzcyB3aGVuIGNyZWF0aW5nIGRyYWZ0cywgd2hpY2ggaXNcbiAqIGFsd2F5cyBmYXN0ZXIgdGhhbiB1c2luZyBFUzUgcHJveGllcy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBmZWF0dXJlIGRldGVjdGlvbiBpcyB1c2VkLCBzbyBjYWxsaW5nIHRoaXMgaXMgcmFyZWx5IG5lY2Vzc2FyeS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNldFVzZVByb3hpZXMgPSBpbW1lci5zZXRVc2VQcm94aWVzLmJpbmQoaW1tZXIpXG5cbi8qKlxuICogQXBwbHkgYW4gYXJyYXkgb2YgSW1tZXIgcGF0Y2hlcyB0byB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBhIHByb2R1Y2VyLCB3aGljaCBtZWFucyBjb3B5LW9uLXdyaXRlIGlzIGluIGVmZmVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5UGF0Y2hlcyA9IGltbWVyLmFwcGx5UGF0Y2hlcy5iaW5kKGltbWVyKVxuXG4vKipcbiAqIENyZWF0ZSBhbiBJbW1lciBkcmFmdCBmcm9tIHRoZSBnaXZlbiBiYXNlIHN0YXRlLCB3aGljaCBtYXkgYmUgYSBkcmFmdCBpdHNlbGYuXG4gKiBUaGUgZHJhZnQgY2FuIGJlIG1vZGlmaWVkIHVudGlsIHlvdSBmaW5hbGl6ZSBpdCB3aXRoIHRoZSBgZmluaXNoRHJhZnRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRHJhZnQgPSBpbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKVxuXG4vKipcbiAqIEZpbmFsaXplIGFuIEltbWVyIGRyYWZ0IGZyb20gYSBgY3JlYXRlRHJhZnRgIGNhbGwsIHJldHVybmluZyB0aGUgYmFzZSBzdGF0ZVxuICogKGlmIG5vIGNoYW5nZXMgd2VyZSBtYWRlKSBvciBhIG1vZGlmaWVkIGNvcHkuIFRoZSBkcmFmdCBtdXN0ICpub3QqIGJlXG4gKiBtdXRhdGVkIGFmdGVyd2FyZHMuXG4gKlxuICogUGFzcyBhIGZ1bmN0aW9uIGFzIHRoZSAybmQgYXJndW1lbnQgdG8gZ2VuZXJhdGUgSW1tZXIgcGF0Y2hlcyBiYXNlZCBvbiB0aGVcbiAqIGNoYW5nZXMgdGhhdCB3ZXJlIG1hZGUuXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5pc2hEcmFmdCA9IGltbWVyLmZpbmlzaERyYWZ0LmJpbmQoaW1tZXIpXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSBhIG5vLW9wLCBidXQgY2FuIGJlIHVzZWQgdG8gY2FzdCBhbiBpbW11dGFibGUgdHlwZVxuICogdG8gYW4gZHJhZnQgdHlwZSBhbmQgbWFrZSBUeXBlU2NyaXB0IGhhcHB5XG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXN0RHJhZnQ8VD4odmFsdWU6IFQpOiBEcmFmdDxUPiB7XG5cdHJldHVybiB2YWx1ZSBhcyBhbnlcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGEgbm8tb3AsIGJ1dCBjYW4gYmUgdXNlZCB0byBjYXN0IGEgbXV0YWJsZSB0eXBlXG4gKiB0byBhbiBpbW11dGFibGUgdHlwZSBhbmQgbWFrZSBUeXBlU2NyaXB0IGhhcHB5XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc3RJbW11dGFibGU8VD4odmFsdWU6IFQpOiBJbW11dGFibGU8VD4ge1xuXHRyZXR1cm4gdmFsdWUgYXMgYW55XG59XG5cbmV4cG9ydCB7SW1tZXJ9XG5cbmV4cG9ydCB7ZW5hYmxlRVM1fSBmcm9tIFwiLi9wbHVnaW5zL2VzNVwiXG5leHBvcnQge2VuYWJsZVBhdGNoZXN9IGZyb20gXCIuL3BsdWdpbnMvcGF0Y2hlc1wiXG5leHBvcnQge2VuYWJsZU1hcFNldH0gZnJvbSBcIi4vcGx1Z2lucy9tYXBzZXRcIlxuZXhwb3J0IHtlbmFibGVBbGxQbHVnaW5zfSBmcm9tIFwiLi9wbHVnaW5zL2FsbFwiXG4iLCIvLyBTaG91bGQgYmUgbm8gaW1wb3J0cyBoZXJlIVxuXG4vLyBTb21lIHRoaW5ncyB0aGF0IHNob3VsZCBiZSBldmFsdWF0ZWQgYmVmb3JlIGFsbCBlbHNlLi4uXG5cbi8vIFdlIG9ubHkgd2FudCB0byBrbm93IGlmIG5vbi1wb2x5ZmlsbGVkIHN5bWJvbHMgYXJlIGF2YWlsYWJsZVxuY29uc3QgaGFzU3ltYm9sID1cblx0dHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgU3ltYm9sKFwieFwiKSA9PT0gXCJzeW1ib2xcIlxuZXhwb3J0IGNvbnN0IGhhc01hcCA9IHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCJcbmV4cG9ydCBjb25zdCBoYXNTZXQgPSB0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiXG5leHBvcnQgY29uc3QgaGFzUHJveGllcyA9XG5cdHR5cGVvZiBQcm94eSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHR0eXBlb2YgUHJveHkucmV2b2NhYmxlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBtaW5pKCkge31cbmV4cG9ydCBjb25zdCBpc01pbmlmaWVkID0gbWluaS5uYW1lICE9PSBcIm1pbmlcIlxuXG4vKipcbiAqIFRoZSBzZW50aW5lbCB2YWx1ZSByZXR1cm5lZCBieSBwcm9kdWNlcnMgdG8gcmVwbGFjZSB0aGUgZHJhZnQgd2l0aCB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBOT1RISU5HOiBOb3RoaW5nID0gaGFzU3ltYm9sXG5cdD8gU3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIilcblx0OiAoe1tcImltbWVyLW5vdGhpbmdcIl06IHRydWV9IGFzIGFueSlcblxuLyoqXG4gKiBUbyBsZXQgSW1tZXIgdHJlYXQgeW91ciBjbGFzcyBpbnN0YW5jZXMgYXMgcGxhaW4gaW1tdXRhYmxlIG9iamVjdHNcbiAqIChhbGJlaXQgd2l0aCBhIGN1c3RvbSBwcm90b3R5cGUpLCB5b3UgbXVzdCBkZWZpbmUgZWl0aGVyIGFuIGluc3RhbmNlIHByb3BlcnR5XG4gKiBvciBhIHN0YXRpYyBwcm9wZXJ0eSBvbiBlYWNoIG9mIHlvdXIgY3VzdG9tIGNsYXNzZXMuXG4gKlxuICogT3RoZXJ3aXNlLCB5b3VyIGNsYXNzIGluc3RhbmNlIHdpbGwgbmV2ZXIgYmUgZHJhZnRlZCwgd2hpY2ggbWVhbnMgaXQgd29uJ3QgYmVcbiAqIHNhZmUgdG8gbXV0YXRlIGluIGEgcHJvZHVjZSBjYWxsYmFjay5cbiAqL1xuZXhwb3J0IGNvbnN0IERSQUZUQUJMRTogdW5pcXVlIHN5bWJvbCA9IGhhc1N5bWJvbFxuXHQ/IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIilcblx0OiAoXCJfXyRpbW1lcl9kcmFmdGFibGVcIiBhcyBhbnkpXG5cbmV4cG9ydCBjb25zdCBEUkFGVF9TVEFURTogdW5pcXVlIHN5bWJvbCA9IGhhc1N5bWJvbFxuXHQ/IFN5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKVxuXHQ6IChcIl9fJGltbWVyX3N0YXRlXCIgYXMgYW55KVxuXG4vLyBFdmVuIGEgcG9seWZpbGxlZCBTeW1ib2wgbWlnaHQgcHJvdmlkZSBTeW1ib2wuaXRlcmF0b3JcbmV4cG9ydCBjb25zdCBpdGVyYXRvclN5bWJvbDogdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9XG5cdCh0eXBlb2YgU3ltYm9sICE9IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yKSB8fCAoXCJAQGl0ZXJhdG9yXCIgYXMgYW55KVxuXG4vKiogVXNlIGEgY2xhc3MgdHlwZSBmb3IgYG5vdGhpbmdgIHNvIGl0cyB0eXBlIGlzIHVuaXF1ZSAqL1xuZXhwb3J0IGNsYXNzIE5vdGhpbmcge1xuXHQvLyBUaGlzIGxldHMgdXMgZG8gYEV4Y2x1ZGU8VCwgTm90aGluZz5gXG5cdC8vIEB0cy1pZ25vcmVcblx0cHJpdmF0ZSBfITogdW5pcXVlIHN5bWJvbFxufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgUmVhY3RSZWR1eENvbnRleHQgPVxuLyojX19QVVJFX18qL1xuUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RSZWR1eENvbnRleHQuZGlzcGxheU5hbWUgPSAnUmVhY3RSZWR1eCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgfTtcbiAgfSwgW3N0b3JlXSk7XG4gIHZhciBwcmV2aW91c1N0YXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XG4gIH0sIFtzdG9yZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGdldFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSksXG4gICAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlLCBpc0NvbnRleHRDb25zdW1lciB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JzsgLy8gRGVmaW5lIHNvbWUgY29uc3RhbnQgYXJyYXlzIGp1c3QgdG8gYXZvaWQgcmUtY3JlYXRpbmcgdGhlc2VcblxudmFyIEVNUFRZX0FSUkFZID0gW107XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xuXG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gZnVuY3Rpb24gc3RyaW5naWZ5Q29tcG9uZW50KENvbXApIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB1cGRhdGVDb3VudCA9IHN0YXRlWzFdO1xuICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLCB1cGRhdGVDb3VudCArIDFdO1xufVxuXG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlZmZlY3RGdW5jLmFwcGx5KHZvaWQgMCwgZWZmZWN0QXJncyk7XG4gIH0sIGRlcGVuZGVuY2llcyk7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGFjdHVhbENoaWxkUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgLy8gV2Ugd2FudCB0byBjYXB0dXJlIHRoZSB3cmFwcGVyIHByb3BzIGFuZCBjaGlsZCBwcm9wcyB3ZSB1c2VkIGZvciBsYXRlciBjb21wYXJpc29uc1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7IC8vIElmIHRoZSByZW5kZXIgd2FzIGZyb20gYSBzdG9yZSB1cGRhdGUsIGNsZWFyIG91dCB0aGF0IHJlZmVyZW5jZSBhbmQgY2FzY2FkZSB0aGUgc3Vic2NyaWJlciB1cGRhdGVcblxuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKSB7XG4gIC8vIElmIHdlJ3JlIG5vdCBzdWJzY3JpYmVkIHRvIHRoZSBzdG9yZSwgbm90aGluZyB0byBkbyBoZXJlXG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm47IC8vIENhcHR1cmUgdmFsdWVzIGZvciBjaGVja2luZyBpZiBhbmQgd2hlbiB0aGlzIGNvbXBvbmVudCB1bm1vdW50c1xuXG4gIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICB2YXIgbGFzdFRocm93bkVycm9yID0gbnVsbDsgLy8gV2UnbGwgcnVuIHRoaXMgY2FsbGJhY2sgZXZlcnkgdGltZSBhIHN0b3JlIHN1YnNjcmlwdGlvbiB1cGRhdGUgcHJvcGFnYXRlcyB0byB0aGlzIGNvbXBvbmVudFxuXG4gIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKSB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAvLyBEb24ndCBydW4gc3RhbGUgbGlzdGVuZXJzLlxuICAgICAgLy8gUmVkdXggZG9lc24ndCBndWFyYW50ZWUgdW5zdWJzY3JpcHRpb25zIGhhcHBlbiB1bnRpbCBuZXh0IGRpc3BhdGNoLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB2YXIgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQWN0dWFsbHkgcnVuIHRoZSBzZWxlY3RvciB3aXRoIHRoZSBtb3N0IHJlY2VudCBzdG9yZSBzdGF0ZSBhbmQgd3JhcHBlciBwcm9wc1xuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZVxuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihsYXRlc3RTdG9yZVN0YXRlLCBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBoYXZlbid0IGNoYW5nZWQsIG5vdGhpbmcgdG8gZG8gaGVyZSAtIGNhc2NhZGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGVcblxuXG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNhdmUgcmVmZXJlbmNlcyB0byB0aGUgbmV3IGNoaWxkIHByb3BzLiAgTm90ZSB0aGF0IHdlIHRyYWNrIHRoZSBcImNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlXCJcbiAgICAgIC8vIGFzIGEgcmVmIGluc3RlYWQgb2YgYSB1c2VTdGF0ZS91c2VSZWR1Y2VyIGJlY2F1c2Ugd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgaWYgdGhhdCB2YWx1ZSBoYXNcbiAgICAgIC8vIGJlZW4gcHJvY2Vzc2VkLiAgSWYgdGhpcyB3ZW50IGludG8gdXNlU3RhdGUvdXNlUmVkdWNlciwgd2UgY291bGRuJ3QgY2xlYXIgb3V0IHRoZSB2YWx1ZSB3aXRob3V0XG4gICAgICAvLyBmb3JjaW5nIGFub3RoZXIgcmUtcmVuZGVyLCB3aGljaCB3ZSBkb24ndCB3YW50LlxuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBfZGlkXyBjaGFuZ2UgKG9yIHdlIGNhdWdodCBhbiBlcnJvciksIHRoaXMgd3JhcHBlciBjb21wb25lbnQgbmVlZHMgdG8gcmUtcmVuZGVyXG5cbiAgICAgIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU1RPUkVfVVBEQVRFRCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyBBY3R1YWxseSBzdWJzY3JpYmUgdG8gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yIChvciBzdG9yZSlcblxuXG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7IC8vIFB1bGwgZGF0YSBmcm9tIHRoZSBzdG9yZSBhZnRlciBmaXJzdCByZW5kZXIgaW4gY2FzZSB0aGUgc3RvcmUgaGFzXG4gIC8vIGNoYW5nZWQgc2luY2Ugd2UgYmVnYW4uXG5cbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG5cbiAgdmFyIHVuc3Vic2NyaWJlV3JhcHBlciA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlV3JhcHBlcigpIHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuXG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHdlIGNhdWdodCBhbiBlcnJvciBkdWUgdG8gYSBiYWQgbWFwU3RhdGUgZnVuY3Rpb24sIGJ1dCB0aGVcbiAgICAgIC8vIHBhcmVudCByZS1yZW5kZXJlZCB3aXRob3V0IHRoaXMgY29tcG9uZW50IGFuZCB3ZSdyZSBhYm91dCB0byB1bm1vdW50LlxuICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIGFzIGxvbmcgYXMgd2UgZG8gdG9wLWRvd24gc3Vic2NyaXB0aW9ucyBjb3JyZWN0bHksIGJ1dFxuICAgICAgLy8gaWYgd2UgZXZlciBkbyB0aG9zZSB3cm9uZywgdGhpcyB0aHJvdyB3aWxsIHN1cmZhY2UgdGhlIGVycm9yIGluIG91ciB0ZXN0cy5cbiAgICAgIC8vIEluIHRoYXQgY2FzZSwgdGhyb3cgdGhlIGVycm9yIGZyb20gaGVyZSBzbyBpdCBkb2Vzbid0IGdldCBsb3N0LlxuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuXG52YXIgaW5pdFN0YXRlVXBkYXRlcyA9IGZ1bmN0aW9uIGluaXRTdGF0ZVVwZGF0ZXMoKSB7XG4gIHJldHVybiBbbnVsbCwgMF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0QWR2YW5jZWQoXG4vKlxyXG4gIHNlbGVjdG9yRmFjdG9yeSBpcyBhIGZ1bmMgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB1c2VkIHRvXHJcbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XHJcbiAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XHJcbiAgICAgIHRoaW5nOiBzdGF0ZS50aGluZ3NbcHJvcHMudGhpbmdJZF0sXHJcbiAgICAgIHNhdmVUaGluZzogZmllbGRzID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNhdmVUaGluZyhwcm9wcy50aGluZ0lkLCBmaWVsZHMpKSxcclxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxyXG4gICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXHJcbiAgb3V0c2lkZSBvZiB0aGVpciBzZWxlY3RvciBhcyBhbiBvcHRpbWl6YXRpb24uIE9wdGlvbnMgcGFzc2VkIHRvIGNvbm5lY3RBZHZhbmNlZCBhcmUgcGFzc2VkIHRvXHJcbiAgdGhlIHNlbGVjdG9yRmFjdG9yeSwgYWxvbmcgd2l0aCBkaXNwbGF5TmFtZSBhbmQgV3JhcHBlZENvbXBvbmVudCwgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICAgIE5vdGUgdGhhdCBzZWxlY3RvckZhY3RvcnkgaXMgcmVzcG9uc2libGUgZm9yIGFsbCBjYWNoaW5nL21lbW9pemF0aW9uIG9mIGluYm91bmQgYW5kIG91dGJvdW5kXHJcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXHJcbiAgc2VsZWN0b3IsIG90aGVyd2lzZSB0aGUgQ29ubmVjdCBjb21wb25lbnQgd2lsbCByZS1yZW5kZXIgb24gZXZlcnkgc3RhdGUgb3IgcHJvcHMgY2hhbmdlLlxyXG4qL1xuc2VsZWN0b3JGYWN0b3J5LCAvLyBvcHRpb25zIG9iamVjdDpcbl9yZWYpIHtcbiAgaWYgKF9yZWYgPT09IHZvaWQgMCkge1xuICAgIF9yZWYgPSB7fTtcbiAgfVxuXG4gIHZhciBfcmVmMiA9IF9yZWYsXG4gICAgICBfcmVmMiRnZXREaXNwbGF5TmFtZSA9IF9yZWYyLmdldERpc3BsYXlOYW1lLFxuICAgICAgZ2V0RGlzcGxheU5hbWUgPSBfcmVmMiRnZXREaXNwbGF5TmFtZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJDb25uZWN0QWR2YW5jZWQoXCIgKyBuYW1lICsgXCIpXCI7XG4gIH0gOiBfcmVmMiRnZXREaXNwbGF5TmFtZSxcbiAgICAgIF9yZWYyJG1ldGhvZE5hbWUgPSBfcmVmMi5tZXRob2ROYW1lLFxuICAgICAgbWV0aG9kTmFtZSA9IF9yZWYyJG1ldGhvZE5hbWUgPT09IHZvaWQgMCA/ICdjb25uZWN0QWR2YW5jZWQnIDogX3JlZjIkbWV0aG9kTmFtZSxcbiAgICAgIF9yZWYyJHJlbmRlckNvdW50UHJvcCA9IF9yZWYyLnJlbmRlckNvdW50UHJvcCxcbiAgICAgIHJlbmRlckNvdW50UHJvcCA9IF9yZWYyJHJlbmRlckNvdW50UHJvcCA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZjIkcmVuZGVyQ291bnRQcm9wLFxuICAgICAgX3JlZjIkc2hvdWxkSGFuZGxlU3RhID0gX3JlZjIuc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gX3JlZjIkc2hvdWxkSGFuZGxlU3RhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjIkc2hvdWxkSGFuZGxlU3RhLFxuICAgICAgX3JlZjIkc3RvcmVLZXkgPSBfcmVmMi5zdG9yZUtleSxcbiAgICAgIHN0b3JlS2V5ID0gX3JlZjIkc3RvcmVLZXkgPT09IHZvaWQgMCA/ICdzdG9yZScgOiBfcmVmMiRzdG9yZUtleSxcbiAgICAgIF9yZWYyJHdpdGhSZWYgPSBfcmVmMi53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9yZWYyJHdpdGhSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkd2l0aFJlZixcbiAgICAgIF9yZWYyJGZvcndhcmRSZWYgPSBfcmVmMi5mb3J3YXJkUmVmLFxuICAgICAgZm9yd2FyZFJlZiA9IF9yZWYyJGZvcndhcmRSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkZm9yd2FyZFJlZixcbiAgICAgIF9yZWYyJGNvbnRleHQgPSBfcmVmMi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYyJGNvbnRleHQgPT09IHZvaWQgMCA/IFJlYWN0UmVkdXhDb250ZXh0IDogX3JlZjIkY29udGV4dCxcbiAgICAgIGNvbm5lY3RPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImdldERpc3BsYXlOYW1lXCIsIFwibWV0aG9kTmFtZVwiLCBcInJlbmRlckNvdW50UHJvcFwiLCBcInNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlc1wiLCBcInN0b3JlS2V5XCIsIFwid2l0aFJlZlwiLCBcImZvcndhcmRSZWZcIiwgXCJjb250ZXh0XCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChyZW5kZXJDb3VudFByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVuZGVyQ291bnRQcm9wIGlzIHJlbW92ZWQuIHJlbmRlciBjb3VudGluZyBpcyBidWlsdCBpbnRvIHRoZSBsYXRlc3QgUmVhY3QgRGV2IFRvb2xzIHByb2ZpbGluZyBleHRlbnNpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHdpdGhSZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignd2l0aFJlZiBpcyByZW1vdmVkLiBUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHVzZSBhIHJlZiBvbiB0aGUgY29ubmVjdGVkIGNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIHZhciBjdXN0b21TdG9yZVdhcm5pbmdNZXNzYWdlID0gJ1RvIHVzZSBhIGN1c3RvbSBSZWR1eCBzdG9yZSBmb3Igc3BlY2lmaWMgY29tcG9uZW50cywgY3JlYXRlIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgd2l0aCAnICsgXCJSZWFjdC5jcmVhdGVDb250ZXh0KCksIGFuZCBwYXNzIHRoZSBjb250ZXh0IG9iamVjdCB0byBSZWFjdCBSZWR1eCdzIFByb3ZpZGVyIGFuZCBzcGVjaWZpYyBjb21wb25lbnRzXCIgKyAnIGxpa2U6IDxQcm92aWRlciBjb250ZXh0PXtNeUNvbnRleHR9PjxDb25uZWN0ZWRDb21wb25lbnQgY29udGV4dD17TXlDb250ZXh0fSAvPjwvUHJvdmlkZXI+LiAnICsgJ1lvdSBtYXkgYWxzbyBwYXNzIGEge2NvbnRleHQgOiBNeUNvbnRleHR9IG9wdGlvbiB0byBjb25uZWN0JztcblxuICAgIGlmIChzdG9yZUtleSAhPT0gJ3N0b3JlJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdG9yZUtleSBoYXMgYmVlbiByZW1vdmVkIGFuZCBkb2VzIG5vdCBkbyBhbnl0aGluZy4gJyArIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBDb250ZXh0ID0gY29udGV4dDtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBXaXRoQ29ubmVjdChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgXCIgKyAobWV0aG9kTmFtZSArIFwiLiBJbnN0ZWFkIHJlY2VpdmVkIFwiICsgc3RyaW5naWZ5Q29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQpKSk7XG4gICAgfVxuXG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUod3JhcHBlZENvbXBvbmVudE5hbWUpO1xuXG4gICAgdmFyIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY29ubmVjdE9wdGlvbnMsIHtcbiAgICAgIGdldERpc3BsYXlOYW1lOiBnZXREaXNwbGF5TmFtZSxcbiAgICAgIG1ldGhvZE5hbWU6IG1ldGhvZE5hbWUsXG4gICAgICByZW5kZXJDb3VudFByb3A6IHJlbmRlckNvdW50UHJvcCxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc3RvcmVLZXk6IHN0b3JlS2V5LFxuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWU6IHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgdmFyIHB1cmUgPSBjb25uZWN0T3B0aW9ucy5wdXJlO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRTZWxlY3RvcihzdG9yZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgfSAvLyBJZiB3ZSBhcmVuJ3QgcnVubmluZyBpbiBcInB1cmVcIiBtb2RlLCB3ZSBkb24ndCB3YW50IHRvIG1lbW9pemUgdmFsdWVzLlxuICAgIC8vIFRvIGF2b2lkIGNvbmRpdGlvbmFsbHkgY2FsbGluZyBob29rcywgd2UgZmFsbCBiYWNrIHRvIGEgdGlueSB3cmFwcGVyXG4gICAgLy8gdGhhdCBqdXN0IGV4ZWN1dGVzIHRoZSBnaXZlbiBjYWxsYmFjayBpbW1lZGlhdGVseS5cblxuXG4gICAgdmFyIHVzZVB1cmVPbmx5TWVtbyA9IHB1cmUgPyB1c2VNZW1vIDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGlzdGluZ3Vpc2ggYmV0d2VlbiBhY3R1YWwgXCJkYXRhXCIgcHJvcHMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgd3JhcHBlciBjb21wb25lbnQsXG4gICAgICAgIC8vIGFuZCB2YWx1ZXMgbmVlZGVkIHRvIGNvbnRyb2wgYmVoYXZpb3IgKGZvcndhcmRlZCByZWZzLCBhbHRlcm5hdGUgY29udGV4dCBpbnN0YW5jZXMpLlxuICAgICAgICAvLyBUbyBtYWludGFpbiB0aGUgd3JhcHBlclByb3BzIG9iamVjdCByZWZlcmVuY2UsIG1lbW9pemUgdGhpcyBkZXN0cnVjdHVyaW5nLlxuICAgICAgICB2YXIgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiA9IHByb3BzLnJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsXG4gICAgICAgICAgICB3cmFwcGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wicmVhY3RSZWR1eEZvcndhcmRlZFJlZlwiXSk7XG5cbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdO1xuICAgICAgfSwgW3Byb3BzXSksXG4gICAgICAgICAgcHJvcHNDb250ZXh0ID0gX3VzZU1lbW9bMF0sXG4gICAgICAgICAgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiA9IF91c2VNZW1vWzFdLFxuICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VNZW1vWzJdO1xuXG4gICAgICB2YXIgQ29udGV4dFRvVXNlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZXJzIG1heSBvcHRpb25hbGx5IHBhc3MgaW4gYSBjdXN0b20gY29udGV4dCBpbnN0YW5jZSB0byB1c2UgaW5zdGVhZCBvZiBvdXIgUmVhY3RSZWR1eENvbnRleHQuXG4gICAgICAgIC8vIE1lbW9pemUgdGhlIGNoZWNrIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBjb250ZXh0IGluc3RhbmNlIHdlIHNob3VsZCB1c2UuXG4gICAgICAgIHJldHVybiBwcm9wc0NvbnRleHQgJiYgcHJvcHNDb250ZXh0LkNvbnN1bWVyICYmIGlzQ29udGV4dENvbnN1bWVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKSkgPyBwcm9wc0NvbnRleHQgOiBDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pOyAvLyBSZXRyaWV2ZSB0aGUgc3RvcmUgYW5kIGFuY2VzdG9yIHN1YnNjcmlwdGlvbiB2aWEgY29udGV4dCwgaWYgYXZhaWxhYmxlXG5cbiAgICAgIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KENvbnRleHRUb1VzZSk7IC8vIFRoZSBzdG9yZSBfbXVzdF8gZXhpc3QgYXMgZWl0aGVyIGEgcHJvcCBvciBpbiBjb250ZXh0LlxuICAgICAgLy8gV2UnbGwgY2hlY2sgdG8gc2VlIGlmIGl0IF9sb29rc18gbGlrZSBhIFJlZHV4IHN0b3JlIGZpcnN0LlxuICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gcGFzcyB0aHJvdWdoIGEgYHN0b3JlYCBwcm9wIHRoYXQgaXMganVzdCBhIHBsYWluIHZhbHVlLlxuXG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBcXFwic3RvcmVcXFwiIGluIHRoZSBjb250ZXh0IG9mIFwiICsgKFwiXFxcIlwiICsgZGlzcGxheU5hbWUgKyBcIlxcXCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIFwiKSArIFwib3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFwiICsgKFwiUmVhY3QgY29udGV4dCBjb25zdW1lciB0byBcIiArIGRpc3BsYXlOYW1lICsgXCIgaW4gY29ubmVjdCBvcHRpb25zLlwiKSk7XG4gICAgICB9IC8vIEJhc2VkIG9uIHRoZSBwcmV2aW91cyBjaGVjaywgb25lIG9mIHRoZXNlIG11c3QgYmUgdHJ1ZVxuXG5cbiAgICAgIHZhciBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgdmFyIGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuXG4gICAgICB2YXIgX3VzZU1lbW8yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vic10pOyAvLyBPdXIgcmUtc3Vic2NyaWJlIGxvZ2ljIG9ubHkgcnVucyB3aGVuIHRoZSBzdG9yZS9zdWJzY3JpcHRpb24gc2V0dXAgY2hhbmdlc1xuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3Moc3Vic2NyaWJlVXBkYXRlcywgW3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2hdLCBbc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yXSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICB2YXIgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBhY3R1YWxDaGlsZFByb3BzLCB7XG4gICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7IC8vIElmIFJlYWN0IHNlZXMgdGhlIGV4YWN0IHNhbWUgZWxlbWVudCByZWZlcmVuY2UgYXMgbGFzdCB0aW1lLCBpdCBiYWlscyBvdXQgb2YgcmUtcmVuZGVyaW5nXG4gICAgICAvLyB0aGF0IGNoaWxkLCBzYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIFJlYWN0Lm1lbW8oKSBvciByZXR1cm5lZCBmYWxzZSBmcm9tIHNob3VsZENvbXBvbmVudFVwZGF0ZS5cblxuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIC8vIElmIHRoaXMgY29tcG9uZW50IGlzIHN1YnNjcmliZWQgdG8gc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0byBwYXNzIGl0cyBvd25cbiAgICAgICAgICAvLyBzdWJzY3JpcHRpb24gaW5zdGFuY2UgZG93biB0byBvdXIgZGVzY2VuZGFudHMuIFRoYXQgbWVhbnMgcmVuZGVyaW5nIHRoZSBzYW1lXG4gICAgICAgICAgLy8gQ29udGV4dCBpbnN0YW5jZSwgYW5kIHB1dHRpbmcgYSBkaWZmZXJlbnQgdmFsdWUgaW50byB0aGUgY29udGV4dC5cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlXG4gICAgICAgICAgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH0gLy8gSWYgd2UncmUgaW4gXCJwdXJlXCIgbW9kZSwgZW5zdXJlIG91ciB3cmFwcGVyIGNvbXBvbmVudCBvbmx5IHJlLXJlbmRlcnMgd2hlbiBpbmNvbWluZyBwcm9wcyBoYXZlIGNoYW5nZWQuXG5cblxuICAgIHZhciBDb25uZWN0ID0gcHVyZSA/IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKSA6IENvbm5lY3RGdW5jdGlvbjtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICB2YXIgZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIGZyb20gJy4vbWVyZ2VQcm9wcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3NlbGVjdG9yRmFjdG9yeSc7XG4vKlxyXG4gIGNvbm5lY3QgaXMgYSBmYWNhZGUgb3ZlciBjb25uZWN0QWR2YW5jZWQuIEl0IHR1cm5zIGl0cyBhcmdzIGludG8gYSBjb21wYXRpYmxlXHJcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcclxuXHJcbiAgICAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgPT4gbmV4dEZpbmFsUHJvcHNcclxuICBcclxuICBjb25uZWN0IHBhc3NlcyBpdHMgYXJncyB0byBjb25uZWN0QWR2YW5jZWQgYXMgb3B0aW9ucywgd2hpY2ggd2lsbCBpbiB0dXJuIHBhc3MgdGhlbSB0b1xyXG4gIHNlbGVjdG9yRmFjdG9yeSBlYWNoIHRpbWUgYSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSBpcyBpbnN0YW50aWF0ZWQgb3IgaG90IHJlbG9hZGVkLlxyXG5cclxuICBzZWxlY3RvckZhY3RvcnkgcmV0dXJucyBhIGZpbmFsIHByb3BzIHNlbGVjdG9yIGZyb20gaXRzIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCBtZXJnZVByb3BzLFxyXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXHJcblxyXG4gIFRoZSByZXN1bHRpbmcgZmluYWwgcHJvcHMgc2VsZWN0b3IgaXMgY2FsbGVkIGJ5IHRoZSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuZXZlclxyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cclxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKGFyZywgZmFjdG9yaWVzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSBmYWN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFjdG9yaWVzW2ldKGFyZyk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIG9mIHR5cGUgXCIgKyB0eXBlb2YgYXJnICsgXCIgZm9yIFwiICsgbmFtZSArIFwiIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgXCIgKyBvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lICsgXCIuXCIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufSAvLyBjcmVhdGVDb25uZWN0IHdpdGggZGVmYXVsdCBhcmdzIGJ1aWxkcyB0aGUgJ29mZmljaWFsJyBjb25uZWN0IGJlaGF2aW9yLiBDYWxsaW5nIGl0IHdpdGhcbi8vIGRpZmZlcmVudCBvcHRpb25zIG9wZW5zIHVwIHNvbWUgdGVzdGluZyBhbmQgZXh0ZW5zaWJpbGl0eSBzY2VuYXJpb3NcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdChfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRjb25uZWN0SE9DID0gX3JlZi5jb25uZWN0SE9DLFxuICAgICAgY29ubmVjdEhPQyA9IF9yZWYkY29ubmVjdEhPQyA9PT0gdm9pZCAwID8gY29ubmVjdEFkdmFuY2VkIDogX3JlZiRjb25uZWN0SE9DLFxuICAgICAgX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID0gX3JlZi5tYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YsXG4gICAgICBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPSBfcmVmLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyxcbiAgICAgIF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9IF9yZWYubWVyZ2VQcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1lcmdlUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPT09IHZvaWQgMCA/IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIDogX3JlZiRtZXJnZVByb3BzRmFjdG9yLFxuICAgICAgX3JlZiRzZWxlY3RvckZhY3RvcnkgPSBfcmVmLnNlbGVjdG9yRmFjdG9yeSxcbiAgICAgIHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYkc2VsZWN0b3JGYWN0b3J5ID09PSB2b2lkIDAgPyBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IDogX3JlZiRzZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIF9yZWYyKSB7XG4gICAgaWYgKF9yZWYyID09PSB2b2lkIDApIHtcbiAgICAgIF9yZWYyID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3JlZjIsXG4gICAgICAgIF9yZWYzJHB1cmUgPSBfcmVmMy5wdXJlLFxuICAgICAgICBwdXJlID0gX3JlZjMkcHVyZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYzJHB1cmUsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlc0VxdWFsID0gX3JlZjMuYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVzRXF1YWwgPT09IHZvaWQgMCA/IHN0cmljdEVxdWFsIDogX3JlZjMkYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIF9yZWYzJGFyZU93blByb3BzRXF1YSA9IF9yZWYzLmFyZU93blByb3BzRXF1YWwsXG4gICAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU93blByb3BzRXF1YSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVQcm9wc0VxID0gX3JlZjMuYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSxcbiAgICAgICAgX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID0gX3JlZjMuYXJlTWVyZ2VkUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlTWVyZ2VkUHJvcHNFLFxuICAgICAgICBleHRyYU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicHVyZVwiLCBcImFyZVN0YXRlc0VxdWFsXCIsIFwiYXJlT3duUHJvcHNFcXVhbFwiLCBcImFyZVN0YXRlUHJvcHNFcXVhbFwiLCBcImFyZU1lcmdlZFByb3BzRXF1YWxcIl0pO1xuXG4gICAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXRjaChtYXBTdGF0ZVRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWF0Y2gobWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1lcmdlUHJvcHMgPSBtYXRjaChtZXJnZVByb3BzLCBtZXJnZVByb3BzRmFjdG9yaWVzLCAnbWVyZ2VQcm9wcycpO1xuICAgIHJldHVybiBjb25uZWN0SE9DKHNlbGVjdG9yRmFjdG9yeSwgX2V4dGVuZHMoe1xuICAgICAgLy8gdXNlZCBpbiBlcnJvciBtZXNzYWdlc1xuICAgICAgbWV0aG9kTmFtZTogJ2Nvbm5lY3QnLFxuICAgICAgLy8gdXNlZCB0byBjb21wdXRlIENvbm5lY3QncyBkaXNwbGF5TmFtZSBmcm9tIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGRpc3BsYXlOYW1lLlxuICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29ubmVjdChcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0sXG4gICAgICAvLyBpZiBtYXBTdGF0ZVRvUHJvcHMgaXMgZmFsc3ksIHRoZSBDb25uZWN0IGNvbXBvbmVudCBkb2Vzbid0IHN1YnNjcmliZSB0byBzdG9yZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKSxcbiAgICAgIC8vIHBhc3NlZCB0aHJvdWdoIHRvIHNlbGVjdG9yRmFjdG9yeVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wczogaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHM6IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wczogaW5pdE1lcmdlUHJvcHMsXG4gICAgICBwdXJlOiBwdXJlLFxuICAgICAgYXJlU3RhdGVzRXF1YWw6IGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbDogYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbDogYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbDogYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH0sIGV4dHJhT3B0aW9ucykpO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHRcbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUNvbm5lY3QoKTsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyhtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3QobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ29iamVjdCcgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCk7XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdOyIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmddOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCB7fSwgc3RhdGVQcm9wcywge30sIGRpc3BhdGNoUHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZSxcbiAgICAgICAgcHVyZSA9IF9yZWYucHVyZSxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYuYXJlTWVyZ2VkUHJvcHNFcXVhbDtcbiAgICB2YXIgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIHZhciBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICB2YXIgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghcHVyZSB8fCAhYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNGdW5jdGlvbihtZXJnZVByb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZChtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1lcmdlUHJvcHM7XG4gIH0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZF07IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcbmV4cG9ydCBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiBtZXJnZVByb3BzKG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpLCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSwgb3duUHJvcHMpO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgX3JlZikge1xuICB2YXIgYXJlU3RhdGVzRXF1YWwgPSBfcmVmLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYuYXJlU3RhdGVQcm9wc0VxdWFsO1xuICB2YXIgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICB2YXIgb3duUHJvcHM7XG4gIHZhciBzdGF0ZVByb3BzO1xuICB2YXIgZGlzcGF0Y2hQcm9wcztcbiAgdmFyIG1lcmdlZFByb3BzO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICB2YXIgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKSBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHZhciBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59IC8vIFRPRE86IEFkZCBtb3JlIGNvbW1lbnRzXG4vLyBJZiBwdXJlIGlzIHRydWUsIHRoZSBzZWxlY3RvciByZXR1cm5lZCBieSBzZWxlY3RvckZhY3Rvcnkgd2lsbCBtZW1vaXplIGl0cyByZXN1bHRzLFxuLy8gYWxsb3dpbmcgY29ubmVjdEFkdmFuY2VkJ3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIHJldHVybiBmYWxzZSBpZiBmaW5hbFxuLy8gcHJvcHMgaGF2ZSBub3QgY2hhbmdlZC4gSWYgZmFsc2UsIHRoZSBzZWxlY3RvciB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXdcbi8vIG9iamVjdCBhbmQgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCBfcmVmMikge1xuICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gX3JlZjIuaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzID0gX3JlZjIuaW5pdE1lcmdlUHJvcHMsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImluaXRNYXBTdGF0ZVRvUHJvcHNcIiwgXCJpbml0TWFwRGlzcGF0Y2hUb1Byb3BzXCIsIFwiaW5pdE1lcmdlUHJvcHNcIl0pO1xuXG4gIHZhciBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucy5kaXNwbGF5TmFtZSk7XG4gIH1cblxuICB2YXIgc2VsZWN0b3JGYWN0b3J5ID0gb3B0aW9ucy5wdXJlID8gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkgOiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5O1xuICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdmFsdWUgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIi5cIik7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoXCJUaGUgc2VsZWN0b3IgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIG9mIFwiICsgZGlzcGxheU5hbWUgKyBcIiBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtZXJnZVByb3BzLCAnbWVyZ2VQcm9wcycsIGRpc3BsYXlOYW1lKTtcbn0iLCJpbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG5cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59IC8vIGRlcGVuZHNPbk93blByb3BzIGlzIHVzZWQgYnkgY3JlYXRlTWFwVG9Qcm9wc1Byb3h5IHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHBhc3MgcHJvcHMgYXMgYXJnc1xuLy8gdG8gdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgd3JhcHBlZC4gSXQgaXMgYWxzbyB1c2VkIGJ5IG1ha2VQdXJlUHJvcHNTZWxlY3RvciB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgbWFwVG9Qcm9wcyBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuLy9cbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSBudWxsICYmIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IHVuZGVmaW5lZCA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn0gLy8gVXNlZCBieSB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiBhbmQgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sXG4vLyB0aGlzIGZ1bmN0aW9uIHdyYXBzIG1hcFRvUHJvcHMgaW4gYSBwcm94eSBmdW5jdGlvbiB3aGljaCBkb2VzIHNldmVyYWwgdGhpbmdzOlxuLy9cbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIHZlcmlmaWVzIHRoZSBmaXJzdCByZXN1bHQgaXMgYSBwbGFpbiBvYmplY3QsIGluIG9yZGVyIHRvIHdhcm5cbi8vICAgIHRoZSBkZXZlbG9wZXIgdGhhdCB0aGVpciBtYXBUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07IC8vIGFsbG93IGRldGVjdEZhY3RvcnlBbmRWZXJpZnkgdG8gZ2V0IG93blByb3BzXG5cblxuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RvcmUgYXMgdXNlRGVmYXVsdFN0b3JlLCBjcmVhdGVTdG9yZUhvb2sgfSBmcm9tICcuL3VzZVN0b3JlJztcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VTdG9yZSA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cclxuICpcclxuICogQHJldHVybnMge2FueXxmdW5jdGlvbn0gcmVkdXggc3RvcmUncyBgZGlzcGF0Y2hgIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICogICBjb25zdCBpbmNyZWFzZUNvdW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZWFzZS1jb3VudGVyJyB9KSwgW10pXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApXHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPVxuLyojX19QVVJFX18qL1xuY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGNvbnRleHRTdWIpO1xuICB9LCBbc3RvcmUsIGNvbnRleHRTdWJdKTtcbiAgdmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdG9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RlZFN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgdmFyIHNlbGVjdGVkU3RhdGU7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgfHwgc3RvcmVTdGF0ZSAhPT0gbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50IHx8IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5cIjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsYXRlc3RTZWxlY3Rvci5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50ID0gc3RvcmVTdGF0ZTtcbiAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBzZWxlY3RlZFN0YXRlO1xuICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihuZXdTZWxlY3RlZFN0YXRlLCBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID0gbmV3U2VsZWN0ZWRTdGF0ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB3ZSBpZ25vcmUgYWxsIGVycm9ycyBoZXJlLCBzaW5jZSB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gaXMgcmUtcmVuZGVyZWQsIHRoZSBzZWxlY3RvcnMgYXJlIGNhbGxlZCBhZ2FpbiwgYW5kXG4gICAgICAgIC8vIHdpbGwgdGhyb3cgYWdhaW4sIGlmIG5laXRoZXIgcHJvcHMgbm9yIHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZWRcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gZXJyO1xuICAgICAgfVxuXG4gICAgICBmb3JjZVJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc3Vic2NyaXB0aW9uXSk7XG4gIHJldHVybiBzZWxlY3RlZFN0YXRlO1xufVxuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU2VsZWN0b3Ioc2VsZWN0b3IsIGVxdWFsaXR5Rm4pIHtcbiAgICBpZiAoZXF1YWxpdHlGbiA9PT0gdm9pZCAwKSB7XG4gICAgICBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXNlbGVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JcIik7XG4gICAgfVxuXG4gICAgdmFyIF91c2VSZWR1eENvbnRleHQgPSB1c2VSZWR1eENvbnRleHQoKSxcbiAgICAgICAgc3RvcmUgPSBfdXNlUmVkdXhDb250ZXh0LnN0b3JlLFxuICAgICAgICBjb250ZXh0U3ViID0gX3VzZVJlZHV4Q29udGV4dC5zdWJzY3JpcHRpb247XG5cbiAgICB2YXIgc2VsZWN0ZWRTdGF0ZSA9IHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yik7XG4gICAgdXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZSdzIHN0YXRlLiBUaGlzIGhvb2sgdGFrZXMgYSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBhcyBhbiBhcmd1bWVudC4gVGhlIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBzdG9yZSBzdGF0ZS5cclxuICpcclxuICogVGhpcyBob29rIHRha2VzIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmlzb24gZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogdGhhdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHRoZSBzZWxlY3RlZCBzdGF0ZSBpcyBjb21wYXJlZCB0byBkZXRlcm1pbmVcclxuICogd2hldGhlciB0aGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogQHBhcmFtIHtGdW5jdGlvbj19IGVxdWFsaXR5Rm4gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlcilcclxuICogICByZXR1cm4gPGRpdj57Y291bnRlcn08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VTZWxlY3RvciA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTZWxlY3Rvckhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU3RvcmUoKSB7XG4gICAgdmFyIF91c2VSZWR1eENvbnRleHQgPSB1c2VSZWR1eENvbnRleHQoKSxcbiAgICAgICAgc3RvcmUgPSBfdXNlUmVkdXhDb250ZXh0LnN0b3JlO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgcmVkdXggc3RvcmVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcclxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VTdG9yZSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTdG9yZUhvb2soKTsiLCJpbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4vY29ubmVjdC9jb25uZWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZURpc3BhdGNoJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdG9yJztcbmltcG9ydCB7IHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2sgfSBmcm9tICcuL2hvb2tzL3VzZVN0b3JlJztcbmltcG9ydCB7IHNldEJhdGNoIH0gZnJvbSAnLi91dGlscy9iYXRjaCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyBhcyBiYXRjaCB9IGZyb20gJy4vdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbnNldEJhdGNoKGJhdGNoKTtcbmV4cG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0QWR2YW5jZWQsIFJlYWN0UmVkdXhDb250ZXh0LCBjb25uZWN0LCBiYXRjaCwgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vaywgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vaywgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vaywgc2hhbGxvd0VxdWFsIH07IiwiaW1wb3J0IHsgZ2V0QmF0Y2ggfSBmcm9tICcuL2JhdGNoJzsgLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge31cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgdmFyIGJhdGNoID0gZ2V0QmF0Y2goKTtcbiAgdmFyIGZpcnN0ID0gbnVsbDtcbiAgdmFyIGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG4gICAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgICBiYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgdmFyIGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcblxuICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdCA9IGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGZpcnN0ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lci5uZXh0KSB7XG4gICAgICAgICAgbGlzdGVuZXIubmV4dC5wcmV2ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG52YXIgU3Vic2NyaXB0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5wYXJlbnRTdWIgPSBwYXJlbnRTdWI7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlciA9IHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN1YnNjcmlwdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZE5lc3RlZFN1YiA9IGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRoaXMudHJ5U3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeU5lc3RlZFN1YnMgPSBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVDaGFuZ2VXcmFwcGVyID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAodGhpcy5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuc3Vic2NyaWJlKTtcbiAgfTtcblxuICBfcHJvdG8udHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucGFyZW50U3ViID8gdGhpcy5wYXJlbnRTdWIuYWRkTmVzdGVkU3ViKHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIGFzIGRlZmF1bHQgfTsiLCIvLyBEZWZhdWx0IHRvIGEgZHVtbXkgXCJiYXRjaFwiIGltcGxlbWVudGF0aW9uIHRoYXQganVzdCBydW5zIHRoZSBjYWxsYmFja1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoOyAvLyBBbGxvdyBpbmplY3RpbmcgYW5vdGhlciBiYXRjaGluZyBmdW5jdGlvbiBsYXRlclxuXG5leHBvcnQgdmFyIHNldEJhdGNoID0gZnVuY3Rpb24gc2V0QmF0Y2gobmV3QmF0Y2gpIHtcbiAgcmV0dXJuIGJhdGNoID0gbmV3QmF0Y2g7XG59OyAvLyBTdXBwbHkgYSBnZXR0ZXIganVzdCB0byBza2lwIGRlYWxpbmcgd2l0aCBFU00gYmluZGluZ3NcblxuZXhwb3J0IHZhciBnZXRCYXRjaCA9IGZ1bmN0aW9uIGdldEJhdGNoKCkge1xuICByZXR1cm4gYmF0Y2g7XG59OyIsIi8qKlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXHJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIGJhc2VQcm90byA9IHByb3RvO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbmV4cG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJzsiLCJmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2UgbmVlZCB1c2VMYXlvdXRFZmZlY3QgdG8gZW5zdXJlIHRoZSBzdG9yZVxuLy8gc3Vic2NyaXB0aW9uIGNhbGxiYWNrIGFsd2F5cyBoYXMgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGxhdGVzdCByZW5kZXIgY29tbWl0XG4vLyBhdmFpbGFibGUsIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgaGFwcGVuIGJldHdlZW4gcmVuZGVyIGFuZCB0aGUgZWZmZWN0LFxuLy8gd2hpY2ggbWF5IGNhdXNlIG1pc3NlZCB1cGRhdGVzOyB3ZSBhbHNvIG11c3QgZW5zdXJlIHRoZSBzdG9yZSBzdWJzY3JpcHRpb25cbi8vIGlzIGNyZWF0ZWQgc3luY2hyb25vdXNseSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBvY2N1ciBiZWZvcmUgdGhlXG4vLyBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZCBhbmQgYW4gaW5jb25zaXN0ZW50IHN0YXRlIG1heSBiZSBvYnNlcnZlZFxuXG5leHBvcnQgdmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0OyIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKG1ldGhvZE5hbWUgKyBcIigpIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIiBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHZhbHVlICsgXCIuXCIpO1xuICB9XG59IiwiLyoqXHJcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG59IiwiZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnQgZGVmYXVsdCB0aHVuazsiLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTtcbiAgfVxuXG4gIGlmIChlbnVtZXJhYmxlT25seSkga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9O1xuIiwiZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgcHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogY3JlYXRlU2VsZWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLW1vZHVsZXMtdHlwZXNjcmlwdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLW1vZHVsZXMtdHlwZXNjcmlwdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU291cmNlc1NsaWNlLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzExLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFTb3VyY2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnRGF0YVNvdXJjZXMnLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBbXSBhcyBUcmVuREFQLmlEYXRhU291Y2VbXSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgQWRkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEFkZFJhbmdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVtb3ZlOiBzdGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgQWRkLCBBZGRSYW5nZSB9ID0gRGF0YVNvdXJjZXNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlc1NsaWNlLnJlZHVjZXI7XHJcbmV4cG9ydCBjb25zdCBTZWxlY3REYXRhU291cmNlcyA9IHN0YXRlID0+IHN0YXRlXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBXb3Jrc3BhY2VTbGljZS50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wOS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmtzcGFjZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ1dvcmtzcGFjZScsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgTmV3OiBzdGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRGVsZXRlOiBzdGF0ZSA9PiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgTmV3LCBEZWxldGUgfSA9IFdvcmtzcGFjZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzcGFjZVNsaWNlLnJlZHVjZXI7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBTdG9yZS50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wOS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IFdvcmtzcGFjZVJlZHVjZXIgZnJvbSAnLi4vRmVhdHVyZS9Xb3Jrc3BhY2UvV29ya3NwYWNlU2xpY2UnO1xyXG5pbXBvcnQgRGF0YVNvdXJjZXNSZWR1Y3VlciBmcm9tICcuLi9GZWF0dXJlL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzU2xpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIFdvcmtzcGFjZTogV29ya3NwYWNlUmVkdWNlcixcclxuICAgICAgICBEYXRhU291cmNlczogRGF0YVNvdXJjZXNSZWR1Y3VlclxyXG4gICAgfVxyXG59KTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVHJlbkRBUC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlL1N0b3JlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIlxyXG5cclxuY29uc3QgVHJlbkRBUDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBEYXRhU291cmNlcyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGF0YVNvdXJjZXNcIiAqLyAnLi9GZWF0dXJlL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzJykpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlcj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH19PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBmaXhlZC10b3AgYmctZGFyayBmbGV4LW1kLW5vd3JhcCBwLTAgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgY29sLXNtLTMgY29sLW1kLTIgbXItMFwiIGhyZWY9e2hvbWVQYXRofT5UcmVuREFQPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IHB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtcImNvbC1tZC0yIGQtbm9uZSBkLW1kLWJsb2NrIGJnLWxpZ2h0IFwiICsgc3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNpZGViYXItc3RpY2t5XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgaHJlZj17aG9tZVBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJmZWF0aGVyIGZlYXRoZXItaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgOWw5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjkgMjIgOSAxMiAxNSAxMiAxNSAyMlwiPjwvcG9seWxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwiZmVhdGhlciBmZWF0aGVyLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gMyw0LjUgYSA5LDQuNSAwLDAsMCAxOCAzIGEgOSw0LjUgMCwwLDAgLTE4IDAgbCAwLDExIGEgOSw0LjUgMCwwLDAgMTggMCBsIDAsLTExXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YSBTb3VyY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17c3R5bGVzW1wic2lkZWJhci1oZWFkaW5nXCJdICsgXCIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBweC0zIG10LTQgbWItMSB0ZXh0LW11dGVkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TYXZlZCBXb3Jrc3BhY2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtbXV0ZWRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIj48L2NpcmNsZT48bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1maWxlLXRleHRcIj48cGF0aCBkPVwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVwiMTQgMiAxNCA4IDIwIDhcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVwiMTZcIiB5MT1cIjEzXCIgeDI9XCI4XCIgeTI9XCIxM1wiPjwvbGluZT48bGluZSB4MT1cIjE2XCIgeTE9XCIxN1wiIHgyPVwiOFwiIHkyPVwiMTdcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjEwIDkgOSA5IDggOVwiPjwvcG9seWxpbmU+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgbW9udGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1maWxlLXRleHRcIj48cGF0aCBkPVwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVwiMTQgMiAxNCA4IDIwIDhcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVwiMTZcIiB5MT1cIjEzXCIgeDI9XCI4XCIgeTI9XCIxM1wiPjwvbGluZT48bGluZSB4MT1cIjE2XCIgeTE9XCIxN1wiIHgyPVwiOFwiIHkyPVwiMTdcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjEwIDkgOSA5IDggOVwiPjwvcG9seWxpbmU+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgcXVhcnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwiZmVhdGhlciBmZWF0aGVyLWZpbGUtdGV4dFwiPjxwYXRoIGQ9XCJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6XCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XCIxNCAyIDE0IDggMjAgOFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMTNcIiB4Mj1cIjhcIiB5Mj1cIjEzXCI+PC9saW5lPjxsaW5lIHgxPVwiMTZcIiB5MT1cIjE3XCIgeDI9XCI4XCIgeTI9XCIxN1wiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVwiMTAgOSA5IDkgOCA5XCI+PC9wb2x5bGluZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29jaWFsIGVuZ2FnZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1maWxlLXRleHRcIj48cGF0aCBkPVwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVwiMTQgMiAxNCA4IDIwIDhcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVwiMTZcIiB5MT1cIjEzXCIgeDI9XCI4XCIgeTI9XCIxM1wiPjwvbGluZT48bGluZSB4MT1cIjE2XCIgeTE9XCIxN1wiIHgyPVwiOFwiIHkyPVwiMTdcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjEwIDkgOSA5IDggOVwiPjwvcG9seWxpbmU+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllYXItZW5kIHNhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IHRvcDogNzUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA3NXB4KScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdpbmhlcml0JywgcGFkZGluZzogJzAgMCAwIDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake2hvbWVQYXRofWB9PjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake2hvbWVQYXRofURhdGFTb3VyY2VzYH0+PERhdGFTb3VyY2VzIC8+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PjxUcmVuREFQLz48L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdycpKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSb3V0ZXJET007Il0sInNvdXJjZVJvb3QiOiIifQ==
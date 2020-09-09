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
/******/ 	__webpack_require__.p = "Scripts/";
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
var _a;

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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: window.innerWidth, height: window.innerHeight } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3", style: { height: 75 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "col-sm-3 col-md-2 mr-0", style: { textAlign: 'center' }, href: "https://www.gridprotectionalliance.org", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { width: 190, margin: 0 }, src: homePath + "Image/trendaplogo.png" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid", style: { top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 75px)', overflow: 'hidden' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' } })))));
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RldnRvb2xzRXh0ZW5zaW9uLnRzIiwid2VicGFjazovLy8uLi9zcmMvaXNQbGFpbk9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uLi9zcmMvc2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hcEJ1aWxkZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvY3JlYXRlUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNsaWNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvZW50aXR5X3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvc3RhdGVfc2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvc3RhdGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvdW5zb3J0ZWRfc3RhdGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvZW50aXRpZXMvY3JlYXRlX2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWFzeW5jLXRvLXByb21pc2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9uYW5vaWQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVBc3luY1RodW5rLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3R5cGVzL3R5cGVzLWludGVybmFsLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvcGx1Z2lucy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvc2NvcGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2ZpbmFsaXplLnRzIiwid2VicGFjazovLy8uLi9zcmMvY29yZS9wcm94eS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvaW1tZXJDbGFzcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvY3VycmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BsdWdpbnMvZXM1LnRzIiwid2VicGFjazovLy8uLi9zcmMvcGx1Z2lucy9wYXRjaGVzLnRzIiwid2VicGFjazovLy8uLi9zcmMvcGx1Z2lucy9tYXBzZXQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wbHVnaW5zL2FsbC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ltbWVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvZW52LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tZXJnZVByb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2JhdGNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlL1dvcmtzcGFjZS9Xb3Jrc3BhY2VTbGljZS50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L1N0b3JlL1N0b3JlLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb21wb3NlIiwiYXBwbHkiLCJpc1BsYWluT2JqZWN0IiwidmFsdWUiLCJwcm90byIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiZ2V0VGltZU1lYXN1cmVVdGlscyIsIm1heERlbGF5IiwiZm5OYW1lIiwiZWxhcHNlZCIsIm1lYXN1cmVUaW1lIiwiZm4iLCJzdGFydGVkIiwiRGF0ZSIsIm5vdyIsImZpbmlzaGVkIiwid2FybklmRXhjZWVkZWQiLCJjb25zb2xlIiwid2FybiIsIk1pZGRsZXdhcmVBcnJheSIsImNvbmNhdCIsImFyciIsInByZXBlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwicHJlZml4IiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwibWVzc2FnZSIsIkVycm9yIiwic3RyaW5naWZ5Iiwib2JqIiwic2VyaWFsaXplciIsImluZGVudCIsImRlY3ljbGVyIiwiSlNPTiIsImdldFNlcmlhbGl6ZSIsInN0YWNrIiwia2V5cyIsIl8iLCJzbGljZSIsImluZGV4T2YiLCJqb2luIiwia2V5IiwidGhpc1BvcyIsInNwbGljZSIsInB1c2giLCJJbmZpbml0eSIsImNhbGwiLCJpc0ltbXV0YWJsZURlZmF1bHQiLCJ0cmFja0Zvck11dGF0aW9ucyIsImlzSW1tdXRhYmxlIiwiaWdub3JlUGF0aHMiLCJ0cmFja2VkUHJvcGVydGllcyIsInRyYWNrUHJvcGVydGllcyIsImRldGVjdE11dGF0aW9ucyIsInBhdGgiLCJ0cmFja2VkIiwiY2hpbGRyZW4iLCJjaGlsZFBhdGgiLCJ0cmFja2VkUHJvcGVydHkiLCJzYW1lUGFyZW50UmVmIiwicHJldk9iaiIsInNhbWVSZWYiLCJOdW1iZXIiLCJpc05hTiIsIndhc011dGF0ZWQiLCJrZXlzVG9EZXRlY3QiLCJmb3JFYWNoIiwiaSIsInJlc3VsdCIsImNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSIsIm9wdGlvbnMiLCJpZ25vcmVkUGF0aHMiLCJ3YXJuQWZ0ZXIiLCJpZ25vcmUiLCJ0cmFjayIsImJpbmQiLCJnZXRTdGF0ZSIsInN0YXRlIiwidHJhY2tlciIsIm5leHQiLCJhY3Rpb24iLCJtZWFzdXJlVXRpbHMiLCJkaXNwYXRjaGVkQWN0aW9uIiwiaXNQbGFpbiIsInZhbCIsImZpbmROb25TZXJpYWxpemFibGVWYWx1ZSIsImlzU2VyaWFsaXphYmxlIiwiZ2V0RW50cmllcyIsImZvdW5kTmVzdGVkU2VyaWFsaXphYmxlIiwia2V5UGF0aCIsImVudHJpZXMiLCJoYXNJZ25vcmVkUGF0aHMiLCJwcm9wZXJ0eSIsIm5lc3RlZFZhbHVlIiwibmVzdGVkUGF0aCIsImNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSIsImlnbm9yZWRBY3Rpb25zIiwiaWdub3JlZEFjdGlvblBhdGhzIiwic3RvcmVBUEkiLCJ0eXBlIiwiZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSIsImVycm9yIiwiZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlIiwiaXNCb29sZWFuIiwieCIsImN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInRodW5rIiwiaW1tdXRhYmxlQ2hlY2siLCJzZXJpYWxpemFibGVDaGVjayIsIm1pZGRsZXdhcmVBcnJheSIsInRodW5rTWlkZGxld2FyZSIsIndpdGhFeHRyYUFyZ3VtZW50IiwiZXh0cmFBcmd1bWVudCIsImltbXV0YWJsZU9wdGlvbnMiLCJ1bnNoaWZ0Iiwic2VyaWFsaXphYmxlT3B0aW9ucyIsIklTX1BST0RVQ1RJT04iLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZGV2VG9vbHMiLCJwcmVsb2FkZWRTdGF0ZSIsImVuaGFuY2VycyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibWlkZGxld2FyZUVuaGFuY2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiZmluYWxDb21wb3NlIiwidHJhY2UiLCJzdG9yZUVuaGFuY2VycyIsImNvbXBvc2VkRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZUFjdGlvbiIsInByZXBhcmVBY3Rpb24iLCJhY3Rpb25DcmVhdG9yIiwicHJlcGFyZWQiLCJwYXlsb2FkIiwibWV0YSIsInRvU3RyaW5nIiwibWF0Y2giLCJpc0ZTQSIsImV2ZXJ5IiwiaXNWYWxpZEtleSIsImdldFR5cGUiLCJleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayIsImJ1aWxkZXJDYWxsYmFjayIsImFjdGlvbnNNYXAiLCJhY3Rpb25NYXRjaGVycyIsImRlZmF1bHRDYXNlUmVkdWNlciIsImJ1aWxkZXIiLCJhZGRDYXNlIiwidHlwZU9yQWN0aW9uQ3JlYXRvciIsImFkZE1hdGNoZXIiLCJtYXRjaGVyIiwiYWRkRGVmYXVsdENhc2UiLCJjcmVhdGVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibWFwT3JCdWlsZGVyQ2FsbGJhY2siLCJmaW5hbEFjdGlvbk1hdGNoZXJzIiwiZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXIiLCJjYXNlUmVkdWNlcnMiLCJmaWx0ZXIiLCJtYXAiLCJjciIsInJlZHVjZSIsInByZXZpb3VzU3RhdGUiLCJjYXNlUmVkdWNlciIsImlzRHJhZnQiLCJkcmFmdCIsImlzRHJhZnRhYmxlIiwiY3JlYXRlTmV4dFN0YXRlIiwiYWN0aW9uS2V5IiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwicmVkdWNlck5hbWVzIiwic2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUiLCJzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSIsImFjdGlvbkNyZWF0b3JzIiwicmVkdWNlck5hbWUiLCJtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSIsInByZXBhcmVDYWxsYmFjayIsInByZXBhcmUiLCJmaW5hbENhc2VSZWR1Y2VycyIsImFjdGlvbnMiLCJnZXRJbml0aWFsRW50aXR5U3RhdGUiLCJpZHMiLCJlbnRpdGllcyIsImNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkiLCJnZXRJbml0aWFsU3RhdGUiLCJhZGRpdGlvbmFsU3RhdGUiLCJhc3NpZ24iLCJjcmVhdGVTZWxlY3RvcnNGYWN0b3J5IiwiZ2V0U2VsZWN0b3JzIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RJZHMiLCJzZWxlY3RFbnRpdGllcyIsInNlbGVjdEFsbCIsImNyZWF0ZVNlbGVjdG9yIiwiaWQiLCJzZWxlY3RJZCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RUb3RhbCIsInNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyIsImNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvciIsIm11dGF0b3IiLCJvcGVyYXRvciIsImNyZWF0ZVN0YXRlT3BlcmF0b3IiLCJvcGVyYXRpb24iLCJhcmciLCJpc1BheWxvYWRBY3Rpb25Bcmd1bWVudCIsInJ1bk11dGF0b3IiLCJzZWxlY3RJZFZhbHVlIiwiZW50aXR5IiwiY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIiLCJhZGRPbmVNdXRhYmx5IiwiYWRkTWFueU11dGFibHkiLCJ2YWx1ZXMiLCJzZXRBbGxNdXRhYmx5IiwicmVtb3ZlT25lTXV0YWJseSIsInJlbW92ZU1hbnlNdXRhYmx5IiwiZGlkTXV0YXRlIiwicmVtb3ZlQWxsTXV0YWJseSIsInRha2VOZXdLZXkiLCJ1cGRhdGUiLCJvcmlnaW5hbCIsInVwZGF0ZWQiLCJjaGFuZ2VzIiwibmV3S2V5IiwiaGFzTmV3S2V5IiwidXBkYXRlT25lTXV0YWJseSIsInVwZGF0ZU1hbnlNdXRhYmx5IiwidXBkYXRlcyIsIm5ld0tleXMiLCJ1cGRhdGVzUGVyRW50aXR5IiwiZGlkTXV0YXRlRW50aXRpZXMiLCJkaWRNdXRhdGVJZHMiLCJ1cHNlcnRPbmVNdXRhYmx5IiwidXBzZXJ0TWFueU11dGFibHkiLCJhZGRlZCIsInJlbW92ZUFsbCIsImFkZE9uZSIsImFkZE1hbnkiLCJzZXRBbGwiLCJ1cGRhdGVPbmUiLCJ1cGRhdGVNYW55IiwidXBzZXJ0T25lIiwidXBzZXJ0TWFueSIsInJlbW92ZU9uZSIsInJlbW92ZU1hbnkiLCJjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIiLCJzb3J0IiwibmV3TW9kZWxzIiwibW9kZWxzIiwibW9kZWwiLCJtZXJnZSIsInRha2VVcGRhdGVkTW9kZWwiLCJhcmVBcnJheXNFcXVhbCIsImEiLCJiIiwiYWxsRW50aXRpZXMiLCJuZXdTb3J0ZWRJZHMiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwic29ydENvbXBhcmVyIiwiaW5zdGFuY2UiLCJzdGF0ZUZhY3RvcnkiLCJzZWxlY3RvcnNGYWN0b3J5Iiwic3RhdGVBZGFwdGVyIiwidXJsQWxwaGFiZXQiLCJuYW5vaWQiLCJzaXplIiwiTWF0aCIsInJhbmRvbSIsImNvbW1vblByb3BlcnRpZXMiLCJSZWplY3RXaXRoVmFsdWUiLCJtaW5pU2VyaWFsaXplRXJyb3IiLCJzaW1wbGVFcnJvciIsIlN0cmluZyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJ0eXBlUHJlZml4IiwicGF5bG9hZENyZWF0b3IiLCJmdWxmaWxsZWQiLCJyZXF1ZXN0SWQiLCJwZW5kaW5nIiwicmVqZWN0ZWQiLCJhYm9ydGVkIiwiZGlzcGxheWVkV2FybmluZyIsIkFDIiwiQWJvcnRDb250cm9sbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJvbmFib3J0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFib3J0IiwiaW5mbyIsImRpc3BhdGNoIiwiZXh0cmEiLCJhYm9ydENvbnRyb2xsZXIiLCJhYm9ydFJlYXNvbiIsImFib3J0ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlamVjdCIsInNpZ25hbCIsInJlYXNvbiIsInByb21pc2UiLCJza2lwRGlzcGF0Y2giLCJkaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiIsImZpbmFsQWN0aW9uIiwicmFjZSIsInJlc29sdmUiLCJyZWplY3RXaXRoVmFsdWUiLCJ0aGVuIiwiZXJyIiwidW53cmFwUmVzdWx0IiwicmV0dXJuZWQiLCJlbmFibGVFUzUiLCJkaWUiLCJhcmdzIiwiZSIsImVycm9ycyIsIm1zZyIsIkRSQUZUX1NUQVRFIiwicHJvdG90eXBlIiwiRFJBRlRBQkxFIiwiY29uc3RydWN0b3IiLCJpc01hcCIsImlzU2V0IiwiYmFzZV8iLCJlYWNoIiwiaXRlciIsImVudW1lcmFibGVPbmx5IiwiZ2V0QXJjaHR5cGUiLCJvd25LZXlzIiwiZW50cnkiLCJpbmRleCIsInRoaW5nIiwidHlwZV8iLCJoYXMiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJwcm9wT3JPbGRWYWx1ZSIsInQiLCJkZWxldGUiLCJhZGQiLCJpcyIsInkiLCJ0YXJnZXQiLCJoYXNNYXAiLCJNYXAiLCJoYXNTZXQiLCJTZXQiLCJsYXRlc3QiLCJjb3B5XyIsInNoYWxsb3dDb3B5IiwiYmFzZSIsImRlc2NyaXB0b3JzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlc2MiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJjcmVhdGUiLCJmcmVlemUiLCJkZWVwIiwiaXNGcm96ZW4iLCJjbGVhciIsImRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucyIsImdldFBsdWdpbiIsInBsdWdpbktleSIsInBsdWdpbiIsInBsdWdpbnMiLCJsb2FkUGx1Z2luIiwiaW1wbGVtZW50YXRpb24iLCJnZXRDdXJyZW50U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJ1c2VQYXRjaGVzSW5TY29wZSIsInNjb3BlIiwicGF0Y2hMaXN0ZW5lciIsInBhdGNoZXNfIiwiaW52ZXJzZVBhdGNoZXNfIiwicGF0Y2hMaXN0ZW5lcl8iLCJyZXZva2VTY29wZSIsImxlYXZlU2NvcGUiLCJkcmFmdHNfIiwicmV2b2tlRHJhZnQiLCJwYXJlbnRfIiwiZW50ZXJTY29wZSIsImltbWVyIiwiaW1tZXJfIiwiY2FuQXV0b0ZyZWV6ZV8iLCJ1bmZpbmFsaXplZERyYWZ0c18iLCJyZXZva2VfIiwicmV2b2tlZF8iLCJwcm9jZXNzUmVzdWx0IiwiYmFzZURyYWZ0IiwiaXNSZXBsYWNlZCIsInVzZVByb3hpZXNfIiwid2lsbEZpbmFsaXplRVM1XyIsIm1vZGlmaWVkXyIsImZpbmFsaXplIiwibWF5YmVGcmVlemUiLCJnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18iLCJOT1RISU5HIiwicm9vdFNjb3BlIiwiY2hpbGRWYWx1ZSIsImZpbmFsaXplUHJvcGVydHkiLCJzY29wZV8iLCJmaW5hbGl6ZWRfIiwiZHJhZnRfIiwiZ2VuZXJhdGVQYXRjaGVzXyIsInBhcmVudFN0YXRlIiwidGFyZ2V0T2JqZWN0Iiwicm9vdFBhdGgiLCJyZXMiLCJhc3NpZ25lZF8iLCJhdXRvRnJlZXplXyIsInBlZWsiLCJnZXREZXNjcmlwdG9yRnJvbVByb3RvIiwic291cmNlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwibWFya0NoYW5nZWQiLCJwcmVwYXJlQ29weSIsImNyZWF0ZVByb3h5IiwicGFyZW50IiwicHJveHlNYXBfIiwicHJveHlTZXRfIiwiaXNNYW51YWxfIiwidHJhcHMiLCJvYmplY3RUcmFwcyIsImFycmF5VHJhcHMiLCJQcm94eSIsInJldm9jYWJsZSIsInJldm9rZSIsInByb3h5IiwiY3JlYXRlUHJveHlQcm94eSIsImNyZWF0ZUVTNVByb3h5XyIsImN1cnJlbnQiLCJjdXJyZW50SW1wbCIsImNvcHkiLCJhcmNoVHlwZSIsImhhc0NoYW5nZXNfIiwiY29weUhlbHBlciIsImZyb20iLCJwcm94eVByb3BlcnR5IiwidGhpcyIsImFzc2VydFVucmV2b2tlZCIsIm1hcmtDaGFuZ2VzU3dlZXAiLCJkcmFmdHMiLCJoYXNBcnJheUNoYW5nZXMiLCJoYXNPYmplY3RDaGFuZ2VzIiwiYmFzZVZhbHVlIiwiYmFzZUlzRHJhZnQiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVFUzVEcmFmdCIsIm1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkiLCJvYmplY3QiLCJtaW4iLCJlbmFibGVQYXRjaGVzIiwiZGVlcENsb25lUGF0Y2hWYWx1ZSIsImNsb25lZCIsImNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkIiwiQUREIiwiYXBwbHlQYXRjaGVzXyIsInBhdGNoZXMiLCJwYXRjaCIsIm9wIiwiYmFzZVBhdGgiLCJpbnZlcnNlUGF0Y2hlcyIsImFzc2lnbmVkVmFsdWUiLCJvcmlnVmFsdWUiLCJnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQiLCJnZW5lcmF0ZUFycmF5UGF0Y2hlcyIsImdlbmVyYXRlU2V0UGF0Y2hlcyIsInJvb3RTdGF0ZSIsInJlcGxhY2VtZW50IiwiZW5hYmxlTWFwU2V0IiwiX19leHRlbmRzIiwiZCIsIl9fIiwiZXh0ZW5kU3RhdGljcyIsInByZXBhcmVNYXBDb3B5IiwicHJlcGFyZVNldENvcHkiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJEcmFmdE1hcCIsImNiIiwidGhpc0FyZyIsIl92YWx1ZSIsIl90aGlzIiwiaXRlcmF0b3IiLCJpdGVyYXRvclN5bWJvbCIsIl90aGlzMiIsInIiLCJkb25lIiwiX3RoaXMzIiwiRHJhZnRTZXQiLCJlbmFibGVBbGxQbHVnaW5zIiwiY2FzdERyYWZ0IiwiY2FzdEltbXV0YWJsZSIsImhhc1N5bWJvbCIsIlN5bWJvbCIsImhhc1Byb3hpZXMiLCJSZWZsZWN0IiwiZm9yIiwiZGF0YSIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJfZGVzYyRnZXQiLCJyZWFkUHJvcEZyb21Qcm90byIsImRlbGV0ZVByb3BlcnR5Iiwib3duZXIiLCJwYXJzZUludCIsIkltbWVyIiwiY29uZmlnIiwidXNlUHJveGllcyIsInNldFVzZVByb3hpZXMiLCJhdXRvRnJlZXplIiwic2V0QXV0b0ZyZWV6ZSIsInByb2R1Y2UiLCJwcm9kdWNlV2l0aFBhdGNoZXMiLCJyZWNpcGUiLCJkZWZhdWx0QmFzZSIsInNlbGYiLCJoYXNFcnJvciIsImFyZzEiLCJhcmcyIiwiaXAiLCJjcmVhdGVEcmFmdCIsImZpbmlzaERyYWZ0IiwiYXBwbHlQYXRjaGVzIiwiYXBwbHlQYXRjaGVzSW1wbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBO0FBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx1REFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUV0QjtBQUNQO0FBQ0EsRUFBRTs7QUFFSztBQUNQO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsYUFBYSxRQUFRO0FBQ3JCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FB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QUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUNySSw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQzFDLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUNsRyxDQUVKLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsZ0RBQWUsQ0FBQyxvREFBQyxvREFBUSxJQUFDLEtBQUssRUFBRSxvREFBSztJQUFFLG9EQUFDLE9BQU8sT0FBRSxDQUFXLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN0RGxHLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6IlRyZW5EQVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlNjcmlwdHMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vVHlwZVNjcmlwdC9UcmVuREFQLnRzeFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25DcmVhdG9yLCBTdG9yZUVuaGFuY2VyLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmhhbmNlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBpbnN0YW5jZSBuYW1lIHRvIGJlIHNob3dlZCBvbiB0aGUgbW9uaXRvciBwYWdlLiBEZWZhdWx0IHZhbHVlIGlzIGBkb2N1bWVudC50aXRsZWAuXHJcbiAgICogSWYgbm90IHNwZWNpZmllZCBhbmQgdGhlcmUncyBubyBkb2N1bWVudCB0aXRsZSwgaXQgd2lsbCBjb25zaXN0IG9mIGB0YWJJZGAgYW5kIGBpbnN0YW5jZUlkYC5cclxuICAgKi9cclxuICBuYW1lPzogc3RyaW5nXHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNyZWF0b3JzIGZ1bmN0aW9ucyB0byBiZSBhdmFpbGFibGUgaW4gdGhlIERpc3BhdGNoZXIuXHJcbiAgICovXHJcbiAgYWN0aW9uQ3JlYXRvcnM/OiBBY3Rpb25DcmVhdG9yPGFueT5bXSB8IHsgW2tleTogc3RyaW5nXTogQWN0aW9uQ3JlYXRvcjxhbnk+IH1cclxuICAvKipcclxuICAgKiBpZiBtb3JlIHRoYW4gb25lIGFjdGlvbiBpcyBkaXNwYXRjaGVkIGluIHRoZSBpbmRpY2F0ZWQgaW50ZXJ2YWwsIGFsbCBuZXcgYWN0aW9ucyB3aWxsIGJlIGNvbGxlY3RlZCBhbmQgc2VudCBhdCBvbmNlLlxyXG4gICAqIEl0IGlzIHRoZSBqb2ludCBiZXR3ZWVuIHBlcmZvcm1hbmNlIGFuZCBzcGVlZC4gV2hlbiBzZXQgdG8gYDBgLCBhbGwgYWN0aW9ucyB3aWxsIGJlIHNlbnQgaW5zdGFudGx5LlxyXG4gICAqIFNldCBpdCB0byBhIGhpZ2hlciB2YWx1ZSB3aGVuIGV4cGVyaWVuY2luZyBwZXJmIGlzc3VlcyAoYWxzbyBgbWF4QWdlYCB0byBhIGxvd2VyIHZhbHVlKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IDUwMCBtcy5cclxuICAgKi9cclxuICBsYXRlbmN5PzogbnVtYmVyXHJcbiAgLyoqXHJcbiAgICogKD4gMSkgLSBtYXhpbXVtIGFsbG93ZWQgYWN0aW9ucyB0byBiZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgdHJlZS4gVGhlIG9sZGVzdCBhY3Rpb25zIGFyZSByZW1vdmVkIG9uY2UgbWF4QWdlIGlzIHJlYWNoZWQuIEl0J3MgY3JpdGljYWwgZm9yIHBlcmZvcm1hbmNlLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgNTBcclxuICAgKi9cclxuICBtYXhBZ2U/OiBudW1iZXJcclxuICAvKipcclxuICAgKiAtIGB1bmRlZmluZWRgIC0gd2lsbCB1c2UgcmVndWxhciBgSlNPTi5zdHJpbmdpZnlgIHRvIHNlbmQgZGF0YSAoaXQncyB0aGUgZmFzdCBtb2RlKS5cclxuICAgKiAtIGBmYWxzZWAgLSB3aWxsIGhhbmRsZSBhbHNvIGNpcmN1bGFyIHJlZmVyZW5jZXMuXHJcbiAgICogLSBgdHJ1ZWAgLSB3aWxsIGhhbmRsZSBhbHNvIGRhdGUsIHJlZ2V4LCB1bmRlZmluZWQsIGVycm9yIG9iamVjdHMsIHN5bWJvbHMsIG1hcHMsIHNldHMgYW5kIGZ1bmN0aW9ucy5cclxuICAgKiAtIG9iamVjdCwgd2hpY2ggY29udGFpbnMgYGRhdGVgLCBgcmVnZXhgLCBgdW5kZWZpbmVkYCwgYGVycm9yYCwgYHN5bWJvbGAsIGBtYXBgLCBgc2V0YCBhbmQgYGZ1bmN0aW9uYCBrZXlzLlxyXG4gICAqICAgRm9yIGVhY2ggb2YgdGhlbSB5b3UgY2FuIGluZGljYXRlIGlmIHRvIGluY2x1ZGUgKGJ5IHNldHRpbmcgYXMgYHRydWVgKS5cclxuICAgKiAgIEZvciBgZnVuY3Rpb25gIGtleSB5b3UgY2FuIGFsc28gc3BlY2lmeSBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIHNlcmlhbGl6YXRpb24uXHJcbiAgICogICBTZWUgW2Bqc2FuYF0oaHR0cHM6Ly9naXRodWIuY29tL2tvbG9kbnkvanNhbikgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgKi9cclxuICBzZXJpYWxpemU/OlxyXG4gICAgfCBib29sZWFuXHJcbiAgICB8IHtcclxuICAgICAgICBkYXRlPzogYm9vbGVhblxyXG4gICAgICAgIHJlZ2V4PzogYm9vbGVhblxyXG4gICAgICAgIHVuZGVmaW5lZD86IGJvb2xlYW5cclxuICAgICAgICBlcnJvcj86IGJvb2xlYW5cclxuICAgICAgICBzeW1ib2w/OiBib29sZWFuXHJcbiAgICAgICAgbWFwPzogYm9vbGVhblxyXG4gICAgICAgIHNldD86IGJvb2xlYW5cclxuICAgICAgICBmdW5jdGlvbj86IGJvb2xlYW4gfCBGdW5jdGlvblxyXG4gICAgICB9XHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gd2hpY2ggdGFrZXMgYGFjdGlvbmAgb2JqZWN0IGFuZCBpZCBudW1iZXIgYXMgYXJndW1lbnRzLCBhbmQgc2hvdWxkIHJldHVybiBgYWN0aW9uYCBvYmplY3QgYmFjay5cclxuICAgKi9cclxuICBhY3Rpb25TYW5pdGl6ZXI/OiA8QSBleHRlbmRzIEFjdGlvbj4oYWN0aW9uOiBBLCBpZDogbnVtYmVyKSA9PiBBXHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gd2hpY2ggdGFrZXMgYHN0YXRlYCBvYmplY3QgYW5kIGluZGV4IGFzIGFyZ3VtZW50cywgYW5kIHNob3VsZCByZXR1cm4gYHN0YXRlYCBvYmplY3QgYmFjay5cclxuICAgKi9cclxuICBzdGF0ZVNhbml0aXplcj86IDxTPihzdGF0ZTogUywgaW5kZXg6IG51bWJlcikgPT4gU1xyXG4gIC8qKlxyXG4gICAqICpzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBhcyByZWdleCogLSBhY3Rpb25zIHR5cGVzIHRvIGJlIGhpZGRlbiAvIHNob3duIGluIHRoZSBtb25pdG9ycyAod2hpbGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VycykuXHJcbiAgICogSWYgYGFjdGlvbnNXaGl0ZWxpc3RgIHNwZWNpZmllZCwgYGFjdGlvbnNCbGFja2xpc3RgIGlzIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgYWN0aW9uc0JsYWNrbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdXHJcbiAgLyoqXHJcbiAgICogKnN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIGFzIHJlZ2V4KiAtIGFjdGlvbnMgdHlwZXMgdG8gYmUgaGlkZGVuIC8gc2hvd24gaW4gdGhlIG1vbml0b3JzICh3aGlsZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXJzKS5cclxuICAgKiBJZiBgYWN0aW9uc1doaXRlbGlzdGAgc3BlY2lmaWVkLCBgYWN0aW9uc0JsYWNrbGlzdGAgaXMgaWdub3JlZC5cclxuICAgKi9cclxuICBhY3Rpb25zV2hpdGVsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW11cclxuICAvKipcclxuICAgKiBjYWxsZWQgZm9yIGV2ZXJ5IGFjdGlvbiBiZWZvcmUgc2VuZGluZywgdGFrZXMgYHN0YXRlYCBhbmQgYGFjdGlvbmAgb2JqZWN0LCBhbmQgcmV0dXJucyBgdHJ1ZWAgaW4gY2FzZSBpdCBhbGxvd3Mgc2VuZGluZyB0aGUgY3VycmVudCBkYXRhIHRvIHRoZSBtb25pdG9yLlxyXG4gICAqIFVzZSBpdCBhcyBhIG1vcmUgYWR2YW5jZWQgdmVyc2lvbiBvZiBgYWN0aW9uc0JsYWNrbGlzdGAvYGFjdGlvbnNXaGl0ZWxpc3RgIHBhcmFtZXRlcnMuXHJcbiAgICovXHJcbiAgcHJlZGljYXRlPzogPFMsIEEgZXh0ZW5kcyBBY3Rpb24+KHN0YXRlOiBTLCBhY3Rpb246IEEpID0+IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQgYXMgYGZhbHNlYCwgaXQgd2lsbCBub3QgcmVjb3JkIHRoZSBjaGFuZ2VzIHRpbGwgY2xpY2tpbmcgb24gYFN0YXJ0IHJlY29yZGluZ2AgYnV0dG9uLlxyXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBSZWR1eCBlbmhhbmNlciwgZm9yIG90aGVycyB1c2UgYGF1dG9QYXVzZWAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgc2hvdWxkUmVjb3JkQ2hhbmdlcz86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQsIHdoZW5ldmVyIGNsaWNraW5nIG9uIGBQYXVzZSByZWNvcmRpbmdgIGJ1dHRvbiBhbmQgdGhlcmUgYXJlIGFjdGlvbnMgaW4gdGhlIGhpc3RvcnkgbG9nLCB3aWxsIGFkZCB0aGlzIGFjdGlvbiB0eXBlLlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgY29tbWl0IHdoZW4gcGF1c2VkLiBBdmFpbGFibGUgb25seSBmb3IgUmVkdXggZW5oYW5jZXIuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBcIkBAUEFVU0VEXCJcIlxyXG4gICAqL1xyXG4gIHBhdXNlQWN0aW9uVHlwZT86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIGF1dG8gcGF1c2VzIHdoZW4gdGhlIGV4dGVuc2lvbuKAmXMgd2luZG93IGlzIG5vdCBvcGVuZWQsIGFuZCBzbyBoYXMgemVybyBpbXBhY3Qgb24geW91ciBhcHAgd2hlbiBub3QgaW4gdXNlLlxyXG4gICAqIE5vdCBhdmFpbGFibGUgZm9yIFJlZHV4IGVuaGFuY2VyIChhcyBpdCBhbHJlYWR5IGRvZXMgaXQgYnV0IHN0b3JpbmcgdGhlIGRhdGEgdG8gYmUgc2VudCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGF1dG9QYXVzZT86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQgYXMgYHRydWVgLCBpdCB3aWxsIG5vdCBhbGxvdyBhbnkgbm9uLW1vbml0b3IgYWN0aW9ucyB0byBiZSBkaXNwYXRjaGVkIHRpbGwgY2xpY2tpbmcgb24gYFVubG9jayBjaGFuZ2VzYCBidXR0b24uXHJcbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIFJlZHV4IGVuaGFuY2VyLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBzaG91bGRTdGFydExvY2tlZD86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzZXQgdG8gYGZhbHNlYCwgd2lsbCBub3QgcmVjb21wdXRlIHRoZSBzdGF0ZXMgb24gaG90IHJlbG9hZGluZyAob3Igb24gcmVwbGFjaW5nIHRoZSByZWR1Y2VycykuIEF2YWlsYWJsZSBvbmx5IGZvciBSZWR1eCBlbmhhbmNlci5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBzaG91bGRIb3RSZWxvYWQ/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogaWYgc3BlY2lmaWVkIGFzIGB0cnVlYCwgd2hlbmV2ZXIgdGhlcmUncyBhbiBleGNlcHRpb24gaW4gcmVkdWNlcnMsIHRoZSBtb25pdG9ycyB3aWxsIHNob3cgdGhlIGVycm9yIG1lc3NhZ2UsIGFuZCBuZXh0IGFjdGlvbnMgd2lsbCBub3QgYmUgZGlzcGF0Y2hlZC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgc2hvdWxkQ2F0Y2hFcnJvcnM/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgdGhlIGV4dGVuc2lvbiwgc3BlY2lmeSB0aGUgZmVhdHVyZXMgeW91IGFsbG93LlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGFsbCBvZiB0aGUgZmVhdHVyZXMgYXJlIGVuYWJsZWQuIFdoZW4gc2V0IGFzIGFuIG9iamVjdCwgb25seSB0aG9zZSBpbmNsdWRlZCBhcyBgdHJ1ZWAgd2lsbCBiZSBhbGxvd2VkLlxyXG4gICAqIE5vdGUgdGhhdCBleGNlcHQgYHRydWVgL2BmYWxzZWAsIGBpbXBvcnRgIGFuZCBgZXhwb3J0YCBjYW4gYmUgc2V0IGFzIGBjdXN0b21gICh3aGljaCBpcyBieSBkZWZhdWx0IGZvciBSZWR1eCBlbmhhbmNlciksIG1lYW5pbmcgdGhhdCB0aGUgaW1wb3J0aW5nL2V4cG9ydGluZyBvY2N1cnMgb24gdGhlIGNsaWVudCBzaWRlLlxyXG4gICAqIE90aGVyd2lzZSwgeW91J2xsIGdldC9zZXQgdGhlIGRhdGEgcmlnaHQgZnJvbSB0aGUgbW9uaXRvciBwYXJ0LlxyXG4gICAqL1xyXG4gIGZlYXR1cmVzPzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydC9wYXVzZSByZWNvcmRpbmcgb2YgZGlzcGF0Y2hlZCBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHBhdXNlPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb2NrL3VubG9jayBkaXNwYXRjaGluZyBhY3Rpb25zIGFuZCBzaWRlIGVmZmVjdHNcclxuICAgICAqL1xyXG4gICAgbG9jaz86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogcGVyc2lzdCBzdGF0ZXMgb24gcGFnZSByZWxvYWRpbmdcclxuICAgICAqL1xyXG4gICAgcGVyc2lzdD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZXhwb3J0IGhpc3Rvcnkgb2YgYWN0aW9ucyBpbiBhIGZpbGVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0PzogYm9vbGVhbiB8ICdjdXN0b20nXHJcbiAgICAvKipcclxuICAgICAqIGltcG9ydCBoaXN0b3J5IG9mIGFjdGlvbnMgZnJvbSBhIGZpbGVcclxuICAgICAqL1xyXG4gICAgaW1wb3J0PzogYm9vbGVhbiB8ICdjdXN0b20nXHJcbiAgICAvKipcclxuICAgICAqIGp1bXAgYmFjayBhbmQgZm9ydGggKHRpbWUgdHJhdmVsbGluZylcclxuICAgICAqL1xyXG4gICAganVtcD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogc2tpcCAoY2FuY2VsKSBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHNraXA/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIGRyYWcgYW5kIGRyb3AgYWN0aW9ucyBpbiB0aGUgaGlzdG9yeSBsaXN0XHJcbiAgICAgKi9cclxuICAgIHJlb3JkZXI/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BhdGNoIGN1c3RvbSBhY3Rpb25zIG9yIGFjdGlvbiBjcmVhdG9yc1xyXG4gICAgICovXHJcbiAgICBkaXNwYXRjaD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGUgdGVzdHMgZm9yIHRoZSBzZWxlY3RlZCBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIHRlc3Q/OiBib29sZWFuXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIG9yIGEgc3RhY2t0cmFjZS1yZXR1cm5pbmcgZnVuY3Rpb24gdG8gcmVjb3JkIGNhbGwgc3RhY2sgdHJhY2VzIGZvciBkaXNwYXRjaGVkIGFjdGlvbnMuXHJcbiAgICogRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgdHJhY2U/OiBib29sZWFuIHwgKDxBIGV4dGVuZHMgQWN0aW9uPihhY3Rpb246IEEpID0+IHN0cmluZylcclxuICAvKipcclxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3RhY2sgdHJhY2UgZW50cmllcyB0byByZWNvcmQgcGVyIGFjdGlvbi4gRGVmYXVsdHMgdG8gMTAuXHJcbiAgICovXHJcbiAgdHJhY2VMaW1pdD86IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXBvc2VXaXRoRGV2VG9vbHM6IHtcclxuICAob3B0aW9uczogRW5oYW5jZXJPcHRpb25zKTogdHlwZW9mIGNvbXBvc2VcclxuICA8U3RvcmVFeHQ+KC4uLmZ1bmNzOiBBcnJheTxTdG9yZUVuaGFuY2VyPFN0b3JlRXh0Pj4pOiBTdG9yZUVuaGFuY2VyPFN0b3JlRXh0PlxyXG59ID1cclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cclxuICAgID8gKHdpbmRvdyBhcyBhbnkpLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xyXG4gICAgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2VcclxuICAgICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCAoYXJndW1lbnRzIGFzIGFueSkgYXMgRnVuY3Rpb25bXSlcclxuICAgICAgfVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBkZXZUb29sc0VuaGFuY2VyOiB7XHJcbiAgKG9wdGlvbnM6IEVuaGFuY2VyT3B0aW9ucyk6IFN0b3JlRW5oYW5jZXI8YW55PlxyXG59ID1cclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xyXG4gICAgPyAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fX1xyXG4gICAgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24obm9vcCkge1xyXG4gICAgICAgICAgcmV0dXJuIG5vb3BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIFwicGxhaW5cIiBvYmplY3QsIGkuZS4gYW4gb2JqZWN0IHdob3NlXHJcbiAqIHByb3RveXBlIGlzIHRoZSByb290IGBPYmplY3QucHJvdG90eXBlYC4gVGhpcyBpbmNsdWRlcyBvYmplY3RzIGNyZWF0ZWRcclxuICogdXNpbmcgb2JqZWN0IGxpdGVyYWxzLCBidXQgbm90IGZvciBpbnN0YW5jZSBmb3IgY2xhc3MgaW5zdGFuY2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIG9iamVjdCB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZVxyXG5cclxuICBsZXQgcHJvdG8gPSB2YWx1ZVxyXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XHJcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bylcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpID09PSBwcm90b1xyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lTWVhc3VyZVV0aWxzKG1heERlbGF5OiBudW1iZXIsIGZuTmFtZTogc3RyaW5nKSB7XHJcbiAgbGV0IGVsYXBzZWQgPSAwXHJcbiAgcmV0dXJuIHtcclxuICAgIG1lYXN1cmVUaW1lPFQ+KGZuOiAoKSA9PiBUKTogVCB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKClcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KClcclxuICAgICAgICBlbGFwc2VkICs9IGZpbmlzaGVkIC0gc3RhcnRlZFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2FybklmRXhjZWVkZWQoKSB7XHJcbiAgICAgIGlmIChlbGFwc2VkID4gbWF4RGVsYXkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYCR7Zm5OYW1lfSB0b29rICR7ZWxhcHNlZH1tcywgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSB3YXJuaW5nIHRocmVzaG9sZCBvZiAke21heERlbGF5fW1zLiBcclxuSWYgeW91ciBzdGF0ZSBvciBhY3Rpb25zIGFyZSB2ZXJ5IGxhcmdlLCB5b3UgbWF5IHdhbnQgdG8gZGlzYWJsZSB0aGUgbWlkZGxld2FyZSBhcyBpdCBtaWdodCBjYXVzZSB0b28gbXVjaCBvZiBhIHNsb3dkb3duIGluIGRldmVsb3BtZW50IG1vZGUuIFNlZSBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9nZXREZWZhdWx0TWlkZGxld2FyZSBmb3IgaW5zdHJ1Y3Rpb25zLlxyXG5JdCBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcywgc28geW91IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdC5gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmVBcnJheTxcclxuICBNaWRkbGV3YXJlcyBleHRlbmRzIE1pZGRsZXdhcmU8YW55LCBhbnk+XHJcbj4gZXh0ZW5kcyBBcnJheTxNaWRkbGV3YXJlcz4ge1xyXG4gIGNvbmNhdDxBZGRpdGlvbmFsTWlkZGxld2FyZXMgZXh0ZW5kcyBSZWFkb25seUFycmF5PE1pZGRsZXdhcmU8YW55LCBhbnk+Pj4oXHJcbiAgICBpdGVtczogQWRkaXRpb25hbE1pZGRsZXdhcmVzXHJcbiAgKTogTWlkZGxld2FyZUFycmF5PE1pZGRsZXdhcmVzIHwgQWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0+XHJcblxyXG4gIGNvbmNhdDxBZGRpdGlvbmFsTWlkZGxld2FyZXMgZXh0ZW5kcyBSZWFkb25seUFycmF5PE1pZGRsZXdhcmU8YW55LCBhbnk+Pj4oXHJcbiAgICAuLi5pdGVtczogQWRkaXRpb25hbE1pZGRsZXdhcmVzXHJcbiAgKTogTWlkZGxld2FyZUFycmF5PE1pZGRsZXdhcmVzIHwgQWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0+XHJcblxyXG4gIGNvbmNhdCguLi5hcnI6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gbmV3IE1pZGRsZXdhcmVBcnJheSguLi5zdXBlci5jb25jYXQoLi4uYXJyKSlcclxuICB9XHJcblxyXG4gIHByZXBlbmQ8QWRkaXRpb25hbE1pZGRsZXdhcmVzIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPGFueSwgYW55Pj4+KFxyXG4gICAgaXRlbXM6IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1xyXG4gICk6IE1pZGRsZXdhcmVBcnJheTxBZGRpdGlvbmFsTWlkZGxld2FyZXNbbnVtYmVyXSB8IE1pZGRsZXdhcmVzPlxyXG5cclxuICBwcmVwZW5kPEFkZGl0aW9uYWxNaWRkbGV3YXJlcyBleHRlbmRzIFJlYWRvbmx5QXJyYXk8TWlkZGxld2FyZTxhbnksIGFueT4+PihcclxuICAgIC4uLml0ZW1zOiBBZGRpdGlvbmFsTWlkZGxld2FyZXNcclxuICApOiBNaWRkbGV3YXJlQXJyYXk8QWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0gfCBNaWRkbGV3YXJlcz5cclxuXHJcbiAgcHJlcGVuZCguLi5hcnI6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyclswXSkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBNaWRkbGV3YXJlQXJyYXkoLi4uYXJyWzBdLmNvbmNhdCh0aGlzKSlcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgTWlkZGxld2FyZUFycmF5KC4uLmFyci5jb25jYXQodGhpcykpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgZ2V0VGltZU1lYXN1cmVVdGlscyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG50eXBlIEVudHJ5UHJvY2Vzc29yID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBhbnlcclxuXHJcbmNvbnN0IGlzUHJvZHVjdGlvbjogYm9vbGVhbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuY29uc3QgcHJlZml4OiBzdHJpbmcgPSAnSW52YXJpYW50IGZhaWxlZCdcclxuXHJcbi8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb25kaXRpb24gZmFpbHNcclxuLy8gU3RyaXAgb3V0IGVycm9yIG1lc3NhZ2VzIGZvciBwcm9kdWN0aW9uXHJcbi8vID4gTm90IHByb3ZpZGluZyBhbiBpbmxpbmUgZGVmYXVsdCBhcmd1bWVudCBmb3IgbWVzc2FnZSBhcyB0aGUgcmVzdWx0IGlzIHNtYWxsZXJcclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbjogYW55LCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIC8vIENvbmRpdGlvbiBub3QgcGFzc2VkXHJcblxyXG4gIC8vIEluIHByb2R1Y3Rpb24gd2Ugc3RyaXAgdGhlIG1lc3NhZ2UgYnV0IHN0aWxsIHRocm93XHJcbiAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeClcclxuICB9XHJcblxyXG4gIC8vIFdoZW4gbm90IGluIHByb2R1Y3Rpb24gd2UgYWxsb3cgdGhlIG1lc3NhZ2UgdG8gcGFzcyB0aHJvdWdoXHJcbiAgLy8gKlRoaXMgYmxvY2sgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24gYnVpbGRzKlxyXG4gIHRocm93IG5ldyBFcnJvcihgJHtwcmVmaXh9OiAke21lc3NhZ2UgfHwgJyd9YClcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5KFxyXG4gIG9iajogYW55LFxyXG4gIHNlcmlhbGl6ZXI/OiBFbnRyeVByb2Nlc3NvcixcclxuICBpbmRlbnQ/OiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgZGVjeWNsZXI/OiBFbnRyeVByb2Nlc3NvclxyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlciksIGluZGVudClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplKFxyXG4gIHNlcmlhbGl6ZXI/OiBFbnRyeVByb2Nlc3NvcixcclxuICBkZWN5Y2xlcj86IEVudHJ5UHJvY2Vzc29yXHJcbik6IEVudHJ5UHJvY2Vzc29yIHtcclxuICBsZXQgc3RhY2s6IGFueVtdID0gW10sXHJcbiAgICBrZXlzOiBhbnlbXSA9IFtdXHJcblxyXG4gIGlmICghZGVjeWNsZXIpXHJcbiAgICBkZWN5Y2xlciA9IGZ1bmN0aW9uKF86IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKSByZXR1cm4gJ1tDaXJjdWxhciB+XSdcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnW0NpcmN1bGFyIH4uJyArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oJy4nKSArICddJ1xyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBhbnksIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcylcclxuICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKVxyXG4gICAgICB+dGhpc1BvcyA/IGtleXMuc3BsaWNlKHRoaXNQb3MsIEluZmluaXR5LCBrZXkpIDoga2V5cy5wdXNoKGtleSlcclxuICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkgdmFsdWUgPSBkZWN5Y2xlciEuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxyXG4gICAgfSBlbHNlIHN0YWNrLnB1c2godmFsdWUpXHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZhbHVlIDogc2VyaWFsaXplci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgYGlzSW1tdXRhYmxlYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW1tdXRhYmxlRGVmYXVsdCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFja0Zvck11dGF0aW9ucyhcclxuICBpc0ltbXV0YWJsZTogSXNJbW11dGFibGVGdW5jLFxyXG4gIGlnbm9yZVBhdGhzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCxcclxuICBvYmo6IGFueVxyXG4pIHtcclxuICBjb25zdCB0cmFja2VkUHJvcGVydGllcyA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iailcclxuICByZXR1cm4ge1xyXG4gICAgZGV0ZWN0TXV0YXRpb25zKCkge1xyXG4gICAgICByZXR1cm4gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnRpZXMsIG9iailcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUcmFja2VkUHJvcGVydHkge1xyXG4gIHZhbHVlOiBhbnlcclxuICBjaGlsZHJlbjogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFja1Byb3BlcnRpZXMoXHJcbiAgaXNJbW11dGFibGU6IElzSW1tdXRhYmxlRnVuYyxcclxuICBpZ25vcmVQYXRoczogSWdub3JlUGF0aHMgPSBbXSxcclxuICBvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sXHJcbiAgcGF0aDogc3RyaW5nW10gPSBbXVxyXG4pIHtcclxuICBjb25zdCB0cmFja2VkOiBQYXJ0aWFsPFRyYWNrZWRQcm9wZXJ0eT4gPSB7IHZhbHVlOiBvYmogfVxyXG5cclxuICBpZiAoIWlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgIHRyYWNrZWQuY2hpbGRyZW4gPSB7fVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICBjb25zdCBjaGlsZFBhdGggPSBwYXRoLmNvbmNhdChrZXkpXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpZ25vcmVQYXRocy5sZW5ndGggJiZcclxuICAgICAgICBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMVxyXG4gICAgICApIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFja2VkLmNoaWxkcmVuW2tleV0gPSB0cmFja1Byb3BlcnRpZXMoXHJcbiAgICAgICAgaXNJbW11dGFibGUsXHJcbiAgICAgICAgaWdub3JlUGF0aHMsXHJcbiAgICAgICAgb2JqW2tleV0sXHJcbiAgICAgICAgY2hpbGRQYXRoXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRyYWNrZWQgYXMgVHJhY2tlZFByb3BlcnR5XHJcbn1cclxuXHJcbnR5cGUgSWdub3JlUGF0aHMgPSBzdHJpbmdbXVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0TXV0YXRpb25zKFxyXG4gIGlzSW1tdXRhYmxlOiBJc0ltbXV0YWJsZUZ1bmMsXHJcbiAgaWdub3JlUGF0aHM6IElnbm9yZVBhdGhzID0gW10sXHJcbiAgdHJhY2tlZFByb3BlcnR5OiBUcmFja2VkUHJvcGVydHksXHJcbiAgb2JqOiBhbnksXHJcbiAgc2FtZVBhcmVudFJlZjogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIHBhdGg6IHN0cmluZ1tdID0gW11cclxuKTogeyB3YXNNdXRhdGVkOiBib29sZWFuOyBwYXRoPzogc3RyaW5nW10gfSB7XHJcbiAgY29uc3QgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHVuZGVmaW5lZFxyXG5cclxuICBjb25zdCBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqXHJcblxyXG4gIGlmIChzYW1lUGFyZW50UmVmICYmICFzYW1lUmVmICYmICFOdW1iZXIuaXNOYU4ob2JqKSkge1xyXG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aCB9XHJcbiAgfVxyXG5cclxuICBpZiAoaXNJbW11dGFibGUocHJldk9iaikgfHwgaXNJbW11dGFibGUob2JqKSkge1xyXG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogZmFsc2UgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2F0aGVyIGFsbCBrZXlzIGZyb20gcHJldiAodHJhY2tlZCkgYW5kIGFmdGVyIG9ianNcclxuICBjb25zdCBrZXlzVG9EZXRlY3Q6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge31cclxuICBPYmplY3Qua2V5cyh0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWVcclxuICB9KVxyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoa2V5c1RvRGV0ZWN0KVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxyXG4gICAgY29uc3QgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoa2V5KVxyXG4gICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGRldGVjdE11dGF0aW9ucyhcclxuICAgICAgaXNJbW11dGFibGUsXHJcbiAgICAgIGlnbm9yZVBhdGhzLFxyXG4gICAgICB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW5ba2V5XSxcclxuICAgICAgb2JqW2tleV0sXHJcbiAgICAgIHNhbWVSZWYsXHJcbiAgICAgIGNoaWxkUGF0aFxyXG4gICAgKVxyXG5cclxuICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH1cclxufVxyXG5cclxudHlwZSBJc0ltbXV0YWJsZUZ1bmMgPSAodmFsdWU6IGFueSkgPT4gYm9vbGVhblxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICBDYWxsYmFjayBmdW5jdGlvbiB0byBjaGVjayBpZiBhIHZhbHVlIGlzIGNvbnNpZGVyZWQgdG8gYmUgaW1tdXRhYmxlLlxyXG4gICAgVGhpcyBmdW5jdGlvbiBpcyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRvIGV2ZXJ5IHZhbHVlIGNvbnRhaW5lZCBpbiB0aGUgc3RhdGUuXHJcbiAgICBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB3aWxsIHJldHVybiB0cnVlIGZvciBwcmltaXRpdmUgdHlwZXMgXHJcbiAgICAobGlrZSBudW1iZXJzLCBzdHJpbmdzLCBib29sZWFucywgbnVsbCBhbmQgdW5kZWZpbmVkKS5cclxuICAgKi9cclxuICBpc0ltbXV0YWJsZT86IElzSW1tdXRhYmxlRnVuY1xyXG4gIC8qKiBcclxuICAgIEFuIGFycmF5IG9mIGRvdC1zZXBhcmF0ZWQgcGF0aCBzdHJpbmdzIHRoYXQgbWF0Y2ggbmFtZWQgbm9kZXMgZnJvbSBcclxuICAgIHRoZSByb290IHN0YXRlIHRvIGlnbm9yZSB3aGVuIGNoZWNraW5nIGZvciBpbW11dGFiaWxpdHkuXHJcbiAgICBEZWZhdWx0cyB0byB1bmRlZmluZWRcclxuICAgKi9cclxuICBpZ25vcmVkUGF0aHM/OiBzdHJpbmdbXVxyXG4gIC8qKiBQcmludCBhIHdhcm5pbmcgaWYgY2hlY2tzIHRha2UgbG9uZ2VyIHRoYW4gTiBtcy4gRGVmYXVsdDogMzJtcyAqL1xyXG4gIHdhcm5BZnRlcj86IG51bWJlclxyXG4gIC8vIEBkZXByZWNhdGVkLiBVc2UgaWdub3JlZFBhdGhzXHJcbiAgaWdub3JlPzogc3RyaW5nW11cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtaWRkbGV3YXJlIHRoYXQgY2hlY2tzIHdoZXRoZXIgYW55IHN0YXRlIHdhcyBtdXRhdGVkIGluIGJldHdlZW5cclxuICogZGlzcGF0Y2hlcyBvciBkdXJpbmcgYSBkaXNwYXRjaC4gSWYgYW55IG11dGF0aW9ucyBhcmUgZGV0ZWN0ZWQsIGFuIGVycm9yIGlzXHJcbiAqIHRocm93bi5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgTWlkZGxld2FyZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKFxyXG4gIG9wdGlvbnM6IEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG4pOiBNaWRkbGV3YXJlIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcmV0dXJuICgpID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoYWN0aW9uKVxyXG4gIH1cclxuXHJcbiAgbGV0IHtcclxuICAgIGlzSW1tdXRhYmxlID0gaXNJbW11dGFibGVEZWZhdWx0LFxyXG4gICAgaWdub3JlZFBhdGhzLFxyXG4gICAgd2FybkFmdGVyID0gMzIsXHJcbiAgICBpZ25vcmVcclxuICB9ID0gb3B0aW9uc1xyXG5cclxuICAvLyBBbGlhcyBpZ25vcmUtPmlnbm9yZWRQYXRocywgYnV0IHByZWZlciBpZ25vcmVkUGF0aHMgaWYgcHJlc2VudFxyXG4gIGlnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocyB8fCBpZ25vcmVcclxuXHJcbiAgY29uc3QgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpXHJcblxyXG4gIHJldHVybiAoeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcbiAgICBsZXQgdHJhY2tlciA9IHRyYWNrKHN0YXRlKVxyXG5cclxuICAgIGxldCByZXN1bHRcclxuICAgIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICAgIGNvbnN0IG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMoXHJcbiAgICAgICAgd2FybkFmdGVyLFxyXG4gICAgICAgICdJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbiAgICAgIClcclxuXHJcbiAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKClcclxuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxyXG4gICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSlcclxuXHJcbiAgICAgICAgaW52YXJpYW50KFxyXG4gICAgICAgICAgIXJlc3VsdC53YXNNdXRhdGVkLFxyXG4gICAgICAgICAgYEEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGJldHdlZW4gZGlzcGF0Y2hlcywgaW4gdGhlIHBhdGggJyR7KFxyXG4gICAgICAgICAgICByZXN1bHQucGF0aCB8fCBbXVxyXG4gICAgICAgICAgKS5qb2luKFxyXG4gICAgICAgICAgICAnLidcclxuICAgICAgICAgICl9Jy4gIFRoaXMgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvci4gKGh0dHBzOi8vcmVkdXguanMub3JnL3Ryb3VibGVzaG9vdGluZyNuZXZlci1tdXRhdGUtcmVkdWNlci1hcmd1bWVudHMpYFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbilcclxuXHJcbiAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKClcclxuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxyXG4gICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSlcclxuXHJcbiAgICAgICAgcmVzdWx0Lndhc011dGF0ZWQgJiZcclxuICAgICAgICAgIGludmFyaWFudChcclxuICAgICAgICAgICAgIXJlc3VsdC53YXNNdXRhdGVkLFxyXG4gICAgICAgICAgICBgQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiAkeyhcclxuICAgICAgICAgICAgICByZXN1bHQucGF0aCB8fCBbXVxyXG4gICAgICAgICAgICApLmpvaW4oXHJcbiAgICAgICAgICAgICAgJy4nXHJcbiAgICAgICAgICAgICl9LiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uICR7c3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICAgICApfS4gKGh0dHBzOi8vcmVkdXguanMub3JnL3Ryb3VibGVzaG9vdGluZyNuZXZlci1tdXRhdGUtcmVkdWNlci1hcmd1bWVudHMpYFxyXG4gICAgICAgICAgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKClcclxuXHJcbiAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCdcclxuaW1wb3J0IHsgTWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBnZXRUaW1lTWVhc3VyZVV0aWxzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBcInBsYWluXCIsIGkuZS4gYSB2YWx1ZSB0aGF0IGlzIGVpdGhlclxyXG4gKiBkaXJlY3RseSBKU09OLXNlcmlhbGl6YWJsZSAoYm9vbGVhbiwgbnVtYmVyLCBzdHJpbmcsIGFycmF5LCBwbGFpbiBvYmplY3QpXHJcbiAqIG9yIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW4odmFsOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgIHZhbCA9PT0gbnVsbCB8fFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHxcclxuICAgIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fFxyXG4gICAgdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHxcclxuICAgIEFycmF5LmlzQXJyYXkodmFsKSB8fFxyXG4gICAgaXNQbGFpbk9iamVjdCh2YWwpXHJcbiAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTm9uU2VyaWFsaXphYmxlVmFsdWUge1xyXG4gIGtleVBhdGg6IHN0cmluZ1xyXG4gIHZhbHVlOiB1bmtub3duXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKFxyXG4gIHZhbHVlOiB1bmtub3duLFxyXG4gIHBhdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiA9IFtdLFxyXG4gIGlzU2VyaWFsaXphYmxlOiAodmFsdWU6IHVua25vd24pID0+IGJvb2xlYW4gPSBpc1BsYWluLFxyXG4gIGdldEVudHJpZXM/OiAodmFsdWU6IHVua25vd24pID0+IFtzdHJpbmcsIGFueV1bXSxcclxuICBpZ25vcmVkUGF0aHM6IHN0cmluZ1tdID0gW11cclxuKTogTm9uU2VyaWFsaXphYmxlVmFsdWUgfCBmYWxzZSB7XHJcbiAgbGV0IGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlOiBOb25TZXJpYWxpemFibGVWYWx1ZSB8IGZhbHNlXHJcblxyXG4gIGlmICghaXNTZXJpYWxpemFibGUodmFsdWUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXlQYXRoOiBwYXRoLmpvaW4oJy4nKSB8fCAnPHJvb3Q+JyxcclxuICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb25zdCBlbnRyaWVzID0gZ2V0RW50cmllcyAhPSBudWxsID8gZ2V0RW50cmllcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSlcclxuXHJcbiAgY29uc3QgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDBcclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcGVydHksIG5lc3RlZFZhbHVlXSBvZiBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBuZXN0ZWRQYXRoID0gcGF0aC5jb25jYXQocHJvcGVydHkpXHJcblxyXG4gICAgaWYgKGhhc0lnbm9yZWRQYXRocyAmJiBpZ25vcmVkUGF0aHMuaW5kZXhPZihuZXN0ZWRQYXRoLmpvaW4oJy4nKSkgPj0gMCkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNTZXJpYWxpemFibGUobmVzdGVkVmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aC5qb2luKCcuJyksXHJcbiAgICAgICAgdmFsdWU6IG5lc3RlZFZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShcclxuICAgICAgICBuZXN0ZWRWYWx1ZSxcclxuICAgICAgICBuZXN0ZWRQYXRoLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZFBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSkge1xyXG4gICAgICAgIHJldHVybiBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGEgdmFsdWUgaXMgY29uc2lkZXJlZCBzZXJpYWxpemFibGUuIFRoaXNcclxuICAgKiBmdW5jdGlvbiBpcyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRvIGV2ZXJ5IHZhbHVlIGNvbnRhaW5lZCBpbiB0aGVcclxuICAgKiBzdGF0ZS4gRGVmYXVsdHMgdG8gYGlzUGxhaW4oKWAuXHJcbiAgICovXHJcbiAgaXNTZXJpYWxpemFibGU/OiAodmFsdWU6IGFueSkgPT4gYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXRyaWV2ZSBlbnRyaWVzIGZyb20gZWFjaFxyXG4gICAqIHZhbHVlLiAgSWYgdW5zcGVjaWZpZWQsIGBPYmplY3QuZW50cmllc2Agd2lsbCBiZSB1c2VkLiBEZWZhdWx0c1xyXG4gICAqIHRvIGB1bmRlZmluZWRgLlxyXG4gICAqL1xyXG4gIGdldEVudHJpZXM/OiAodmFsdWU6IGFueSkgPT4gW3N0cmluZywgYW55XVtdXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IG9mIGFjdGlvbiB0eXBlcyB0byBpZ25vcmUgd2hlbiBjaGVja2luZyBmb3Igc2VyaWFsaXphYmlsaXR5LlxyXG4gICAqIERlZmF1bHRzIHRvIFtdXHJcbiAgICovXHJcbiAgaWdub3JlZEFjdGlvbnM/OiBzdHJpbmdbXVxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBkb3Qtc2VwYXJhdGVkIHBhdGggc3RyaW5ncyB0byBpZ25vcmUgd2hlbiBjaGVja2luZ1xyXG4gICAqIGZvciBzZXJpYWxpemFiaWxpdHksIERlZmF1bHRzIHRvIFsnbWV0YS5hcmcnXVxyXG4gICAqL1xyXG4gIGlnbm9yZWRBY3Rpb25QYXRocz86IHN0cmluZ1tdXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IG9mIGRvdC1zZXBhcmF0ZWQgcGF0aCBzdHJpbmdzIHRvIGlnbm9yZSB3aGVuIGNoZWNraW5nXHJcbiAgICogZm9yIHNlcmlhbGl6YWJpbGl0eSwgRGVmYXVsdHMgdG8gW11cclxuICAgKi9cclxuICBpZ25vcmVkUGF0aHM/OiBzdHJpbmdbXVxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGlvbiB0aW1lIHdhcm5pbmcgdGhyZXNob2xkLiBJZiB0aGUgbWlkZGxld2FyZSB0YWtlcyBsb25nZXJcclxuICAgKiB0aGFuIGB3YXJuQWZ0ZXJgIG1zLCBhIHdhcm5pbmcgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNvbnNvbGUuXHJcbiAgICogRGVmYXVsdHMgdG8gMzJtcy5cclxuICAgKi9cclxuICB3YXJuQWZ0ZXI/OiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtaWRkbGV3YXJlIHRoYXQsIGFmdGVyIGV2ZXJ5IHN0YXRlIGNoYW5nZSwgY2hlY2tzIGlmIHRoZSBuZXdcclxuICogc3RhdGUgaXMgc2VyaWFsaXphYmxlLiBJZiBhIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgaXMgZm91bmQgd2l0aGluIHRoZVxyXG4gKiBzdGF0ZSwgYW4gZXJyb3IgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZS5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgTWlkZGxld2FyZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKFxyXG4gIG9wdGlvbnM6IFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG4pOiBNaWRkbGV3YXJlIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcmV0dXJuICgpID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoYWN0aW9uKVxyXG4gIH1cclxuICBjb25zdCB7XHJcbiAgICBpc1NlcmlhbGl6YWJsZSA9IGlzUGxhaW4sXHJcbiAgICBnZXRFbnRyaWVzLFxyXG4gICAgaWdub3JlZEFjdGlvbnMgPSBbXSxcclxuICAgIGlnbm9yZWRBY3Rpb25QYXRocyA9IFsnbWV0YS5hcmcnXSxcclxuICAgIGlnbm9yZWRQYXRocyA9IFtdLFxyXG4gICAgd2FybkFmdGVyID0gMzJcclxuICB9ID0gb3B0aW9uc1xyXG5cclxuICByZXR1cm4gc3RvcmVBUEkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xyXG4gICAgaWYgKGlnbm9yZWRBY3Rpb25zLmxlbmd0aCAmJiBpZ25vcmVkQWN0aW9ucy5pbmRleE9mKGFjdGlvbi50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMoXHJcbiAgICAgIHdhcm5BZnRlcixcclxuICAgICAgJ1NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuICAgIClcclxuICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoXHJcbiAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZEFjdGlvblBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBrZXlQYXRoLCB2YWx1ZSB9ID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgYEEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogXFxgJHtrZXlQYXRofVxcYC4gVmFsdWU6YCxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgJ1xcblRha2UgYSBsb29rIGF0IHRoZSBsb2dpYyB0aGF0IGRpc3BhdGNoZWQgdGhpcyBhY3Rpb246ICcsXHJcbiAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAnXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvYWN0aW9ucyN3aHktc2hvdWxkLXR5cGUtYmUtYS1zdHJpbmctb3ItYXQtbGVhc3Qtc2VyaWFsaXphYmxlLXdoeS1zaG91bGQtbXktYWN0aW9uLXR5cGVzLWJlLWNvbnN0YW50cyknLFxyXG4gICAgICAgICAgJ1xcbihUbyBhbGxvdyBub24tc2VyaWFsaXphYmxlIHZhbHVlcyBzZWU6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdXNhZ2UvdXNhZ2UtZ3VpZGUjd29ya2luZy13aXRoLW5vbi1zZXJpYWxpemFibGUtZGF0YSknXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKVxyXG5cclxuICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKFxyXG4gICAgICAgIHN0YXRlLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIGlzU2VyaWFsaXphYmxlLFxyXG4gICAgICAgIGdldEVudHJpZXMsXHJcbiAgICAgICAgaWdub3JlZFBhdGhzXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IGtleVBhdGgsIHZhbHVlIH0gPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWVcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIGBBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIHRoZSBzdGF0ZSwgaW4gdGhlIHBhdGg6IFxcYCR7a2V5UGF0aH1cXGAuIFZhbHVlOmAsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIGBcclxuVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhpcyBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX0uXHJcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL29yZ2FuaXppbmctc3RhdGUjY2FuLWktcHV0LWZ1bmN0aW9ucy1wcm9taXNlcy1vci1vdGhlci1ub24tc2VyaWFsaXphYmxlLWl0ZW1zLWluLW15LXN0b3JlLXN0YXRlKWBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKClcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1pZGRsZXdhcmUsIEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlLCB7IFRodW5rTWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQge1xyXG4gIC8qIFBST0RfU1RBUlRfUkVNT1ZFX1VNRCAqL1xyXG4gIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcclxuICAvKiBQUk9EX1NUT1BfUkVNT1ZFX1VNRCAqL1xyXG4gIEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufSBmcm9tICcuL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLFxyXG4gIFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufSBmcm9tICcuL3NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSdcclxuaW1wb3J0IHsgTWlkZGxld2FyZUFycmF5IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih4OiBhbnkpOiB4IGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nXHJcbn1cclxuXHJcbmludGVyZmFjZSBUaHVua09wdGlvbnM8RSA9IGFueT4ge1xyXG4gIGV4dHJhQXJndW1lbnQ6IEVcclxufVxyXG5cclxuaW50ZXJmYWNlIEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucyB7XHJcbiAgdGh1bms/OiBib29sZWFuIHwgVGh1bmtPcHRpb25zXHJcbiAgaW1tdXRhYmxlQ2hlY2s/OiBib29sZWFuIHwgSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9uc1xyXG4gIHNlcmlhbGl6YWJsZUNoZWNrPzogYm9vbGVhbiB8IFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGh1bmtNaWRkbGV3YXJlRm9yPFxyXG4gIFMsXHJcbiAgTyBleHRlbmRzIEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucyA9IHt9XHJcbj4gPSBPIGV4dGVuZHMge1xyXG4gIHRodW5rOiBmYWxzZVxyXG59XHJcbiAgPyBuZXZlclxyXG4gIDogTyBleHRlbmRzIHsgdGh1bms6IHsgZXh0cmFBcmd1bWVudDogaW5mZXIgRSB9IH1cclxuICA/IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24sIEU+XHJcbiAgOlxyXG4gICAgICB8IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24sIG51bGw+IC8vVGhlIFRodW5rTWlkZGxld2FyZSB3aXRoIGEgYG51bGxgIEV4dHJhQXJndW1lbnQgaXMgaGVyZSB0byBwcm92aWRlIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LlxyXG4gICAgICB8IFRodW5rTWlkZGxld2FyZTxTLCBBbnlBY3Rpb24+XHJcblxyXG5leHBvcnQgdHlwZSBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmU8UyA9IGFueT4gPSA8XHJcbiAgTyBleHRlbmRzIFBhcnRpYWw8R2V0RGVmYXVsdE1pZGRsZXdhcmVPcHRpb25zPiA9IHtcclxuICAgIHRodW5rOiB0cnVlXHJcbiAgICBpbW11dGFibGVDaGVjazogdHJ1ZVxyXG4gICAgc2VyaWFsaXphYmxlQ2hlY2s6IHRydWVcclxuICB9XHJcbj4oXHJcbiAgb3B0aW9ucz86IE9cclxuKSA9PiBNaWRkbGV3YXJlQXJyYXk8TWlkZGxld2FyZTx7fSwgUz4gfCBUaHVua01pZGRsZXdhcmVGb3I8UywgTz4+XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZTxcclxuICBTID0gYW55XHJcbj4oKTogQ3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlPFM+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW55IGFycmF5IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgbWlkZGxld2FyZSBpbnN0YWxsZWQgYnlcclxuICogYGNvbmZpZ3VyZVN0b3JlKClgLiBVc2VmdWwgaWYgeW91IHdhbnQgdG8gY29uZmlndXJlIHlvdXIgc3RvcmUgd2l0aCBhIGN1c3RvbVxyXG4gKiBgbWlkZGxld2FyZWAgYXJyYXkgYnV0IHN0aWxsIGtlZXAgdGhlIGRlZmF1bHQgc2V0LlxyXG4gKlxyXG4gKiBAcmV0dXJuIFRoZSBkZWZhdWx0IG1pZGRsZXdhcmUgdXNlZCBieSBgY29uZmlndXJlU3RvcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZTxcclxuICBTID0gYW55LFxyXG4gIE8gZXh0ZW5kcyBQYXJ0aWFsPEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucz4gPSB7XHJcbiAgICB0aHVuazogdHJ1ZVxyXG4gICAgaW1tdXRhYmxlQ2hlY2s6IHRydWVcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB0cnVlXHJcbiAgfVxyXG4+KFxyXG4gIG9wdGlvbnM6IE8gPSB7fSBhcyBPXHJcbik6IE1pZGRsZXdhcmVBcnJheTxNaWRkbGV3YXJlPHt9LCBTPiB8IFRodW5rTWlkZGxld2FyZUZvcjxTLCBPPj4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRodW5rID0gdHJ1ZSxcclxuICAgIGltbXV0YWJsZUNoZWNrID0gdHJ1ZSxcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrID0gdHJ1ZVxyXG4gIH0gPSBvcHRpb25zXHJcblxyXG4gIGxldCBtaWRkbGV3YXJlQXJyYXk6IE1pZGRsZXdhcmU8e30sIFM+W10gPSBuZXcgTWlkZGxld2FyZUFycmF5KClcclxuXHJcbiAgaWYgKHRodW5rKSB7XHJcbiAgICBpZiAoaXNCb29sZWFuKHRodW5rKSkge1xyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChcclxuICAgICAgICB0aHVua01pZGRsZXdhcmUud2l0aEV4dHJhQXJndW1lbnQodGh1bmsuZXh0cmFBcmd1bWVudClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGlmIChpbW11dGFibGVDaGVjaykge1xyXG4gICAgICAvKiBQUk9EX1NUQVJUX1JFTU9WRV9VTUQgKi9cclxuICAgICAgbGV0IGltbXV0YWJsZU9wdGlvbnM6IEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG5cclxuICAgICAgaWYgKCFpc0Jvb2xlYW4oaW1tdXRhYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgaW1tdXRhYmxlT3B0aW9ucyA9IGltbXV0YWJsZUNoZWNrXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KFxyXG4gICAgICAgIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShpbW11dGFibGVPcHRpb25zKVxyXG4gICAgICApXHJcbiAgICAgIC8qIFBST0RfU1RPUF9SRU1PVkVfVU1EICovXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlcmlhbGl6YWJsZUNoZWNrKSB7XHJcbiAgICAgIGxldCBzZXJpYWxpemFibGVPcHRpb25zOiBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zID0ge31cclxuXHJcbiAgICAgIGlmICghaXNCb29sZWFuKHNlcmlhbGl6YWJsZUNoZWNrKSkge1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVja1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChcclxuICAgICAgICBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoc2VyaWFsaXphYmxlT3B0aW9ucylcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1pZGRsZXdhcmVBcnJheSBhcyBhbnlcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZVN0b3JlLFxyXG4gIGNvbXBvc2UsXHJcbiAgYXBwbHlNaWRkbGV3YXJlLFxyXG4gIGNvbWJpbmVSZWR1Y2VycyxcclxuICBSZWR1Y2VyLFxyXG4gIFJlZHVjZXJzTWFwT2JqZWN0LFxyXG4gIE1pZGRsZXdhcmUsXHJcbiAgQWN0aW9uLFxyXG4gIEFueUFjdGlvbixcclxuICBTdG9yZUVuaGFuY2VyLFxyXG4gIFN0b3JlLFxyXG4gIERlZXBQYXJ0aWFsLFxyXG4gIERpc3BhdGNoXHJcbn0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyxcclxuICBFbmhhbmNlck9wdGlvbnMgYXMgRGV2VG9vbHNPcHRpb25zXHJcbn0gZnJvbSAnLi9kZXZ0b29sc0V4dGVuc2lvbidcclxuXHJcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJy4vaXNQbGFpbk9iamVjdCdcclxuaW1wb3J0IHtcclxuICBUaHVua01pZGRsZXdhcmVGb3IsXHJcbiAgY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSxcclxuICBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmVcclxufSBmcm9tICcuL2dldERlZmF1bHRNaWRkbGV3YXJlJ1xyXG5pbXBvcnQgeyBEaXNwYXRjaEZvck1pZGRsZXdhcmVzIH0gZnJvbSAnLi90c0hlbHBlcnMnXHJcblxyXG5jb25zdCBJU19QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIGZ1bmN0aW9uIHR5cGUsIHRvIGJlIHVzZWQgaW4gYENvbmZpZ3VyZVN0b3JlT3B0aW9ucy5lbmhhbmNlcnNgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmZpZ3VyZUVuaGFuY2Vyc0NhbGxiYWNrID0gKFxyXG4gIGRlZmF1bHRFbmhhbmNlcnM6IFN0b3JlRW5oYW5jZXJbXVxyXG4pID0+IFN0b3JlRW5oYW5jZXJbXVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjb25maWd1cmVTdG9yZSgpYC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmVTdG9yZU9wdGlvbnM8XHJcbiAgUyA9IGFueSxcclxuICBBIGV4dGVuZHMgQWN0aW9uID0gQW55QWN0aW9uLFxyXG4gIE0gZXh0ZW5kcyBNaWRkbGV3YXJlczxTPiA9IE1pZGRsZXdhcmVzPFM+XHJcbj4ge1xyXG4gIC8qKlxyXG4gICAqIEEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3QgcmVkdWNlciwgb3IgYW5cclxuICAgKiBvYmplY3Qgb2Ygc2xpY2UgcmVkdWNlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBgY29tYmluZVJlZHVjZXJzKClgLlxyXG4gICAqL1xyXG4gIHJlZHVjZXI6IFJlZHVjZXI8UywgQT4gfCBSZWR1Y2Vyc01hcE9iamVjdDxTLCBBPlxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBSZWR1eCBtaWRkbGV3YXJlIHRvIGluc3RhbGwuIElmIG5vdCBzdXBwbGllZCwgZGVmYXVsdHMgdG9cclxuICAgKiB0aGUgc2V0IG9mIG1pZGRsZXdhcmUgcmV0dXJuZWQgYnkgYGdldERlZmF1bHRNaWRkbGV3YXJlKClgLlxyXG4gICAqL1xyXG4gIG1pZGRsZXdhcmU/OiAoKGdldERlZmF1bHRNaWRkbGV3YXJlOiBDdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmU8Uz4pID0+IE0pIHwgTVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBSZWR1eCBEZXZUb29scyBpbnRlZ3JhdGlvbi4gRGVmYXVsdHMgdG8gYHRydWVgLlxyXG4gICAqXHJcbiAgICogQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGNhbiBiZSBkb25lIGJ5IHBhc3NpbmcgUmVkdXggRGV2VG9vbHMgb3B0aW9uc1xyXG4gICAqL1xyXG4gIGRldlRvb2xzPzogYm9vbGVhbiB8IERldlRvb2xzT3B0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSwgc2FtZSBhcyBSZWR1eCdzIGNyZWF0ZVN0b3JlLlxyXG4gICAqIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0IHRvIGh5ZHJhdGUgdGhlIHN0YXRlXHJcbiAgICogZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGEgcHJldmlvdXNseSBzZXJpYWxpemVkXHJcbiAgICogdXNlciBzZXNzaW9uLiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnMoKWAgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyXHJcbiAgICogZnVuY3Rpb24gKGVpdGhlciBkaXJlY3RseSBvciBpbmRpcmVjdGx5IGJ5IHBhc3NpbmcgYW4gb2JqZWN0IGFzIGByZWR1Y2VyYCksXHJcbiAgICogdGhpcyBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIHRoZSByZWR1Y2VyIG1hcCBrZXlzLlxyXG4gICAqL1xyXG4gIC8vIE5PVEU6IFRoZSBuZWVkbGVzc2x5IGNvbXBsaWNhdGVkIGBTIGV4dGVuZHMgYW55ID8gUyA6IFNgIGluc3RlYWQgb2YganVzdFxyXG4gIC8vIGBTYCBlbnN1cmVzIHRoYXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgZG9lc24ndCBhdHRlbXB0IHRvIGluZmVyIGBTYFxyXG4gIC8vIGJhc2VkIG9uIHRoZSB2YWx1ZSBwYXNzZWQgYXMgYHByZWxvYWRlZFN0YXRlYCwgd2hpY2ggbWlnaHQgYmUgYSBwYXJ0aWFsXHJcbiAgLy8gc3RhdGUgcmF0aGVyIHRoYW4gdGhlIGZ1bGwgdGhpbmcuXHJcbiAgcHJlbG9hZGVkU3RhdGU/OiBEZWVwUGFydGlhbDxTIGV4dGVuZHMgYW55ID8gUyA6IFM+XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzdG9yZSBlbmhhbmNlcnMgdG8gYXBwbHkuIFNlZSBSZWR1eCdzIGBjcmVhdGVTdG9yZSgpYC5cclxuICAgKiBBbGwgZW5oYW5jZXJzIHdpbGwgYmUgaW5jbHVkZWQgYmVmb3JlIHRoZSBEZXZUb29scyBFeHRlbnNpb24gZW5oYW5jZXIuXHJcbiAgICogSWYgeW91IG5lZWQgdG8gY3VzdG9taXplIHRoZSBvcmRlciBvZiBlbmhhbmNlcnMsIHN1cHBseSBhIGNhbGxiYWNrXHJcbiAgICogZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgdGhlIG9yaWdpbmFsIGFycmF5IChpZSwgYFthcHBseU1pZGRsZXdhcmVdYCksXHJcbiAgICogYW5kIHNob3VsZCByZXR1cm4gYSBuZXcgYXJyYXkgKHN1Y2ggYXMgYFthcHBseU1pZGRsZXdhcmUsIG9mZmxpbmVdYCkuXHJcbiAgICogSWYgeW91IG9ubHkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSwgeW91IGNhbiB1c2UgdGhlIGBtaWRkbGV3YXJlYCBwYXJhbWV0ZXIgaW5zdGVhZC5cclxuICAgKi9cclxuICBlbmhhbmNlcnM/OiBTdG9yZUVuaGFuY2VyW10gfCBDb25maWd1cmVFbmhhbmNlcnNDYWxsYmFja1xyXG59XHJcblxyXG50eXBlIE1pZGRsZXdhcmVzPFM+ID0gUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPHt9LCBTPj5cclxuXHJcbi8qKlxyXG4gKiBBIFJlZHV4IHN0b3JlIHJldHVybmVkIGJ5IGBjb25maWd1cmVTdG9yZSgpYC4gU3VwcG9ydHMgZGlzcGF0Y2hpbmdcclxuICogc2lkZS1lZmZlY3RmdWwgX3RodW5rc18gaW4gYWRkaXRpb24gdG8gcGxhaW4gYWN0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmhhbmNlZFN0b3JlPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBNaWRkbGV3YXJlczxTPlxyXG4+IGV4dGVuZHMgU3RvcmU8UywgQT4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBgZGlzcGF0Y2hgIG1ldGhvZCBvZiB5b3VyIHN0b3JlLCBlbmhhbmNlZCBieSBhbGwgaXQncyBtaWRkbGV3YXJlcy5cclxuICAgKlxyXG4gICAqIEBpbmhlcml0ZG9jXHJcbiAgICovXHJcbiAgZGlzcGF0Y2g6IERpc3BhdGNoRm9yTWlkZGxld2FyZXM8TT4gJiBEaXNwYXRjaDxBPlxyXG59XHJcblxyXG4vKipcclxuICogQSBmcmllbmRseSBhYnN0cmFjdGlvbiBvdmVyIHRoZSBzdGFuZGFyZCBSZWR1eCBgY3JlYXRlU3RvcmUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWcgVGhlIHN0b3JlIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgY29uZmlndXJlZCBSZWR1eCBzdG9yZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBbVGh1bmtNaWRkbGV3YXJlRm9yPFM+XVxyXG4+KG9wdGlvbnM6IENvbmZpZ3VyZVN0b3JlT3B0aW9uczxTLCBBLCBNPik6IEVuaGFuY2VkU3RvcmU8UywgQSwgTT4ge1xyXG4gIGNvbnN0IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmU8Uz4oKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWR1Y2VyID0gdW5kZWZpbmVkLFxyXG4gICAgbWlkZGxld2FyZSA9IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpLFxyXG4gICAgZGV2VG9vbHMgPSB0cnVlLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQsXHJcbiAgICBlbmhhbmNlcnMgPSB1bmRlZmluZWRcclxuICB9ID0gb3B0aW9ucyB8fCB7fVxyXG5cclxuICBsZXQgcm9vdFJlZHVjZXI6IFJlZHVjZXI8UywgQT5cclxuXHJcbiAgaWYgKHR5cGVvZiByZWR1Y2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByb290UmVkdWNlciA9IHJlZHVjZXJcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ1wicmVkdWNlclwiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQsIGFuZCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzJ1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZUVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgLi4uKHR5cGVvZiBtaWRkbGV3YXJlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgID8gbWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpXHJcbiAgICAgIDogbWlkZGxld2FyZSlcclxuICApXHJcblxyXG4gIGxldCBmaW5hbENvbXBvc2UgPSBjb21wb3NlXHJcblxyXG4gIGlmIChkZXZUb29scykge1xyXG4gICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyh7XHJcbiAgICAgIC8vIEVuYWJsZSBjYXB0dXJlIG9mIHN0YWNrIHRyYWNlcyBmb3IgZGlzcGF0Y2hlZCBSZWR1eCBhY3Rpb25zXHJcbiAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTixcclxuICAgICAgLi4uKHR5cGVvZiBkZXZUb29scyA9PT0gJ29iamVjdCcgJiYgZGV2VG9vbHMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHN0b3JlRW5oYW5jZXJzOiBTdG9yZUVuaGFuY2VyW10gPSBbbWlkZGxld2FyZUVuaGFuY2VyXVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICBzdG9yZUVuaGFuY2VycyA9IFttaWRkbGV3YXJlRW5oYW5jZXIsIC4uLmVuaGFuY2Vyc11cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmhhbmNlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHN0b3JlRW5oYW5jZXJzID0gZW5oYW5jZXJzKHN0b3JlRW5oYW5jZXJzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZSguLi5zdG9yZUVuaGFuY2VycykgYXMgYW55XHJcblxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUgYXMgRGVlcFBhcnRpYWw8Uz4sXHJcbiAgICBjb21wb3NlZEVuaGFuY2VyXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIElzVW5rbm93bk9yTm9uSW5mZXJyYWJsZSxcclxuICBJZk1heWJlVW5kZWZpbmVkLFxyXG4gIElmVm9pZCxcclxuICBJc0FueVxyXG59IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnXHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIHdpdGggYSBzdHJpbmcgdHlwZSBhbmQgYW4gYXNzb2NpYXRlZCBwYXlsb2FkLiBUaGlzIGlzIHRoZVxyXG4gKiB0eXBlIG9mIGFjdGlvbiByZXR1cm5lZCBieSBgY3JlYXRlQWN0aW9uKClgIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQHRlbXBsYXRlIFAgVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIHBheWxvYWQuXHJcbiAqIEB0ZW1wbGF0ZSBUIHRoZSB0eXBlIHVzZWQgZm9yIHRoZSBhY3Rpb24gdHlwZS5cclxuICogQHRlbXBsYXRlIE0gVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIG1ldGEgKG9wdGlvbmFsKVxyXG4gKiBAdGVtcGxhdGUgRSBUaGUgdHlwZSBvZiB0aGUgYWN0aW9uJ3MgZXJyb3IgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQYXlsb2FkQWN0aW9uPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgTSA9IG5ldmVyLFxyXG4gIEUgPSBuZXZlclxyXG4+ID0ge1xyXG4gIHBheWxvYWQ6IFBcclxuICB0eXBlOiBUXHJcbn0gJiAoW01dIGV4dGVuZHMgW25ldmVyXVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgbWV0YTogTVxyXG4gICAgfSkgJlxyXG4gIChbRV0gZXh0ZW5kcyBbbmV2ZXJdXHJcbiAgICA/IHt9XHJcbiAgICA6IHtcclxuICAgICAgICBlcnJvcjogRVxyXG4gICAgICB9KVxyXG5cclxuLyoqXHJcbiAqIEEgXCJwcmVwYXJlXCIgbWV0aG9kIHRvIGJlIHVzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNyZWF0ZUFjdGlvbmAuXHJcbiAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgRmx1eCBTdGFuZGFyZCBBY3Rpb24gd2l0aG91dFxyXG4gKiB0eXBlICh3aWxsIGJlIGFkZGVkIGxhdGVyKSB0aGF0ICptdXN0KiBjb250YWluIGEgcGF5bG9hZCAobWlnaHQgYmUgdW5kZWZpbmVkKS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJlcGFyZUFjdGlvbjxQPiA9XHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFAgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55IH0pXHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFA7IGVycm9yOiBhbnkgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55OyBlcnJvcjogYW55IH0pXHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgdmVyc2lvbiBvZiBgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWRgLiBOb3QgdG8gYmUgdXNlZCBleHRlcm5hbGx5LlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCB0eXBlIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBQQSBleHRlbmRzIFByZXBhcmVBY3Rpb248YW55PiB8IHZvaWQsXHJcbiAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+ID0gUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGluZmVyIFA+XHJcbiAgPyBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICAgICAgUGFyYW1ldGVyczxQQT4sXHJcbiAgICAgIFAsXHJcbiAgICAgIFQsXHJcbiAgICAgIFJldHVyblR5cGU8UEE+IGV4dGVuZHMge1xyXG4gICAgICAgIGVycm9yOiBpbmZlciBFXHJcbiAgICAgIH1cclxuICAgICAgICA/IEVcclxuICAgICAgICA6IG5ldmVyLFxyXG4gICAgICBSZXR1cm5UeXBlPFBBPiBleHRlbmRzIHtcclxuICAgICAgICBtZXRhOiBpbmZlciBNXHJcbiAgICAgIH1cclxuICAgICAgICA/IE1cclxuICAgICAgICA6IG5ldmVyXHJcbiAgICA+XHJcbiAgOiB2b2lkXHJcblxyXG4vKipcclxuICogQmFzaWMgdHlwZSBmb3IgYWxsIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqL1xyXG5pbnRlcmZhY2UgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCBleHRlbmRzIHN0cmluZywgTSA9IG5ldmVyLCBFID0gbmV2ZXI+IHtcclxuICB0eXBlOiBUXHJcbiAgbWF0Y2goYWN0aW9uOiBBY3Rpb248dW5rbm93bj4pOiBhY3Rpb24gaXMgUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3IgdGhhdCB0YWtlcyBtdWx0aXBsZSBhcmd1bWVudHMgdGhhdCBhcmUgcGFzc2VkXHJcbiAqIHRvIGEgYFByZXBhcmVBY3Rpb25gIG1ldGhvZCB0byBjcmVhdGUgdGhlIGZpbmFsIEFjdGlvbi5cclxuICogQHR5cGVQYXJhbSBBcmdzIGFyZ3VtZW50cyBmb3IgdGhlIGFjdGlvbiBjcmVhdG9yIGZ1bmN0aW9uXHJcbiAqIEB0eXBlUGFyYW0gUCBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgYHR5cGVgIG5hbWVcclxuICogQHR5cGVQYXJhbSBFIG9wdGlvbmFsIGBlcnJvcmAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIE0gb3B0aW9uYWwgYG1ldGFgIHR5cGVcclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8XHJcbiAgQXJncyBleHRlbmRzIHVua25vd25bXSxcclxuICBQLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgRSA9IG5ldmVyLFxyXG4gIE0gPSBuZXZlclxyXG4+IGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCwgTSwgRT4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBgQXJnc2Agd2lsbCByZXR1cm5cclxuICAgKiBhbiBBY3Rpb24gd2l0aCBhIHBheWxvYWQgb2YgdHlwZSBgUGAgYW5kIChkZXBlbmRpbmcgb24gdGhlIGBQcmVwYXJlQWN0aW9uYFxyXG4gICAqIG1ldGhvZCB1c2VkKSBhIGBtZXRhYC0gYW5kIGBlcnJvcmAgcHJvcGVydHkgb2YgdHlwZXMgYE1gIGFuZCBgRWAgcmVzcGVjdGl2ZWx5LlxyXG4gICAqL1xyXG4gICguLi5hcmdzOiBBcmdzKTogUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBwYXlsb2FkIG9mIHR5cGUgYFBgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYC5cclxuICAgKiBDYWxsaW5nIGl0IHdpdGhvdXQgYW4gYXJndW1lbnQgd2lsbCByZXR1cm4gYSBQYXlsb2FkQWN0aW9uIHdpdGggYSBwYXlsb2FkIG9mIGB1bmRlZmluZWRgLlxyXG4gICAqL1xyXG4gIChwYXlsb2FkPzogUCk6IFBheWxvYWRBY3Rpb248UCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIG9mIHR5cGUgYFRgIHRoYXQgdGFrZXMgbm8gcGF5bG9hZC5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+XHJcbiAgZXh0ZW5kcyBCYXNlQWN0aW9uQ3JlYXRvcjx1bmRlZmluZWQsIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpbGxcclxuICAgKiByZXR1cm4gYSB7QGxpbmsgUGF5bG9hZEFjdGlvbn0gb2YgdHlwZSBgVGAgd2l0aCBhIHBheWxvYWQgb2YgYHVuZGVmaW5lZGBcclxuICAgKi9cclxuICAoKTogUGF5bG9hZEFjdGlvbjx1bmRlZmluZWQsIFQ+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhY3Rpb24gY3JlYXRvciBvZiB0eXBlIGBUYCB0aGF0IHJlcXVpcmVzIGEgcGF5bG9hZCBvZiB0eXBlIFAuXHJcbiAqXHJcbiAqIEBpbmhlcml0ZG9jIHtyZWR1eCNBY3Rpb25DcmVhdG9yfVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYFxyXG4gICAqL1xyXG4gIChwYXlsb2FkOiBQKTogUGF5bG9hZEFjdGlvbjxQLCBUPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgd2hvc2UgYHBheWxvYWRgIHR5cGUgY291bGQgbm90IGJlIGluZmVycmVkLiBBY2NlcHRzIGV2ZXJ5dGhpbmcgYXMgYHBheWxvYWRgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmdcclxuPiBleHRlbmRzIEJhc2VBY3Rpb25DcmVhdG9yPHVua25vd24sIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpdGggYW4gYXJndW1lbnQgd2lsbFxyXG4gICAqIHJldHVybiBhIHtAbGluayBQYXlsb2FkQWN0aW9ufSBvZiB0eXBlIGBUYCB3aXRoIGEgcGF5bG9hZFxyXG4gICAqIG9mIGV4YWN0bHkgdGhlIHR5cGUgb2YgdGhlIGFyZ3VtZW50LlxyXG4gICAqL1xyXG4gIDxQVCBleHRlbmRzIHVua25vd24+KHBheWxvYWQ6IFBUKTogUGF5bG9hZEFjdGlvbjxQVCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIHRoYXQgcHJvZHVjZXMgYWN0aW9ucyB3aXRoIGEgYHBheWxvYWRgIGF0dHJpYnV0ZS5cclxuICpcclxuICogQHR5cGVQYXJhbSBQIHRoZSBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgdGhlIGB0eXBlYCBvZiB0aGUgcmVzdWx0aW5nIGFjdGlvblxyXG4gKiBAdHlwZVBhcmFtIFBBIGlmIHRoZSByZXN1bHRpbmcgYWN0aW9uIGlzIHByZXByb2Nlc3NlZCBieSBhIGBwcmVwYXJlYCBtZXRob2QsIHRoZSBzaWduYXR1cmUgb2Ygc2FpZCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIFBheWxvYWRBY3Rpb25DcmVhdG9yPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPFA+IHwgdm9pZCA9IHZvaWRcclxuPiA9IElmUHJlcGFyZUFjdGlvbk1ldGhvZFByb3ZpZGVkPFxyXG4gIFBBLFxyXG4gIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxQQSwgVD4sXHJcbiAgLy8gZWxzZVxyXG4gIElzQW55PFxyXG4gICAgUCxcclxuICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxhbnksIFQ+LFxyXG4gICAgSXNVbmtub3duT3JOb25JbmZlcnJhYmxlPFxyXG4gICAgICBQLFxyXG4gICAgICBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFQ+LFxyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIElmVm9pZDxcclxuICAgICAgICBQLFxyXG4gICAgICAgIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZDxUPixcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgSWZNYXliZVVuZGVmaW5lZDxcclxuICAgICAgICAgIFAsXHJcbiAgICAgICAgICBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUPixcclxuICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUPlxyXG4gICAgICAgID5cclxuICAgICAgPlxyXG4gICAgPlxyXG4gID5cclxuPlxyXG5cclxuLyoqXHJcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWN0aW9uIGNyZWF0b3IgZm9yIHRoZSBnaXZlbiBhY3Rpb24gdHlwZVxyXG4gKiBzdHJpbmcuIFRoZSBhY3Rpb24gY3JlYXRvciBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkXHJcbiAqIGluIHRoZSBhY3Rpb24gb2JqZWN0IGFzIGEgZmllbGQgY2FsbGVkIHBheWxvYWQuIFRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvblxyXG4gKiB3aWxsIGFsc28gaGF2ZSBpdHMgdG9TdHJpbmcoKSBvdmVycmlkZW4gc28gdGhhdCBpdCByZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSxcclxuICogYWxsb3dpbmcgaXQgdG8gYmUgdXNlZCBpbiByZWR1Y2VyIGxvZ2ljIHRoYXQgaXMgbG9va2luZyBmb3IgdGhhdCBhY3Rpb24gdHlwZS5cclxuICpcclxuICogQHBhcmFtIHR5cGUgVGhlIGFjdGlvbiB0eXBlIHRvIHVzZSBmb3IgY3JlYXRlZCBhY3Rpb25zLlxyXG4gKiBAcGFyYW0gcHJlcGFyZSAob3B0aW9uYWwpIGEgbWV0aG9kIHRoYXQgdGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgeyBwYXlsb2FkIH0gb3IgeyBwYXlsb2FkLCBtZXRhIH0uXHJcbiAqICAgICAgICAgICAgICAgIElmIHRoaXMgaXMgZ2l2ZW4sIHRoZSByZXN1bHRpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBwYXNzIGl0J3MgYXJndW1lbnRzIHRvIHRoaXMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBwYXlsb2FkICYgbWV0YS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQID0gdm9pZCwgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4oXHJcbiAgdHlwZTogVFxyXG4pOiBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxQLCBUPlxyXG5cclxuLyoqXHJcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWN0aW9uIGNyZWF0b3IgZm9yIHRoZSBnaXZlbiBhY3Rpb24gdHlwZVxyXG4gKiBzdHJpbmcuIFRoZSBhY3Rpb24gY3JlYXRvciBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkXHJcbiAqIGluIHRoZSBhY3Rpb24gb2JqZWN0IGFzIGEgZmllbGQgY2FsbGVkIHBheWxvYWQuIFRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvblxyXG4gKiB3aWxsIGFsc28gaGF2ZSBpdHMgdG9TdHJpbmcoKSBvdmVycmlkZW4gc28gdGhhdCBpdCByZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSxcclxuICogYWxsb3dpbmcgaXQgdG8gYmUgdXNlZCBpbiByZWR1Y2VyIGxvZ2ljIHRoYXQgaXMgbG9va2luZyBmb3IgdGhhdCBhY3Rpb24gdHlwZS5cclxuICpcclxuICogQHBhcmFtIHR5cGUgVGhlIGFjdGlvbiB0eXBlIHRvIHVzZSBmb3IgY3JlYXRlZCBhY3Rpb25zLlxyXG4gKiBAcGFyYW0gcHJlcGFyZSAob3B0aW9uYWwpIGEgbWV0aG9kIHRoYXQgdGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgeyBwYXlsb2FkIH0gb3IgeyBwYXlsb2FkLCBtZXRhIH0uXHJcbiAqICAgICAgICAgICAgICAgIElmIHRoaXMgaXMgZ2l2ZW4sIHRoZSByZXN1bHRpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBwYXNzIGl0J3MgYXJndW1lbnRzIHRvIHRoaXMgbWV0aG9kIHRvIGNhbGN1bGF0ZSBwYXlsb2FkICYgbWV0YS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxcclxuICBQQSBleHRlbmRzIFByZXBhcmVBY3Rpb248YW55PixcclxuICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nXHJcbj4oXHJcbiAgdHlwZTogVCxcclxuICBwcmVwYXJlQWN0aW9uOiBQQVxyXG4pOiBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxSZXR1cm5UeXBlPFBBPlsncGF5bG9hZCddLCBULCBQQT5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZTogc3RyaW5nLCBwcmVwYXJlQWN0aW9uPzogRnVuY3Rpb24pOiBhbnkge1xyXG4gIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICAgIGxldCBwcmVwYXJlZCA9IHByZXBhcmVBY3Rpb24oLi4uYXJncylcclxuICAgICAgaWYgKCFwcmVwYXJlZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJlcGFyZUFjdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3QnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZCxcclxuICAgICAgICAuLi4oJ21ldGEnIGluIHByZXBhcmVkICYmIHsgbWV0YTogcHJlcGFyZWQubWV0YSB9KSxcclxuICAgICAgICAuLi4oJ2Vycm9yJyBpbiBwcmVwYXJlZCAmJiB7IGVycm9yOiBwcmVwYXJlZC5lcnJvciB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB0eXBlLCBwYXlsb2FkOiBhcmdzWzBdIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkNyZWF0b3IudG9TdHJpbmcgPSAoKSA9PiBgJHt0eXBlfWBcclxuXHJcbiAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZVxyXG5cclxuICBhY3Rpb25DcmVhdG9yLm1hdGNoID0gKGFjdGlvbjogQWN0aW9uPHVua25vd24+KTogYWN0aW9uIGlzIFBheWxvYWRBY3Rpb24gPT5cclxuICAgIGFjdGlvbi50eXBlID09PSB0eXBlXHJcblxyXG4gIHJldHVybiBhY3Rpb25DcmVhdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZTQShcclxuICBhY3Rpb246IHVua25vd25cclxuKTogYWN0aW9uIGlzIHtcclxuICB0eXBlOiBzdHJpbmdcclxuICBwYXlsb2FkPzogdW5rbm93blxyXG4gIGVycm9yPzogdW5rbm93blxyXG4gIG1ldGE/OiB1bmtub3duXHJcbn0ge1xyXG4gIHJldHVybiAoXHJcbiAgICBpc1BsYWluT2JqZWN0KGFjdGlvbikgJiZcclxuICAgIHR5cGVvZiAoYWN0aW9uIGFzIGFueSkudHlwZSA9PT0gJ3N0cmluZycgJiZcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbikuZXZlcnkoaXNWYWxpZEtleSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5OiBzdHJpbmcpIHtcclxuICByZXR1cm4gWyd0eXBlJywgJ3BheWxvYWQnLCAnZXJyb3InLCAnbWV0YSddLmluZGV4T2Yoa2V5KSA+IC0xXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSBvZiB0aGUgYWN0aW9ucyBjcmVhdGVkIGJ5IHRoZSBwYXNzZWRcclxuICogYGNyZWF0ZUFjdGlvbigpYC1nZW5lcmF0ZWQgYWN0aW9uIGNyZWF0b3IgKGFyYml0cmFyeSBhY3Rpb24gY3JlYXRvcnNcclxuICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gY3JlYXRvciB3aG9zZSBhY3Rpb24gdHlwZSB0byBnZXQuXHJcbiAqIEByZXR1cm5zIFRoZSBhY3Rpb24gdHlwZSB1c2VkIGJ5IHRoZSBhY3Rpb24gY3JlYXRvci5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGU8VCBleHRlbmRzIHN0cmluZz4oXHJcbiAgYWN0aW9uQ3JlYXRvcjogUGF5bG9hZEFjdGlvbkNyZWF0b3I8YW55LCBUPlxyXG4pOiBUIHtcclxuICByZXR1cm4gYCR7YWN0aW9uQ3JlYXRvcn1gIGFzIFRcclxufVxyXG5cclxuLy8gaGVscGVyIHR5cGVzIGZvciBtb3JlIHJlYWRhYmxlIHR5cGluZ3NcclxuXHJcbnR5cGUgSWZQcmVwYXJlQWN0aW9uTWV0aG9kUHJvdmlkZWQ8XHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGFueT4gfCB2b2lkLFxyXG4gIFRydWUsXHJcbiAgRmFsc2VcclxuPiA9IFBBIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPyBUcnVlIDogRmFsc2VcclxuIiwiaW1wb3J0IHsgQWN0aW9uLCBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtcclxuICBDYXNlUmVkdWNlcixcclxuICBDYXNlUmVkdWNlcnMsXHJcbiAgQWN0aW9uTWF0Y2hlcixcclxuICBBY3Rpb25NYXRjaGVyRGVzY3JpcHRpb25Db2xsZWN0aW9uXHJcbn0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlZEFjdGlvbkNyZWF0b3I8VHlwZSBleHRlbmRzIHN0cmluZz4ge1xyXG4gICguLi5hcmdzOiBhbnlbXSk6IEFjdGlvbjxUeXBlPlxyXG4gIHR5cGU6IFR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgYnVpbGRlciBmb3IgYW4gYWN0aW9uIDwtPiByZWR1Y2VyIG1hcC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGNhc2UgcmVkdWNlciBmb3IgYWN0aW9ucyBjcmVhdGVkIGJ5IHRoaXMgYWN0aW9uIGNyZWF0b3IuXHJcbiAgICogQHBhcmFtIGFjdGlvbkNyZWF0b3JcclxuICAgKiBAcGFyYW0gcmVkdWNlclxyXG4gICAqL1xyXG4gIGFkZENhc2U8QWN0aW9uQ3JlYXRvciBleHRlbmRzIFR5cGVkQWN0aW9uQ3JlYXRvcjxzdHJpbmc+PihcclxuICAgIGFjdGlvbkNyZWF0b3I6IEFjdGlvbkNyZWF0b3IsXHJcbiAgICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgUmV0dXJuVHlwZTxBY3Rpb25DcmVhdG9yPj5cclxuICApOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT5cclxuICAvKipcclxuICAgKiBBZGQgYSBjYXNlIHJlZHVjZXIgZm9yIGFjdGlvbnMgd2l0aCB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICogQHBhcmFtIHR5cGVcclxuICAgKiBAcGFyYW0gcmVkdWNlclxyXG4gICAqL1xyXG4gIGFkZENhc2U8VHlwZSBleHRlbmRzIHN0cmluZywgQSBleHRlbmRzIEFjdGlvbjxUeXBlPj4oXHJcbiAgICB0eXBlOiBUeXBlLFxyXG4gICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8U3RhdGUsIEE+XHJcbiAgKTogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSByZWR1Y2VyIGZvciBhbGwgYWN0aW9ucywgdXNpbmcgYG1hdGNoZXJgIGFzIGEgZmlsdGVyIGZ1bmN0aW9uLlxyXG4gICAqIElmIG11bHRpcGxlIG1hdGNoZXIgcmVkdWNlcnMgbWF0Y2gsIGFsbCBvZiB0aGVtIHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyXHJcbiAgICogdGhleSB3ZXJlIGRlZmluZWQgaWYgLSBldmVuIGlmIGEgY2FzZSByZWR1Y2VyIGFscmVhZHkgbWF0Y2hlZC5cclxuICAgKiBAcGFyYW0gbWF0Y2hlciBBIG1hdGNoZXIgZnVuY3Rpb24uIEluIFR5cGVTY3JpcHQsIHRoaXMgc2hvdWxkIGJlIGEgW3R5cGUgcHJlZGljYXRlXShodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9hZHZhbmNlZC10eXBlcy5odG1sI3VzaW5nLXR5cGUtcHJlZGljYXRlcylcclxuICAgKiAgIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHJlZHVjZXJcclxuICAgKi9cclxuICBhZGRNYXRjaGVyPEEgZXh0ZW5kcyBBbnlBY3Rpb24+KFxyXG4gICAgbWF0Y2hlcjogQWN0aW9uTWF0Y2hlcjxBPixcclxuICAgIHJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBBPlxyXG4gICk6IE9taXQ8QWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+LCAnYWRkQ2FzZSc+XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBcImRlZmF1bHQgY2FzZVwiIHJlZHVjZXIgdGhhdCBpcyBleGVjdXRlZCBpZiBubyBjYXNlIHJlZHVjZXIgYW5kIG5vIG1hdGNoZXJcclxuICAgKiByZWR1Y2VyIHdhcyBleGVjdXRlZCBmb3IgdGhpcyBhY3Rpb24uXHJcbiAgICogQHBhcmFtIHJlZHVjZXJcclxuICAgKi9cclxuICBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgQW55QWN0aW9uPik6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjazxTPihcclxuICBidWlsZGVyQ2FsbGJhY2s6IChidWlsZGVyOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTPikgPT4gdm9pZFxyXG4pOiBbXHJcbiAgQ2FzZVJlZHVjZXJzPFMsIGFueT4sXHJcbiAgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPixcclxuICBDYXNlUmVkdWNlcjxTLCBBbnlBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbl0ge1xyXG4gIGNvbnN0IGFjdGlvbnNNYXA6IENhc2VSZWR1Y2VyczxTLCBhbnk+ID0ge31cclxuICBjb25zdCBhY3Rpb25NYXRjaGVyczogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IFtdXHJcbiAgbGV0IGRlZmF1bHRDYXNlUmVkdWNlcjogQ2FzZVJlZHVjZXI8UywgQW55QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ1aWxkZXIgPSB7XHJcbiAgICBhZGRDYXNlKFxyXG4gICAgICB0eXBlT3JBY3Rpb25DcmVhdG9yOiBzdHJpbmcgfCBUeXBlZEFjdGlvbkNyZWF0b3I8YW55PixcclxuICAgICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8Uz5cclxuICAgICkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgIHRvIGtlZXAgdGhlIGRlZmluaXRpb24gYnkgdGhlIHVzZXIgaW4gbGluZSB3aXRoIGFjdHVhbCBiZWhhdmlvciwgXHJcbiAgICAgICAgIHdlIGVuZm9yY2UgYGFkZENhc2VgIHRvIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGFkZE1hdGNoZXJgXHJcbiAgICAgICAgIGFzIG1hdGNoaW5nIGNhc2VzIHRha2UgcHJlY2VkZW5jZSBvdmVyIG1hdGNoZXJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGFjdGlvbk1hdGNoZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgJ2BidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGRNYXRjaGVyYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAnYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdHlwZSA9XHJcbiAgICAgICAgdHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHR5cGVPckFjdGlvbkNyZWF0b3JcclxuICAgICAgICAgIDogdHlwZU9yQWN0aW9uQ3JlYXRvci50eXBlXHJcbiAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnYWRkQ2FzZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZSdcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uc01hcFt0eXBlXSA9IHJlZHVjZXJcclxuICAgICAgcmV0dXJuIGJ1aWxkZXJcclxuICAgIH0sXHJcbiAgICBhZGRNYXRjaGVyPEEgZXh0ZW5kcyBBbnlBY3Rpb24+KFxyXG4gICAgICBtYXRjaGVyOiBBY3Rpb25NYXRjaGVyPEE+LFxyXG4gICAgICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBBPlxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAnYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uTWF0Y2hlcnMucHVzaCh7IG1hdGNoZXIsIHJlZHVjZXIgfSlcclxuICAgICAgcmV0dXJuIGJ1aWxkZXJcclxuICAgIH0sXHJcbiAgICBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBBbnlBY3Rpb24+KSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyXHJcbiAgICAgIHJldHVybiBidWlsZGVyXHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKVxyXG4gIHJldHVybiBbYWN0aW9uc01hcCwgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl1cclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlTmV4dFN0YXRlLCB7IERyYWZ0LCBpc0RyYWZ0LCBpc0RyYWZ0YWJsZSB9IGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrLFxyXG4gIEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyXHJcbn0gZnJvbSAnLi9tYXBCdWlsZGVycydcclxuaW1wb3J0IHsgTm9JbmZlciB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGNvcnJlc3BvbmRpbmcgYWN0aW9uIG9iamVjdCBzaGFwZXMuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIG1hbnVhbGx5IC0gaXQgaXMgb25seSB1c2VkIGZvciBpbnRlcm5hbFxyXG4gKiAgICAgICAgICAgICBpbmZlcmVuY2UgcHVycG9zZXMgYW5kIHNob3VsZCBub3QgaGF2ZSBhbnkgZnVydGhlciB2YWx1ZS5cclxuICogICAgICAgICAgICAgSXQgbWlnaHQgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBY3Rpb25zPFQgZXh0ZW5kcyBrZXlvZiBhbnkgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIEFjdGlvbj5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTWF0Y2hlcjxBIGV4dGVuZHMgQW55QWN0aW9uPiB7XHJcbiAgKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIEFcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uPFMsIEEgZXh0ZW5kcyBBbnlBY3Rpb24+ID0ge1xyXG4gIG1hdGNoZXI6IEFjdGlvbk1hdGNoZXI8QT5cclxuICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTLCBOb0luZmVyPEE+PlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25NYXRjaGVyRGVzY3JpcHRpb25Db2xsZWN0aW9uPFM+ID0gQXJyYXk8XHJcbiAgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uPFMsIGFueT5cclxuPlxyXG5cclxuLyoqXHJcbiAqIEFuICpjYXNlIHJlZHVjZXIqIGlzIGEgcmVkdWNlciBmdW5jdGlvbiBmb3IgYSBzcGVjaWZpYyBhY3Rpb24gdHlwZS4gQ2FzZVxyXG4gKiByZWR1Y2VycyBjYW4gYmUgY29tcG9zZWQgdG8gZnVsbCByZWR1Y2VycyB1c2luZyBgY3JlYXRlUmVkdWNlcigpYC5cclxuICpcclxuICogVW5saWtlIGEgbm9ybWFsIFJlZHV4IHJlZHVjZXIsIGEgY2FzZSByZWR1Y2VyIGlzIG5ldmVyIGNhbGxlZCB3aXRoIGFuXHJcbiAqIGB1bmRlZmluZWRgIHN0YXRlIHRvIGRldGVybWluZSB0aGUgaW5pdGlhbCBzdGF0ZS4gSW5zdGVhZCwgdGhlIGluaXRpYWxcclxuICogc3RhdGUgaXMgZXhwbGljaXRseSBzcGVjaWZpZWQgYXMgYW4gYXJndW1lbnQgdG8gYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEluIGFkZGl0aW9uLCBhIGNhc2UgcmVkdWNlciBjYW4gY2hvb3NlIHRvIG11dGF0ZSB0aGUgcGFzc2VkLWluIGBzdGF0ZWBcclxuICogdmFsdWUgZGlyZWN0bHkgaW5zdGVhZCBvZiByZXR1cm5pbmcgYSBuZXcgc3RhdGUuIFRoaXMgZG9lcyBub3QgYWN0dWFsbHlcclxuICogY2F1c2UgdGhlIHN0b3JlIHN0YXRlIHRvIGJlIG11dGF0ZWQgZGlyZWN0bHk7IGluc3RlYWQsIHRoYW5rcyB0b1xyXG4gKiBbaW1tZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9td2VzdHN0cmF0ZS9pbW1lciksIHRoZSBtdXRhdGlvbnMgYXJlXHJcbiAqIHRyYW5zbGF0ZWQgdG8gY29weSBvcGVyYXRpb25zIHRoYXQgcmVzdWx0IGluIGEgbmV3IHN0YXRlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXNlUmVkdWNlcjxTID0gYW55LCBBIGV4dGVuZHMgQWN0aW9uID0gQW55QWN0aW9uPiA9IChcclxuICBzdGF0ZTogRHJhZnQ8Uz4sXHJcbiAgYWN0aW9uOiBBXHJcbikgPT4gUyB8IHZvaWRcclxuXHJcbi8qKlxyXG4gKiBBIG1hcHBpbmcgZnJvbSBhY3Rpb24gdHlwZXMgdG8gY2FzZSByZWR1Y2VycyBmb3IgYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIG1hbnVhbGx5IC0gaXQgaXMgb25seSB1c2VkXHJcbiAqICAgICAgICAgICAgIGZvciBpbnRlcm5hbCBpbmZlcmVuY2UgcHVycG9zZXMgYW5kIHVzaW5nIGl0IG1hbnVhbGx5XHJcbiAqICAgICAgICAgICAgIHdvdWxkIGxlYWQgdG8gdHlwZSBlcmFzdXJlLlxyXG4gKiAgICAgICAgICAgICBJdCBtaWdodCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENhc2VSZWR1Y2VyczxTLCBBUyBleHRlbmRzIEFjdGlvbnM+ID0ge1xyXG4gIFtUIGluIGtleW9mIEFTXTogQVNbVF0gZXh0ZW5kcyBBY3Rpb24gPyBDYXNlUmVkdWNlcjxTLCBBU1tUXT4gOiB2b2lkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZGVmaW5pbmcgYSByZWR1Y2VyIGFzIGEgbWFwcGluZyBmcm9tIGFjdGlvblxyXG4gKiB0eXBlIHRvICpjYXNlIHJlZHVjZXIqIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZSB0aGVzZSBhY3Rpb24gdHlwZXMuIFRoZVxyXG4gKiByZWR1Y2VyJ3MgaW5pdGlhbCBzdGF0ZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGUgYm9keSBvZiBldmVyeSBjYXNlIHJlZHVjZXIgaXMgaW1wbGljaXRseSB3cmFwcGVkIHdpdGggYSBjYWxsIHRvXHJcbiAqIGBwcm9kdWNlKClgIGZyb20gdGhlIFtpbW1lcl0oaHR0cHM6Ly9naXRodWIuY29tL213ZXN0c3RyYXRlL2ltbWVyKSBsaWJyYXJ5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgcmF0aGVyIHRoYW4gcmV0dXJuaW5nIGEgbmV3IHN0YXRlIG9iamVjdCwgeW91IGNhbiBhbHNvXHJcbiAqIG11dGF0ZSB0aGUgcGFzc2VkLWluIHN0YXRlIG9iamVjdCBkaXJlY3RseTsgdGhlc2UgbXV0YXRpb25zIHdpbGwgdGhlbiBiZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGFuZCBlZmZpY2llbnRseSB0cmFuc2xhdGVkIGludG8gY29waWVzLCBnaXZpbmcgeW91IGJvdGhcclxuICogY29udmVuaWVuY2UgYW5kIGltbXV0YWJpbGl0eS5cclxuICpcclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSB0byBiZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci5cclxuICogQHBhcmFtIGFjdGlvbnNNYXAgQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljXHJcbiAqICAgY2FzZSByZWR1Y2Vycy5cclxuICogQHBhcmFtIGFjdGlvbk1hdGNoZXJzIEFuIGFycmF5IG9mIG1hdGNoZXIgZGVmaW5pdGlvbnMgaW4gdGhlIGZvcm0gYHttYXRjaGVyLCByZWR1Y2VyfWAuXHJcbiAqICAgQWxsIG1hdGNoaW5nIHJlZHVjZXJzIHdpbGwgYmUgZXhlY3V0ZWQgaW4gb3JkZXIsIGluZGVwZW5kZW50bHkgaWYgYSBjYXNlIHJlZHVjZXIgbWF0Y2hlZCBvciBub3QuXHJcbiAqIEBwYXJhbSBkZWZhdWx0Q2FzZVJlZHVjZXIgQSBcImRlZmF1bHQgY2FzZVwiIHJlZHVjZXIgdGhhdCBpcyBleGVjdXRlZCBpZiBubyBjYXNlIHJlZHVjZXIgYW5kIG5vIG1hdGNoZXJcclxuICogICByZWR1Y2VyIHdhcyBleGVjdXRlZCBmb3IgdGhpcyBhY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyPFxyXG4gIFMsXHJcbiAgQ1IgZXh0ZW5kcyBDYXNlUmVkdWNlcnM8UywgYW55PiA9IENhc2VSZWR1Y2VyczxTLCBhbnk+XHJcbj4oXHJcbiAgaW5pdGlhbFN0YXRlOiBTLFxyXG4gIGFjdGlvbnNNYXA6IENSLFxyXG4gIGFjdGlvbk1hdGNoZXJzPzogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPixcclxuICBkZWZhdWx0Q2FzZVJlZHVjZXI/OiBDYXNlUmVkdWNlcjxTPlxyXG4pOiBSZWR1Y2VyPFM+XHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZGVmaW5pbmcgYSByZWR1Y2VyIGFzIGEgbWFwcGluZyBmcm9tIGFjdGlvblxyXG4gKiB0eXBlIHRvICpjYXNlIHJlZHVjZXIqIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZSB0aGVzZSBhY3Rpb24gdHlwZXMuIFRoZVxyXG4gKiByZWR1Y2VyJ3MgaW5pdGlhbCBzdGF0ZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGUgYm9keSBvZiBldmVyeSBjYXNlIHJlZHVjZXIgaXMgaW1wbGljaXRseSB3cmFwcGVkIHdpdGggYSBjYWxsIHRvXHJcbiAqIGBwcm9kdWNlKClgIGZyb20gdGhlIFtpbW1lcl0oaHR0cHM6Ly9naXRodWIuY29tL213ZXN0c3RyYXRlL2ltbWVyKSBsaWJyYXJ5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgcmF0aGVyIHRoYW4gcmV0dXJuaW5nIGEgbmV3IHN0YXRlIG9iamVjdCwgeW91IGNhbiBhbHNvXHJcbiAqIG11dGF0ZSB0aGUgcGFzc2VkLWluIHN0YXRlIG9iamVjdCBkaXJlY3RseTsgdGhlc2UgbXV0YXRpb25zIHdpbGwgdGhlbiBiZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGFuZCBlZmZpY2llbnRseSB0cmFuc2xhdGVkIGludG8gY29waWVzLCBnaXZpbmcgeW91IGJvdGhcclxuICogY29udmVuaWVuY2UgYW5kIGltbXV0YWJpbGl0eS5cclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSB0byBiZSByZXR1cm5lZCBieSB0aGUgcmVkdWNlci5cclxuICogQHBhcmFtIGJ1aWxkZXJDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgYSAqYnVpbGRlciogb2JqZWN0IHRvIGRlZmluZVxyXG4gKiAgIGNhc2UgcmVkdWNlcnMgdmlhIGNhbGxzIHRvIGBidWlsZGVyLmFkZENhc2UoYWN0aW9uQ3JlYXRvck9yVHlwZSwgcmVkdWNlcilgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlcjxTPihcclxuICBpbml0aWFsU3RhdGU6IFMsXHJcbiAgYnVpbGRlckNhbGxiYWNrOiAoYnVpbGRlcjogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8Uz4pID0+IHZvaWRcclxuKTogUmVkdWNlcjxTPlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXI8Uz4oXHJcbiAgaW5pdGlhbFN0YXRlOiBTLFxyXG4gIG1hcE9yQnVpbGRlckNhbGxiYWNrOlxyXG4gICAgfCBDYXNlUmVkdWNlcnM8UywgYW55PlxyXG4gICAgfCAoKGJ1aWxkZXI6IEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyPFM+KSA9PiB2b2lkKSxcclxuICBhY3Rpb25NYXRjaGVyczogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IFtdLFxyXG4gIGRlZmF1bHRDYXNlUmVkdWNlcj86IENhc2VSZWR1Y2VyPFM+XHJcbik6IFJlZHVjZXI8Uz4ge1xyXG4gIGxldCBbYWN0aW9uc01hcCwgZmluYWxBY3Rpb25NYXRjaGVycywgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdID1cclxuICAgIHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKVxyXG4gICAgICA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pOiBTIHtcclxuICAgIGxldCBjYXNlUmVkdWNlcnMgPSBbXHJcbiAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdLFxyXG4gICAgICAuLi5maW5hbEFjdGlvbk1hdGNoZXJzXHJcbiAgICAgICAgLmZpbHRlcigoeyBtYXRjaGVyIH0pID0+IG1hdGNoZXIoYWN0aW9uKSlcclxuICAgICAgICAubWFwKCh7IHJlZHVjZXIgfSkgPT4gcmVkdWNlcilcclxuICAgIF1cclxuICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGNyID0+ICEhY3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjYXNlUmVkdWNlcnMgPSBbZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKTogUyA9PiB7XHJcbiAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgIGlmIChpc0RyYWZ0KHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBkcmFmdCwgd2UgbXVzdCBhbHJlYWR5IGJlIGluc2lkZSBhIGBjcmVhdGVOZXh0U3RhdGVgIGNhbGwsXHJcbiAgICAgICAgICAvLyBsaWtlbHkgYmVjYXVzZSB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgLCBgY3JlYXRlU2xpY2VgLCBvciBuZXN0ZWRcclxuICAgICAgICAgIC8vIGluc2lkZSBhbiBleGlzdGluZyBkcmFmdC4gSXQncyBzYWZlIHRvIGp1c3QgcGFzcyB0aGUgZHJhZnQgdG8gdGhlIG11dGF0b3IuXHJcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IHByZXZpb3VzU3RhdGUgYXMgRHJhZnQ8Uz4gLy8gV2UgY2FuIGFzc3VtZSB0aGlzIGlzIGFscmVhZHkgYSBkcmFmdFxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbilcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNEcmFmdGFibGUocHJldmlvdXNTdGF0ZSkpIHtcclxuICAgICAgICAgIC8vIElmIHN0YXRlIGlzIG5vdCBkcmFmdGFibGUgKGV4OiBhIHByaW1pdGl2ZSwgc3VjaCBhcyAwKSwgd2Ugd2FudCB0byBkaXJlY3RseVxyXG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSBjYXNlUmVkdWNlciBmdW5jIGFuZCBub3Qgd3JhcCBpdCB3aXRoIHByb2R1Y2UuXHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYXNlUmVkdWNlcihwcmV2aW91c1N0YXRlIGFzIGFueSwgYWN0aW9uKVxyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAnQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWQnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgY3JlYXRlTmV4dFN0YXRlKCkgcHJvZHVjZXMgYW4gSW1tdXRhYmxlPERyYWZ0PFM+PiByYXRoZXJcclxuICAgICAgICAgIC8vIHRoYW4gYW4gSW1tdXRhYmxlPFM+LCBhbmQgVHlwZVNjcmlwdCBjYW5ub3QgZmluZCBvdXQgaG93IHRvIHJlY29uY2lsZVxyXG4gICAgICAgICAgLy8gdGhlc2UgdHdvIHR5cGVzLlxyXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZShwcmV2aW91c1N0YXRlLCAoZHJhZnQ6IERyYWZ0PFM+KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlXHJcbiAgICB9LCBzdGF0ZSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZCxcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbixcclxuICBQYXlsb2FkQWN0aW9uQ3JlYXRvcixcclxuICBQcmVwYXJlQWN0aW9uLFxyXG4gIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZFxyXG59IGZyb20gJy4vY3JlYXRlQWN0aW9uJ1xyXG5pbXBvcnQgeyBDYXNlUmVkdWNlciwgQ2FzZVJlZHVjZXJzLCBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJ1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyLFxyXG4gIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrXHJcbn0gZnJvbSAnLi9tYXBCdWlsZGVycydcclxuaW1wb3J0IHsgT21pdCwgTm9JbmZlciB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIGF0dGFjaGVkIHRvIGEgc2xpY2UuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgUGF5bG9hZEFjdGlvbkNyZWF0b3IgZGlyZWN0bHlcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2VBY3Rpb25DcmVhdG9yPFA+ID0gUGF5bG9hZEFjdGlvbkNyZWF0b3I8UD5cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmV0dXJuIHZhbHVlIG9mIGBjcmVhdGVTbGljZWBcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbGljZTxcclxuICBTdGF0ZSA9IGFueSxcclxuICBDYXNlUmVkdWNlcnMgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4sXHJcbiAgTmFtZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+IHtcclxuICAvKipcclxuICAgKiBUaGUgc2xpY2UgbmFtZS5cclxuICAgKi9cclxuICBuYW1lOiBOYW1lXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGljZSdzIHJlZHVjZXIuXHJcbiAgICovXHJcbiAgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT5cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aW9uIGNyZWF0b3JzIGZvciB0aGUgdHlwZXMgb2YgYWN0aW9ucyB0aGF0IGFyZSBoYW5kbGVkIGJ5IHRoZSBzbGljZVxyXG4gICAqIHJlZHVjZXIuXHJcbiAgICovXHJcbiAgYWN0aW9uczogQ2FzZVJlZHVjZXJBY3Rpb25zPENhc2VSZWR1Y2Vycz5cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGl2aWR1YWwgY2FzZSByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBgcmVkdWNlcnNgIHBhcmFtZXRlci5cclxuICAgKiBUaGlzIGVuYWJsZXMgcmV1c2UgYW5kIHRlc3RpbmcgaWYgdGhleSB3ZXJlIGRlZmluZWQgaW5saW5lIHdoZW4gY2FsbGluZyBgY3JlYXRlU2xpY2VgLlxyXG4gICAqL1xyXG4gIGNhc2VSZWR1Y2VyczogU2xpY2VEZWZpbmVkQ2FzZVJlZHVjZXJzPENhc2VSZWR1Y2Vycz5cclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGBjcmVhdGVTbGljZSgpYC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTbGljZU9wdGlvbnM8XHJcbiAgU3RhdGUgPSBhbnksXHJcbiAgQ1IgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4sXHJcbiAgTmFtZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+IHtcclxuICAvKipcclxuICAgKiBUaGUgc2xpY2UncyBuYW1lLiBVc2VkIHRvIG5hbWVzcGFjZSB0aGUgZ2VuZXJhdGVkIGFjdGlvbiB0eXBlcy5cclxuICAgKi9cclxuICBuYW1lOiBOYW1lXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHN0YXRlIHRvIGJlIHJldHVybmVkIGJ5IHRoZSBzbGljZSByZWR1Y2VyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxTdGF0ZTogU3RhdGVcclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljICpjYXNlIHJlZHVjZXIqXHJcbiAgICogZnVuY3Rpb25zLiBGb3IgZXZlcnkgYWN0aW9uIHR5cGUsIGEgbWF0Y2hpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBiZVxyXG4gICAqIGdlbmVyYXRlZCB1c2luZyBgY3JlYXRlQWN0aW9uKClgLlxyXG4gICAqL1xyXG4gIHJlZHVjZXJzOiBWYWxpZGF0ZVNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlLCBDUj5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIGFjdGlvbi10eXBlLXNwZWNpZmljICpjYXNlIHJlZHVjZXIqXHJcbiAgICogZnVuY3Rpb25zLiBUaGVzZSByZWR1Y2VycyBzaG91bGQgaGF2ZSBleGlzdGluZyBhY3Rpb24gdHlwZXMgdXNlZFxyXG4gICAqIGFzIHRoZSBrZXlzLCBhbmQgYWN0aW9uIGNyZWF0b3JzIHdpbGwgX25vdF8gYmUgZ2VuZXJhdGVkLlxyXG4gICAqIEFsdGVybmF0aXZlbHksIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyBhICpidWlsZGVyKiBvYmplY3QgdG8gZGVmaW5lXHJcbiAgICogY2FzZSByZWR1Y2VycyB2aWEgY2FsbHMgdG8gYGJ1aWxkZXIuYWRkQ2FzZShhY3Rpb25DcmVhdG9yT3JUeXBlLCByZWR1Y2VyKWAuXHJcbiAgICovXHJcbiAgZXh0cmFSZWR1Y2Vycz86XHJcbiAgICB8IENhc2VSZWR1Y2VyczxOb0luZmVyPFN0YXRlPiwgYW55PlxyXG4gICAgfCAoKGJ1aWxkZXI6IEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyPE5vSW5mZXI8U3RhdGU+PikgPT4gdm9pZClcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgQ2FzZVJlZHVjZXIgd2l0aCBhIGBwcmVwYXJlYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENhc2VSZWR1Y2VyV2l0aFByZXBhcmU8U3RhdGUsIEFjdGlvbiBleHRlbmRzIFBheWxvYWRBY3Rpb24+ID0ge1xyXG4gIHJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBBY3Rpb24+XHJcbiAgcHJlcGFyZTogUHJlcGFyZUFjdGlvbjxBY3Rpb25bJ3BheWxvYWQnXT5cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIGRlc2NyaWJpbmcgYSBzbGljZSdzIGByZWR1Y2Vyc2Agb3B0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZUNhc2VSZWR1Y2VyczxTdGF0ZT4gPSB7XHJcbiAgW0s6IHN0cmluZ106XHJcbiAgICB8IENhc2VSZWR1Y2VyPFN0YXRlLCBQYXlsb2FkQWN0aW9uPGFueT4+XHJcbiAgICB8IENhc2VSZWR1Y2VyV2l0aFByZXBhcmU8U3RhdGUsIFBheWxvYWRBY3Rpb248YW55LCBzdHJpbmcsIGFueSwgYW55Pj5cclxufVxyXG5cclxuLyoqXHJcbiAqIERlcml2ZXMgdGhlIHNsaWNlJ3MgYGFjdGlvbnNgIHByb3BlcnR5IGZyb20gdGhlIGByZWR1Y2Vyc2Agb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXNlUmVkdWNlckFjdGlvbnM8Q2FzZVJlZHVjZXJzIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8YW55Pj4gPSB7XHJcbiAgW1R5cGUgaW4ga2V5b2YgQ2FzZVJlZHVjZXJzXTogQ2FzZVJlZHVjZXJzW1R5cGVdIGV4dGVuZHMgeyBwcmVwYXJlOiBhbnkgfVxyXG4gICAgPyBBY3Rpb25DcmVhdG9yRm9yQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZTxDYXNlUmVkdWNlcnNbVHlwZV0+XHJcbiAgICA6IEFjdGlvbkNyZWF0b3JGb3JDYXNlUmVkdWNlcjxDYXNlUmVkdWNlcnNbVHlwZV0+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBgUGF5bG9hZEFjdGlvbkNyZWF0b3JgIHR5cGUgZm9yIGEgcGFzc2VkIGBDYXNlUmVkdWNlcldpdGhQcmVwYXJlYFxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnR5cGUgQWN0aW9uQ3JlYXRvckZvckNhc2VSZWR1Y2VyV2l0aFByZXBhcmU8XHJcbiAgQ1IgZXh0ZW5kcyB7IHByZXBhcmU6IGFueSB9XHJcbj4gPSBfQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8Q1JbJ3ByZXBhcmUnXSwgc3RyaW5nPlxyXG5cclxuLyoqXHJcbiAqIEdldCBhIGBQYXlsb2FkQWN0aW9uQ3JlYXRvcmAgdHlwZSBmb3IgYSBwYXNzZWQgYENhc2VSZWR1Y2VyYFxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnR5cGUgQWN0aW9uQ3JlYXRvckZvckNhc2VSZWR1Y2VyPENSPiA9IENSIGV4dGVuZHMgKFxyXG4gIHN0YXRlOiBhbnksXHJcbiAgYWN0aW9uOiBpbmZlciBBY3Rpb25cclxuKSA9PiBhbnlcclxuICA/IEFjdGlvbiBleHRlbmRzIHsgcGF5bG9hZDogaW5mZXIgUCB9XHJcbiAgICA/IFBheWxvYWRBY3Rpb25DcmVhdG9yPFA+XHJcbiAgICA6IEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZFxyXG4gIDogQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkXHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgdGhlIENhc2VSZWR1Y2VycyBvdXQgb2YgYSBgcmVkdWNlcnNgIG9iamVjdCwgZXZlbiBpZiB0aGV5IGFyZVxyXG4gKiB0ZXN0ZWQgaW50byBhIGBDYXNlUmVkdWNlcldpdGhQcmVwYXJlYC5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG50eXBlIFNsaWNlRGVmaW5lZENhc2VSZWR1Y2VyczxDYXNlUmVkdWNlcnMgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2Vyczxhbnk+PiA9IHtcclxuICBbVHlwZSBpbiBrZXlvZiBDYXNlUmVkdWNlcnNdOiBDYXNlUmVkdWNlcnNbVHlwZV0gZXh0ZW5kcyB7XHJcbiAgICByZWR1Y2VyOiBpbmZlciBSZWR1Y2VyXHJcbiAgfVxyXG4gICAgPyBSZWR1Y2VyXHJcbiAgICA6IENhc2VSZWR1Y2Vyc1tUeXBlXVxyXG59XHJcblxyXG4vKipcclxuICogVXNlZCBvbiBhIFNsaWNlQ2FzZVJlZHVjZXJzIG9iamVjdC5cclxuICogRW5zdXJlcyB0aGF0IGlmIGEgQ2FzZVJlZHVjZXIgaXMgYSBgQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZWAsIHRoYXRcclxuICogdGhlIGByZWR1Y2VyYCBhbmQgdGhlIGBwcmVwYXJlYCBmdW5jdGlvbiB1c2UgdGhlIHNhbWUgdHlwZSBvZiBgcGF5bG9hZGAuXHJcbiAqXHJcbiAqIE1pZ2h0IGRvIGFkZGl0aW9uYWwgc3VjaCBjaGVja3MgaW4gdGhlIGZ1dHVyZS5cclxuICpcclxuICogVGhpcyB0eXBlIGlzIG9ubHkgZXZlciB1c2VmdWwgaWYgeW91IHdhbnQgdG8gd3JpdGUgeW91ciBvd24gd3JhcHBlciBhcm91bmRcclxuICogYGNyZWF0ZVNsaWNlYC4gUGxlYXNlIGRvbid0IHVzZSBpdCBvdGhlcndpc2UhXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIFZhbGlkYXRlU2xpY2VDYXNlUmVkdWNlcnM8XHJcbiAgUyxcclxuICBBQ1IgZXh0ZW5kcyBTbGljZUNhc2VSZWR1Y2VyczxTPlxyXG4+ID0gQUNSICZcclxuICB7XHJcbiAgICBbVCBpbiBrZXlvZiBBQ1JdOiBBQ1JbVF0gZXh0ZW5kcyB7XHJcbiAgICAgIHJlZHVjZXIoczogUywgYWN0aW9uPzogaW5mZXIgQSk6IGFueVxyXG4gICAgfVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHByZXBhcmUoLi4uYTogbmV2ZXJbXSk6IE9taXQ8QSwgJ3R5cGUnPlxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGdldFR5cGUoc2xpY2U6IHN0cmluZywgYWN0aW9uS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBgJHtzbGljZX0vJHthY3Rpb25LZXl9YFxyXG59XHJcblxyXG4vKipcclxuICogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYW4gaW5pdGlhbCBzdGF0ZSwgYW4gb2JqZWN0IGZ1bGwgb2YgcmVkdWNlclxyXG4gKiBmdW5jdGlvbnMsIGFuZCBhIFwic2xpY2UgbmFtZVwiLCBhbmQgYXV0b21hdGljYWxseSBnZW5lcmF0ZXNcclxuICogYWN0aW9uIGNyZWF0b3JzIGFuZCBhY3Rpb24gdHlwZXMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZVxyXG4gKiByZWR1Y2VycyBhbmQgc3RhdGUuXHJcbiAqXHJcbiAqIFRoZSBgcmVkdWNlcmAgYXJndW1lbnQgaXMgcGFzc2VkIHRvIGBjcmVhdGVSZWR1Y2VyKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2xpY2U8XHJcbiAgU3RhdGUsXHJcbiAgQ2FzZVJlZHVjZXJzIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8U3RhdGU+LFxyXG4gIE5hbWUgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmdcclxuPihcclxuICBvcHRpb25zOiBDcmVhdGVTbGljZU9wdGlvbnM8U3RhdGUsIENhc2VSZWR1Y2VycywgTmFtZT5cclxuKTogU2xpY2U8U3RhdGUsIENhc2VSZWR1Y2VycywgTmFtZT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgaW5pdGlhbFN0YXRlIH0gPSBvcHRpb25zXHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BuYW1lYCBpcyBhIHJlcXVpcmVkIG9wdGlvbiBmb3IgY3JlYXRlU2xpY2UnKVxyXG4gIH1cclxuICBjb25zdCByZWR1Y2VycyA9IG9wdGlvbnMucmVkdWNlcnMgfHwge31cclxuICBjb25zdCBbXHJcbiAgICBleHRyYVJlZHVjZXJzID0ge30sXHJcbiAgICBhY3Rpb25NYXRjaGVycyA9IFtdLFxyXG4gICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gdW5kZWZpbmVkXHJcbiAgXSA9XHJcbiAgICB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IFtdXHJcbiAgICAgIDogdHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG9wdGlvbnMuZXh0cmFSZWR1Y2VycylcclxuICAgICAgOiBbb3B0aW9ucy5leHRyYVJlZHVjZXJzXVxyXG5cclxuICBjb25zdCByZWR1Y2VyTmFtZXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycylcclxuXHJcbiAgY29uc3Qgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWU6IFJlY29yZDxzdHJpbmcsIENhc2VSZWR1Y2VyPiA9IHt9XHJcbiAgY29uc3Qgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGU6IFJlY29yZDxzdHJpbmcsIENhc2VSZWR1Y2VyPiA9IHt9XHJcbiAgY29uc3QgYWN0aW9uQ3JlYXRvcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9XHJcblxyXG4gIHJlZHVjZXJOYW1lcy5mb3JFYWNoKHJlZHVjZXJOYW1lID0+IHtcclxuICAgIGNvbnN0IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlID0gcmVkdWNlcnNbcmVkdWNlck5hbWVdXHJcbiAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShuYW1lLCByZWR1Y2VyTmFtZSlcclxuXHJcbiAgICBsZXQgY2FzZVJlZHVjZXI6IENhc2VSZWR1Y2VyPFN0YXRlLCBhbnk+XHJcbiAgICBsZXQgcHJlcGFyZUNhbGxiYWNrOiBQcmVwYXJlQWN0aW9uPGFueT4gfCB1bmRlZmluZWRcclxuXHJcbiAgICBpZiAoJ3JlZHVjZXInIGluIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlKSB7XHJcbiAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucmVkdWNlclxyXG4gICAgICBwcmVwYXJlQ2FsbGJhY2sgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5wcmVwYXJlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlXHJcbiAgICB9XHJcblxyXG4gICAgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVbcmVkdWNlck5hbWVdID0gY2FzZVJlZHVjZXJcclxuICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlW3R5cGVdID0gY2FzZVJlZHVjZXJcclxuICAgIGFjdGlvbkNyZWF0b3JzW3JlZHVjZXJOYW1lXSA9IHByZXBhcmVDYWxsYmFja1xyXG4gICAgICA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spXHJcbiAgICAgIDogY3JlYXRlQWN0aW9uKHR5cGUpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZmluYWxDYXNlUmVkdWNlcnMgPSB7IC4uLmV4dHJhUmVkdWNlcnMsIC4uLnNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlIH1cclxuICBjb25zdCByZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGZpbmFsQ2FzZVJlZHVjZXJzIGFzIGFueSxcclxuICAgIGFjdGlvbk1hdGNoZXJzLFxyXG4gICAgZGVmYXVsdENhc2VSZWR1Y2VyXHJcbiAgKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHJlZHVjZXIsXHJcbiAgICBhY3Rpb25zOiBhY3Rpb25DcmVhdG9ycyBhcyBhbnksXHJcbiAgICBjYXNlUmVkdWNlcnM6IHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lIGFzIGFueVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxFbnRpdHlTdGF0ZTxWPigpOiBFbnRpdHlTdGF0ZTxWPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge31cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5PFY+KCkge1xyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpOiBFbnRpdHlTdGF0ZTxWPlxyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZTxTIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIGFkZGl0aW9uYWxTdGF0ZTogU1xyXG4gICk6IEVudGl0eVN0YXRlPFY+ICYgU1xyXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShhZGRpdGlvbmFsU3RhdGU6IGFueSA9IHt9KTogYW55IHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpLCBhZGRpdGlvbmFsU3RhdGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRJbml0aWFsU3RhdGUgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBFbnRpdHlTZWxlY3RvcnMsIERpY3Rpb25hcnksIEVudGl0eUlkIH0gZnJvbSAnLi9tb2RlbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeTxUPigpIHtcclxuICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMoKTogRW50aXR5U2VsZWN0b3JzPFQsIEVudGl0eVN0YXRlPFQ+PlxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9yczxWPihcclxuICAgIHNlbGVjdFN0YXRlOiAoc3RhdGU6IFYpID0+IEVudGl0eVN0YXRlPFQ+XHJcbiAgKTogRW50aXR5U2VsZWN0b3JzPFQsIFY+XHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKFxyXG4gICAgc2VsZWN0U3RhdGU/OiAoc3RhdGU6IGFueSkgPT4gRW50aXR5U3RhdGU8VD5cclxuICApOiBFbnRpdHlTZWxlY3RvcnM8VCwgYW55PiB7XHJcbiAgICBjb25zdCBzZWxlY3RJZHMgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGUuaWRzXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RW50aXRpZXMgPSAoc3RhdGU6IEVudGl0eVN0YXRlPFQ+KSA9PiBzdGF0ZS5lbnRpdGllc1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEFsbCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICBzZWxlY3RJZHMsXHJcbiAgICAgIHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAoaWRzOiBUW10sIGVudGl0aWVzOiBEaWN0aW9uYXJ5PFQ+KTogYW55ID0+XHJcbiAgICAgICAgaWRzLm1hcCgoaWQ6IGFueSkgPT4gKGVudGl0aWVzIGFzIGFueSlbaWRdKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdElkID0gKF86IGFueSwgaWQ6IEVudGl0eUlkKSA9PiBpZFxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJ5SWQgPSAoZW50aXRpZXM6IERpY3Rpb25hcnk8VD4sIGlkOiBFbnRpdHlJZCkgPT4gZW50aXRpZXNbaWRdXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0VG90YWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RJZHMsIGlkcyA9PiBpZHMubGVuZ3RoKVxyXG5cclxuICAgIGlmICghc2VsZWN0U3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RJZHMsXHJcbiAgICAgICAgc2VsZWN0RW50aXRpZXMsXHJcbiAgICAgICAgc2VsZWN0QWxsLFxyXG4gICAgICAgIHNlbGVjdFRvdGFsLFxyXG4gICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RJZHM6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RJZHMpLFxyXG4gICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLFxyXG4gICAgICBzZWxlY3RBbGw6IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RBbGwpLFxyXG4gICAgICBzZWxlY3RUb3RhbDogY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdFRvdGFsKSxcclxuICAgICAgc2VsZWN0QnlJZDogY3JlYXRlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldFNlbGVjdG9ycyB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBpc0RyYWZ0IH0gZnJvbSAnaW1tZXInXHJcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBQcmV2ZW50QW55IH0gZnJvbSAnLi9tb2RlbHMnXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGlzRlNBIH0gZnJvbSAnLi4vY3JlYXRlQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcjxWPihcclxuICBtdXRhdG9yOiAoc3RhdGU6IEVudGl0eVN0YXRlPFY+KSA9PiB2b2lkXHJcbikge1xyXG4gIGNvbnN0IG9wZXJhdG9yID0gY3JlYXRlU3RhdGVPcGVyYXRvcigoXzogdW5kZWZpbmVkLCBzdGF0ZTogRW50aXR5U3RhdGU8Vj4pID0+XHJcbiAgICBtdXRhdG9yKHN0YXRlKVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbjxTIGV4dGVuZHMgRW50aXR5U3RhdGU8Vj4+KFxyXG4gICAgc3RhdGU6IFByZXZlbnRBbnk8UywgVj5cclxuICApOiBTIHtcclxuICAgIHJldHVybiBvcGVyYXRvcihzdGF0ZSBhcyBTLCB1bmRlZmluZWQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGVPcGVyYXRvcjxWLCBSPihcclxuICBtdXRhdG9yOiAoYXJnOiBSLCBzdGF0ZTogRW50aXR5U3RhdGU8Vj4pID0+IHZvaWRcclxuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbjxTIGV4dGVuZHMgRW50aXR5U3RhdGU8Vj4+KFxyXG4gICAgc3RhdGU6IFMsXHJcbiAgICBhcmc6IFIgfCBQYXlsb2FkQWN0aW9uPFI+XHJcbiAgKTogUyB7XHJcbiAgICBmdW5jdGlvbiBpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChcclxuICAgICAgYXJnOiBSIHwgUGF5bG9hZEFjdGlvbjxSPlxyXG4gICAgKTogYXJnIGlzIFBheWxvYWRBY3Rpb248Uj4ge1xyXG4gICAgICByZXR1cm4gaXNGU0EoYXJnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJ1bk11dGF0b3IgPSAoZHJhZnQ6IEVudGl0eVN0YXRlPFY+KSA9PiB7XHJcbiAgICAgIGlmIChpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcpKSB7XHJcbiAgICAgICAgbXV0YXRvcihhcmcucGF5bG9hZCwgZHJhZnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXV0YXRvcihhcmcsIGRyYWZ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRHJhZnQoc3RhdGUpKSB7XHJcbiAgICAgIC8vIHdlIG11c3QgYWxyZWFkeSBiZSBpbnNpZGUgYSBgY3JlYXRlTmV4dFN0YXRlYCBjYWxsLCBsaWtlbHkgYmVjYXVzZVxyXG4gICAgICAvLyB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgIG9yIGBjcmVhdGVTbGljZWAuXHJcbiAgICAgIC8vIEl0J3Mgc2FmZSB0byBqdXN0IHBhc3MgdGhlIGRyYWZ0IHRvIHRoZSBtdXRhdG9yLlxyXG4gICAgICBydW5NdXRhdG9yKHN0YXRlKVxyXG5cclxuICAgICAgLy8gc2luY2UgaXQncyBhIGRyYWZ0LCB3ZSdsbCBqdXN0IHJldHVybiBpdFxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmUgY3JlYXRlTmV4dFN0YXRlKCkgcHJvZHVjZXMgYW4gSW1tdXRhYmxlPERyYWZ0PFM+PiByYXRoZXJcclxuICAgICAgLy8gdGhhbiBhbiBJbW11dGFibGU8Uz4sIGFuZCBUeXBlU2NyaXB0IGNhbm5vdCBmaW5kIG91dCBob3cgdG8gcmVjb25jaWxlXHJcbiAgICAgIC8vIHRoZXNlIHR3byB0eXBlcy5cclxuICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZShzdGF0ZSwgcnVuTXV0YXRvcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSWRTZWxlY3RvciB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdElkVmFsdWU8VD4oZW50aXR5OiBULCBzZWxlY3RJZDogSWRTZWxlY3RvcjxUPikge1xyXG4gIGNvbnN0IGtleSA9IHNlbGVjdElkKGVudGl0eSlcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgJ1RoZSBlbnRpdHkgcGFzc2VkIHRvIHRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uIHJldHVybmVkIHVuZGVmaW5lZC4nLFxyXG4gICAgICAnWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24uJyxcclxuICAgICAgJ1RoZSBlbnRpdHkgdGhhdCB3YXMgcGFzc2VkOicsXHJcbiAgICAgIGVudGl0eSxcclxuICAgICAgJ1RoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uOicsXHJcbiAgICAgIHNlbGVjdElkLnRvU3RyaW5nKClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiBrZXlcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEVudGl0eVN0YXRlLFxyXG4gIEVudGl0eVN0YXRlQWRhcHRlcixcclxuICBJZFNlbGVjdG9yLFxyXG4gIFVwZGF0ZSxcclxuICBFbnRpdHlJZFxyXG59IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVN0YXRlT3BlcmF0b3IsXHJcbiAgY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yXHJcbn0gZnJvbSAnLi9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBzZWxlY3RJZFZhbHVlIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcjxUPihcclxuICBzZWxlY3RJZDogSWRTZWxlY3RvcjxUPlxyXG4pOiBFbnRpdHlTdGF0ZUFkYXB0ZXI8VD4ge1xyXG4gIHR5cGUgUiA9IEVudGl0eVN0YXRlPFQ+XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5OiBULCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKVxyXG5cclxuICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUuaWRzLnB1c2goa2V5KVxyXG4gICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkoZW50aXRpZXM6IFRbXSB8IFJlY29yZDxFbnRpdHlJZCwgVD4sIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcylcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcykge1xyXG4gICAgICBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KGVudGl0aWVzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUuaWRzID0gW11cclxuICAgIHN0YXRlLmVudGl0aWVzID0ge31cclxuXHJcbiAgICBhZGRNYW55TXV0YWJseShlbnRpdGllcywgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVPbmVNdXRhYmx5KGtleTogRW50aXR5SWQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gcmVtb3ZlTWFueU11dGFibHkoW2tleV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlTWFueU11dGFibHkoa2V5czogRW50aXR5SWRbXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGxldCBkaWRNdXRhdGUgPSBmYWxzZVxyXG5cclxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW2tleV1cclxuICAgICAgICBkaWRNdXRhdGUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRpZE11dGF0ZSkge1xyXG4gICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKGlkID0+IGlkIGluIHN0YXRlLmVudGl0aWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWxsTXV0YWJseShzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgICBpZHM6IFtdLFxyXG4gICAgICBlbnRpdGllczoge31cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0YWtlTmV3S2V5KFxyXG4gICAga2V5czogeyBbaWQ6IHN0cmluZ106IEVudGl0eUlkIH0sXHJcbiAgICB1cGRhdGU6IFVwZGF0ZTxUPixcclxuICAgIHN0YXRlOiBSXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF1cclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKVxyXG4gICAgY29uc3QgaGFzTmV3S2V5ID0gbmV3S2V5ICE9PSB1cGRhdGUuaWRcclxuXHJcbiAgICBpZiAoaGFzTmV3S2V5KSB7XHJcbiAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleVxyXG4gICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkXHJcblxyXG4gICAgcmV0dXJuIGhhc05ld0tleVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGU6IFVwZGF0ZTxUPiwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzOiBVcGRhdGU8VD5bXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld0tleXM6IHsgW2lkOiBzdHJpbmddOiBFbnRpdHlJZCB9ID0ge31cclxuXHJcbiAgICBjb25zdCB1cGRhdGVzUGVyRW50aXR5OiB7IFtpZDogc3RyaW5nXTogVXBkYXRlPFQ+IH0gPSB7fVxyXG5cclxuICAgIHVwZGF0ZXMuZm9yRWFjaCh1cGRhdGUgPT4ge1xyXG4gICAgICAvLyBPbmx5IGFwcGx5IHVwZGF0ZXMgdG8gZW50aXRpZXMgdGhhdCBjdXJyZW50bHkgZXhpc3RcclxuICAgICAgaWYgKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSB1cGRhdGVzIHRvIG9uZSBlbnRpdHksIG1lcmdlIHRoZW0gdG9nZXRoZXJcclxuICAgICAgICB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPSB7XHJcbiAgICAgICAgICBpZDogdXBkYXRlLmlkLFxyXG4gICAgICAgICAgLy8gU3ByZWFkcyBpZ25vcmUgZmFsc3kgdmFsdWVzLCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgdGhlcmUgaXNuJ3RcclxuICAgICAgICAgIC8vIGFuIGV4aXN0aW5nIHVwZGF0ZSBhbHJlYWR5IGF0IHRoaXMga2V5XHJcbiAgICAgICAgICBjaGFuZ2VzOiB7XHJcbiAgICAgICAgICAgIC4uLih1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF1cclxuICAgICAgICAgICAgICA/IHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXS5jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgOiBudWxsKSxcclxuICAgICAgICAgICAgLi4udXBkYXRlLmNoYW5nZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlcyA9IE9iamVjdC52YWx1ZXModXBkYXRlc1BlckVudGl0eSlcclxuXHJcbiAgICBjb25zdCBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMFxyXG5cclxuICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xyXG4gICAgICBjb25zdCBkaWRNdXRhdGVJZHMgPVxyXG4gICAgICAgIHVwZGF0ZXMuZmlsdGVyKHVwZGF0ZSA9PiB0YWtlTmV3S2V5KG5ld0tleXMsIHVwZGF0ZSwgc3RhdGUpKS5sZW5ndGggPiAwXHJcblxyXG4gICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XHJcbiAgICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLm1hcChpZCA9PiBuZXdLZXlzW2lkXSB8fCBpZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHk6IFQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkoXHJcbiAgICBlbnRpdGllczogVFtdIHwgUmVjb3JkPEVudGl0eUlkLCBUPixcclxuICAgIHN0YXRlOiBSXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRlZDogVFtdID0gW11cclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFVwZGF0ZTxUPltdID0gW11cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcykge1xyXG4gICAgICBjb25zdCBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZClcclxuICAgICAgaWYgKGlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgdXBkYXRlZC5wdXNoKHsgaWQsIGNoYW5nZXM6IGVudGl0eSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZGVkLnB1c2goZW50aXR5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpXHJcbiAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXHJcbiAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXHJcbiAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcclxuICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSksXHJcbiAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXHJcbiAgICByZW1vdmVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU1hbnlNdXRhYmx5KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEVudGl0eVN0YXRlLFxyXG4gIElkU2VsZWN0b3IsXHJcbiAgQ29tcGFyZXIsXHJcbiAgRW50aXR5U3RhdGVBZGFwdGVyLFxyXG4gIFVwZGF0ZSxcclxuICBFbnRpdHlJZFxyXG59IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdGF0ZU9wZXJhdG9yIH0gZnJvbSAnLi9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlciB9IGZyb20gJy4vdW5zb3J0ZWRfc3RhdGVfYWRhcHRlcidcclxuaW1wb3J0IHsgc2VsZWN0SWRWYWx1ZSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyPFQ+KFxyXG4gIHNlbGVjdElkOiBJZFNlbGVjdG9yPFQ+LFxyXG4gIHNvcnQ6IENvbXBhcmVyPFQ+XHJcbik6IEVudGl0eVN0YXRlQWRhcHRlcjxUPiB7XHJcbiAgdHlwZSBSID0gRW50aXR5U3RhdGU8VD5cclxuXHJcbiAgY29uc3QgeyByZW1vdmVPbmUsIHJlbW92ZU1hbnksIHJlbW92ZUFsbCB9ID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoXHJcbiAgICBzZWxlY3RJZFxyXG4gIClcclxuXHJcbiAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHk6IFQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkoXHJcbiAgICBuZXdNb2RlbHM6IFRbXSB8IFJlY29yZDxFbnRpdHlJZCwgVD4sXHJcbiAgICBzdGF0ZTogUlxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld01vZGVscykpIHtcclxuICAgICAgbmV3TW9kZWxzID0gT2JqZWN0LnZhbHVlcyhuZXdNb2RlbHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZWxzID0gbmV3TW9kZWxzLmZpbHRlcihcclxuICAgICAgbW9kZWwgPT4gIShzZWxlY3RJZFZhbHVlKG1vZGVsLCBzZWxlY3RJZCkgaW4gc3RhdGUuZW50aXRpZXMpXHJcbiAgICApXHJcblxyXG4gICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbWVyZ2UobW9kZWxzLCBzdGF0ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobW9kZWxzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGVscykpIHtcclxuICAgICAgbW9kZWxzID0gT2JqZWN0LnZhbHVlcyhtb2RlbHMpXHJcbiAgICB9XHJcbiAgICBzdGF0ZS5lbnRpdGllcyA9IHt9XHJcbiAgICBzdGF0ZS5pZHMgPSBbXVxyXG5cclxuICAgIGFkZE1hbnlNdXRhYmx5KG1vZGVscywgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZTogVXBkYXRlPFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRha2VVcGRhdGVkTW9kZWwobW9kZWxzOiBUW10sIHVwZGF0ZTogVXBkYXRlPFQ+LCBzdGF0ZTogUik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCEodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF1cclxuICAgIGNvbnN0IHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKVxyXG5cclxuICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdXHJcblxyXG4gICAgbW9kZWxzLnB1c2godXBkYXRlZClcclxuXHJcbiAgICByZXR1cm4gbmV3S2V5ICE9PSB1cGRhdGUuaWRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXM6IFVwZGF0ZTxUPltdLCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZWxzOiBUW10gPSBbXVxyXG5cclxuICAgIHVwZGF0ZXMuZm9yRWFjaCh1cGRhdGUgPT4gdGFrZVVwZGF0ZWRNb2RlbChtb2RlbHMsIHVwZGF0ZSwgc3RhdGUpKVxyXG5cclxuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIG1lcmdlKG1vZGVscywgc3RhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eTogVCwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShcclxuICAgIGVudGl0aWVzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LFxyXG4gICAgc3RhdGU6IFJcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcclxuICAgICAgZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKGVudGl0aWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZGVkOiBUW10gPSBbXVxyXG4gICAgY29uc3QgdXBkYXRlZDogVXBkYXRlPFQ+W10gPSBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKVxyXG4gICAgICBpZiAoaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICB1cGRhdGVkLnB1c2goeyBpZCwgY2hhbmdlczogZW50aXR5IH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkZWQucHVzaChlbnRpdHkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSlcclxuICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGE6IHVua25vd25bXSwgYjogdW5rbm93bltdKSB7XHJcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lcmdlKG1vZGVsczogVFtdLCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgbW9kZWxzLnNvcnQoc29ydClcclxuXHJcbiAgICAvLyBJbnNlcnQvb3ZlcndyaXRlIGFsbCBuZXcvdXBkYXRlZFxyXG4gICAgbW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xyXG4gICAgICBzdGF0ZS5lbnRpdGllc1tzZWxlY3RJZChtb2RlbCldID0gbW9kZWxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYWxsRW50aXRpZXMgPSBPYmplY3QudmFsdWVzKHN0YXRlLmVudGl0aWVzKSBhcyBUW11cclxuICAgIGFsbEVudGl0aWVzLnNvcnQoc29ydClcclxuXHJcbiAgICBjb25zdCBuZXdTb3J0ZWRJZHMgPSBhbGxFbnRpdGllcy5tYXAoc2VsZWN0SWQpXHJcbiAgICBjb25zdCB7IGlkcyB9ID0gc3RhdGVcclxuXHJcbiAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xyXG4gICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW1vdmVPbmUsXHJcbiAgICByZW1vdmVNYW55LFxyXG4gICAgcmVtb3ZlQWxsLFxyXG4gICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxyXG4gICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVudGl0eURlZmluaXRpb24sIENvbXBhcmVyLCBJZFNlbGVjdG9yLCBFbnRpdHlBZGFwdGVyIH0gZnJvbSAnLi9tb2RlbHMnXHJcbmltcG9ydCB7IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkgfSBmcm9tICcuL2VudGl0eV9zdGF0ZSdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSB9IGZyb20gJy4vc3RhdGVfc2VsZWN0b3JzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3NvcnRlZF9zdGF0ZV9hZGFwdGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlciB9IGZyb20gJy4vdW5zb3J0ZWRfc3RhdGVfYWRhcHRlcidcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW50aXR5QWRhcHRlcjxUPihcclxuICBvcHRpb25zOiB7XHJcbiAgICBzZWxlY3RJZD86IElkU2VsZWN0b3I8VD5cclxuICAgIHNvcnRDb21wYXJlcj86IGZhbHNlIHwgQ29tcGFyZXI8VD5cclxuICB9ID0ge31cclxuKTogRW50aXR5QWRhcHRlcjxUPiB7XHJcbiAgY29uc3QgeyBzZWxlY3RJZCwgc29ydENvbXBhcmVyIH06IEVudGl0eURlZmluaXRpb248VD4gPSB7XHJcbiAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxyXG4gICAgc2VsZWN0SWQ6IChpbnN0YW5jZTogYW55KSA9PiBpbnN0YW5jZS5pZCxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3Rvcnk8VD4oKVxyXG4gIGNvbnN0IHNlbGVjdG9yc0ZhY3RvcnkgPSBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5PFQ+KClcclxuICBjb25zdCBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXJcclxuICAgID8gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0Q29tcGFyZXIpXHJcbiAgICA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0SWQsXHJcbiAgICBzb3J0Q29tcGFyZXIsXHJcbiAgICAuLi5zdGF0ZUZhY3RvcnksXHJcbiAgICAuLi5zZWxlY3RvcnNGYWN0b3J5LFxyXG4gICAgLi4uc3RhdGVBZGFwdGVyXHJcbiAgfVxyXG59XHJcbiIsIi8vIEEgdHlwZSBvZiBwcm9taXNlLWxpa2UgdGhhdCByZXNvbHZlcyBzeW5jaHJvbm91c2x5IGFuZCBzdXBwb3J0cyBvbmx5IG9uZSBvYnNlcnZlclxuZXhwb3J0IGNvbnN0IF9QYWN0ID0gLyojX19QVVJFX18qLyhmdW5jdGlvbigpIHtcblx0ZnVuY3Rpb24gX1BhY3QoKSB7fVxuXHRfUGFjdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IF9QYWN0KCk7XG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnM7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlICYgMSA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBjYWxsYmFjayh0aGlzLnYpKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubyA9IGZ1bmN0aW9uKF90aGlzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IF90aGlzLnY7XG5cdFx0XHRcdGlmIChfdGhpcy5zICYgMSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvblJlamVjdGVkKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIG9uUmVqZWN0ZWQodmFsdWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0cmV0dXJuIF9QYWN0O1xufSkoKTtcblxuLy8gU2V0dGxlcyBhIHBhY3Qgc3luY2hyb25vdXNseVxuZXhwb3J0IGZ1bmN0aW9uIF9zZXR0bGUocGFjdCwgc3RhdGUsIHZhbHVlKSB7XG5cdGlmICghcGFjdC5zKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgX1BhY3QpIHtcblx0XHRcdGlmICh2YWx1ZS5zKSB7XG5cdFx0XHRcdGlmIChzdGF0ZSAmIDEpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHZhbHVlLnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUubyA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdHZhbHVlLnRoZW4oX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKSwgX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cGFjdC5zID0gc3RhdGU7XG5cdFx0cGFjdC52ID0gdmFsdWU7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBwYWN0Lm87XG5cdFx0aWYgKG9ic2VydmVyKSB7XG5cdFx0XHRvYnNlcnZlcihwYWN0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1NldHRsZWRQYWN0KHRoZW5hYmxlKSB7XG5cdHJldHVybiB0aGVuYWJsZSBpbnN0YW5jZW9mIF9QYWN0ICYmIHRoZW5hYmxlLnMgJiAxO1xufVxuXG4vLyBDb252ZXJ0cyBhcmd1bWVudCB0byBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYSBQcm9taXNlXG5leHBvcnQgZnVuY3Rpb24gX2FzeW5jKGYpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIGFyZ3MgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYXBwbHkodGhpcywgYXJncykpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSAoZXF1aXZhbGVudCB0byB0aGUgYXdhaXQga2V5d29yZCBpbiBFUzIwMTUsIHdpdGggY29udGludWF0aW9ucyBwYXNzZWQgZXhwbGljaXRseSlcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXQodmFsdWUsIHRoZW4sIGRpcmVjdCkge1xuXHRpZiAoZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHRoZW4gPyB0aGVuKHZhbHVlKSA6IHZhbHVlO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgIXZhbHVlLnRoZW4pIHtcblx0XHR2YWx1ZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHRoZW4gPyB2YWx1ZS50aGVuKHRoZW4pIDogdmFsdWU7XG59XG5cbi8vIEF3YWl0cyBvbiBhIHZhbHVlIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYSBQcm9taXNlLCB0aGVuIGlnbm9yZXMgaXRcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXRJZ25vcmVkKHZhbHVlLCBkaXJlY3QpIHtcblx0aWYgKCFkaXJlY3QpIHtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX2VtcHR5KSA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cbi8vIFByb2NlZWRzIGFmdGVyIGEgdmFsdWUgaGFzIHJlc29sdmVkLCBvciBwcm9jZWVkcyBpbW1lZGlhdGVseSBpZiB0aGUgdmFsdWUgaXMgbm90IHRoZW5hYmxlXG5leHBvcnQgZnVuY3Rpb24gX2NvbnRpbnVlKHZhbHVlLCB0aGVuKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHRoZW4odmFsdWUpO1xufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZUlnbm9yZWQodmFsdWUpIHtcblx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRyZXR1cm4gdmFsdWUudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QgdGhhdCBoYXMgYSBsZW5ndGggcHJvcGVydHksIHBhc3NpbmcgdGhlIGluZGV4IGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGV2ZW4gYXMgdGhlIGxlbmd0aCBwcm9wZXJ0eSBjaGFuZ2VzKVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JUbyhhcnJheSwgYm9keSwgY2hlY2spIHtcblx0dmFyIGkgPSAtMSwgcGFjdCwgcmVqZWN0O1xuXHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlICgrK2kgPCBhcnJheS5sZW5ndGggJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keShpKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWN0ID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdF9zZXR0bGUocGFjdCB8fCAocGFjdCA9IG5ldyBfUGFjdCgpKSwgMiwgZSk7XG5cdFx0fVxuXHR9XG5cdF9jeWNsZSgpO1xuXHRyZXR1cm4gcGFjdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHByb3BlcnRpZXMgKGluY2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9ySW4odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyAoZXhjbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPd24odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IF9pdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpIDogXCJAQGl0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyB2YWx1ZXNcbi8vIFVzZXMgZm9yLi4ub2YgaWYgdGhlIHJ1bnRpbWUgc3VwcG9ydHMgaXQsIG90aGVyd2lzZSBpdGVyYXRlcyB1bnRpbCBsZW5ndGggb24gYSBjb3B5XG5leHBvcnQgZnVuY3Rpb24gX2Zvck9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0oKSwgc3RlcCwgcGFjdCwgcmVqZWN0O1xuXHRcdGZ1bmN0aW9uIF9jeWNsZShyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUgJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBib2R5KHN0ZXAudmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfY3ljbGUoKTtcblx0XHRpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHR2YXIgX2ZpeHVwID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoIXN0ZXAuZG9uZSkge1xuXHRcdFx0XHRcdFx0aXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCAmJiBwYWN0LnRoZW4pIHtcblx0XHRcdFx0cmV0dXJuIHBhY3QudGhlbihfZml4dXAsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHR0aHJvdyBfZml4dXAoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0X2ZpeHVwKCk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWN0O1xuXHR9XG5cdC8vIE5vIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvclxuXHRpZiAoIShcImxlbmd0aFwiIGluIHRhcmdldCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0fVxuXHQvLyBIYW5kbGUgbGl2ZSBjb2xsZWN0aW9ucyBwcm9wZXJseVxuXHR2YXIgdmFsdWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKHZhbHVlcywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keSh2YWx1ZXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSBvbiBhIHZhbHVlIHVzaW5nIGl0J3MgYXN5bmMgaXRlcmF0b3IgaWYgcHJlc2VudCwgb3IgaXRzIHN5bmNocm9ub3VzIGl0ZXJhdG9yIGlmIG1pc3NpbmdcbmV4cG9ydCBmdW5jdGlvbiBfZm9yQXdhaXRPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHR2YXIgaXRlcmF0b3IgPSB0YXJnZXRbX2FzeW5jSXRlcmF0b3JTeW1ib2xdKCk7XG5cdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdHJldHVybiBwYWN0O1xuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KSB7XG5cdFx0XHRpZiAoY2hlY2sgJiYgY2hlY2soKSkge1xuXHRcdFx0XHRyZXR1cm4gX3NldHRsZShwYWN0LCAxLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVzdWx0OyB9KSA6IHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0XHRpdGVyYXRvci5uZXh0KCkudGhlbihfcmVzdW1lQWZ0ZXJOZXh0KS50aGVuKHZvaWQgMCwgX3JlamVjdCk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlck5leHQoc3RlcCkge1xuXHRcdFx0aWYgKHN0ZXAuZG9uZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKGJvZHkoc3RlcC52YWx1ZSkpLnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVqZWN0KGVycm9yKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDIsIGl0ZXJhdG9yLnJldHVybiA/IGl0ZXJhdG9yLnJldHVybigpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBlcnJvcjsgfSkgOiBlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoX2Zvck9mKHRhcmdldCwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihib2R5KTsgfSwgY2hlY2spKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgZ2VuZXJpYyBmb3IgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9mb3IodGVzdCwgdXBkYXRlLCBib2R5KSB7XG5cdHZhciBzdGFnZTtcblx0Zm9yICg7Oykge1xuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRzdGFnZSA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YWdlID0gMTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdHZhciB1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRzdGFnZSA9IDI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2YXIgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR2YXIgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoc3RhZ2UgPT09IDAgPyBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpIDogc3RhZ2UgPT09IDEgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHZhbHVlKSB7XG5cdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHVwZGF0ZSkge1xuXHRcdFx0XHR1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAodXBkYXRlVmFsdWUgJiYgdXBkYXRlVmFsdWUudGhlbiAmJiAhX2lzU2V0dGxlZFBhY3QodXBkYXRlVmFsdWUpKSB7XG5cdFx0XHRcdFx0dXBkYXRlVmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJVcGRhdGUpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlIHx8IChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkgJiYgIXNob3VsZENvbnRpbnVlLnYpKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoIXJlc3VsdCB8fCAhcmVzdWx0LnRoZW4pO1xuXHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVXBkYXRlKCkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSA9IHRlc3QoKSkge1xuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGRvIC4uLiB3aGlsZSBsb29wXG5leHBvcnQgZnVuY3Rpb24gX2RvKGJvZHksIHRlc3QpIHtcblx0dmFyIGF3YWl0Qm9keTtcblx0ZG8ge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHR9XG5cdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoIXNob3VsZENvbnRpbnVlLnRoZW4pO1xuXHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBzd2l0Y2ggc3RhdGVtZW50XG5leHBvcnQgZnVuY3Rpb24gX3N3aXRjaChkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG5cdHZhciBkaXNwYXRjaEluZGV4ID0gLTE7XG5cdHZhciBhd2FpdEJvZHk7XG5cdG91dGVyOiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRlc3QgPSBjYXNlc1tpXVswXTtcblx0XHRcdGlmICh0ZXN0KSB7XG5cdFx0XHRcdHZhciB0ZXN0VmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh0ZXN0VmFsdWUgJiYgdGVzdFZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGVzdFZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRm91bmQgdGhlIGRlZmF1bHQgY2FzZSwgc2V0IGl0IGFzIHRoZSBwZW5kaW5nIGRpc3BhdGNoIGNhc2Vcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkaXNwYXRjaEluZGV4ICE9PSAtMSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdH0gd2hpbGUgKGZhbGx0aHJvdWdoQ2hlY2sgJiYgIWZhbGx0aHJvdWdoQ2hlY2soKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdGNvbnN0IHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KGF3YWl0Qm9keSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogdGVzdFZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdCh2YWx1ZSkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICgrK2kgPT09IGNhc2VzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YWx1ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHR2YWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvIHtcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRpZiAoIWZhbGx0aHJvdWdoQ2hlY2sgfHwgZmFsbHRocm91Z2hDaGVjaygpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbChib2R5LCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbihib2R5KCkpIDogYm9keSgpO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShib2R5KCkpO1xuXHRcdHJldHVybiB0aGVuID8gcmVzdWx0LnRoZW4odGhlbikgOiByZXN1bHQ7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbElnbm9yZWQoYm9keSwgZGlyZWN0KSB7XG5cdHJldHVybiBfY2FsbChib2R5LCBfZW1wdHksIGRpcmVjdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlKGJvZHksIHRoZW4pIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih0aGVuKTtcblx0fVxuXHRyZXR1cm4gdGhlbihyZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHN3YWxsb3cgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9pbnZva2VJZ25vcmVkKGJvZHkpIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoKGJvZHksIHJlY292ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRyZXR1cm4gcmVjb3ZlcihlKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKHZvaWQgMCwgcmVjb3Zlcik7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5UmV0aHJvd3MoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIodHJ1ZSwgZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIuYmluZChudWxsLCBmYWxzZSksIGZpbmFsaXplci5iaW5kKG51bGwsIHRydWUpKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKGZhbHNlLCByZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIGludm9rZSBhIGZpbmFsbHkgY29udGludWF0aW9uIHRoYXQgYWx3YXlzIG92ZXJyaWRlcyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2ZpbmFsbHkoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIoKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKGZpbmFsaXplciwgZmluYWxpemVyKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKCk7XG59XG5cbi8vIFJldGhyb3cgb3IgcmV0dXJuIGEgdmFsdWUgZnJvbSBhIGZpbmFsbHkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX3JldGhyb3codGhyb3duLCB2YWx1ZSkge1xuXHRpZiAodGhyb3duKVxuXHRcdHRocm93IHZhbHVlO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8vIEVtcHR5IGZ1bmN0aW9uIHRvIGltcGxlbWVudCBicmVhayBhbmQgb3RoZXIgY29udHJvbCBmbG93IHRoYXQgaWdub3JlcyBhc3luY2hyb25vdXMgcmVzdWx0c1xuZXhwb3J0IGZ1bmN0aW9uIF9lbXB0eSgpIHtcbn1cblxuLy8gU2VudGluZWwgdmFsdWUgZm9yIGVhcmx5IHJldHVybnMgaW4gZ2VuZXJhdG9ycyBcbmV4cG9ydCBjb25zdCBfZWFybHlSZXR1cm4gPSAvKiNfX1BVUkVfXyovIHt9O1xuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvbiwgc2tpcHBpbmcgZWFybHkgcmV0dXJuc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEluR2VuZXJhdG9yKGJvZHksIHJlY292ZXIpIHtcblx0cmV0dXJuIF9jYXRjaChib2R5LCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH0pO1xufVxuXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yIGNsYXNzOyBhY2NlcHRzIHRoZSBlbnRyeXBvaW50IG9mIHRoZSBnZW5lcmF0b3IsIHRvIHdoaWNoIGl0IHBhc3NlcyBpdHNlbGYgd2hlbiB0aGUgZ2VuZXJhdG9yIHNob3VsZCBzdGFydFxuZXhwb3J0IGNvbnN0IF9Bc3luY0dlbmVyYXRvciA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlbnRyeSkge1xuXHRcdHRoaXMuX2VudHJ5ID0gZW50cnk7XG5cdFx0dGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0dGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0dGhpcy5fcmV0dXJuID0gbnVsbDtcblx0XHR0aGlzLl9wcm9taXNlID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuXHR9XG5cdGZ1bmN0aW9uIF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuXHR9XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5feWllbGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIFlpZWxkIHRoZSB2YWx1ZSB0byB0aGUgcGVuZGluZyBuZXh0IGNhbGxcblx0XHR0aGlzLl9yZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwWWllbGRlZFZhbHVlKSA6IF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSk7XG5cdFx0Ly8gUmV0dXJuIGEgcGFjdCBmb3IgYW4gdXBjb21pbmcgbmV4dC9yZXR1cm4vdGhyb3cgY2FsbFxuXHRcdHJldHVybiB0aGlzLl9wYWN0ID0gbmV3IF9QYWN0KCk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gQWR2YW5jZSB0aGUgZ2VuZXJhdG9yLCBzdGFydGluZyBpdCBpZiBpdCBoYXMgeWV0IHRvIGJlIHN0YXJ0ZWRcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgX2VudHJ5ID0gX3RoaXMuX2VudHJ5O1xuXHRcdFx0XHRpZiAoX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgbmV4dCBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTdGFydCB0aGUgZ2VuZXJhdG9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0ZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWUpIHtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX2VudHJ5KF90aGlzKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKHJldHVyblZhbHVlLCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUoX3RoaXMuX3JldHVybik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlKHBhY3QpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0X3Jlc29sdmUocGFjdCwgMiwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkIGFuZCBhIHlpZWxkIGV4cHJlc3Npb24gaXMgcGVuZGluZywgc2V0dGxlIGl0XG5cdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRfc2V0dGxlKF9wYWN0LCAxLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBFYXJseSByZXR1cm4gZnJvbSB0aGUgZ2VuZXJhdG9yIGlmIHN0YXJ0ZWQsIG90aGVyd2lzZSBhYmFuZG9ucyB0aGUgZ2VuZXJhdG9yXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSByZXR1cm4gY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCBhIHJlamVjdGVkIFwiZWFybHkgcmV0dXJuXCIgdmFsdWVcblx0XHRcdF90aGlzLl9yZXR1cm4gPSB2YWx1ZTtcblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIF9lYXJseVJldHVybik7XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdC8vIEluamVjdCBhbiBleGNlcHRpb24gaW50byB0aGUgcGVuZGluZyB5aWVsZCBleHByZXNzaW9uXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHRocm93IGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIGEgcmVqZWN0ZWQgUHJvbWlzZSBjb250YWluaW5nIHRoZSBlcnJvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIHRoZSB2YWx1ZSBhcyBhIHJlamVjdGlvblxuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbX2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdFxuXHRyZXR1cm4gX0FzeW5jR2VuZXJhdG9yO1xufSkoKTtcbiIsIi8vIEJvcnJvd2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FpL25hbm9pZC9ibG9iLzMuMC4yL25vbi1zZWN1cmUvaW5kZXguanNcclxuLy8gVGhpcyBhbHBoYWJldCB1c2VzIGBBLVphLXowLTlfLWAgc3ltYm9scy4gQSBnZW5ldGljIGFsZ29yaXRobSBoZWxwZWRcclxuLy8gb3B0aW1pemUgdGhlIGd6aXAgY29tcHJlc3Npb24gZm9yIHRoaXMgYWxwaGFiZXQuXHJcbmxldCB1cmxBbHBoYWJldCA9XHJcbiAgJ01vZHVsZVN5bWJoYXNPd25Qci0wMTIzNDU2Nzg5QUJDREVGR0hOUlZmZ2N0aVV2el9LcVlUSmtMeHBaWElqUVcnXHJcblxyXG4vKipcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XHJcbiAgbGV0IGlkID0gJydcclxuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxyXG4gIGxldCBpID0gc2l6ZVxyXG4gIHdoaWxlIChpLS0pIHtcclxuICAgIC8vIGB8IDBgIGlzIG1vcmUgY29tcGFjdCBhbmQgZmFzdGVyIHRoYW4gYE1hdGguZmxvb3IoKWAuXHJcbiAgICBpZCArPSB1cmxBbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIDY0KSB8IDBdXHJcbiAgfVxyXG4gIHJldHVybiBpZFxyXG59XHJcbiIsImltcG9ydCB7IERpc3BhdGNoLCBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbixcclxuICBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZFxyXG59IGZyb20gJy4vY3JlYXRlQWN0aW9uJ1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCB7IEZhbGxiYWNrSWZVbmtub3duLCBJc0FueSB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICcuL25hbm9pZCdcclxuXHJcbi8vIEB0cy1pZ25vcmUgd2UgbmVlZCB0aGUgaW1wb3J0IG9mIHRoZXNlIHR5cGVzIGR1ZSB0byBhIGJ1bmRsaW5nIGlzc3VlLlxyXG50eXBlIF9LZWVwID0gUGF5bG9hZEFjdGlvbiB8IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPGFueSwgdW5rbm93bj5cclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VUaHVua0FQSTxcclxuICBTLFxyXG4gIEUsXHJcbiAgRCBleHRlbmRzIERpc3BhdGNoID0gRGlzcGF0Y2gsXHJcbiAgUmVqZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZFxyXG4+ID0ge1xyXG4gIGRpc3BhdGNoOiBEXHJcbiAgZ2V0U3RhdGU6ICgpID0+IFNcclxuICBleHRyYTogRVxyXG4gIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgc2lnbmFsOiBBYm9ydFNpZ25hbFxyXG4gIHJlamVjdFdpdGhWYWx1ZSh2YWx1ZTogUmVqZWN0ZWRWYWx1ZSk6IFJlamVjdFdpdGhWYWx1ZTxSZWplY3RlZFZhbHVlPlxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkRXJyb3Ige1xyXG4gIG5hbWU/OiBzdHJpbmdcclxuICBtZXNzYWdlPzogc3RyaW5nXHJcbiAgc3RhY2s/OiBzdHJpbmdcclxuICBjb2RlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGNvbW1vblByb3BlcnRpZXM6IEFycmF5PGtleW9mIFNlcmlhbGl6ZWRFcnJvcj4gPSBbXHJcbiAgJ25hbWUnLFxyXG4gICdtZXNzYWdlJyxcclxuICAnc3RhY2snLFxyXG4gICdjb2RlJ1xyXG5dXHJcblxyXG5jbGFzcyBSZWplY3RXaXRoVmFsdWU8UmVqZWN0VmFsdWU+IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IFJlamVjdFZhbHVlKSB7fVxyXG59XHJcblxyXG4vLyBSZXdvcmtlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2VyaWFsaXplLWVycm9yXHJcbmV4cG9ydCBjb25zdCBtaW5pU2VyaWFsaXplRXJyb3IgPSAodmFsdWU6IGFueSk6IFNlcmlhbGl6ZWRFcnJvciA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHNpbXBsZUVycm9yOiBTZXJpYWxpemVkRXJyb3IgPSB7fVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBjb21tb25Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpbXBsZUVycm9yXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBtZXNzYWdlOiBTdHJpbmcodmFsdWUpIH1cclxufVxyXG5cclxudHlwZSBBc3luY1RodW5rQ29uZmlnID0ge1xyXG4gIHN0YXRlPzogdW5rbm93blxyXG4gIGRpc3BhdGNoPzogRGlzcGF0Y2hcclxuICBleHRyYT86IHVua25vd25cclxuICByZWplY3RWYWx1ZT86IHVua25vd25cclxufVxyXG5cclxudHlwZSBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICBzdGF0ZTogaW5mZXIgU3RhdGVcclxufVxyXG4gID8gU3RhdGVcclxuICA6IHVua25vd25cclxudHlwZSBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHsgZXh0cmE6IGluZmVyIEV4dHJhIH1cclxuICA/IEV4dHJhXHJcbiAgOiB1bmtub3duXHJcbnR5cGUgR2V0RGlzcGF0Y2g8VGh1bmtBcGlDb25maWc+ID0gVGh1bmtBcGlDb25maWcgZXh0ZW5kcyB7XHJcbiAgZGlzcGF0Y2g6IGluZmVyIERpc3BhdGNoXHJcbn1cclxuICA/IEZhbGxiYWNrSWZVbmtub3duPFxyXG4gICAgICBEaXNwYXRjaCxcclxuICAgICAgVGh1bmtEaXNwYXRjaDxcclxuICAgICAgICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gICAgICAgIEFueUFjdGlvblxyXG4gICAgICA+XHJcbiAgICA+XHJcbiAgOiBUaHVua0Rpc3BhdGNoPEdldFN0YXRlPFRodW5rQXBpQ29uZmlnPiwgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LCBBbnlBY3Rpb24+XHJcblxyXG50eXBlIEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiA9IEJhc2VUaHVua0FQSTxcclxuICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gIEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz5cclxuPlxyXG5cclxudHlwZSBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICByZWplY3RWYWx1ZTogaW5mZXIgUmVqZWN0VmFsdWVcclxufVxyXG4gID8gUmVqZWN0VmFsdWVcclxuICA6IHVua25vd25cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBwYXlsb2FkQ3JlYXRvcmAgYXJndW1lbnQgdG8gYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBNaWdodCBiZSB1c2VmdWwgZm9yIHdyYXBwaW5nIGBjcmVhdGVBc3luY1RodW5rYCBpbiBjdXN0b20gYWJzdHJhY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rUGF5bG9hZENyZWF0b3JSZXR1cm5WYWx1ZTxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWdcclxuPiA9XHJcbiAgfCBQcm9taXNlPFJldHVybmVkIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj4+XHJcbiAgfCBSZXR1cm5lZFxyXG4gIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSBgcGF5bG9hZENyZWF0b3JgIGFyZ3VtZW50IHRvIGBjcmVhdGVBc3luY1RodW5rYC5cclxuICogTWlnaHQgYmUgdXNlZnVsIGZvciB3cmFwcGluZyBgY3JlYXRlQXN5bmNUaHVua2AgaW4gY3VzdG9tIGFic3RyYWN0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnID0gdm9pZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWcgPSB7fVxyXG4+ID0gKFxyXG4gIGFyZzogVGh1bmtBcmcsXHJcbiAgdGh1bmtBUEk6IEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPlxyXG4pID0+IEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvclJldHVyblZhbHVlPFJldHVybmVkLCBUaHVua0FwaUNvbmZpZz5cclxuXHJcbi8qKlxyXG4gKiBBIFRodW5rQWN0aW9uIGNyZWF0ZWQgYnkgYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBEaXNwYXRjaGluZyBpdCByZXR1cm5zIGEgUHJvbWlzZSBmb3IgZWl0aGVyIGFcclxuICogZnVsZmlsbGVkIG9yIHJlamVjdGVkIGFjdGlvbi5cclxuICogQWxzbywgdGhlIHJldHVybmVkIHZhbHVlIGNvbnRhaW5zIGEgYGFib3J0KClgIG1ldGhvZFxyXG4gKiB0aGF0IGFsbG93cyB0aGUgYXN5bmNBY3Rpb24gdG8gYmUgY2FuY2VsbGVkIGZyb20gdGhlIG91dHNpZGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIEFzeW5jVGh1bmtBY3Rpb248XHJcbiAgUmV0dXJuZWQsXHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnXHJcbj4gPSAoXHJcbiAgZGlzcGF0Y2g6IEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBnZXRTdGF0ZTogKCkgPT4gR2V0U3RhdGU8VGh1bmtBcGlDb25maWc+LFxyXG4gIGV4dHJhOiBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz5cclxuKSA9PiBQcm9taXNlPFxyXG4gIHwgUGF5bG9hZEFjdGlvbjxSZXR1cm5lZCwgc3RyaW5nLCB7IGFyZzogVGh1bmtBcmc7IHJlcXVlc3RJZDogc3RyaW5nIH0+XHJcbiAgfCBQYXlsb2FkQWN0aW9uPFxyXG4gICAgICB1bmRlZmluZWQgfCBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgIHN0cmluZyxcclxuICAgICAge1xyXG4gICAgICAgIGFyZzogVGh1bmtBcmdcclxuICAgICAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gICAgICAgIGFib3J0ZWQ6IGJvb2xlYW5cclxuICAgICAgICBjb25kaXRpb246IGJvb2xlYW5cclxuICAgICAgfSxcclxuICAgICAgU2VyaWFsaXplZEVycm9yXHJcbiAgICA+XHJcbj4gJiB7XHJcbiAgYWJvcnQocmVhc29uPzogc3RyaW5nKTogdm9pZFxyXG59XHJcblxyXG50eXBlIEFzeW5jVGh1bmtBY3Rpb25DcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnIGV4dGVuZHMgQXN5bmNUaHVua0NvbmZpZ1xyXG4+ID0gSXNBbnk8XHJcbiAgVGh1bmtBcmcsXHJcbiAgLy8gYW55IGhhbmRsaW5nXHJcbiAgKGFyZzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgLy8gdW5rbm93biBoYW5kbGluZ1xyXG4gIHVua25vd24gZXh0ZW5kcyBUaHVua0FyZ1xyXG4gICAgPyAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBub3Qgc3BlY2lmaWVkIG9yIHNwZWNpZmllZCBhcyB2b2lkIG9yIHVuZGVmaW5lZFxyXG4gICAgOiBbVGh1bmtBcmddIGV4dGVuZHMgW3ZvaWRdIHwgW3VuZGVmaW5lZF1cclxuICAgID8gKCkgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBjb250YWlucyB2b2lkXHJcbiAgICA6IFt2b2lkXSBleHRlbmRzIFtUaHVua0FyZ10gLy8gbWFrZSBvcHRpb25hbFxyXG4gICAgPyAoYXJnPzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4gLy8gYXJndW1lbnQgY29udGFpbnMgdW5kZWZpbmVkXHJcbiAgICA6IFt1bmRlZmluZWRdIGV4dGVuZHMgW1RodW5rQXJnXVxyXG4gICAgPyBXaXRoU3RyaWN0TnVsbENoZWNrczxcclxuICAgICAgICAvLyB3aXRoIHN0cmljdCBudWxsQ2hlY2tzOiBtYWtlIG9wdGlvbmFsXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgYXJnPzogVGh1bmtBcmdcclxuICAgICAgICApID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgLy8gd2l0aG91dCBzdHJpY3QgbnVsbCBjaGVja3MgdGhpcyB3aWxsIG1hdGNoIGV2ZXJ5dGhpbmcsIHNvIGRvbid0IG1ha2UgaXQgb3B0aW9uYWxcclxuICAgICAgICAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4gICAgICA+IC8vIGRlZmF1bHQgY2FzZTogbm9ybWFsIGFyZ3VtZW50XHJcbiAgICA6IChhcmc6IFRodW5rQXJnKSA9PiBBc3luY1RodW5rQWN0aW9uPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+XHJcbj5cclxuXHJcbmludGVyZmFjZSBBc3luY1RodW5rT3B0aW9uczxcclxuICBUaHVua0FyZyA9IHZvaWQsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnID0ge31cclxuPiB7XHJcbiAgLyoqXHJcbiAgICogQSBtZXRob2QgdG8gY29udHJvbCB3aGV0aGVyIHRoZSBhc3luY1RodW5rIHNob3VsZCBiZSBleGVjdXRlZC4gSGFzIGFjY2VzcyB0byB0aGVcclxuICAgKiBgYXJnYCwgYGFwaS5nZXRTdGF0ZSgpYCBhbmQgYGFwaS5leHRyYWAgYXJndW1lbnRzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgYGZhbHNlYCBpZiBpdCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gICAqL1xyXG4gIGNvbmRpdGlvbj8oXHJcbiAgICBhcmc6IFRodW5rQXJnLFxyXG4gICAgYXBpOiBQaWNrPEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiwgJ2dldFN0YXRlJyB8ICdleHRyYSc+XHJcbiAgKTogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gIC8qKlxyXG4gICAqIElmIGBjb25kaXRpb25gIHJldHVybnMgYGZhbHNlYCwgdGhlIGFzeW5jVGh1bmsgd2lsbCBiZSBza2lwcGVkLlxyXG4gICAqIFRoaXMgb3B0aW9uIGFsbG93cyB5b3UgdG8gY29udHJvbCB3aGV0aGVyIGEgYHJlamVjdGVkYCBhY3Rpb24gd2l0aCBgbWV0YS5jb25kaXRpb24gPT0gZmFsc2VgXHJcbiAgICogd2lsbCBiZSBkaXNwYXRjaGVkIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBkaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbj86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBBc3luY1RodW5rUGVuZGluZ0FjdGlvbkNyZWF0b3I8XHJcbiAgVGh1bmtBcmdcclxuPiA9IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPFxyXG4gIFtzdHJpbmcsIFRodW5rQXJnXSxcclxuICB1bmRlZmluZWQsXHJcbiAgc3RyaW5nLFxyXG4gIG5ldmVyLFxyXG4gIHtcclxuICAgIGFyZzogVGh1bmtBcmdcclxuICAgIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgfVxyXG4+XHJcblxyXG50eXBlIEFzeW5jVGh1bmtSZWplY3RlZEFjdGlvbkNyZWF0b3I8XHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWdcclxuPiA9IEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPFxyXG4gIFtcclxuICAgIEVycm9yIHwgbnVsbCxcclxuICAgIHN0cmluZyxcclxuICAgIFRodW5rQXJnLFxyXG4gICAgKEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPiB8IHVuZGVmaW5lZCk/XHJcbiAgXSxcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gfCB1bmRlZmluZWQsXHJcbiAgc3RyaW5nLFxyXG4gIFNlcmlhbGl6ZWRFcnJvcixcclxuICB7XHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gICAgYWJvcnRlZDogYm9vbGVhblxyXG4gICAgY29uZGl0aW9uOiBib29sZWFuXHJcbiAgfVxyXG4+XHJcblxyXG50eXBlIEFzeW5jVGh1bmtGdWxmaWxsZWRBY3Rpb25DcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnXHJcbj4gPSBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBbUmV0dXJuZWQsIHN0cmluZywgVGh1bmtBcmddLFxyXG4gIFJldHVybmVkLFxyXG4gIHN0cmluZyxcclxuICBuZXZlcixcclxuICB7XHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gIH1cclxuPlxyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBNaWdodCBiZSB1c2VmdWwgZm9yIHdyYXBwaW5nIGBjcmVhdGVBc3luY1RodW5rYCBpbiBjdXN0b20gYWJzdHJhY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnIGV4dGVuZHMgQXN5bmNUaHVua0NvbmZpZ1xyXG4+ID0gQXN5bmNUaHVua0FjdGlvbkNyZWF0b3I8UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4gJiB7XHJcbiAgcGVuZGluZzogQXN5bmNUaHVua1BlbmRpbmdBY3Rpb25DcmVhdG9yPFRodW5rQXJnPlxyXG4gIHJlamVjdGVkOiBBc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25DcmVhdG9yPFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz5cclxuICBmdWxmaWxsZWQ6IEFzeW5jVGh1bmtGdWxmaWxsZWRBY3Rpb25DcmVhdG9yPFJldHVybmVkLCBUaHVua0FyZz5cclxuICB0eXBlUHJlZml4OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB0eXBlUHJlZml4XHJcbiAqIEBwYXJhbSBwYXlsb2FkQ3JlYXRvclxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXN5bmNUaHVuazxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FyZyA9IHZvaWQsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnID0ge31cclxuPihcclxuICB0eXBlUHJlZml4OiBzdHJpbmcsXHJcbiAgcGF5bG9hZENyZWF0b3I6IEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvcjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPixcclxuICBvcHRpb25zPzogQXN5bmNUaHVua09wdGlvbnM8VGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4pOiBBc3luY1RodW5rPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+IHtcclxuICB0eXBlIFJlamVjdGVkVmFsdWUgPSBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz5cclxuXHJcbiAgY29uc3QgZnVsZmlsbGVkID0gY3JlYXRlQWN0aW9uKFxyXG4gICAgdHlwZVByZWZpeCArICcvZnVsZmlsbGVkJyxcclxuICAgIChyZXN1bHQ6IFJldHVybmVkLCByZXF1ZXN0SWQ6IHN0cmluZywgYXJnOiBUaHVua0FyZykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcclxuICAgICAgICBtZXRhOiB7IGFyZywgcmVxdWVzdElkIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgY29uc3QgcGVuZGluZyA9IGNyZWF0ZUFjdGlvbihcclxuICAgIHR5cGVQcmVmaXggKyAnL3BlbmRpbmcnLFxyXG4gICAgKHJlcXVlc3RJZDogc3RyaW5nLCBhcmc6IFRodW5rQXJnKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF5bG9hZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1ldGE6IHsgYXJnLCByZXF1ZXN0SWQgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihcclxuICAgIHR5cGVQcmVmaXggKyAnL3JlamVjdGVkJyxcclxuICAgIChcclxuICAgICAgZXJyb3I6IEVycm9yIHwgbnVsbCxcclxuICAgICAgcmVxdWVzdElkOiBzdHJpbmcsXHJcbiAgICAgIGFyZzogVGh1bmtBcmcsXHJcbiAgICAgIHBheWxvYWQ/OiBSZWplY3RlZFZhbHVlXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgYWJvcnRlZCA9ICEhZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InXHJcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEhZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ0NvbmRpdGlvbkVycm9yJ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgZXJyb3I6IG1pbmlTZXJpYWxpemVFcnJvcihlcnJvciB8fCAnUmVqZWN0ZWQnKSxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICBhcmcsXHJcbiAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICBhYm9ydGVkLFxyXG4gICAgICAgICAgY29uZGl0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBsZXQgZGlzcGxheWVkV2FybmluZyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IEFDID1cclxuICAgIHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gQWJvcnRDb250cm9sbGVyXHJcbiAgICAgIDogY2xhc3MgaW1wbGVtZW50cyBBYm9ydENvbnRyb2xsZXIge1xyXG4gICAgICAgICAgc2lnbmFsOiBBYm9ydFNpZ25hbCA9IHtcclxuICAgICAgICAgICAgYWJvcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25hYm9ydCgpIHt9LFxyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCkge31cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFib3J0KCkge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgIGlmICghZGlzcGxheWVkV2FybmluZykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkV2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICAgICAgICAgICAgYFRoaXMgcGxhdGZvcm0gZG9lcyBub3QgaW1wbGVtZW50IEFib3J0Q29udHJvbGxlci4gXHJcbklmIHlvdSB3YW50IHRvIHVzZSB0aGUgQWJvcnRDb250cm9sbGVyIHRvIHJlYWN0IHRvIFxcYGFib3J0XFxgIGV2ZW50cywgcGxlYXNlIGNvbnNpZGVyIGltcG9ydGluZyBhIHBvbHlmaWxsIGxpa2UgJ2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5Jy5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKFxyXG4gICAgYXJnOiBUaHVua0FyZ1xyXG4gICk6IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IG5hbm9pZCgpXHJcblxyXG4gICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQUMoKVxyXG4gICAgICBsZXQgYWJvcnRSZWFzb246IHN0cmluZyB8IHVuZGVmaW5lZFxyXG5cclxuICAgICAgY29uc3QgYWJvcnRlZFByb21pc2UgPSBuZXcgUHJvbWlzZTxuZXZlcj4oKF8sIHJlamVjdCkgPT5cclxuICAgICAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT5cclxuICAgICAgICAgIHJlamVjdCh7IG5hbWU6ICdBYm9ydEVycm9yJywgbWVzc2FnZTogYWJvcnRSZWFzb24gfHwgJ0Fib3J0ZWQnIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcblxyXG4gICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlXHJcbiAgICAgIGZ1bmN0aW9uIGFib3J0KHJlYXNvbj86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgICBhYm9ydFJlYXNvbiA9IHJlYXNvblxyXG4gICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSAoYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGZpbmFsQWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBmdWxmaWxsZWQgfCB0eXBlb2YgcmVqZWN0ZWQ+XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLmNvbmRpdGlvbiAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLmNvbmRpdGlvbihhcmcsIHsgZ2V0U3RhdGUsIGV4dHJhIH0pID09PSBmYWxzZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IHtcclxuICAgICAgICAgICAgICBuYW1lOiAnQ29uZGl0aW9uRXJyb3InLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdBYm9ydGVkIGR1ZSB0byBjb25kaXRpb24gY2FsbGJhY2sgcmV0dXJuaW5nIGZhbHNlLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhcnRlZCA9IHRydWVcclxuICAgICAgICAgIGRpc3BhdGNoKHBlbmRpbmcocmVxdWVzdElkLCBhcmcpKVxyXG4gICAgICAgICAgZmluYWxBY3Rpb24gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgICAgICBhYm9ydGVkUHJvbWlzZSxcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFxyXG4gICAgICAgICAgICAgIHBheWxvYWRDcmVhdG9yKGFyZywge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gsXHJcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0V2l0aFZhbHVlKHZhbHVlOiBSZWplY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3RlZChudWxsLCByZXF1ZXN0SWQsIGFyZywgcmVzdWx0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgZmluYWxBY3Rpb24gPSByZWplY3RlZChlcnIsIHJlcXVlc3RJZCwgYXJnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSBkaXNwYXRjaCB0aGUgcmVzdWx0IGFjdGlvbiBfYWZ0ZXJfIHRoZSBjYXRjaCwgdG8gYXZvaWQgaGF2aW5nIGFueSBlcnJvcnNcclxuICAgICAgICAvLyBoZXJlIGdldCBzd2FsbG93ZWQgYnkgdGhlIHRyeS9jYXRjaCBibG9jayxcclxuICAgICAgICAvLyBwZXIgaHR0cHM6Ly90d2l0dGVyLmNvbS9kYW5fYWJyYW1vdi9zdGF0dXMvNzcwOTE0MjIxNjM4OTQyNzIwXHJcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdHV0b3JpYWxzL2FkdmFuY2VkLXR1dG9yaWFsI2FzeW5jLWVycm9yLWhhbmRsaW5nLWxvZ2ljLWluLXRodW5rc1xyXG5cclxuICAgICAgICBjb25zdCBza2lwRGlzcGF0Y2ggPVxyXG4gICAgICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICAgICAgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiZcclxuICAgICAgICAgIHJlamVjdGVkLm1hdGNoKGZpbmFsQWN0aW9uKSAmJlxyXG4gICAgICAgICAgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb25cclxuXHJcbiAgICAgICAgaWYgKCFza2lwRGlzcGF0Y2gpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKGZpbmFsQWN0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxBY3Rpb25cclxuICAgICAgfSkoKVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IGFib3J0IH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgIGFjdGlvbkNyZWF0b3IgYXMgQXN5bmNUaHVua0FjdGlvbkNyZWF0b3I8XHJcbiAgICAgIFJldHVybmVkLFxyXG4gICAgICBUaHVua0FyZyxcclxuICAgICAgVGh1bmtBcGlDb25maWdcclxuICAgID4sXHJcbiAgICB7XHJcbiAgICAgIHBlbmRpbmcsXHJcbiAgICAgIHJlamVjdGVkLFxyXG4gICAgICBmdWxmaWxsZWQsXHJcbiAgICAgIHR5cGVQcmVmaXhcclxuICAgIH1cclxuICApXHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uVHlwZXNXaXRoT3B0aW9uYWxFcnJvckFjdGlvbiA9XHJcbiAgfCB7IGVycm9yOiBhbnkgfVxyXG4gIHwgeyBlcnJvcj86IG5ldmVyOyBwYXlsb2FkOiBhbnkgfVxyXG50eXBlIFBheWxvYWRGb3JBY3Rpb25UeXBlc0V4Y2x1ZGluZ0Vycm9yQWN0aW9uczxUPiA9IFQgZXh0ZW5kcyB7IGVycm9yOiBhbnkgfVxyXG4gID8gbmV2ZXJcclxuICA6IFQgZXh0ZW5kcyB7IHBheWxvYWQ6IGluZmVyIFAgfVxyXG4gID8gUFxyXG4gIDogbmV2ZXJcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwUmVzdWx0PFIgZXh0ZW5kcyBBY3Rpb25UeXBlc1dpdGhPcHRpb25hbEVycm9yQWN0aW9uPihcclxuICByZXR1cm5lZDogUlxyXG4pOiBQYXlsb2FkRm9yQWN0aW9uVHlwZXNFeGNsdWRpbmdFcnJvckFjdGlvbnM8Uj4ge1xyXG4gIGlmICgnZXJyb3InIGluIHJldHVybmVkKSB7XHJcbiAgICB0aHJvdyByZXR1cm5lZC5lcnJvclxyXG4gIH1cclxuICByZXR1cm4gKHJldHVybmVkIGFzIGFueSkucGF5bG9hZFxyXG59XHJcblxyXG50eXBlIFdpdGhTdHJpY3ROdWxsQ2hlY2tzPFRydWUsIEZhbHNlPiA9IHVuZGVmaW5lZCBleHRlbmRzIGJvb2xlYW5cclxuICA/IEZhbHNlXHJcbiAgOiBUcnVlXHJcbiIsImltcG9ydCB7IGVuYWJsZUVTNSB9IGZyb20gJ2ltbWVyJ1xyXG5leHBvcnQgKiBmcm9tICdyZWR1eCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVOZXh0U3RhdGUsIERyYWZ0LCBjdXJyZW50IH0gZnJvbSAnaW1tZXInXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU2VsZWN0b3IsXHJcbiAgU2VsZWN0b3IsXHJcbiAgT3V0cHV0UGFyYW1ldHJpY1NlbGVjdG9yLFxyXG4gIE91dHB1dFNlbGVjdG9yLFxyXG4gIFBhcmFtZXRyaWNTZWxlY3RvclxyXG59IGZyb20gJ3Jlc2VsZWN0J1xyXG5leHBvcnQgeyBUaHVua0FjdGlvbiwgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuLy8gV2UgZGVsaWJlcmF0ZWx5IGVuYWJsZSBJbW1lcidzIEVTNSBzdXBwb3J0LCBvbiB0aGUgZ3JvdW5kcyB0aGF0XHJcbi8vIHdlIGFzc3VtZSBSVEsgd2lsbCBiZSB1c2VkIHdpdGggUmVhY3QgTmF0aXZlIGFuZCBvdGhlciBQcm94eS1sZXNzXHJcbi8vIGVudmlyb25tZW50cy4gIEluIGFkZGl0aW9uLCB0aGF0J3MgaG93IEltbWVyIDQgYmVoYXZlZCwgYW5kIHNpbmNlXHJcbi8vIHdlIHdhbnQgdG8gc2hpcCB0aGlzIGluIGFuIFJUSyBtaW5vciwgd2Ugc2hvdWxkIGtlZXAgdGhlIHNhbWUgYmVoYXZpb3IuXHJcbmVuYWJsZUVTNSgpXHJcblxyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgY29uZmlndXJlU3RvcmUsXHJcbiAgLy8gdHlwZXNcclxuICBDb25maWd1cmVFbmhhbmNlcnNDYWxsYmFjayxcclxuICBDb25maWd1cmVTdG9yZU9wdGlvbnMsXHJcbiAgRW5oYW5jZWRTdG9yZVxyXG59IGZyb20gJy4vY29uZmlndXJlU3RvcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgZ2V0VHlwZSxcclxuICAvLyB0eXBlc1xyXG4gIFBheWxvYWRBY3Rpb24sXHJcbiAgUGF5bG9hZEFjdGlvbkNyZWF0b3IsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhOb25JbmZlcnJhYmxlUGF5bG9hZCxcclxuICBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZCxcclxuICBBY3Rpb25DcmVhdG9yV2l0aFBheWxvYWQsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkLFxyXG4gIEFjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkLFxyXG4gIFByZXBhcmVBY3Rpb25cclxufSBmcm9tICcuL2NyZWF0ZUFjdGlvbidcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZVJlZHVjZXIsXHJcbiAgLy8gdHlwZXNcclxuICBBY3Rpb25zLFxyXG4gIENhc2VSZWR1Y2VyLFxyXG4gIENhc2VSZWR1Y2Vyc1xyXG59IGZyb20gJy4vY3JlYXRlUmVkdWNlcidcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZVNsaWNlLFxyXG4gIC8vIHR5cGVzXHJcbiAgQ3JlYXRlU2xpY2VPcHRpb25zLFxyXG4gIFNsaWNlLFxyXG4gIENhc2VSZWR1Y2VyQWN0aW9ucyxcclxuICBTbGljZUNhc2VSZWR1Y2VycyxcclxuICBWYWxpZGF0ZVNsaWNlQ2FzZVJlZHVjZXJzLFxyXG4gIENhc2VSZWR1Y2VyV2l0aFByZXBhcmUsXHJcbiAgU2xpY2VBY3Rpb25DcmVhdG9yXHJcbn0gZnJvbSAnLi9jcmVhdGVTbGljZSdcclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcclxuICBpc0ltbXV0YWJsZURlZmF1bHQsXHJcbiAgLy8gdHlwZXNcclxuICBJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9pbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsXHJcbiAgZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlLFxyXG4gIGlzUGxhaW4sXHJcbiAgLy8gdHlwZXNcclxuICBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBnZXREZWZhdWx0TWlkZGxld2FyZVxyXG59IGZyb20gJy4vZ2V0RGVmYXVsdE1pZGRsZXdhcmUnXHJcbmV4cG9ydCB7XHJcbiAgLy8gdHlwZXNcclxuICBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlclxyXG59IGZyb20gJy4vbWFwQnVpbGRlcnMnXHJcbmV4cG9ydCB7IE1pZGRsZXdhcmVBcnJheSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gZnJvbSAnLi9lbnRpdGllcy9jcmVhdGVfYWRhcHRlcidcclxuZXhwb3J0IHtcclxuICBEaWN0aW9uYXJ5LFxyXG4gIEVudGl0eVN0YXRlLFxyXG4gIEVudGl0eUFkYXB0ZXIsXHJcbiAgRW50aXR5U2VsZWN0b3JzLFxyXG4gIEVudGl0eVN0YXRlQWRhcHRlcixcclxuICBFbnRpdHlJZCxcclxuICBVcGRhdGUsXHJcbiAgSWRTZWxlY3RvcixcclxuICBDb21wYXJlclxyXG59IGZyb20gJy4vZW50aXRpZXMvbW9kZWxzJ1xyXG5cclxuZXhwb3J0IHtcclxuICBBc3luY1RodW5rLFxyXG4gIEFzeW5jVGh1bmtBY3Rpb24sXHJcbiAgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yUmV0dXJuVmFsdWUsXHJcbiAgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yLFxyXG4gIGNyZWF0ZUFzeW5jVGh1bmssXHJcbiAgdW53cmFwUmVzdWx0LFxyXG4gIFNlcmlhbGl6ZWRFcnJvclxyXG59IGZyb20gJy4vY3JlYXRlQXN5bmNUaHVuaydcclxuXHJcbmV4cG9ydCB7IG5hbm9pZCB9IGZyb20gJy4vbmFub2lkJ1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsImNvbnN0IGVycm9ycyA9IHtcblx0MDogXCJJbGxlZ2FsIHN0YXRlXCIsXG5cdDE6IFwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIixcblx0MjogXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuXHQzKGRhdGE6IGFueSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgK1xuXHRcdFx0ZGF0YVxuXHRcdClcblx0fSxcblx0NDogXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuXHQ1OiBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuXHQ2OiBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuXHQ3OiBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuXHQ4OiBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcblx0OTogXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG5cdDEwOiBcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLFxuXHQxMTogXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuXHQxMjogXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuXHQxMzogXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcblx0MTQ6IFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuXHQxNShwYXRoOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGhcblx0fSxcblx0MTY6ICdTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJyxcblx0MTcob3A6IHN0cmluZykge1xuXHRcdHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcFxuXHR9LFxuXHQxOChwbHVnaW46IHN0cmluZykge1xuXHRcdHJldHVybiBgVGhlIHBsdWdpbiBmb3IgJyR7cGx1Z2lufScgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIFxcYGVuYWJsZSR7cGx1Z2lufSgpXFxgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uYFxuXHR9LFxuXHQxOTogXCJwbHVnaW4gbm90IGxvYWRlZFwiLFxuXHQyMDogXCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsXG5cdDIxKHRoaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYHByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJyR7dGhpbmd9J2Bcblx0fSxcblx0MjIodGhpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWBcblx0fSxcblx0MjModGhpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBgJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gXG5cdH1cbn0gYXMgY29uc3RcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZShlcnJvcjoga2V5b2YgdHlwZW9mIGVycm9ycywgLi4uYXJnczogYW55W10pOiBuZXZlciB7XG5cdGlmIChfX0RFVl9fKSB7XG5cdFx0Y29uc3QgZSA9IGVycm9yc1tlcnJvcl1cblx0XHRjb25zdCBtc2cgPSAhZVxuXHRcdFx0PyBcInVua25vd24gZXJyb3IgbnI6IFwiICsgZXJyb3Jcblx0XHRcdDogdHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIlxuXHRcdFx0PyBlLmFwcGx5KG51bGwsIGFyZ3MgYXMgYW55KVxuXHRcdFx0OiBlXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBbSW1tZXJdICR7bXNnfWApXG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfSR7XG5cdFx0XHRhcmdzLmxlbmd0aCA/IFwiIFwiICsgYXJncy5qb2luKFwiLFwiKSA6IFwiXCJcblx0XHR9LiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmYFxuXHQpXG59XG4iLCJpbXBvcnQge1xuXHREUkFGVF9TVEFURSxcblx0RFJBRlRBQkxFLFxuXHRoYXNTZXQsXG5cdE9iamVjdGlzaCxcblx0RHJhZnRlZCxcblx0QW55T2JqZWN0LFxuXHRBbnlNYXAsXG5cdEFueVNldCxcblx0SW1tZXJTdGF0ZSxcblx0aGFzTWFwLFxuXHRBcmNodHlwZU9iamVjdCxcblx0QXJjaHR5cGVBcnJheSxcblx0QXJjaHR5cGVNYXAsXG5cdEFyY2h0eXBlU2V0LFxuXHRkaWVcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gSW1tZXIgZHJhZnQgKi9cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RyYWZ0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV1cbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgY2FuIGJlIGRyYWZ0ZWQgYnkgSW1tZXIgKi9cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RyYWZ0YWJsZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdGlmICghdmFsdWUpIHJldHVybiBmYWxzZVxuXHRyZXR1cm4gKFxuXHRcdGlzUGxhaW5PYmplY3QodmFsdWUpIHx8XG5cdFx0QXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcblx0XHQhIXZhbHVlW0RSQUZUQUJMRV0gfHxcblx0XHQhIXZhbHVlLmNvbnN0cnVjdG9yW0RSQUZUQUJMRV0gfHxcblx0XHRpc01hcCh2YWx1ZSkgfHxcblx0XHRpc1NldCh2YWx1ZSlcblx0KVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2Vcblx0Y29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpXG5cdHJldHVybiAhcHJvdG8gfHwgcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGVcbn1cblxuLyoqIEdldCB0aGUgdW5kZXJseWluZyBvYmplY3QgdGhhdCBpcyByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gZHJhZnQgKi9cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmlnaW5hbDxUPih2YWx1ZTogVCk6IFQgfCB1bmRlZmluZWRcbmV4cG9ydCBmdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZTogRHJhZnRlZDxhbnk+KTogYW55IHtcblx0aWYgKCFpc0RyYWZ0KHZhbHVlKSkgZGllKDIzLCB2YWx1ZSlcblx0cmV0dXJuIHZhbHVlW0RSQUZUX1NUQVRFXS5iYXNlX1xufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgY29uc3Qgb3duS2V5czogKHRhcmdldDogQW55T2JqZWN0KSA9PiBQcm9wZXJ0eUtleVtdID1cblx0dHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5vd25LZXlzXG5cdFx0PyBSZWZsZWN0Lm93bktleXNcblx0XHQ6IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSBcInVuZGVmaW5lZFwiXG5cdFx0PyBvYmogPT5cblx0XHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoXG5cdFx0XHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopIGFzIGFueVxuXHRcdFx0XHQpXG5cdFx0OiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuXG5leHBvcnQgY29uc3QgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9XG5cdE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG5cdGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0OiBhbnkpIHtcblx0XHQvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcblx0XHRjb25zdCByZXM6IGFueSA9IHt9XG5cdFx0b3duS2V5cyh0YXJnZXQpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHJlc1trZXldID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSlcblx0XHR9KVxuXHRcdHJldHVybiByZXNcblx0fVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaDxUIGV4dGVuZHMgT2JqZWN0aXNoPihcblx0b2JqOiBULFxuXHRpdGVyOiAoa2V5OiBzdHJpbmcgfCBudW1iZXIsIHZhbHVlOiBhbnksIHNvdXJjZTogVCkgPT4gdm9pZCxcblx0ZW51bWVyYWJsZU9ubHk/OiBib29sZWFuXG4pOiB2b2lkXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmo6IGFueSwgaXRlcjogYW55LCBlbnVtZXJhYmxlT25seSA9IGZhbHNlKSB7XG5cdGlmIChnZXRBcmNodHlwZShvYmopID09PSBBcmNodHlwZU9iamVjdCkge1xuXHRcdDsoZW51bWVyYWJsZU9ubHkgPyBPYmplY3Qua2V5cyA6IG93bktleXMpKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0aWYgKCFlbnVtZXJhYmxlT25seSB8fCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiKSBpdGVyKGtleSwgb2JqW2tleV0sIG9iailcblx0XHR9KVxuXHR9IGVsc2Uge1xuXHRcdG9iai5mb3JFYWNoKChlbnRyeTogYW55LCBpbmRleDogYW55KSA9PiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKSlcblx0fVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJjaHR5cGUodGhpbmc6IGFueSk6IDAgfCAxIHwgMiB8IDMge1xuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRjb25zdCBzdGF0ZTogdW5kZWZpbmVkIHwgSW1tZXJTdGF0ZSA9IHRoaW5nW0RSQUZUX1NUQVRFXVxuXHRyZXR1cm4gc3RhdGVcblx0XHQ/IHN0YXRlLnR5cGVfID4gM1xuXHRcdFx0PyBzdGF0ZS50eXBlXyAtIDQgLy8gY2F1c2UgT2JqZWN0IGFuZCBBcnJheSBtYXAgYmFjayBmcm9tIDQgYW5kIDVcblx0XHRcdDogKHN0YXRlLnR5cGVfIGFzIGFueSkgLy8gb3RoZXJzIGFyZSB0aGUgc2FtZVxuXHRcdDogQXJyYXkuaXNBcnJheSh0aGluZylcblx0XHQ/IEFyY2h0eXBlQXJyYXlcblx0XHQ6IGlzTWFwKHRoaW5nKVxuXHRcdD8gQXJjaHR5cGVNYXBcblx0XHQ6IGlzU2V0KHRoaW5nKVxuXHRcdD8gQXJjaHR5cGVTZXRcblx0XHQ6IEFyY2h0eXBlT2JqZWN0XG59XG5cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXModGhpbmc6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuIHtcblx0cmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gQXJjaHR5cGVNYXBcblx0XHQ/IHRoaW5nLmhhcyhwcm9wKVxuXHRcdDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHRoaW5nOiBBbnlNYXAgfCBBbnlPYmplY3QsIHByb3A6IFByb3BlcnR5S2V5KTogYW55IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSBBcmNodHlwZU1hcCA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdXG59XG5cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQodGhpbmc6IGFueSwgcHJvcE9yT2xkVmFsdWU6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55KSB7XG5cdGNvbnN0IHQgPSBnZXRBcmNodHlwZSh0aGluZylcblx0aWYgKHQgPT09IEFyY2h0eXBlTWFwKSB0aGluZy5zZXQocHJvcE9yT2xkVmFsdWUsIHZhbHVlKVxuXHRlbHNlIGlmICh0ID09PSBBcmNodHlwZVNldCkge1xuXHRcdHRoaW5nLmRlbGV0ZShwcm9wT3JPbGRWYWx1ZSlcblx0XHR0aGluZy5hZGQodmFsdWUpXG5cdH0gZWxzZSB0aGluZ1twcm9wT3JPbGRWYWx1ZV0gPSB2YWx1ZVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXMoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcblx0Ly8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG5cdGlmICh4ID09PSB5KSB7XG5cdFx0cmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHggIT09IHggJiYgeSAhPT0geVxuXHR9XG59XG5cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01hcCh0YXJnZXQ6IGFueSk6IHRhcmdldCBpcyBBbnlNYXAge1xuXHRyZXR1cm4gaGFzTWFwICYmIHRhcmdldCBpbnN0YW5jZW9mIE1hcFxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXQodGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgQW55U2V0IHtcblx0cmV0dXJuIGhhc1NldCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTZXRcbn1cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXRlc3Qoc3RhdGU6IEltbWVyU3RhdGUpOiBhbnkge1xuXHRyZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV9cbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2U6IGFueSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShiYXNlKSkgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJhc2UpXG5cdGNvbnN0IGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKVxuXHRkZWxldGUgZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEUgYXMgYW55XVxuXHRsZXQga2V5cyA9IG93bktleXMoZGVzY3JpcHRvcnMpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGtleTogYW55ID0ga2V5c1tpXVxuXHRcdGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldXG5cdFx0aWYgKGRlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG5cdFx0XHRkZXNjLndyaXRhYmxlID0gdHJ1ZVxuXHRcdFx0ZGVzYy5jb25maWd1cmFibGUgPSB0cnVlXG5cdFx0fVxuXHRcdC8vIGxpa2Ugb2JqZWN0LmFzc2lnbiwgd2Ugd2lsbCByZWFkIGFueSBfb3duXywgZ2V0L3NldCBhY2Nlc3NvcnMuIFRoaXMgaGVscHMgaW4gZGVhbGluZ1xuXHRcdC8vIHdpdGggbGlicmFyaWVzIHRoYXQgdHJhcCB2YWx1ZXMsIGxpa2UgbW9ieCBvciB2dWVcblx0XHQvLyB1bmxpa2Ugb2JqZWN0LmFzc2lnbiwgbm9uLWVudW1lcmFibGVzIHdpbGwgYmUgY29waWVkIGFzIHdlbGxcblx0XHRpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpXG5cdFx0XHRkZXNjcmlwdG9yc1trZXldID0ge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLCAvLyBjb3VsZCBsaXZlIHdpdGggISFkZXNjLnNldCBhcyB3ZWxsIGhlcmUuLi5cblx0XHRcdFx0ZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuXHRcdFx0XHR2YWx1ZTogYmFzZVtrZXldXG5cdFx0XHR9XG5cdH1cblx0cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyZWV6ZShvYmo6IGFueSwgZGVlcDogYm9vbGVhbik6IHZvaWQge1xuXHRpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpIHJldHVyblxuXHRpZiAoZ2V0QXJjaHR5cGUob2JqKSA+IDEgLyogTWFwIG9yIFNldCAqLykge1xuXHRcdG9iai5zZXQgPSBvYmouYWRkID0gb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucyBhcyBhbnlcblx0fVxuXHRPYmplY3QuZnJlZXplKG9iailcblx0aWYgKGRlZXApIGVhY2gob2JqLCAoa2V5LCB2YWx1ZSkgPT4gZnJlZXplKHZhbHVlLCB0cnVlKSwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuXHRkaWUoMilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvemVuKG9iajogYW55KTogYm9vbGVhbiB7XG5cdGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm4gdHJ1ZVxuXHQvLyBTZWUgIzYwMCwgSUUgZGllcyBvbiBub24tb2JqZWN0cyBpbiBPYmplY3QuaXNGcm96ZW5cblx0cmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopXG59XG4iLCJpbXBvcnQge1xuXHRTZXRTdGF0ZSxcblx0SW1tZXJTY29wZSxcblx0UHJveHlPYmplY3RTdGF0ZSxcblx0UHJveHlBcnJheVN0YXRlLFxuXHRFUzVPYmplY3RTdGF0ZSxcblx0RVM1QXJyYXlTdGF0ZSxcblx0TWFwU3RhdGUsXG5cdERSQUZUX1NUQVRFXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCB0eXBlIE9iamVjdGlzaCA9IEFueU9iamVjdCB8IEFueUFycmF5IHwgQW55TWFwIHwgQW55U2V0XG5leHBvcnQgdHlwZSBPYmplY3Rpc2hOb1NldCA9IEFueU9iamVjdCB8IEFueUFycmF5IHwgQW55TWFwXG5cbmV4cG9ydCB0eXBlIEFueU9iamVjdCA9IHtba2V5OiBzdHJpbmddOiBhbnl9XG5leHBvcnQgdHlwZSBBbnlBcnJheSA9IEFycmF5PGFueT5cbmV4cG9ydCB0eXBlIEFueVNldCA9IFNldDxhbnk+XG5leHBvcnQgdHlwZSBBbnlNYXAgPSBNYXA8YW55LCBhbnk+XG5cbmV4cG9ydCBjb25zdCBBcmNodHlwZU9iamVjdCA9IDBcbmV4cG9ydCBjb25zdCBBcmNodHlwZUFycmF5ID0gMVxuZXhwb3J0IGNvbnN0IEFyY2h0eXBlTWFwID0gMlxuZXhwb3J0IGNvbnN0IEFyY2h0eXBlU2V0ID0gM1xuXG5leHBvcnQgY29uc3QgUHJveHlUeXBlUHJveHlPYmplY3QgPSAwXG5leHBvcnQgY29uc3QgUHJveHlUeXBlUHJveHlBcnJheSA9IDFcbmV4cG9ydCBjb25zdCBQcm94eVR5cGVFUzVPYmplY3QgPSA0XG5leHBvcnQgY29uc3QgUHJveHlUeXBlRVM1QXJyYXkgPSA1XG5leHBvcnQgY29uc3QgUHJveHlUeXBlTWFwID0gMlxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZVNldCA9IDNcblxuZXhwb3J0IGludGVyZmFjZSBJbW1lckJhc2VTdGF0ZSB7XG5cdHBhcmVudF8/OiBJbW1lclN0YXRlXG5cdHNjb3BlXzogSW1tZXJTY29wZVxuXHRtb2RpZmllZF86IGJvb2xlYW5cblx0ZmluYWxpemVkXzogYm9vbGVhblxuXHRpc01hbnVhbF86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgSW1tZXJTdGF0ZSA9XG5cdHwgUHJveHlPYmplY3RTdGF0ZVxuXHR8IFByb3h5QXJyYXlTdGF0ZVxuXHR8IEVTNU9iamVjdFN0YXRlXG5cdHwgRVM1QXJyYXlTdGF0ZVxuXHR8IE1hcFN0YXRlXG5cdHwgU2V0U3RhdGVcblxuLy8gVGhlIF9pbnRlcm5hbF8gdHlwZSB1c2VkIGZvciBkcmFmdHMgKG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIERyYWZ0LCB3aGljaCBpcyBwdWJsaWMgZmFjaW5nKVxuZXhwb3J0IHR5cGUgRHJhZnRlZDxCYXNlID0gYW55LCBUIGV4dGVuZHMgSW1tZXJTdGF0ZSA9IEltbWVyU3RhdGU+ID0ge1xuXHRbRFJBRlRfU1RBVEVdOiBUXG59ICYgQmFzZVxuIiwiaW1wb3J0IHtcblx0SW1tZXJTdGF0ZSxcblx0UGF0Y2gsXG5cdEltbWVyU2NvcGUsXG5cdERyYWZ0ZWQsXG5cdEFueU9iamVjdCxcblx0SW1tZXJCYXNlU3RhdGUsXG5cdEFueU1hcCxcblx0QW55U2V0LFxuXHRQcm94eVR5cGVFUzVBcnJheSxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRQcm94eVR5cGVNYXAsXG5cdFByb3h5VHlwZVNldCxcblx0ZGllXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbi8qKiBQbHVnaW4gdXRpbGl0aWVzICovXG5jb25zdCBwbHVnaW5zOiB7XG5cdFBhdGNoZXM/OiB7XG5cdFx0Z2VuZXJhdGVQYXRjaGVzXyhcblx0XHRcdHN0YXRlOiBJbW1lclN0YXRlLFxuXHRcdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHRcdCk6IHZvaWRcblx0XHRnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG5cdFx0XHRyb290U3RhdGU6IEltbWVyU3RhdGUsXG5cdFx0XHRyZXBsYWNlbWVudDogYW55LFxuXHRcdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdFx0KTogdm9pZFxuXHRcdGFwcGx5UGF0Y2hlc188VD4oZHJhZnQ6IFQsIHBhdGNoZXM6IFBhdGNoW10pOiBUXG5cdH1cblx0RVM1Pzoge1xuXHRcdHdpbGxGaW5hbGl6ZUVTNV8oc2NvcGU6IEltbWVyU2NvcGUsIHJlc3VsdDogYW55LCBpc1JlcGxhY2VkOiBib29sZWFuKTogdm9pZFxuXHRcdGNyZWF0ZUVTNVByb3h5XzxUPihcblx0XHRcdGJhc2U6IFQsXG5cdFx0XHRwYXJlbnQ/OiBJbW1lclN0YXRlXG5cdFx0KTogRHJhZnRlZDxULCBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGU+XG5cdFx0aGFzQ2hhbmdlc18oc3RhdGU6IEVTNUFycmF5U3RhdGUgfCBFUzVPYmplY3RTdGF0ZSk6IGJvb2xlYW5cblx0fVxuXHRNYXBTZXQ/OiB7XG5cdFx0cHJveHlNYXBfPFQgZXh0ZW5kcyBBbnlNYXA+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFRcblx0XHRwcm94eVNldF88VCBleHRlbmRzIEFueVNldD4odGFyZ2V0OiBULCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogVFxuXHR9XG59ID0ge31cblxudHlwZSBQbHVnaW5zID0gdHlwZW9mIHBsdWdpbnNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpbjxLIGV4dGVuZHMga2V5b2YgUGx1Z2lucz4oXG5cdHBsdWdpbktleTogS1xuKTogRXhjbHVkZTxQbHVnaW5zW0tdLCB1bmRlZmluZWQ+IHtcblx0Y29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldXG5cdGlmICghcGx1Z2luKSB7XG5cdFx0ZGllKF9fREVWX18gPyAxOCA6IDE5LCBwbHVnaW5LZXkpXG5cdH1cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gcGx1Z2luXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGx1Z2luPEsgZXh0ZW5kcyBrZXlvZiBQbHVnaW5zPihcblx0cGx1Z2luS2V5OiBLLFxuXHRpbXBsZW1lbnRhdGlvbjogUGx1Z2luc1tLXVxuKTogdm9pZCB7XG5cdHBsdWdpbnNbcGx1Z2luS2V5XSA9IGltcGxlbWVudGF0aW9uXG59XG5cbi8qKiBFUzUgUGx1Z2luICovXG5cbmludGVyZmFjZSBFUzVCYXNlU3RhdGUgZXh0ZW5kcyBJbW1lckJhc2VTdGF0ZSB7XG5cdGFzc2lnbmVkXzoge1trZXk6IHN0cmluZ106IGFueX1cblx0cGFyZW50Xz86IEltbWVyU3RhdGVcblx0cmV2b2tlZF86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFUzVPYmplY3RTdGF0ZSBleHRlbmRzIEVTNUJhc2VTdGF0ZSB7XG5cdHR5cGVfOiB0eXBlb2YgUHJveHlUeXBlRVM1T2JqZWN0XG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlPYmplY3QsIEVTNU9iamVjdFN0YXRlPlxuXHRiYXNlXzogQW55T2JqZWN0XG5cdGNvcHlfOiBBbnlPYmplY3QgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRVM1QXJyYXlTdGF0ZSBleHRlbmRzIEVTNUJhc2VTdGF0ZSB7XG5cdHR5cGVfOiB0eXBlb2YgUHJveHlUeXBlRVM1QXJyYXlcblx0ZHJhZnRfOiBEcmFmdGVkPEFueU9iamVjdCwgRVM1QXJyYXlTdGF0ZT5cblx0YmFzZV86IGFueVxuXHRjb3B5XzogYW55XG59XG5cbi8qKiBNYXAgLyBTZXQgcGx1Z2luICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwU3RhdGUgZXh0ZW5kcyBJbW1lckJhc2VTdGF0ZSB7XG5cdHR5cGVfOiB0eXBlb2YgUHJveHlUeXBlTWFwXG5cdGNvcHlfOiBBbnlNYXAgfCB1bmRlZmluZWRcblx0YXNzaWduZWRfOiBNYXA8YW55LCBib29sZWFuPiB8IHVuZGVmaW5lZFxuXHRiYXNlXzogQW55TWFwXG5cdHJldm9rZWRfOiBib29sZWFuXG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlNYXAsIE1hcFN0YXRlPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldFN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZVNldFxuXHRjb3B5XzogQW55U2V0IHwgdW5kZWZpbmVkXG5cdGJhc2VfOiBBbnlTZXRcblx0ZHJhZnRzXzogTWFwPGFueSwgRHJhZnRlZD4gLy8gbWFwcyB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gdGhlIGRyYWZ0IHZhbHVlIGluIHRoZSBuZXcgc2V0XG5cdHJldm9rZWRfOiBib29sZWFuXG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlTZXQsIFNldFN0YXRlPlxufVxuXG4vKiogUGF0Y2hlcyBwbHVnaW4gKi9cblxuZXhwb3J0IHR5cGUgUGF0Y2hQYXRoID0gKHN0cmluZyB8IG51bWJlcilbXVxuIiwiaW1wb3J0IHtcblx0UGF0Y2gsXG5cdFBhdGNoTGlzdGVuZXIsXG5cdERyYWZ0ZWQsXG5cdEltbWVyLFxuXHREUkFGVF9TVEFURSxcblx0SW1tZXJTdGF0ZSxcblx0UHJveHlUeXBlUHJveHlPYmplY3QsXG5cdFByb3h5VHlwZVByb3h5QXJyYXksXG5cdGdldFBsdWdpblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuaW1wb3J0IHtkaWV9IGZyb20gXCIuLi91dGlscy9lcnJvcnNcIlxuXG4vKiogRWFjaCBzY29wZSByZXByZXNlbnRzIGEgYHByb2R1Y2VgIGNhbGwuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1tZXJTY29wZSB7XG5cdHBhdGNoZXNfPzogUGF0Y2hbXVxuXHRpbnZlcnNlUGF0Y2hlc18/OiBQYXRjaFtdXG5cdGNhbkF1dG9GcmVlemVfOiBib29sZWFuXG5cdGRyYWZ0c186IGFueVtdXG5cdHBhcmVudF8/OiBJbW1lclNjb3BlXG5cdHBhdGNoTGlzdGVuZXJfPzogUGF0Y2hMaXN0ZW5lclxuXHRpbW1lcl86IEltbWVyXG5cdHVuZmluYWxpemVkRHJhZnRzXzogbnVtYmVyXG59XG5cbmxldCBjdXJyZW50U2NvcGU6IEltbWVyU2NvcGUgfCB1bmRlZmluZWRcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcblx0aWYgKF9fREVWX18gJiYgIWN1cnJlbnRTY29wZSkgZGllKDApXG5cdHJldHVybiBjdXJyZW50U2NvcGUhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKFxuXHRwYXJlbnRfOiBJbW1lclNjb3BlIHwgdW5kZWZpbmVkLFxuXHRpbW1lcl86IEltbWVyXG4pOiBJbW1lclNjb3BlIHtcblx0cmV0dXJuIHtcblx0XHRkcmFmdHNfOiBbXSxcblx0XHRwYXJlbnRfLFxuXHRcdGltbWVyXyxcblx0XHQvLyBXaGVuZXZlciB0aGUgbW9kaWZpZWQgZHJhZnQgY29udGFpbnMgYSBkcmFmdCBmcm9tIGFub3RoZXIgc2NvcGUsIHdlXG5cdFx0Ly8gbmVlZCB0byBwcmV2ZW50IGF1dG8tZnJlZXppbmcgc28gdGhlIHVub3duZWQgZHJhZnQgY2FuIGJlIGZpbmFsaXplZC5cblx0XHRjYW5BdXRvRnJlZXplXzogdHJ1ZSxcblx0XHR1bmZpbmFsaXplZERyYWZ0c186IDBcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGF0Y2hlc0luU2NvcGUoXG5cdHNjb3BlOiBJbW1lclNjb3BlLFxuXHRwYXRjaExpc3RlbmVyPzogUGF0Y2hMaXN0ZW5lclxuKSB7XG5cdGlmIChwYXRjaExpc3RlbmVyKSB7XG5cdFx0Z2V0UGx1Z2luKFwiUGF0Y2hlc1wiKSAvLyBhc3NlcnQgd2UgaGF2ZSB0aGUgcGx1Z2luXG5cdFx0c2NvcGUucGF0Y2hlc18gPSBbXVxuXHRcdHNjb3BlLmludmVyc2VQYXRjaGVzXyA9IFtdXG5cdFx0c2NvcGUucGF0Y2hMaXN0ZW5lcl8gPSBwYXRjaExpc3RlbmVyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlOiBJbW1lclNjb3BlKSB7XG5cdGxlYXZlU2NvcGUoc2NvcGUpXG5cdHNjb3BlLmRyYWZ0c18uZm9yRWFjaChyZXZva2VEcmFmdClcblx0Ly8gQHRzLWlnbm9yZVxuXHRzY29wZS5kcmFmdHNfID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVhdmVTY29wZShzY29wZTogSW1tZXJTY29wZSkge1xuXHRpZiAoc2NvcGUgPT09IGN1cnJlbnRTY29wZSkge1xuXHRcdGN1cnJlbnRTY29wZSA9IHNjb3BlLnBhcmVudF9cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcjogSW1tZXIpIHtcblx0cmV0dXJuIChjdXJyZW50U2NvcGUgPSBjcmVhdGVTY29wZShjdXJyZW50U2NvcGUsIGltbWVyKSlcbn1cblxuZnVuY3Rpb24gcmV2b2tlRHJhZnQoZHJhZnQ6IERyYWZ0ZWQpIHtcblx0Y29uc3Qgc3RhdGU6IEltbWVyU3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV1cblx0aWYgKFxuXHRcdHN0YXRlLnR5cGVfID09PSBQcm94eVR5cGVQcm94eU9iamVjdCB8fFxuXHRcdHN0YXRlLnR5cGVfID09PSBQcm94eVR5cGVQcm94eUFycmF5XG5cdClcblx0XHRzdGF0ZS5yZXZva2VfKClcblx0ZWxzZSBzdGF0ZS5yZXZva2VkXyA9IHRydWVcbn1cbiIsImltcG9ydCB7XG5cdEltbWVyU2NvcGUsXG5cdERSQUZUX1NUQVRFLFxuXHRpc0RyYWZ0YWJsZSxcblx0Tk9USElORyxcblx0UGF0Y2hQYXRoLFxuXHRlYWNoLFxuXHRoYXMsXG5cdGZyZWV6ZSxcblx0SW1tZXJTdGF0ZSxcblx0aXNEcmFmdCxcblx0U2V0U3RhdGUsXG5cdHNldCxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRQcm94eVR5cGVFUzVBcnJheSxcblx0UHJveHlUeXBlU2V0LFxuXHRnZXRQbHVnaW4sXG5cdGRpZSxcblx0cmV2b2tlU2NvcGUsXG5cdGlzRnJvemVuLFxuXHRzaGFsbG93Q29weVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdChyZXN1bHQ6IGFueSwgc2NvcGU6IEltbWVyU2NvcGUpIHtcblx0c2NvcGUudW5maW5hbGl6ZWREcmFmdHNfID0gc2NvcGUuZHJhZnRzXy5sZW5ndGhcblx0Y29uc3QgYmFzZURyYWZ0ID0gc2NvcGUuZHJhZnRzXyFbMF1cblx0Y29uc3QgaXNSZXBsYWNlZCA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gYmFzZURyYWZ0XG5cdGlmICghc2NvcGUuaW1tZXJfLnVzZVByb3hpZXNfKVxuXHRcdGdldFBsdWdpbihcIkVTNVwiKS53aWxsRmluYWxpemVFUzVfKHNjb3BlLCByZXN1bHQsIGlzUmVwbGFjZWQpXG5cdGlmIChpc1JlcGxhY2VkKSB7XG5cdFx0aWYgKGJhc2VEcmFmdFtEUkFGVF9TVEFURV0ubW9kaWZpZWRfKSB7XG5cdFx0XHRyZXZva2VTY29wZShzY29wZSlcblx0XHRcdGRpZSg0KVxuXHRcdH1cblx0XHRpZiAoaXNEcmFmdGFibGUocmVzdWx0KSkge1xuXHRcdFx0Ly8gRmluYWxpemUgdGhlIHJlc3VsdCBpbiBjYXNlIGl0IGNvbnRhaW5zIChvciBpcykgYSBzdWJzZXQgb2YgdGhlIGRyYWZ0LlxuXHRcdFx0cmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIHJlc3VsdClcblx0XHRcdGlmICghc2NvcGUucGFyZW50XykgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdClcblx0XHR9XG5cdFx0aWYgKHNjb3BlLnBhdGNoZXNfKSB7XG5cdFx0XHRnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhcblx0XHRcdFx0YmFzZURyYWZ0W0RSQUZUX1NUQVRFXSxcblx0XHRcdFx0cmVzdWx0LFxuXHRcdFx0XHRzY29wZS5wYXRjaGVzXyxcblx0XHRcdFx0c2NvcGUuaW52ZXJzZVBhdGNoZXNfIVxuXHRcdFx0KVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBGaW5hbGl6ZSB0aGUgYmFzZSBkcmFmdC5cblx0XHRyZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSlcblx0fVxuXHRyZXZva2VTY29wZShzY29wZSlcblx0aWYgKHNjb3BlLnBhdGNoZXNfKSB7XG5cdFx0c2NvcGUucGF0Y2hMaXN0ZW5lcl8hKHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18hKVxuXHR9XG5cdHJldHVybiByZXN1bHQgIT09IE5PVEhJTkcgPyByZXN1bHQgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZmluYWxpemUocm9vdFNjb3BlOiBJbW1lclNjb3BlLCB2YWx1ZTogYW55LCBwYXRoPzogUGF0Y2hQYXRoKSB7XG5cdC8vIERvbid0IHJlY3Vyc2UgaW4gdGhvIHJlY3Vyc2l2ZSBkYXRhIHN0cnVjdHVyZXNcblx0aWYgKGlzRnJvemVuKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG5cblx0Y29uc3Qgc3RhdGU6IEltbWVyU3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV1cblx0Ly8gQSBwbGFpbiBvYmplY3QsIG1pZ2h0IG5lZWQgZnJlZXppbmcsIG1pZ2h0IGNvbnRhaW4gZHJhZnRzXG5cdGlmICghc3RhdGUpIHtcblx0XHRlYWNoKFxuXHRcdFx0dmFsdWUsXG5cdFx0XHQoa2V5LCBjaGlsZFZhbHVlKSA9PlxuXHRcdFx0XHRmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHZhbHVlLCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpLFxuXHRcdFx0dHJ1ZSAvLyBTZWUgIzU5MCwgZG9uJ3QgcmVjdXJzZSBpbnRvIG5vbi1lbnVtYXJhYmxlIG9mIG5vbiBkcmFmdGVkIG9iamVjdHNcblx0XHQpXG5cdFx0cmV0dXJuIHZhbHVlXG5cdH1cblx0Ly8gTmV2ZXIgZmluYWxpemUgZHJhZnRzIG93bmVkIGJ5IGFub3RoZXIgc2NvcGUuXG5cdGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSkgcmV0dXJuIHZhbHVlXG5cdC8vIFVubW9kaWZpZWQgZHJhZnQsIHJldHVybiB0aGUgKGZyb3plbikgb3JpZ2luYWxcblx0aWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcblx0XHRtYXliZUZyZWV6ZShyb290U2NvcGUsIHN0YXRlLmJhc2VfLCB0cnVlKVxuXHRcdHJldHVybiBzdGF0ZS5iYXNlX1xuXHR9XG5cdC8vIE5vdCBmaW5hbGl6ZWQgeWV0LCBsZXQncyBkbyB0aGF0IG5vd1xuXHRpZiAoIXN0YXRlLmZpbmFsaXplZF8pIHtcblx0XHRzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZVxuXHRcdHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLVxuXHRcdGNvbnN0IHJlc3VsdCA9XG5cdFx0XHQvLyBGb3IgRVM1LCBjcmVhdGUgYSBnb29kIGNvcHkgZnJvbSB0aGUgZHJhZnQgZmlyc3QsIHdpdGggYWRkZWQga2V5cyBhbmQgd2l0aG91dCBkZWxldGVkIGtleXMuXG5cdFx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlRVM1T2JqZWN0IHx8IHN0YXRlLnR5cGVfID09PSBQcm94eVR5cGVFUzVBcnJheVxuXHRcdFx0XHQ/IChzdGF0ZS5jb3B5XyA9IHNoYWxsb3dDb3B5KHN0YXRlLmRyYWZ0XykpXG5cdFx0XHRcdDogc3RhdGUuY29weV9cblx0XHQvLyBGaW5hbGl6ZSBhbGwgY2hpbGRyZW4gb2YgdGhlIGNvcHlcblx0XHQvLyBGb3Igc2V0cyB3ZSBjbG9uZSBiZWZvcmUgaXRlcmF0aW5nLCBvdGhlcndpc2Ugd2UgY2FuIGdldCBpbiBlbmRsZXNzIGxvb3AgZHVlIHRvIG1vZGlmeWluZyBkdXJpbmcgaXRlcmF0aW9uLCBzZWUgIzYyOFxuXHRcdC8vIEFsdGhvdWdoIHRoZSBvcmlnaW5hbCB0ZXN0IGNhc2UgZG9lc24ndCBzZWVtIHZhbGlkIGFueXdheSwgc28gaWYgdGhpcyBpbiB0aGUgd2F5IHdlIGNhbiB0dXJuIHRoZSBuZXh0IGxpbmVcblx0XHQvLyBiYWNrIHRvIGVhY2gocmVzdWx0LCAuLi4uKVxuXHRcdGVhY2goXG5cdFx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlU2V0ID8gbmV3IFNldChyZXN1bHQpIDogcmVzdWx0LFxuXHRcdFx0KGtleSwgY2hpbGRWYWx1ZSkgPT5cblx0XHRcdFx0ZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCByZXN1bHQsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aClcblx0XHQpXG5cdFx0Ly8gZXZlcnl0aGluZyBpbnNpZGUgaXMgZnJvemVuLCB3ZSBjYW4gZnJlZXplIGhlcmVcblx0XHRtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpXG5cdFx0Ly8gZmlyc3QgdGltZSBmaW5hbGl6aW5nLCBsZXQncyBjcmVhdGUgdGhvc2UgcGF0Y2hlc1xuXHRcdGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuXHRcdFx0Z2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKFxuXHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0cGF0aCxcblx0XHRcdFx0cm9vdFNjb3BlLnBhdGNoZXNfLFxuXHRcdFx0XHRyb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfIVxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RhdGUuY29weV9cbn1cblxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShcblx0cm9vdFNjb3BlOiBJbW1lclNjb3BlLFxuXHRwYXJlbnRTdGF0ZTogdW5kZWZpbmVkIHwgSW1tZXJTdGF0ZSxcblx0dGFyZ2V0T2JqZWN0OiBhbnksXG5cdHByb3A6IHN0cmluZyB8IG51bWJlcixcblx0Y2hpbGRWYWx1ZTogYW55LFxuXHRyb290UGF0aD86IFBhdGNoUGF0aFxuKSB7XG5cdGlmIChfX0RFVl9fICYmIGNoaWxkVmFsdWUgPT09IHRhcmdldE9iamVjdCkgZGllKDUpXG5cdGlmIChpc0RyYWZ0KGNoaWxkVmFsdWUpKSB7XG5cdFx0Y29uc3QgcGF0aCA9XG5cdFx0XHRyb290UGF0aCAmJlxuXHRcdFx0cGFyZW50U3RhdGUgJiZcblx0XHRcdHBhcmVudFN0YXRlIS50eXBlXyAhPT0gUHJveHlUeXBlU2V0ICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG5cdFx0XHQhaGFzKChwYXJlbnRTdGF0ZSBhcyBFeGNsdWRlPEltbWVyU3RhdGUsIFNldFN0YXRlPikuYXNzaWduZWRfISwgcHJvcCkgLy8gU2tpcCBkZWVwIHBhdGNoZXMgZm9yIGFzc2lnbmVkIGtleXMuXG5cdFx0XHRcdD8gcm9vdFBhdGghLmNvbmNhdChwcm9wKVxuXHRcdFx0XHQ6IHVuZGVmaW5lZFxuXHRcdC8vIERyYWZ0cyBvd25lZCBieSBgc2NvcGVgIGFyZSBmaW5hbGl6ZWQgaGVyZS5cblx0XHRjb25zdCByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpXG5cdFx0c2V0KHRhcmdldE9iamVjdCwgcHJvcCwgcmVzKVxuXHRcdC8vIERyYWZ0cyBmcm9tIGFub3RoZXIgc2NvcGUgbXVzdCBwcmV2ZW50ZWQgdG8gYmUgZnJvemVuXG5cdFx0Ly8gaWYgd2UgZ290IGEgZHJhZnQgYmFjayBmcm9tIGZpbmFsaXplLCB3ZSdyZSBpbiBhIG5lc3RlZCBwcm9kdWNlIGFuZCBzaG91bGRuJ3QgZnJlZXplXG5cdFx0aWYgKGlzRHJhZnQocmVzKSkge1xuXHRcdFx0cm9vdFNjb3BlLmNhbkF1dG9GcmVlemVfID0gZmFsc2Vcblx0XHR9IGVsc2UgcmV0dXJuXG5cdH1cblx0Ly8gU2VhcmNoIG5ldyBvYmplY3RzIGZvciB1bmZpbmFsaXplZCBkcmFmdHMuIEZyb3plbiBvYmplY3RzIHNob3VsZCBuZXZlciBjb250YWluIGRyYWZ0cy5cblx0aWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuXHRcdGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuXHRcdFx0Ly8gb3B0aW1pemF0aW9uOiBpZiBhbiBvYmplY3QgaXMgbm90IGEgZHJhZnQsIGFuZCB3ZSBkb24ndCBoYXZlIHRvXG5cdFx0XHQvLyBkZWVwZnJlZXplIGV2ZXJ5dGhpbmcsIGFuZCB3ZSBhcmUgc3VyZSB0aGF0IG5vIGRyYWZ0cyBhcmUgbGVmdCBpbiB0aGUgcmVtYWluaW5nIG9iamVjdFxuXHRcdFx0Ly8gY2F1c2Ugd2Ugc2F3IGFuZCBmaW5hbGl6ZWQgYWxsIGRyYWZ0cyBhbHJlYWR5OyB3ZSBjYW4gc3RvcCB2aXNpdGluZyB0aGUgcmVzdCBvZiB0aGUgdHJlZS5cblx0XHRcdC8vIFRoaXMgYmVuZWZpdHMgZXNwZWNpYWxseSBhZGRpbmcgbGFyZ2UgZGF0YSB0cmVlJ3Mgd2l0aG91dCBmdXJ0aGVyIHByb2Nlc3NpbmcuXG5cdFx0XHQvLyBTZWUgYWRkLWRhdGEuanMgcGVyZiB0ZXN0XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0ZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKVxuXHRcdC8vIGltbWVyIGRlZXAgZnJlZXplcyBwbGFpbiBvYmplY3RzLCBzbyBpZiB0aGVyZSBpcyBubyBwYXJlbnQgc3RhdGUsIHdlIGZyZWV6ZSBhcyB3ZWxsXG5cdFx0aWYgKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pXG5cdFx0XHRtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpXG5cdH1cbn1cblxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGU6IEltbWVyU2NvcGUsIHZhbHVlOiBhbnksIGRlZXAgPSBmYWxzZSkge1xuXHRpZiAoc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG5cdFx0ZnJlZXplKHZhbHVlLCBkZWVwKVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRlYWNoLFxuXHRoYXMsXG5cdGlzLFxuXHRpc0RyYWZ0YWJsZSxcblx0c2hhbGxvd0NvcHksXG5cdGxhdGVzdCxcblx0SW1tZXJCYXNlU3RhdGUsXG5cdEltbWVyU3RhdGUsXG5cdERyYWZ0ZWQsXG5cdEFueU9iamVjdCxcblx0QW55QXJyYXksXG5cdE9iamVjdGlzaCxcblx0Z2V0Q3VycmVudFNjb3BlLFxuXHREUkFGVF9TVEFURSxcblx0ZGllLFxuXHRjcmVhdGVQcm94eSxcblx0UHJveHlUeXBlUHJveHlPYmplY3QsXG5cdFByb3h5VHlwZVByb3h5QXJyYXlcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuaW50ZXJmYWNlIFByb3h5QmFzZVN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHRhc3NpZ25lZF86IHtcblx0XHRbcHJvcGVydHk6IHN0cmluZ106IGJvb2xlYW5cblx0fVxuXHRwYXJlbnRfPzogSW1tZXJTdGF0ZVxuXHRyZXZva2VfKCk6IHZvaWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm94eU9iamVjdFN0YXRlIGV4dGVuZHMgUHJveHlCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZVByb3h5T2JqZWN0XG5cdGJhc2VfOiBhbnlcblx0Y29weV86IGFueVxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55T2JqZWN0LCBQcm94eU9iamVjdFN0YXRlPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3h5QXJyYXlTdGF0ZSBleHRlbmRzIFByb3h5QmFzZVN0YXRlIHtcblx0dHlwZV86IHR5cGVvZiBQcm94eVR5cGVQcm94eUFycmF5XG5cdGJhc2VfOiBBbnlBcnJheVxuXHRjb3B5XzogQW55QXJyYXkgfCBudWxsXG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlBcnJheSwgUHJveHlBcnJheVN0YXRlPlxufVxuXG50eXBlIFByb3h5U3RhdGUgPSBQcm94eU9iamVjdFN0YXRlIHwgUHJveHlBcnJheVN0YXRlXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBkcmFmdCBvZiB0aGUgYGJhc2VgIG9iamVjdC5cbiAqXG4gKiBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBwYXJlbnQgZHJhZnQtc3RhdGUgKHVzZWQgaW50ZXJuYWxseSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eVByb3h5PFQgZXh0ZW5kcyBPYmplY3Rpc2g+KFxuXHRiYXNlOiBULFxuXHRwYXJlbnQ/OiBJbW1lclN0YXRlXG4pOiBEcmFmdGVkPFQsIFByb3h5U3RhdGU+IHtcblx0Y29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSlcblx0Y29uc3Qgc3RhdGU6IFByb3h5U3RhdGUgPSB7XG5cdFx0dHlwZV86IGlzQXJyYXkgPyBQcm94eVR5cGVQcm94eUFycmF5IDogKFByb3h5VHlwZVByb3h5T2JqZWN0IGFzIGFueSksXG5cdFx0Ly8gVHJhY2sgd2hpY2ggcHJvZHVjZSBjYWxsIHRoaXMgaXMgYXNzb2NpYXRlZCB3aXRoLlxuXHRcdHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpISxcblx0XHQvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cblx0XHRtb2RpZmllZF86IGZhbHNlLFxuXHRcdC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cblx0XHRmaW5hbGl6ZWRfOiBmYWxzZSxcblx0XHQvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuXHRcdGFzc2lnbmVkXzoge30sXG5cdFx0Ly8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cblx0XHRwYXJlbnRfOiBwYXJlbnQsXG5cdFx0Ly8gVGhlIGJhc2Ugc3RhdGUuXG5cdFx0YmFzZV86IGJhc2UsXG5cdFx0Ly8gVGhlIGJhc2UgcHJveHkuXG5cdFx0ZHJhZnRfOiBudWxsIGFzIGFueSwgLy8gc2V0IGJlbG93XG5cdFx0Ly8gVGhlIGJhc2UgY29weSB3aXRoIGFueSB1cGRhdGVkIHZhbHVlcy5cblx0XHRjb3B5XzogbnVsbCxcblx0XHQvLyBDYWxsZWQgYnkgdGhlIGBwcm9kdWNlYCBmdW5jdGlvbi5cblx0XHRyZXZva2VfOiBudWxsIGFzIGFueSxcblx0XHRpc01hbnVhbF86IGZhbHNlXG5cdH1cblxuXHQvLyB0aGUgdHJhcHMgbXVzdCB0YXJnZXQgc29tZXRoaW5nLCBhIGJpdCBsaWtlIHRoZSAncmVhbCcgYmFzZS5cblx0Ly8gYnV0IGFsc28sIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgZnJvbSB0aGUgdGFyZ2V0IHdoYXQgdGhlIHJlbGV2YW50IHN0YXRlIGlzXG5cdC8vICh0byBhdm9pZCBjcmVhdGluZyB0cmFwcyBwZXIgaW5zdGFuY2UgdG8gY2FwdHVyZSB0aGUgc3RhdGUgaW4gY2xvc3VyZSxcblx0Ly8gYW5kIHRvIGF2b2lkIGNyZWF0aW5nIHdlaXJkIGhpZGRlbiBwcm9wZXJ0aWVzIGFzIHdlbGwpXG5cdC8vIFNvIHRoZSB0cmljayBpcyB0byB1c2UgJ3N0YXRlJyBhcyB0aGUgYWN0dWFsICd0YXJnZXQnISAoYW5kIG1ha2Ugc3VyZSB3ZSBpbnRlcmNlcHQgZXZlcnl0aGluZylcblx0Ly8gTm90ZSB0aGF0IGluIHRoZSBjYXNlIG9mIGFuIGFycmF5LCB3ZSBwdXQgdGhlIHN0YXRlIGluIGFuIGFycmF5IHRvIGhhdmUgYmV0dGVyIFJlZmxlY3QgZGVmYXVsdHMgb290YlxuXHRsZXQgdGFyZ2V0OiBUID0gc3RhdGUgYXMgYW55XG5cdGxldCB0cmFwczogUHJveHlIYW5kbGVyPG9iamVjdCB8IEFycmF5PGFueT4+ID0gb2JqZWN0VHJhcHNcblx0aWYgKGlzQXJyYXkpIHtcblx0XHR0YXJnZXQgPSBbc3RhdGVdIGFzIGFueVxuXHRcdHRyYXBzID0gYXJyYXlUcmFwc1xuXHR9XG5cblx0Y29uc3Qge3Jldm9rZSwgcHJveHl9ID0gUHJveHkucmV2b2NhYmxlKHRhcmdldCwgdHJhcHMpXG5cdHN0YXRlLmRyYWZ0XyA9IHByb3h5IGFzIGFueVxuXHRzdGF0ZS5yZXZva2VfID0gcmV2b2tlXG5cdHJldHVybiBwcm94eSBhcyBhbnlcbn1cblxuLyoqXG4gKiBPYmplY3QgZHJhZnRzXG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RUcmFwczogUHJveHlIYW5kbGVyPFByb3h5U3RhdGU+ID0ge1xuXHRnZXQoc3RhdGUsIHByb3ApIHtcblx0XHRpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpIHJldHVybiBzdGF0ZVxuXG5cdFx0Y29uc3Qgc291cmNlID0gbGF0ZXN0KHN0YXRlKVxuXHRcdGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcblx0XHRcdC8vIG5vbi1leGlzdGluZyBvciBub24tb3duIHByb3BlcnR5Li4uXG5cdFx0XHRyZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcClcblx0XHR9XG5cdFx0Y29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF1cblx0XHRpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHR9XG5cdFx0Ly8gQ2hlY2sgZm9yIGV4aXN0aW5nIGRyYWZ0IGluIG1vZGlmaWVkIHN0YXRlLlxuXHRcdC8vIEFzc2lnbmVkIHZhbHVlcyBhcmUgbmV2ZXIgZHJhZnRlZC4gVGhpcyBjYXRjaGVzIGFueSBkcmFmdHMgd2UgY3JlYXRlZCwgdG9vLlxuXHRcdGlmICh2YWx1ZSA9PT0gcGVlayhzdGF0ZS5iYXNlXywgcHJvcCkpIHtcblx0XHRcdHByZXBhcmVDb3B5KHN0YXRlKVxuXHRcdFx0cmV0dXJuIChzdGF0ZS5jb3B5XyFbcHJvcCBhcyBhbnldID0gY3JlYXRlUHJveHkoXG5cdFx0XHRcdHN0YXRlLnNjb3BlXy5pbW1lcl8sXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KSlcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlXG5cdH0sXG5cdGhhcyhzdGF0ZSwgcHJvcCkge1xuXHRcdHJldHVybiBwcm9wIGluIGxhdGVzdChzdGF0ZSlcblx0fSxcblx0b3duS2V5cyhzdGF0ZSkge1xuXHRcdHJldHVybiBSZWZsZWN0Lm93bktleXMobGF0ZXN0KHN0YXRlKSlcblx0fSxcblx0c2V0KHN0YXRlLCBwcm9wOiBzdHJpbmcgLyogc3RyaWN0bHkgbm90LCBidXQgaGVscHMgVFMgKi8sIHZhbHVlKSB7XG5cdFx0Y29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcClcblx0XHRpZiAoZGVzYz8uc2V0KSB7XG5cdFx0XHQvLyBzcGVjaWFsIGNhc2U6IGlmIHRoaXMgd3JpdGUgaXMgY2FwdHVyZWQgYnkgYSBzZXR0ZXIsIHdlIGhhdmVcblx0XHRcdC8vIHRvIHRyaWdnZXIgaXQgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG5cdFx0XHRkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSB0cnVlXG5cdFx0aWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcblx0XHRcdC8vIHRoZSBsYXN0IGNoZWNrIGlzIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRpc3Rpbmd1aXNoIHNldHRpbmcgYSBub24tZXhpc3RpZyB0byB1bmRlZmluZWQgKHdoaWNoIGlzIGEgY2hhbmdlKVxuXHRcdFx0Ly8gZnJvbSBzZXR0aW5nIGFuIGV4aXN0aW5nIHByb3BlcnR5IHdpdGggdmFsdWUgdW5kZWZpbmVkIHRvIHVuZGVmaW5lZCAod2hpY2ggaXMgbm90IGEgY2hhbmdlKVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpcyh2YWx1ZSwgcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKSkgJiZcblx0XHRcdFx0KHZhbHVlICE9PSB1bmRlZmluZWQgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSlcblx0XHRcdClcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdHByZXBhcmVDb3B5KHN0YXRlKVxuXHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0fVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRzdGF0ZS5jb3B5XyFbcHJvcF0gPSB2YWx1ZVxuXHRcdHJldHVybiB0cnVlXG5cdH0sXG5cdGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wOiBzdHJpbmcpIHtcblx0XHQvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXHRcdGlmIChwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSAhPT0gdW5kZWZpbmVkIHx8IHByb3AgaW4gc3RhdGUuYmFzZV8pIHtcblx0XHRcdHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlXG5cdFx0XHRwcmVwYXJlQ29weShzdGF0ZSlcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpZiBhbiBvcmlnaW5hbGx5IG5vdCBhc3NpZ25lZCBwcm9wZXJ0eSB3YXMgZGVsZXRlZFxuXHRcdFx0ZGVsZXRlIHN0YXRlLmFzc2lnbmVkX1twcm9wXVxuXHRcdH1cblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0aWYgKHN0YXRlLmNvcHlfKSBkZWxldGUgc3RhdGUuY29weV9bcHJvcF1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9LFxuXHQvLyBOb3RlOiBXZSBuZXZlciBjb2VyY2UgYGRlc2MudmFsdWVgIGludG8gYW4gSW1tZXIgZHJhZnQsIGJlY2F1c2Ugd2UgY2FuJ3QgbWFrZVxuXHQvLyB0aGUgc2FtZSBndWFyYW50ZWUgaW4gRVM1IG1vZGUuXG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuXHRcdGNvbnN0IG93bmVyID0gbGF0ZXN0KHN0YXRlKVxuXHRcdGNvbnN0IGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcClcblx0XHRpZiAoIWRlc2MpIHJldHVybiBkZXNjXG5cdFx0cmV0dXJuIHtcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBzdGF0ZS50eXBlXyAhPT0gUHJveHlUeXBlUHJveHlBcnJheSB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuXHRcdFx0ZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuXHRcdFx0dmFsdWU6IG93bmVyW3Byb3BdXG5cdFx0fVxuXHR9LFxuXHRkZWZpbmVQcm9wZXJ0eSgpIHtcblx0XHRkaWUoMTEpXG5cdH0sXG5cdGdldFByb3RvdHlwZU9mKHN0YXRlKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihzdGF0ZS5iYXNlXylcblx0fSxcblx0c2V0UHJvdG90eXBlT2YoKSB7XG5cdFx0ZGllKDEyKVxuXHR9XG59XG5cbi8qKlxuICogQXJyYXkgZHJhZnRzXG4gKi9cblxuY29uc3QgYXJyYXlUcmFwczogUHJveHlIYW5kbGVyPFtQcm94eUFycmF5U3RhdGVdPiA9IHt9XG5lYWNoKG9iamVjdFRyYXBzLCAoa2V5LCBmbikgPT4ge1xuXHQvLyBAdHMtaWdub3JlXG5cdGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uKCkge1xuXHRcdGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXVswXVxuXHRcdHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cdH1cbn0pXG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24oc3RhdGUsIHByb3ApIHtcblx0aWYgKF9fREVWX18gJiYgaXNOYU4ocGFyc2VJbnQocHJvcCBhcyBhbnkpKSkgZGllKDEzKVxuXHRyZXR1cm4gb2JqZWN0VHJhcHMuZGVsZXRlUHJvcGVydHkhLmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3ApXG59XG5hcnJheVRyYXBzLnNldCA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuXHRpZiAoX19ERVZfXyAmJiBwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3AgYXMgYW55KSkpIGRpZSgxNClcblx0cmV0dXJuIG9iamVjdFRyYXBzLnNldCEuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKVxufVxuXG4vLyBBY2Nlc3MgYSBwcm9wZXJ0eSB3aXRob3V0IGNyZWF0aW5nIGFuIEltbWVyIGRyYWZ0LlxuZnVuY3Rpb24gcGVlayhkcmFmdDogRHJhZnRlZCwgcHJvcDogUHJvcGVydHlLZXkpIHtcblx0Y29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV1cblx0Y29uc3Qgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnRcblx0cmV0dXJuIHNvdXJjZVtwcm9wXVxufVxuXG5mdW5jdGlvbiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZTogSW1tZXJTdGF0ZSwgc291cmNlOiBhbnksIHByb3A6IFByb3BlcnR5S2V5KSB7XG5cdGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcClcblx0cmV0dXJuIGRlc2Ncblx0XHQ/IGB2YWx1ZWAgaW4gZGVzY1xuXHRcdFx0PyBkZXNjLnZhbHVlXG5cdFx0XHQ6IC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcblx0XHRcdCAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG5cdFx0XHQgIGRlc2MuZ2V0Py5jYWxsKHN0YXRlLmRyYWZ0Xylcblx0XHQ6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKFxuXHRzb3VyY2U6IGFueSxcblx0cHJvcDogUHJvcGVydHlLZXlcbik6IFByb3BlcnR5RGVzY3JpcHRvciB8IHVuZGVmaW5lZCB7XG5cdC8vICdpbicgY2hlY2tzIHByb3RvIVxuXHRpZiAoIShwcm9wIGluIHNvdXJjZSkpIHJldHVybiB1bmRlZmluZWRcblx0bGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSlcblx0d2hpbGUgKHByb3RvKSB7XG5cdFx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApXG5cdFx0aWYgKGRlc2MpIHJldHVybiBkZXNjXG5cdFx0cHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pXG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGU6IEltbWVyU3RhdGUpIHtcblx0aWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcblx0XHRzdGF0ZS5tb2RpZmllZF8gPSB0cnVlXG5cdFx0aWYgKHN0YXRlLnBhcmVudF8pIHtcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZToge2Jhc2VfOiBhbnk7IGNvcHlfOiBhbnl9KSB7XG5cdGlmICghc3RhdGUuY29weV8pIHtcblx0XHRzdGF0ZS5jb3B5XyA9IHNoYWxsb3dDb3B5KHN0YXRlLmJhc2VfKVxuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRJUHJvZHVjZVdpdGhQYXRjaGVzLFxuXHRJUHJvZHVjZSxcblx0SW1tZXJTdGF0ZSxcblx0RHJhZnRlZCxcblx0aXNEcmFmdGFibGUsXG5cdHByb2Nlc3NSZXN1bHQsXG5cdFBhdGNoLFxuXHRPYmplY3Rpc2gsXG5cdERSQUZUX1NUQVRFLFxuXHREcmFmdCxcblx0UGF0Y2hMaXN0ZW5lcixcblx0aXNEcmFmdCxcblx0aXNNYXAsXG5cdGlzU2V0LFxuXHRjcmVhdGVQcm94eVByb3h5LFxuXHRnZXRQbHVnaW4sXG5cdGRpZSxcblx0aGFzUHJveGllcyxcblx0aXNNaW5pZmllZCxcblx0ZW50ZXJTY29wZSxcblx0cmV2b2tlU2NvcGUsXG5cdGxlYXZlU2NvcGUsXG5cdHVzZVBhdGNoZXNJblNjb3BlLFxuXHRnZXRDdXJyZW50U2NvcGUsXG5cdE5PVEhJTkcsXG5cdGZyZWV6ZSxcblx0Y3VycmVudFxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5pbnRlcmZhY2UgUHJvZHVjZXJzRm5zIHtcblx0cHJvZHVjZTogSVByb2R1Y2Vcblx0cHJvZHVjZVdpdGhQYXRjaGVzOiBJUHJvZHVjZVdpdGhQYXRjaGVzXG59XG5cbmV4cG9ydCBjbGFzcyBJbW1lciBpbXBsZW1lbnRzIFByb2R1Y2Vyc0ZucyB7XG5cdHVzZVByb3hpZXNfOiBib29sZWFuID0gaGFzUHJveGllc1xuXG5cdGF1dG9GcmVlemVfOiBib29sZWFuID0gX19ERVZfXyA/IHRydWUgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gOiAhaXNNaW5pZmllZFxuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZz86IHt1c2VQcm94aWVzPzogYm9vbGVhbjsgYXV0b0ZyZWV6ZT86IGJvb2xlYW59KSB7XG5cdFx0aWYgKHR5cGVvZiBjb25maWc/LnVzZVByb3hpZXMgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0dGhpcy5zZXRVc2VQcm94aWVzKGNvbmZpZyEudXNlUHJveGllcylcblx0XHRpZiAodHlwZW9mIGNvbmZpZz8uYXV0b0ZyZWV6ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHR0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnIS5hdXRvRnJlZXplKVxuXHRcdHRoaXMucHJvZHVjZSA9IHRoaXMucHJvZHVjZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMgPSB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKHRoaXMpXG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG5cdCAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuXHQgKiBmcmVlIHRvIG11dGF0ZSBpdHMgZmlyc3QgYXJndW1lbnQgaG93ZXZlciBpdCB3YW50cy4gQWxsIG11dGF0aW9ucyBhcmVcblx0ICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cblx0ICpcblx0ICogUGFzcyBvbmx5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgXCJjdXJyaWVkIHByb2R1Y2VyXCIgd2hpY2ggcmVsaWV2ZXMgeW91XG5cdCAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG5cdCAqXG5cdCAqIE9ubHkgcGxhaW4gb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBtYWRlIG11dGFibGUuIEFsbCBvdGhlciBvYmplY3RzIGFyZVxuXHQgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG5cdCAqXG5cdCAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgX19ib3VuZF9fIHRvIGl0cyBgSW1tZXJgIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2R1Y2VyIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcblx0ICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG5cdCAqL1xuXHRwcm9kdWNlKGJhc2U6IGFueSwgcmVjaXBlPzogYW55LCBwYXRjaExpc3RlbmVyPzogYW55KSB7XG5cdFx0Ly8gY3VycmllZCBpbnZvY2F0aW9uXG5cdFx0aWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRjb25zdCBkZWZhdWx0QmFzZSA9IHJlY2lwZVxuXHRcdFx0cmVjaXBlID0gYmFzZVxuXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRQcm9kdWNlKFxuXHRcdFx0XHR0aGlzOiBhbnksXG5cdFx0XHRcdGJhc2UgPSBkZWZhdWx0QmFzZSxcblx0XHRcdFx0Li4uYXJnczogYW55W11cblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9kdWNlKGJhc2UsIChkcmFmdDogRHJhZnRlZCkgPT4gcmVjaXBlLmNhbGwodGhpcywgZHJhZnQsIC4uLmFyZ3MpKSAvLyBwcmV0dGllci1pZ25vcmVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSBkaWUoNilcblx0XHRpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRkaWUoNylcblxuXHRcdGxldCByZXN1bHRcblxuXHRcdC8vIE9ubHkgcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBhbmQgXCJpbW1lcmFibGUgY2xhc3Nlc1wiIGFyZSBkcmFmdGVkLlxuXHRcdGlmIChpc0RyYWZ0YWJsZShiYXNlKSkge1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpXG5cdFx0XHRjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KHRoaXMsIGJhc2UsIHVuZGVmaW5lZClcblx0XHRcdGxldCBoYXNFcnJvciA9IHRydWVcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlY2lwZShwcm94eSlcblx0XHRcdFx0aGFzRXJyb3IgPSBmYWxzZVxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0Ly8gZmluYWxseSBpbnN0ZWFkIG9mIGNhdGNoICsgcmV0aHJvdyBiZXR0ZXIgcHJlc2VydmVzIG9yaWdpbmFsIHN0YWNrXG5cdFx0XHRcdGlmIChoYXNFcnJvcikgcmV2b2tlU2NvcGUoc2NvcGUpXG5cdFx0XHRcdGVsc2UgbGVhdmVTY29wZShzY29wZSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQudGhlbihcblx0XHRcdFx0XHRyZXN1bHQgPT4ge1xuXHRcdFx0XHRcdFx0dXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0cmV2b2tlU2NvcGUoc2NvcGUpXG5cdFx0XHRcdFx0XHR0aHJvdyBlcnJvclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0dXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpXG5cdFx0XHRyZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKVxuXHRcdH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdHJlc3VsdCA9IHJlY2lwZShiYXNlKVxuXHRcdFx0aWYgKHJlc3VsdCA9PT0gTk9USElORykgcmV0dXJuIHVuZGVmaW5lZFxuXHRcdFx0aWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXN1bHQgPSBiYXNlXG5cdFx0XHRpZiAodGhpcy5hdXRvRnJlZXplXykgZnJlZXplKHJlc3VsdCwgdHJ1ZSlcblx0XHRcdHJldHVybiByZXN1bHRcblx0XHR9IGVsc2UgZGllKDIxLCBiYXNlKVxuXHR9XG5cblx0cHJvZHVjZVdpdGhQYXRjaGVzKGFyZzE6IGFueSwgYXJnMj86IGFueSwgYXJnMz86IGFueSk6IGFueSB7XG5cdFx0aWYgKHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHJldHVybiAoc3RhdGU6IGFueSwgLi4uYXJnczogYW55W10pID0+XG5cdFx0XHRcdHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzKHN0YXRlLCAoZHJhZnQ6IGFueSkgPT4gYXJnMShkcmFmdCwgLi4uYXJncykpXG5cdFx0fVxuXG5cdFx0bGV0IHBhdGNoZXM6IFBhdGNoW10sIGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0gdGhpcy5wcm9kdWNlKGFyZzEsIGFyZzIsIChwOiBQYXRjaFtdLCBpcDogUGF0Y2hbXSkgPT4ge1xuXHRcdFx0cGF0Y2hlcyA9IHBcblx0XHRcdGludmVyc2VQYXRjaGVzID0gaXBcblx0XHR9KVxuXHRcdHJldHVybiBbbmV4dFN0YXRlLCBwYXRjaGVzISwgaW52ZXJzZVBhdGNoZXMhXVxuXHR9XG5cblx0Y3JlYXRlRHJhZnQ8VCBleHRlbmRzIE9iamVjdGlzaD4oYmFzZTogVCk6IERyYWZ0PFQ+IHtcblx0XHRpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKSBkaWUoOClcblx0XHRpZiAoaXNEcmFmdChiYXNlKSkgYmFzZSA9IGN1cnJlbnQoYmFzZSlcblx0XHRjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcylcblx0XHRjb25zdCBwcm94eSA9IGNyZWF0ZVByb3h5KHRoaXMsIGJhc2UsIHVuZGVmaW5lZClcblx0XHRwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZVxuXHRcdGxlYXZlU2NvcGUoc2NvcGUpXG5cdFx0cmV0dXJuIHByb3h5IGFzIGFueVxuXHR9XG5cblx0ZmluaXNoRHJhZnQ8RCBleHRlbmRzIERyYWZ0PGFueT4+KFxuXHRcdGRyYWZ0OiBELFxuXHRcdHBhdGNoTGlzdGVuZXI/OiBQYXRjaExpc3RlbmVyXG5cdCk6IEQgZXh0ZW5kcyBEcmFmdDxpbmZlciBUPiA/IFQgOiBuZXZlciB7XG5cdFx0Y29uc3Qgc3RhdGU6IEltbWVyU3RhdGUgPSBkcmFmdCAmJiAoZHJhZnQgYXMgYW55KVtEUkFGVF9TVEFURV1cblx0XHRpZiAoX19ERVZfXykge1xuXHRcdFx0aWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWxfKSBkaWUoOSlcblx0XHRcdGlmIChzdGF0ZS5maW5hbGl6ZWRfKSBkaWUoMTApXG5cdFx0fVxuXHRcdGNvbnN0IHtzY29wZV86IHNjb3BlfSA9IHN0YXRlXG5cdFx0dXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpXG5cdFx0cmV0dXJuIHByb2Nlc3NSZXN1bHQodW5kZWZpbmVkLCBzY29wZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXNzIHRydWUgdG8gYXV0b21hdGljYWxseSBmcmVlemUgYWxsIGNvcGllcyBjcmVhdGVkIGJ5IEltbWVyLlxuXHQgKlxuXHQgKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24uXG5cdCAqL1xuXHRzZXRBdXRvRnJlZXplKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5hdXRvRnJlZXplXyA9IHZhbHVlXG5cdH1cblxuXHQvKipcblx0ICogUGFzcyB0cnVlIHRvIHVzZSB0aGUgRVMyMDE1IGBQcm94eWAgY2xhc3Mgd2hlbiBjcmVhdGluZyBkcmFmdHMsIHdoaWNoIGlzXG5cdCAqIGFsd2F5cyBmYXN0ZXIgdGhhbiB1c2luZyBFUzUgcHJveGllcy5cblx0ICpcblx0ICogQnkgZGVmYXVsdCwgZmVhdHVyZSBkZXRlY3Rpb24gaXMgdXNlZCwgc28gY2FsbGluZyB0aGlzIGlzIHJhcmVseSBuZWNlc3NhcnkuXG5cdCAqL1xuXHRzZXRVc2VQcm94aWVzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0aWYgKHZhbHVlICYmICFoYXNQcm94aWVzKSB7XG5cdFx0XHRkaWUoMjApXG5cdFx0fVxuXHRcdHRoaXMudXNlUHJveGllc18gPSB2YWx1ZVxuXHR9XG5cblx0YXBwbHlQYXRjaGVzKGJhc2U6IE9iamVjdGlzaCwgcGF0Y2hlczogUGF0Y2hbXSkge1xuXHRcdC8vIElmIGEgcGF0Y2ggcmVwbGFjZXMgdGhlIGVudGlyZSBzdGF0ZSwgdGFrZSB0aGF0IHJlcGxhY2VtZW50IGFzIGJhc2Vcblx0XHQvLyBiZWZvcmUgYXBwbHlpbmcgcGF0Y2hlc1xuXHRcdGxldCBpOiBudW1iZXJcblx0XHRmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBwYXRjaCA9IHBhdGNoZXNbaV1cblx0XHRcdGlmIChwYXRjaC5wYXRoLmxlbmd0aCA9PT0gMCAmJiBwYXRjaC5vcCA9PT0gXCJyZXBsYWNlXCIpIHtcblx0XHRcdFx0YmFzZSA9IHBhdGNoLnZhbHVlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbHlQYXRjaGVzSW1wbCA9IGdldFBsdWdpbihcIlBhdGNoZXNcIikuYXBwbHlQYXRjaGVzX1xuXHRcdGlmIChpc0RyYWZ0KGJhc2UpKSB7XG5cdFx0XHQvLyBOLkI6IG5ldmVyIGhpdHMgaWYgc29tZSBwYXRjaCBhIHJlcGxhY2VtZW50LCBwYXRjaGVzIGFyZSBuZXZlciBkcmFmdHNcblx0XHRcdHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpXG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgcHJvZHVjZSBhIGNvcHkgb2YgdGhlIGJhc2Ugc3RhdGUuXG5cdFx0cmV0dXJuIHRoaXMucHJvZHVjZShiYXNlLCAoZHJhZnQ6IERyYWZ0ZWQpID0+XG5cdFx0XHRhcHBseVBhdGNoZXNJbXBsKGRyYWZ0LCBwYXRjaGVzLnNsaWNlKGkgKyAxKSlcblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3h5PFQgZXh0ZW5kcyBPYmplY3Rpc2g+KFxuXHRpbW1lcjogSW1tZXIsXG5cdHZhbHVlOiBULFxuXHRwYXJlbnQ/OiBJbW1lclN0YXRlXG4pOiBEcmFmdGVkPFQsIEltbWVyU3RhdGU+IHtcblx0Ly8gcHJlY29uZGl0aW9uOiBjcmVhdGVQcm94eSBzaG91bGQgYmUgZ3VhcmRlZCBieSBpc0RyYWZ0YWJsZSwgc28gd2Uga25vdyB3ZSBjYW4gc2FmZWx5IGRyYWZ0XG5cdGNvbnN0IGRyYWZ0OiBEcmFmdGVkID0gaXNNYXAodmFsdWUpXG5cdFx0PyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpXG5cdFx0OiBpc1NldCh2YWx1ZSlcblx0XHQ/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eVNldF8odmFsdWUsIHBhcmVudClcblx0XHQ6IGltbWVyLnVzZVByb3hpZXNfXG5cdFx0PyBjcmVhdGVQcm94eVByb3h5KHZhbHVlLCBwYXJlbnQpXG5cdFx0OiBnZXRQbHVnaW4oXCJFUzVcIikuY3JlYXRlRVM1UHJveHlfKHZhbHVlLCBwYXJlbnQpXG5cblx0Y29uc3Qgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKClcblx0c2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KVxuXHRyZXR1cm4gZHJhZnRcbn1cbiIsImltcG9ydCB7XG5cdGRpZSxcblx0aXNEcmFmdCxcblx0c2hhbGxvd0NvcHksXG5cdGVhY2gsXG5cdERSQUZUX1NUQVRFLFxuXHRnZXQsXG5cdHNldCxcblx0SW1tZXJTdGF0ZSxcblx0aXNEcmFmdGFibGUsXG5cdEFyY2h0eXBlTWFwLFxuXHRBcmNodHlwZVNldCxcblx0Z2V0QXJjaHR5cGUsXG5cdGdldFBsdWdpblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vKiogVGFrZXMgYSBzbmFwc2hvdCBvZiB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIGRyYWZ0IGFuZCBmaW5hbGl6ZXMgaXQgKGJ1dCB3aXRob3V0IGZyZWV6aW5nKS4gVGhpcyBpcyBhIGdyZWF0IHV0aWxpdHkgdG8gcHJpbnQgdGhlIGN1cnJlbnQgc3RhdGUgZHVyaW5nIGRlYnVnZ2luZyAobm8gUHJveGllcyBpbiB0aGUgd2F5KS4gVGhlIG91dHB1dCBvZiBjdXJyZW50IGNhbiBhbHNvIGJlIHNhZmVseSBsZWFrZWQgb3V0c2lkZSB0aGUgcHJvZHVjZXIuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudDxUPih2YWx1ZTogVCk6IFRcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50KHZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAoIWlzRHJhZnQodmFsdWUpKSBkaWUoMjIsIHZhbHVlKVxuXHRyZXR1cm4gY3VycmVudEltcGwodmFsdWUpXG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRJbXBsKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSkgcmV0dXJuIHZhbHVlXG5cdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlIHwgdW5kZWZpbmVkID0gdmFsdWVbRFJBRlRfU1RBVEVdXG5cdGxldCBjb3B5OiBhbnlcblx0Y29uc3QgYXJjaFR5cGUgPSBnZXRBcmNodHlwZSh2YWx1ZSlcblx0aWYgKHN0YXRlKSB7XG5cdFx0aWYgKFxuXHRcdFx0IXN0YXRlLm1vZGlmaWVkXyAmJlxuXHRcdFx0KHN0YXRlLnR5cGVfIDwgNCB8fCAhZ2V0UGx1Z2luKFwiRVM1XCIpLmhhc0NoYW5nZXNfKHN0YXRlIGFzIGFueSkpXG5cdFx0KVxuXHRcdFx0cmV0dXJuIHN0YXRlLmJhc2VfXG5cdFx0Ly8gT3B0aW1pemF0aW9uOiBhdm9pZCBnZW5lcmF0aW5nIG5ldyBkcmFmdHMgZHVyaW5nIGNvcHlpbmdcblx0XHRzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZVxuXHRcdGNvcHkgPSBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSlcblx0XHRzdGF0ZS5maW5hbGl6ZWRfID0gZmFsc2Vcblx0fSBlbHNlIHtcblx0XHRjb3B5ID0gY29weUhlbHBlcih2YWx1ZSwgYXJjaFR5cGUpXG5cdH1cblxuXHRlYWNoKGNvcHksIChrZXksIGNoaWxkVmFsdWUpID0+IHtcblx0XHRpZiAoc3RhdGUgJiYgZ2V0KHN0YXRlLmJhc2VfLCBrZXkpID09PSBjaGlsZFZhbHVlKSByZXR1cm4gLy8gbm8gbmVlZCB0byBjb3B5IG9yIHNlYXJjaCBpbiBzb21ldGhpbmcgdGhhdCBkaWRuJ3QgY2hhbmdlXG5cdFx0c2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpXG5cdH0pXG5cdC8vIEluIHRoZSBmdXR1cmUsIHdlIG1pZ2h0IGNvbnNpZGVyIGZyZWV6aW5nIGhlcmUsIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNldHRpbmdzXG5cdHJldHVybiBhcmNoVHlwZSA9PT0gQXJjaHR5cGVTZXQgPyBuZXcgU2V0KGNvcHkpIDogY29weVxufVxuXG5mdW5jdGlvbiBjb3B5SGVscGVyKHZhbHVlOiBhbnksIGFyY2hUeXBlOiBudW1iZXIpOiBhbnkge1xuXHQvLyBjcmVhdGVzIGEgc2hhbGxvdyBjb3B5LCBldmVuIGlmIGl0IGlzIGEgbWFwIG9yIHNldFxuXHRzd2l0Y2ggKGFyY2hUeXBlKSB7XG5cdFx0Y2FzZSBBcmNodHlwZU1hcDpcblx0XHRcdHJldHVybiBuZXcgTWFwKHZhbHVlKVxuXHRcdGNhc2UgQXJjaHR5cGVTZXQ6XG5cdFx0XHQvLyBTZXQgd2lsbCBiZSBjbG9uZWQgYXMgYXJyYXkgdGVtcG9yYXJpbHksIHNvIHRoYXQgd2UgY2FuIHJlcGxhY2UgaW5kaXZpZHVhbCBpdGVtc1xuXHRcdFx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpXG5cdH1cblx0cmV0dXJuIHNoYWxsb3dDb3B5KHZhbHVlKVxufVxuIiwiaW1wb3J0IHtcblx0SW1tZXJTdGF0ZSxcblx0RHJhZnRlZCxcblx0RVM1QXJyYXlTdGF0ZSxcblx0RVM1T2JqZWN0U3RhdGUsXG5cdGVhY2gsXG5cdGhhcyxcblx0aXNEcmFmdCxcblx0bGF0ZXN0LFxuXHREUkFGVF9TVEFURSxcblx0aXMsXG5cdGxvYWRQbHVnaW4sXG5cdEltbWVyU2NvcGUsXG5cdFByb3h5VHlwZUVTNUFycmF5LFxuXHRQcm94eVR5cGVFUzVPYmplY3QsXG5cdGdldEN1cnJlbnRTY29wZSxcblx0ZGllLFxuXHRtYXJrQ2hhbmdlZCxcblx0b2JqZWN0VHJhcHMsXG5cdG93bktleXMsXG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcnNcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxudHlwZSBFUzVTdGF0ZSA9IEVTNUFycmF5U3RhdGUgfCBFUzVPYmplY3RTdGF0ZVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRVM1KCkge1xuXHRmdW5jdGlvbiB3aWxsRmluYWxpemVFUzVfKFxuXHRcdHNjb3BlOiBJbW1lclNjb3BlLFxuXHRcdHJlc3VsdDogYW55LFxuXHRcdGlzUmVwbGFjZWQ6IGJvb2xlYW5cblx0KSB7XG5cdFx0aWYgKCFpc1JlcGxhY2VkKSB7XG5cdFx0XHRpZiAoc2NvcGUucGF0Y2hlc18pIHtcblx0XHRcdFx0bWFya0NoYW5nZXNSZWN1cnNpdmVseShzY29wZS5kcmFmdHNfIVswXSlcblx0XHRcdH1cblx0XHRcdC8vIFRoaXMgaXMgZmFzdGVyIHdoZW4gd2UgZG9uJ3QgY2FyZSBhYm91dCB3aGljaCBhdHRyaWJ1dGVzIGNoYW5nZWQuXG5cdFx0XHRtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pXG5cdFx0fVxuXHRcdC8vIFdoZW4gYSBjaGlsZCBkcmFmdCBpcyByZXR1cm5lZCwgbG9vayBmb3IgY2hhbmdlcy5cblx0XHRlbHNlIGlmIChcblx0XHRcdGlzRHJhZnQocmVzdWx0KSAmJlxuXHRcdFx0KHJlc3VsdFtEUkFGVF9TVEFURV0gYXMgRVM1U3RhdGUpLnNjb3BlXyA9PT0gc2NvcGVcblx0XHQpIHtcblx0XHRcdG1hcmtDaGFuZ2VzU3dlZXAoc2NvcGUuZHJhZnRzXylcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVFUzVEcmFmdChpc0FycmF5OiBib29sZWFuLCBiYXNlOiBhbnkpIHtcblx0XHRpZiAoaXNBcnJheSkge1xuXHRcdFx0Y29uc3QgZHJhZnQgPSBuZXcgQXJyYXkoYmFzZS5sZW5ndGgpXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhc2UubGVuZ3RoOyBpKyspXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkcmFmdCwgXCJcIiArIGksIHByb3h5UHJvcGVydHkoaSwgdHJ1ZSkpXG5cdFx0XHRyZXR1cm4gZHJhZnRcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRvcnMgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGJhc2UpXG5cdFx0XHRkZWxldGUgZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEUgYXMgYW55XVxuXHRcdFx0Y29uc3Qga2V5cyA9IG93bktleXMoZGVzY3JpcHRvcnMpXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qga2V5OiBhbnkgPSBrZXlzW2ldXG5cdFx0XHRcdGRlc2NyaXB0b3JzW2tleV0gPSBwcm94eVByb3BlcnR5KFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRpc0FycmF5IHx8ICEhZGVzY3JpcHRvcnNba2V5XS5lbnVtZXJhYmxlXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRVM1UHJveHlfPFQ+KFxuXHRcdGJhc2U6IFQsXG5cdFx0cGFyZW50PzogSW1tZXJTdGF0ZVxuXHQpOiBEcmFmdGVkPFQsIEVTNU9iamVjdFN0YXRlIHwgRVM1QXJyYXlTdGF0ZT4ge1xuXHRcdGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpXG5cdFx0Y29uc3QgZHJhZnQgPSBjcmVhdGVFUzVEcmFmdChpc0FycmF5LCBiYXNlKVxuXG5cdFx0Y29uc3Qgc3RhdGU6IEVTNU9iamVjdFN0YXRlIHwgRVM1QXJyYXlTdGF0ZSA9IHtcblx0XHRcdHR5cGVfOiBpc0FycmF5ID8gUHJveHlUeXBlRVM1QXJyYXkgOiAoUHJveHlUeXBlRVM1T2JqZWN0IGFzIGFueSksXG5cdFx0XHRzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcblx0XHRcdG1vZGlmaWVkXzogZmFsc2UsXG5cdFx0XHRmaW5hbGl6ZWRfOiBmYWxzZSxcblx0XHRcdGFzc2lnbmVkXzoge30sXG5cdFx0XHRwYXJlbnRfOiBwYXJlbnQsXG5cdFx0XHQvLyBiYXNlIGlzIHRoZSBvYmplY3Qgd2UgYXJlIGRyYWZ0aW5nXG5cdFx0XHRiYXNlXzogYmFzZSxcblx0XHRcdC8vIGRyYWZ0IGlzIHRoZSBkcmFmdCBvYmplY3QgaXRzZWxmLCB0aGF0IHRyYXBzIGFsbCByZWFkcyBhbmQgcmVhZHMgZnJvbSBlaXRoZXIgdGhlIGJhc2UgKGlmIHVubW9kaWZpZWQpIG9yIGNvcHkgKGlmIG1vZGlmaWVkKVxuXHRcdFx0ZHJhZnRfOiBkcmFmdCxcblx0XHRcdGNvcHlfOiBudWxsLFxuXHRcdFx0cmV2b2tlZF86IGZhbHNlLFxuXHRcdFx0aXNNYW51YWxfOiBmYWxzZVxuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkcmFmdCwgRFJBRlRfU1RBVEUsIHtcblx0XHRcdHZhbHVlOiBzdGF0ZSxcblx0XHRcdC8vIGVudW1lcmFibGU6IGZhbHNlIDwtIHRoZSBkZWZhdWx0XG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pXG5cdFx0cmV0dXJuIGRyYWZ0XG5cdH1cblxuXHQvLyBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBhcmUgcmVjeWNsZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IGNyZWF0ZSBhIGdldCBhbmQgc2V0IGNsb3N1cmUgcGVyIHByb3BlcnR5LFxuXHQvLyBidXQgc2hhcmUgdGhlbSBhbGwgaW5zdGVhZFxuXHRjb25zdCBkZXNjcmlwdG9yczoge1twcm9wOiBzdHJpbmddOiBQcm9wZXJ0eURlc2NyaXB0b3J9ID0ge31cblxuXHRmdW5jdGlvbiBwcm94eVByb3BlcnR5KFxuXHRcdHByb3A6IHN0cmluZyB8IG51bWJlcixcblx0XHRlbnVtZXJhYmxlOiBib29sZWFuXG5cdCk6IFByb3BlcnR5RGVzY3JpcHRvciB7XG5cdFx0bGV0IGRlc2MgPSBkZXNjcmlwdG9yc1twcm9wXVxuXHRcdGlmIChkZXNjKSB7XG5cdFx0XHRkZXNjLmVudW1lcmFibGUgPSBlbnVtZXJhYmxlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc2NyaXB0b3JzW3Byb3BdID0gZGVzYyA9IHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlLFxuXHRcdFx0XHRnZXQodGhpczogYW55KSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0XHRcdGlmIChfX0RFVl9fKSBhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdHJldHVybiBvYmplY3RUcmFwcy5nZXQoc3RhdGUsIHByb3ApXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldCh0aGlzOiBhbnksIHZhbHVlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0XHRcdGlmIChfX0RFVl9fKSBhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdG9iamVjdFRyYXBzLnNldChzdGF0ZSwgcHJvcCwgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRlc2Ncblx0fVxuXG5cdC8vIFRoaXMgbG9va3MgZXhwZW5zaXZlLCBidXQgb25seSBwcm94aWVzIGFyZSB2aXNpdGVkLCBhbmQgb25seSBvYmplY3RzIHdpdGhvdXQga25vd24gY2hhbmdlcyBhcmUgc2Nhbm5lZC5cblx0ZnVuY3Rpb24gbWFya0NoYW5nZXNTd2VlcChkcmFmdHM6IERyYWZ0ZWQ8YW55LCBJbW1lclN0YXRlPltdKSB7XG5cdFx0Ly8gVGhlIG5hdHVyYWwgb3JkZXIgb2YgZHJhZnRzIGluIHRoZSBgc2NvcGVgIGFycmF5IGlzIGJhc2VkIG9uIHdoZW4gdGhleVxuXHRcdC8vIHdlcmUgYWNjZXNzZWQuIEJ5IHByb2Nlc3NpbmcgZHJhZnRzIGluIHJldmVyc2UgbmF0dXJhbCBvcmRlciwgd2UgaGF2ZSBhXG5cdFx0Ly8gYmV0dGVyIGNoYW5jZSBvZiBwcm9jZXNzaW5nIGxlYWYgbm9kZXMgZmlyc3QuIFdoZW4gYSBsZWFmIG5vZGUgaXMga25vd24gdG9cblx0XHQvLyBoYXZlIGNoYW5nZWQsIHdlIGNhbiBhdm9pZCBhbnkgdHJhdmVyc2FsIG9mIGl0cyBhbmNlc3RvciBub2Rlcy5cblx0XHRmb3IgKGxldCBpID0gZHJhZnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogRVM1U3RhdGUgPSBkcmFmdHNbaV1bRFJBRlRfU1RBVEVdXG5cdFx0XHRpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuXHRcdFx0XHRzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG5cdFx0XHRcdFx0Y2FzZSBQcm94eVR5cGVFUzVBcnJheTpcblx0XHRcdFx0XHRcdGlmIChoYXNBcnJheUNoYW5nZXMoc3RhdGUpKSBtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBQcm94eVR5cGVFUzVPYmplY3Q6XG5cdFx0XHRcdFx0XHRpZiAoaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSkpIG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkob2JqZWN0OiBhbnkpIHtcblx0XHRpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKSByZXR1cm5cblx0XHRjb25zdCBzdGF0ZTogRVM1U3RhdGUgfCB1bmRlZmluZWQgPSBvYmplY3RbRFJBRlRfU1RBVEVdXG5cdFx0aWYgKCFzdGF0ZSkgcmV0dXJuXG5cdFx0Y29uc3Qge2Jhc2VfLCBkcmFmdF8sIGFzc2lnbmVkXywgdHlwZV99ID0gc3RhdGVcblx0XHRpZiAodHlwZV8gPT09IFByb3h5VHlwZUVTNU9iamVjdCkge1xuXHRcdFx0Ly8gTG9vayBmb3IgYWRkZWQga2V5cy5cblx0XHRcdC8vIHByb2JhYmx5IHRoZXJlIGlzIGEgZmFzdGVyIHdheSB0byBkZXRlY3QgY2hhbmdlcywgYXMgc3dlZXAgKyByZWN1cnNlIHNlZW1zIHRvIGRvIHNvbWVcblx0XHRcdC8vIHVubmVjZXNzYXJ5IHdvcmsuXG5cdFx0XHQvLyBhbHNvOiBwcm9iYWJseSB3ZSBjYW4gc3RvcmUgdGhlIGluZm9ybWF0aW9uIHdlIGRldGVjdCBoZXJlLCB0byBzcGVlZCB1cCB0cmVlIGZpbmFsaXphdGlvbiFcblx0XHRcdGVhY2goZHJhZnRfLCBrZXkgPT4ge1xuXHRcdFx0XHRpZiAoKGtleSBhcyBhbnkpID09PSBEUkFGVF9TVEFURSkgcmV0dXJuXG5cdFx0XHRcdC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG5cdFx0XHRcdGlmICgoYmFzZV8gYXMgYW55KVtrZXldID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuXHRcdFx0XHRcdGFzc2lnbmVkX1trZXldID0gdHJ1ZVxuXHRcdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHR9IGVsc2UgaWYgKCFhc3NpZ25lZF9ba2V5XSkge1xuXHRcdFx0XHRcdC8vIE9ubHkgdW50b3VjaGVkIHByb3BlcnRpZXMgdHJpZ2dlciByZWN1cnNpb24uXG5cdFx0XHRcdFx0bWFya0NoYW5nZXNSZWN1cnNpdmVseShkcmFmdF9ba2V5XSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC8vIExvb2sgZm9yIHJlbW92ZWQga2V5cy5cblx0XHRcdGVhY2goYmFzZV8sIGtleSA9PiB7XG5cdFx0XHRcdC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG5cdFx0XHRcdGlmIChkcmFmdF9ba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoZHJhZnRfLCBrZXkpKSB7XG5cdFx0XHRcdFx0YXNzaWduZWRfW2tleV0gPSBmYWxzZVxuXHRcdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodHlwZV8gPT09IFByb3h5VHlwZUVTNUFycmF5KSB7XG5cdFx0XHRpZiAoaGFzQXJyYXlDaGFuZ2VzKHN0YXRlIGFzIEVTNUFycmF5U3RhdGUpKSB7XG5cdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHRhc3NpZ25lZF8ubGVuZ3RoID0gdHJ1ZVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZHJhZnRfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gZHJhZnRfLmxlbmd0aDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSBhc3NpZ25lZF9baV0gPSBmYWxzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGRyYWZ0Xy5sZW5ndGg7IGkrKykgYXNzaWduZWRfW2ldID0gdHJ1ZVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBNaW5pbXVtIGNvdW50IGlzIGVub3VnaCwgdGhlIG90aGVyIHBhcnRzIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHRcdGNvbnN0IG1pbiA9IE1hdGgubWluKGRyYWZ0Xy5sZW5ndGgsIGJhc2VfLmxlbmd0aClcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuXHRcdFx0XHQvLyBPbmx5IHVudG91Y2hlZCBpbmRpY2VzIHRyaWdnZXIgcmVjdXJzaW9uLlxuXHRcdFx0XHRpZiAoYXNzaWduZWRfW2ldID09PSB1bmRlZmluZWQpIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoZHJhZnRfW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhc09iamVjdENoYW5nZXMoc3RhdGU6IEVTNU9iamVjdFN0YXRlKSB7XG5cdFx0Y29uc3Qge2Jhc2VfLCBkcmFmdF99ID0gc3RhdGVcblxuXHRcdC8vIFNlYXJjaCBmb3IgYWRkZWQga2V5cyBhbmQgY2hhbmdlZCBrZXlzLiBTdGFydCBhdCB0aGUgYmFjaywgYmVjYXVzZVxuXHRcdC8vIG5vbi1udW1lcmljIGtleXMgYXJlIG9yZGVyZWQgYnkgdGltZSBvZiBkZWZpbml0aW9uIG9uIHRoZSBvYmplY3QuXG5cdFx0Y29uc3Qga2V5cyA9IG93bktleXMoZHJhZnRfKVxuXHRcdGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBrZXk6IGFueSA9IGtleXNbaV1cblx0XHRcdGlmIChrZXkgPT09IERSQUZUX1NUQVRFKSBjb250aW51ZVxuXHRcdFx0Y29uc3QgYmFzZVZhbHVlID0gYmFzZV9ba2V5XVxuXHRcdFx0Ly8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblx0XHRcdGlmIChiYXNlVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhaGFzKGJhc2VfLCBrZXkpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0XHQvLyBPbmNlIGEgYmFzZSBrZXkgaXMgZGVsZXRlZCwgZnV0dXJlIGNoYW5nZXMgZ28gdW5kZXRlY3RlZCwgYmVjYXVzZSBpdHNcblx0XHRcdC8vIGRlc2NyaXB0b3IgaXMgZXJhc2VkLiBUaGlzIGJyYW5jaCBkZXRlY3RzIGFueSBtaXNzZWQgY2hhbmdlcy5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGRyYWZ0X1trZXldXG5cdFx0XHRcdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gdmFsdWUgJiYgdmFsdWVbRFJBRlRfU1RBVEVdXG5cdFx0XHRcdGlmIChzdGF0ZSA/IHN0YXRlLmJhc2VfICE9PSBiYXNlVmFsdWUgOiAhaXModmFsdWUsIGJhc2VWYWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXQgdGhpcyBwb2ludCwgbm8ga2V5cyB3ZXJlIGFkZGVkIG9yIGNoYW5nZWQuXG5cdFx0Ly8gQ29tcGFyZSBrZXkgY291bnQgdG8gZGV0ZXJtaW5lIGlmIGtleXMgd2VyZSBkZWxldGVkLlxuXHRcdGNvbnN0IGJhc2VJc0RyYWZ0ID0gISFiYXNlX1tEUkFGVF9TVEFURSBhcyBhbnldXG5cdFx0cmV0dXJuIGtleXMubGVuZ3RoICE9PSBvd25LZXlzKGJhc2VfKS5sZW5ndGggKyAoYmFzZUlzRHJhZnQgPyAwIDogMSkgLy8gKyAxIHRvIGNvcnJlY3QgZm9yIERSQUZUX1NUQVRFXG5cdH1cblxuXHRmdW5jdGlvbiBoYXNBcnJheUNoYW5nZXMoc3RhdGU6IEVTNUFycmF5U3RhdGUpIHtcblx0XHRjb25zdCB7ZHJhZnRffSA9IHN0YXRlXG5cdFx0aWYgKGRyYWZ0Xy5sZW5ndGggIT09IHN0YXRlLmJhc2VfLmxlbmd0aCkgcmV0dXJuIHRydWVcblx0XHQvLyBTZWUgIzExNlxuXHRcdC8vIElmIHdlIGZpcnN0IHNob3J0ZW4gdGhlIGxlbmd0aCwgb3VyIGFycmF5IGludGVyY2VwdG9ycyB3aWxsIGJlIHJlbW92ZWQuXG5cdFx0Ly8gSWYgYWZ0ZXIgdGhhdCBuZXcgaXRlbXMgYXJlIGFkZGVkLCByZXN1bHQgaW4gdGhlIHNhbWUgb3JpZ2luYWwgbGVuZ3RoLFxuXHRcdC8vIHRob3NlIGxhc3QgaXRlbXMgd2lsbCBoYXZlIG5vIGludGVyY2VwdGluZyBwcm9wZXJ0eS5cblx0XHQvLyBTbyBpZiB0aGVyZSBpcyBubyBvd24gZGVzY3JpcHRvciBvbiB0aGUgbGFzdCBwb3NpdGlvbiwgd2Uga25vdyB0aGF0IGl0ZW1zIHdlcmUgcmVtb3ZlZCBhbmQgYWRkZWRcblx0XHQvLyBOLkIuOiBzcGxpY2UsIHVuc2hpZnQsIGV0YyBvbmx5IHNoaWZ0IHZhbHVlcyBhcm91bmQsIGJ1dCBub3QgcHJvcCBkZXNjcmlwdG9ycywgc28gd2Ugb25seSBoYXZlIHRvIGNoZWNrXG5cdFx0Ly8gdGhlIGxhc3Qgb25lXG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG5cdFx0XHRkcmFmdF8sXG5cdFx0XHRkcmFmdF8ubGVuZ3RoIC0gMVxuXHRcdClcblx0XHQvLyBkZXNjcmlwdG9yIGNhbiBiZSBudWxsLCBidXQgb25seSBmb3IgbmV3bHkgY3JlYXRlZCBzcGFyc2UgYXJyYXlzLCBlZy4gbmV3IEFycmF5KDEwKVxuXHRcdGlmIChkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLmdldCkgcmV0dXJuIHRydWVcblx0XHQvLyBGb3IgYWxsIG90aGVyIGNhc2VzLCB3ZSBkb24ndCBoYXZlIHRvIGNvbXBhcmUsIGFzIHRoZXkgd291bGQgaGF2ZSBiZWVuIHBpY2tlZCB1cCBieSB0aGUgaW5kZXggc2V0dGVyc1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFzQ2hhbmdlc18oc3RhdGU6IEVTNVN0YXRlKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVfID09PSBQcm94eVR5cGVFUzVPYmplY3Rcblx0XHRcdD8gaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSlcblx0XHRcdDogaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKVxuXHR9XG5cblx0ZnVuY3Rpb24gYXNzZXJ0VW5yZXZva2VkKHN0YXRlOiBhbnkgLypFUzVTdGF0ZSB8IE1hcFN0YXRlIHwgU2V0U3RhdGUqLykge1xuXHRcdGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKVxuXHR9XG5cblx0bG9hZFBsdWdpbihcIkVTNVwiLCB7XG5cdFx0Y3JlYXRlRVM1UHJveHlfLFxuXHRcdHdpbGxGaW5hbGl6ZUVTNV8sXG5cdFx0aGFzQ2hhbmdlc19cblx0fSlcbn1cbiIsImltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdFBhdGNoLFxuXHRTZXRTdGF0ZSxcblx0RVM1QXJyYXlTdGF0ZSxcblx0UHJveHlBcnJheVN0YXRlLFxuXHRNYXBTdGF0ZSxcblx0RVM1T2JqZWN0U3RhdGUsXG5cdFByb3h5T2JqZWN0U3RhdGUsXG5cdFBhdGNoUGF0aCxcblx0Z2V0LFxuXHRlYWNoLFxuXHRoYXMsXG5cdGdldEFyY2h0eXBlLFxuXHRpc1NldCxcblx0aXNNYXAsXG5cdGxvYWRQbHVnaW4sXG5cdFByb3h5VHlwZVByb3h5T2JqZWN0LFxuXHRQcm94eVR5cGVFUzVPYmplY3QsXG5cdFByb3h5VHlwZU1hcCxcblx0UHJveHlUeXBlRVM1QXJyYXksXG5cdFByb3h5VHlwZVByb3h5QXJyYXksXG5cdFByb3h5VHlwZVNldCxcblx0QXJjaHR5cGVNYXAsXG5cdEFyY2h0eXBlU2V0LFxuXHRBcmNodHlwZUFycmF5LFxuXHRkaWUsXG5cdGlzRHJhZnRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVBhdGNoZXMoKSB7XG5cdGNvbnN0IFJFUExBQ0UgPSBcInJlcGxhY2VcIlxuXHRjb25zdCBBREQgPSBcImFkZFwiXG5cdGNvbnN0IFJFTU9WRSA9IFwicmVtb3ZlXCJcblxuXHRmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNfKFxuXHRcdHN0YXRlOiBJbW1lclN0YXRlLFxuXHRcdGJhc2VQYXRoOiBQYXRjaFBhdGgsXG5cdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHQpOiB2b2lkIHtcblx0XHRzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG5cdFx0XHRjYXNlIFByb3h5VHlwZVByb3h5T2JqZWN0OlxuXHRcdFx0Y2FzZSBQcm94eVR5cGVFUzVPYmplY3Q6XG5cdFx0XHRjYXNlIFByb3h5VHlwZU1hcDpcblx0XHRcdFx0cmV0dXJuIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRiYXNlUGF0aCxcblx0XHRcdFx0XHRwYXRjaGVzLFxuXHRcdFx0XHRcdGludmVyc2VQYXRjaGVzXG5cdFx0XHRcdClcblx0XHRcdGNhc2UgUHJveHlUeXBlRVM1QXJyYXk6XG5cdFx0XHRjYXNlIFByb3h5VHlwZVByb3h5QXJyYXk6XG5cdFx0XHRcdHJldHVybiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKVxuXHRcdFx0Y2FzZSBQcm94eVR5cGVTZXQ6XG5cdFx0XHRcdHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoXG5cdFx0XHRcdFx0KHN0YXRlIGFzIGFueSkgYXMgU2V0U3RhdGUsXG5cdFx0XHRcdFx0YmFzZVBhdGgsXG5cdFx0XHRcdFx0cGF0Y2hlcyxcblx0XHRcdFx0XHRpbnZlcnNlUGF0Y2hlc1xuXHRcdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoXG5cdFx0c3RhdGU6IEVTNUFycmF5U3RhdGUgfCBQcm94eUFycmF5U3RhdGUsXG5cdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdCkge1xuXHRcdGxldCB7YmFzZV8sIGFzc2lnbmVkX30gPSBzdGF0ZVxuXHRcdGxldCBjb3B5XyA9IHN0YXRlLmNvcHlfIVxuXG5cdFx0Ly8gUmVkdWNlIGNvbXBsZXhpdHkgYnkgZW5zdXJpbmcgYGJhc2VgIGlzIG5ldmVyIGxvbmdlci5cblx0XHRpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQ7W2Jhc2VfLCBjb3B5X10gPSBbY29weV8sIGJhc2VfXVxuXHRcdFx0O1twYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gPSBbaW52ZXJzZVBhdGNoZXMsIHBhdGNoZXNdXG5cdFx0fVxuXG5cdFx0Ly8gUHJvY2VzcyByZXBsYWNlZCBpbmRpY2VzLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKVxuXHRcdFx0XHRwYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRcdG9wOiBSRVBMQUNFLFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0Ly8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRcdFx0dmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0XHRvcDogUkVQTEFDRSxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcm9jZXNzIGFkZGVkIGluZGljZXMuXG5cdFx0Zm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGNvcHlfLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSlcblx0XHRcdHBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdG9wOiBBREQsXG5cdFx0XHRcdHBhdGgsXG5cdFx0XHRcdC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuXHRcdFx0XHQvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cblx0XHRcdFx0dmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0aWYgKGJhc2VfLmxlbmd0aCA8IGNvcHlfLmxlbmd0aCkge1xuXHRcdFx0aW52ZXJzZVBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdG9wOiBSRVBMQUNFLFxuXHRcdFx0XHRwYXRoOiBiYXNlUGF0aC5jb25jYXQoW1wibGVuZ3RoXCJdKSxcblx0XHRcdFx0dmFsdWU6IGJhc2VfLmxlbmd0aFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHQvLyBUaGlzIGlzIHVzZWQgZm9yIGJvdGggTWFwIG9iamVjdHMgYW5kIG5vcm1hbCBvYmplY3RzLlxuXHRmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoXG5cdFx0c3RhdGU6IE1hcFN0YXRlIHwgRVM1T2JqZWN0U3RhdGUgfCBQcm94eU9iamVjdFN0YXRlLFxuXHRcdGJhc2VQYXRoOiBQYXRjaFBhdGgsXG5cdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHQpIHtcblx0XHRjb25zdCB7YmFzZV8sIGNvcHlffSA9IHN0YXRlXG5cdFx0ZWFjaChzdGF0ZS5hc3NpZ25lZF8hLCAoa2V5LCBhc3NpZ25lZFZhbHVlKSA9PiB7XG5cdFx0XHRjb25zdCBvcmlnVmFsdWUgPSBnZXQoYmFzZV8sIGtleSlcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0KGNvcHlfISwga2V5KVxuXHRcdFx0Y29uc3Qgb3AgPSAhYXNzaWduZWRWYWx1ZSA/IFJFTU9WRSA6IGhhcyhiYXNlXywga2V5KSA/IFJFUExBQ0UgOiBBRERcblx0XHRcdGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKSByZXR1cm5cblx0XHRcdGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoa2V5IGFzIGFueSlcblx0XHRcdHBhdGNoZXMucHVzaChvcCA9PT0gUkVNT1ZFID8ge29wLCBwYXRofSA6IHtvcCwgcGF0aCwgdmFsdWV9KVxuXHRcdFx0aW52ZXJzZVBhdGNoZXMucHVzaChcblx0XHRcdFx0b3AgPT09IEFERFxuXHRcdFx0XHRcdD8ge29wOiBSRU1PVkUsIHBhdGh9XG5cdFx0XHRcdFx0OiBvcCA9PT0gUkVNT1ZFXG5cdFx0XHRcdFx0PyB7b3A6IEFERCwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSl9XG5cdFx0XHRcdFx0OiB7b3A6IFJFUExBQ0UsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpfVxuXHRcdFx0KVxuXHRcdH0pXG5cdH1cblxuXHRmdW5jdGlvbiBnZW5lcmF0ZVNldFBhdGNoZXMoXG5cdFx0c3RhdGU6IFNldFN0YXRlLFxuXHRcdGJhc2VQYXRoOiBQYXRjaFBhdGgsXG5cdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHQpIHtcblx0XHRsZXQge2Jhc2VfLCBjb3B5X30gPSBzdGF0ZVxuXG5cdFx0bGV0IGkgPSAwXG5cdFx0YmFzZV8uZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0aWYgKCFjb3B5XyEuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSlcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0XHRvcDogUkVNT1ZFLFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0fSlcblx0XHRcdFx0aW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG5cdFx0XHRcdFx0b3A6IEFERCxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRpKytcblx0XHR9KVxuXHRcdGkgPSAwXG5cdFx0Y29weV8hLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSlcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0XHRvcDogQURELFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0fSlcblx0XHRcdFx0aW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG5cdFx0XHRcdFx0b3A6IFJFTU9WRSxcblx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRpKytcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKFxuXHRcdHJvb3RTdGF0ZTogSW1tZXJTdGF0ZSxcblx0XHRyZXBsYWNlbWVudDogYW55LFxuXHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0KTogdm9pZCB7XG5cdFx0cGF0Y2hlcy5wdXNoKHtcblx0XHRcdG9wOiBSRVBMQUNFLFxuXHRcdFx0cGF0aDogW10sXG5cdFx0XHR2YWx1ZTogcmVwbGFjZW1lbnRcblx0XHR9KVxuXHRcdGludmVyc2VQYXRjaGVzLnB1c2goe1xuXHRcdFx0b3A6IFJFUExBQ0UsXG5cdFx0XHRwYXRoOiBbXSxcblx0XHRcdHZhbHVlOiByb290U3RhdGUuYmFzZV9cblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlQYXRjaGVzXzxUPihkcmFmdDogVCwgcGF0Y2hlczogUGF0Y2hbXSk6IFQge1xuXHRcdHBhdGNoZXMuZm9yRWFjaChwYXRjaCA9PiB7XG5cdFx0XHRjb25zdCB7cGF0aCwgb3B9ID0gcGF0Y2hcblxuXHRcdFx0bGV0IGJhc2U6IGFueSA9IGRyYWZ0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdGJhc2UgPSBnZXQoYmFzZSwgcGF0aFtpXSlcblx0XHRcdFx0aWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSBkaWUoMTUsIHBhdGguam9pbihcIi9cIikpXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHR5cGUgPSBnZXRBcmNodHlwZShiYXNlKVxuXHRcdFx0Y29uc3QgdmFsdWUgPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKHBhdGNoLnZhbHVlKSAvLyB1c2VkIHRvIGNsb25lIHBhdGNoIHRvIGVuc3VyZSBvcmlnaW5hbCBwYXRjaCBpcyBub3QgbW9kaWZpZWQsIHNlZSAjNDExXG5cdFx0XHRjb25zdCBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cblx0XHRcdHN3aXRjaCAob3ApIHtcblx0XHRcdFx0Y2FzZSBSRVBMQUNFOlxuXHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZU1hcDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpXG5cdFx0XHRcdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZVNldDpcblx0XHRcdFx0XHRcdFx0ZGllKDE2KVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0Ly8gaWYgdmFsdWUgaXMgYW4gb2JqZWN0LCB0aGVuIGl0J3MgYXNzaWduZWQgYnkgcmVmZXJlbmNlXG5cdFx0XHRcdFx0XHRcdC8vIGluIHRoZSBmb2xsb3dpbmcgYWRkIG9yIHJlbW92ZSBvcHMsIHRoZSB2YWx1ZSBmaWVsZCBpbnNpZGUgdGhlIHBhdGNoIHdpbGwgYWxzbyBiZSBtb2RpZnllZFxuXHRcdFx0XHRcdFx0XHQvLyBzbyB3ZSB1c2UgdmFsdWUgZnJvbSB0aGUgY2xvbmVkIHBhdGNoXG5cdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChiYXNlW2tleV0gPSB2YWx1ZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgQUREOlxuXHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZUFycmF5OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5zcGxpY2Uoa2V5IGFzIGFueSwgMCwgdmFsdWUpXG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlTWFwOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSlcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVTZXQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLmFkZCh2YWx1ZSlcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoYmFzZVtrZXldID0gdmFsdWUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIFJFTU9WRTpcblx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVBcnJheTpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2Uuc3BsaWNlKGtleSBhcyBhbnksIDEpXG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlTWFwOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5kZWxldGUoa2V5KVxuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZVNldDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRlbGV0ZSBiYXNlW2tleV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZGllKDE3LCBvcClcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIGRyYWZ0XG5cdH1cblxuXHQvLyBvcHRpbWl6ZTogdGhpcyBpcyBxdWl0ZSBhIHBlcmZvcm1hbmNlIGhpdCwgY2FuIHdlIGRldGVjdCBpbnRlbGxpZ2VudGx5IHdoZW4gaXQgaXMgbmVlZGVkP1xuXHQvLyBFLmcuIGF1dG8tZHJhZnQgd2hlbiBuZXcgb2JqZWN0cyBmcm9tIG91dHNpZGUgYXJlIGFzc2lnbmVkIGFuZCBtb2RpZmllZD9cblx0Ly8gKFNlZSBmYWlsaW5nIHRlc3Qgd2hlbiBkZWVwQ2xvbmUganVzdCByZXR1cm5zIG9iailcblx0ZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZTxUPihvYmo6IFQpOiBUXG5cdGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqOiBhbnkpIHtcblx0XHRpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm4gb2JqXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSlcblx0XHRpZiAoaXNNYXAob2JqKSlcblx0XHRcdHJldHVybiBuZXcgTWFwKFxuXHRcdFx0XHRBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lUGF0Y2hWYWx1ZSh2KV0pXG5cdFx0XHQpXG5cdFx0aWYgKGlzU2V0KG9iaikpIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpXG5cdFx0Y29uc3QgY2xvbmVkID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSlcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIGNsb25lZFtrZXldID0gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmpba2V5XSlcblx0XHRyZXR1cm4gY2xvbmVkXG5cdH1cblxuXHRmdW5jdGlvbiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZDxUPihvYmo6IFQpOiBUIHtcblx0XHRpZiAoaXNEcmFmdChvYmopKSB7XG5cdFx0XHRyZXR1cm4gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopXG5cdFx0fSBlbHNlIHJldHVybiBvYmpcblx0fVxuXG5cdGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcblx0XHRhcHBseVBhdGNoZXNfLFxuXHRcdGdlbmVyYXRlUGF0Y2hlc18sXG5cdFx0Z2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfXG5cdH0pXG59XG4iLCIvLyB0eXBlcyBvbmx5IVxuaW1wb3J0IHtcblx0SW1tZXJTdGF0ZSxcblx0QW55TWFwLFxuXHRBbnlTZXQsXG5cdE1hcFN0YXRlLFxuXHRTZXRTdGF0ZSxcblx0RFJBRlRfU1RBVEUsXG5cdGdldEN1cnJlbnRTY29wZSxcblx0bGF0ZXN0LFxuXHRpdGVyYXRvclN5bWJvbCxcblx0aXNEcmFmdGFibGUsXG5cdGNyZWF0ZVByb3h5LFxuXHRsb2FkUGx1Z2luLFxuXHRtYXJrQ2hhbmdlZCxcblx0UHJveHlUeXBlTWFwLFxuXHRQcm94eVR5cGVTZXQsXG5cdGRpZSxcblx0ZWFjaFxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTWFwU2V0KCkge1xuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHR2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQ6IGFueSwgYjogYW55KTogYW55IHtcblx0XHRleHRlbmRTdGF0aWNzID1cblx0XHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuXHRcdFx0KHtfX3Byb3RvX186IFtdfSBpbnN0YW5jZW9mIEFycmF5ICYmXG5cdFx0XHRcdGZ1bmN0aW9uKGQsIGIpIHtcblx0XHRcdFx0XHRkLl9fcHJvdG9fXyA9IGJcblx0XHRcdFx0fSkgfHxcblx0XHRcdGZ1bmN0aW9uKGQsIGIpIHtcblx0XHRcdFx0Zm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF1cblx0XHRcdH1cblx0XHRyZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKVxuXHR9XG5cblx0Ly8gVWdseSBoYWNrIHRvIHJlc29sdmUgIzUwMiBhbmQgaW5oZXJpdCBidWlsdCBpbiBNYXAgLyBTZXRcblx0ZnVuY3Rpb24gX19leHRlbmRzKGQ6IGFueSwgYjogYW55KTogYW55IHtcblx0XHRleHRlbmRTdGF0aWNzKGQsIGIpXG5cdFx0ZnVuY3Rpb24gX18odGhpczogYW55KTogYW55IHtcblx0XHRcdHRoaXMuY29uc3RydWN0b3IgPSBkXG5cdFx0fVxuXHRcdGQucHJvdG90eXBlID1cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdCgoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUpLCBuZXcgX18oKSlcblx0fVxuXG5cdGNvbnN0IERyYWZ0TWFwID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXHRcdF9fZXh0ZW5kcyhEcmFmdE1hcCwgX3N1cGVyKVxuXHRcdC8vIENyZWF0ZSBjbGFzcyBtYW51YWxseSwgY2F1c2UgIzUwMlxuXHRcdGZ1bmN0aW9uIERyYWZ0TWFwKHRoaXM6IGFueSwgdGFyZ2V0OiBBbnlNYXAsIHBhcmVudD86IEltbWVyU3RhdGUpOiBhbnkge1xuXHRcdFx0dGhpc1tEUkFGVF9TVEFURV0gPSB7XG5cdFx0XHRcdHR5cGVfOiBQcm94eVR5cGVNYXAsXG5cdFx0XHRcdHBhcmVudF86IHBhcmVudCxcblx0XHRcdFx0c2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCkhLFxuXHRcdFx0XHRtb2RpZmllZF86IGZhbHNlLFxuXHRcdFx0XHRmaW5hbGl6ZWRfOiBmYWxzZSxcblx0XHRcdFx0Y29weV86IHVuZGVmaW5lZCxcblx0XHRcdFx0YXNzaWduZWRfOiB1bmRlZmluZWQsXG5cdFx0XHRcdGJhc2VfOiB0YXJnZXQsXG5cdFx0XHRcdGRyYWZ0XzogdGhpcyBhcyBhbnksXG5cdFx0XHRcdGlzTWFudWFsXzogZmFsc2UsXG5cdFx0XHRcdHJldm9rZWRfOiBmYWxzZVxuXHRcdFx0fSBhcyBNYXBTdGF0ZVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cdFx0Y29uc3QgcCA9IERyYWZ0TWFwLnByb3RvdHlwZVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplXG5cdFx0XHR9XG5cdFx0XHQvLyBlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdC8vIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdH0pXG5cblx0XHRwLmhhcyA9IGZ1bmN0aW9uKGtleTogYW55KTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KVxuXHRcdH1cblxuXHRcdHAuc2V0ID0gZnVuY3Rpb24oa2V5OiBhbnksIHZhbHVlOiBhbnkpIHtcblx0XHRcdGNvbnN0IHN0YXRlOiBNYXBTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcblx0XHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHRzdGF0ZS5hc3NpZ25lZF8hLnNldChrZXksIHRydWUpXG5cdFx0XHRcdHN0YXRlLmNvcHlfIS5zZXQoa2V5LCB2YWx1ZSlcblx0XHRcdFx0c3RhdGUuYXNzaWduZWRfIS5zZXQoa2V5LCB0cnVlKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHRwLmRlbGV0ZSA9IGZ1bmN0aW9uKGtleTogYW55KTogYm9vbGVhbiB7XG5cdFx0XHRpZiAoIXRoaXMuaGFzKGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRlOiBNYXBTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRwcmVwYXJlTWFwQ29weShzdGF0ZSlcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0c3RhdGUuYXNzaWduZWRfIS5zZXQoa2V5LCBmYWxzZSlcblx0XHRcdHN0YXRlLmNvcHlfIS5kZWxldGUoa2V5KVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cblx0XHRwLmNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdHN0YXRlLmFzc2lnbmVkXyA9IG5ldyBNYXAoKVxuXHRcdFx0ZWFjaChzdGF0ZS5iYXNlXywga2V5ID0+IHtcblx0XHRcdFx0c3RhdGUuYXNzaWduZWRfIS5zZXQoa2V5LCBmYWxzZSlcblx0XHRcdH0pXG5cdFx0XHRyZXR1cm4gc3RhdGUuY29weV8hLmNsZWFyKClcblx0XHR9XG5cblx0XHRwLmZvckVhY2ggPSBmdW5jdGlvbihcblx0XHRcdGNiOiAodmFsdWU6IGFueSwga2V5OiBhbnksIHNlbGY6IGFueSkgPT4gdm9pZCxcblx0XHRcdHRoaXNBcmc/OiBhbnlcblx0XHQpIHtcblx0XHRcdGNvbnN0IHN0YXRlOiBNYXBTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRsYXRlc3Qoc3RhdGUpLmZvckVhY2goKF92YWx1ZTogYW55LCBrZXk6IGFueSwgX21hcDogYW55KSA9PiB7XG5cdFx0XHRcdGNiLmNhbGwodGhpc0FyZywgdGhpcy5nZXQoa2V5KSwga2V5LCB0aGlzKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwLmdldCA9IGZ1bmN0aW9uKGtleTogYW55KTogYW55IHtcblx0XHRcdGNvbnN0IHN0YXRlOiBNYXBTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSlcblx0XHRcdGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSAvLyBlaXRoZXIgYWxyZWFkeSBkcmFmdGVkIG9yIHJlYXNzaWduZWRcblx0XHRcdH1cblx0XHRcdC8vIGRlc3BpdGUgd2hhdCBpdCBsb29rcywgdGhpcyBjcmVhdGVzIGEgZHJhZnQgb25seSBvbmNlLCBzZWUgYWJvdmUgY29uZGl0aW9uXG5cdFx0XHRjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSlcblx0XHRcdHByZXBhcmVNYXBDb3B5KHN0YXRlKVxuXHRcdFx0c3RhdGUuY29weV8hLnNldChrZXksIGRyYWZ0KVxuXHRcdFx0cmV0dXJuIGRyYWZ0XG5cdFx0fVxuXG5cdFx0cC5rZXlzID0gZnVuY3Rpb24oKTogSXRlcmFibGVJdGVyYXRvcjxhbnk+IHtcblx0XHRcdHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmtleXMoKVxuXHRcdH1cblxuXHRcdHAudmFsdWVzID0gZnVuY3Rpb24oKTogSXRlcmFibGVJdGVyYXRvcjxhbnk+IHtcblx0XHRcdGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKClcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFtpdGVyYXRvclN5bWJvbF06ICgpID0+IHRoaXMudmFsdWVzKCksXG5cdFx0XHRcdG5leHQ6ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCByID0gaXRlcmF0b3IubmV4dCgpXG5cdFx0XHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRcdFx0XHRpZiAoci5kb25lKSByZXR1cm4gclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSlcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZG9uZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBhcyBhbnlcblx0XHR9XG5cblx0XHRwLmVudHJpZXMgPSBmdW5jdGlvbigpOiBJdGVyYWJsZUl0ZXJhdG9yPFthbnksIGFueV0+IHtcblx0XHRcdGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKClcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFtpdGVyYXRvclN5bWJvbF06ICgpID0+IHRoaXMuZW50cmllcygpLFxuXHRcdFx0XHRuZXh0OiAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgciA9IGl0ZXJhdG9yLm5leHQoKVxuXHRcdFx0XHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0XHRcdFx0aWYgKHIuZG9uZSkgcmV0dXJuIHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGRvbmU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0dmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gYXMgYW55XG5cdFx0fVxuXG5cdFx0cFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLmVudHJpZXMoKVxuXHRcdH1cblxuXHRcdHJldHVybiBEcmFmdE1hcFxuXHR9KShNYXApXG5cblx0ZnVuY3Rpb24gcHJveHlNYXBfPFQgZXh0ZW5kcyBBbnlNYXA+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFQge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gbmV3IERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KVxuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGU6IE1hcFN0YXRlKSB7XG5cdFx0aWYgKCFzdGF0ZS5jb3B5Xykge1xuXHRcdFx0c3RhdGUuYXNzaWduZWRfID0gbmV3IE1hcCgpXG5cdFx0XHRzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgRHJhZnRTZXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cdFx0X19leHRlbmRzKERyYWZ0U2V0LCBfc3VwZXIpXG5cdFx0Ly8gQ3JlYXRlIGNsYXNzIG1hbnVhbGx5LCBjYXVzZSAjNTAyXG5cdFx0ZnVuY3Rpb24gRHJhZnRTZXQodGhpczogYW55LCB0YXJnZXQ6IEFueVNldCwgcGFyZW50PzogSW1tZXJTdGF0ZSkge1xuXHRcdFx0dGhpc1tEUkFGVF9TVEFURV0gPSB7XG5cdFx0XHRcdHR5cGVfOiBQcm94eVR5cGVTZXQsXG5cdFx0XHRcdHBhcmVudF86IHBhcmVudCxcblx0XHRcdFx0c2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCkhLFxuXHRcdFx0XHRtb2RpZmllZF86IGZhbHNlLFxuXHRcdFx0XHRmaW5hbGl6ZWRfOiBmYWxzZSxcblx0XHRcdFx0Y29weV86IHVuZGVmaW5lZCxcblx0XHRcdFx0YmFzZV86IHRhcmdldCxcblx0XHRcdFx0ZHJhZnRfOiB0aGlzLFxuXHRcdFx0XHRkcmFmdHNfOiBuZXcgTWFwKCksXG5cdFx0XHRcdHJldm9rZWRfOiBmYWxzZSxcblx0XHRcdFx0aXNNYW51YWxfOiBmYWxzZVxuXHRcdFx0fSBhcyBTZXRTdGF0ZVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cdFx0Y29uc3QgcCA9IERyYWZ0U2V0LnByb3RvdHlwZVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplXG5cdFx0XHR9XG5cdFx0XHQvLyBlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdH0pXG5cblx0XHRwLmhhcyA9IGZ1bmN0aW9uKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0XHRcdGNvbnN0IHN0YXRlOiBTZXRTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHQvLyBiaXQgb2YgdHJpY2tlcnkgaGVyZSwgdG8gYmUgYWJsZSB0byByZWNvZ25pemUgYm90aCB0aGUgdmFsdWUsIGFuZCB0aGUgZHJhZnQgb2YgaXRzIHZhbHVlXG5cdFx0XHRpZiAoIXN0YXRlLmNvcHlfKSB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpXG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSkgcmV0dXJuIHRydWVcblx0XHRcdGlmIChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgJiYgc3RhdGUuY29weV8uaGFzKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cblx0XHRwLmFkZCA9IGZ1bmN0aW9uKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdGlmICghdGhpcy5oYXModmFsdWUpKSB7XG5cdFx0XHRcdHByZXBhcmVTZXRDb3B5KHN0YXRlKVxuXHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0c3RhdGUuY29weV8hLmFkZCh2YWx1ZSlcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0cC5kZWxldGUgPSBmdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcblx0XHRcdGlmICghdGhpcy5oYXModmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZVNldENvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0YXRlLmNvcHlfIS5kZWxldGUodmFsdWUpIHx8XG5cdFx0XHRcdChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSlcblx0XHRcdFx0XHQ/IHN0YXRlLmNvcHlfIS5kZWxldGUoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKVxuXHRcdFx0XHRcdDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZmFsc2UpXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0cC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdHByZXBhcmVTZXRDb3B5KHN0YXRlKVxuXHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRyZXR1cm4gc3RhdGUuY29weV8hLmNsZWFyKClcblx0XHR9XG5cblx0XHRwLnZhbHVlcyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZVNldENvcHkoc3RhdGUpXG5cdFx0XHRyZXR1cm4gc3RhdGUuY29weV8hLnZhbHVlcygpXG5cdFx0fVxuXG5cdFx0cC5lbnRyaWVzID0gZnVuY3Rpb24gZW50cmllcygpOiBJdGVyYWJsZUl0ZXJhdG9yPFthbnksIGFueV0+IHtcblx0XHRcdGNvbnN0IHN0YXRlOiBTZXRTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRwcmVwYXJlU2V0Q29weShzdGF0ZSlcblx0XHRcdHJldHVybiBzdGF0ZS5jb3B5XyEuZW50cmllcygpXG5cdFx0fVxuXG5cdFx0cC5rZXlzID0gZnVuY3Rpb24oKTogSXRlcmFibGVJdGVyYXRvcjxhbnk+IHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcygpXG5cdFx0fVxuXG5cdFx0cFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcygpXG5cdFx0fVxuXG5cdFx0cC5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYjogYW55LCB0aGlzQXJnPzogYW55KSB7XG5cdFx0XHRjb25zdCBpdGVyYXRvciA9IHRoaXMudmFsdWVzKClcblx0XHRcdGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcblx0XHRcdHdoaWxlICghcmVzdWx0LmRvbmUpIHtcblx0XHRcdFx0Y2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcylcblx0XHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIERyYWZ0U2V0XG5cdH0pKFNldClcblxuXHRmdW5jdGlvbiBwcm94eVNldF88VCBleHRlbmRzIEFueVNldD4odGFyZ2V0OiBULCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogVCB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpXG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlU2V0Q29weShzdGF0ZTogU2V0U3RhdGUpIHtcblx0XHRpZiAoIXN0YXRlLmNvcHlfKSB7XG5cdFx0XHQvLyBjcmVhdGUgZHJhZnRzIGZvciBhbGwgZW50cmllcyB0byBwcmVzZXJ2ZSBpbnNlcnRpb24gb3JkZXJcblx0XHRcdHN0YXRlLmNvcHlfID0gbmV3IFNldCgpXG5cdFx0XHRzdGF0ZS5iYXNlXy5mb3JFYWNoKHZhbHVlID0+IHtcblx0XHRcdFx0aWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuXHRcdFx0XHRcdGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkoc3RhdGUuc2NvcGVfLmltbWVyXywgdmFsdWUsIHN0YXRlKVxuXHRcdFx0XHRcdHN0YXRlLmRyYWZ0c18uc2V0KHZhbHVlLCBkcmFmdClcblx0XHRcdFx0XHRzdGF0ZS5jb3B5XyEuYWRkKGRyYWZ0KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0YXRlLmNvcHlfIS5hZGQodmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYXNzZXJ0VW5yZXZva2VkKHN0YXRlOiBhbnkgLypFUzVTdGF0ZSB8IE1hcFN0YXRlIHwgU2V0U3RhdGUqLykge1xuXHRcdGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKVxuXHR9XG5cblx0bG9hZFBsdWdpbihcIk1hcFNldFwiLCB7cHJveHlNYXBfLCBwcm94eVNldF99KVxufVxuIiwiaW1wb3J0IHtlbmFibGVFUzV9IGZyb20gXCIuL2VzNVwiXG5pbXBvcnQge2VuYWJsZU1hcFNldH0gZnJvbSBcIi4vbWFwc2V0XCJcbmltcG9ydCB7ZW5hYmxlUGF0Y2hlc30gZnJvbSBcIi4vcGF0Y2hlc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBbGxQbHVnaW5zKCkge1xuXHRlbmFibGVFUzUoKVxuXHRlbmFibGVNYXBTZXQoKVxuXHRlbmFibGVQYXRjaGVzKClcbn1cbiIsImltcG9ydCB7XG5cdElQcm9kdWNlLFxuXHRJUHJvZHVjZVdpdGhQYXRjaGVzLFxuXHRJbW1lcixcblx0RHJhZnQsXG5cdEltbXV0YWJsZVxufSBmcm9tIFwiLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCB7XG5cdERyYWZ0LFxuXHRJbW11dGFibGUsXG5cdFBhdGNoLFxuXHRQYXRjaExpc3RlbmVyLFxuXHRvcmlnaW5hbCxcblx0Y3VycmVudCxcblx0aXNEcmFmdCxcblx0aXNEcmFmdGFibGUsXG5cdE5PVEhJTkcgYXMgbm90aGluZyxcblx0RFJBRlRBQkxFIGFzIGltbWVyYWJsZVxufSBmcm9tIFwiLi9pbnRlcm5hbFwiXG5cbmNvbnN0IGltbWVyID0gbmV3IEltbWVyKClcblxuLyoqXG4gKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcbiAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG4gKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxuICpcbiAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cbiAqXG4gKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcbiAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cbiAqXG4gKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBjb25zdCBwcm9kdWNlOiBJUHJvZHVjZSA9IGltbWVyLnByb2R1Y2VcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y2VcblxuLyoqXG4gKiBMaWtlIGBwcm9kdWNlYCwgYnV0IGBwcm9kdWNlV2l0aFBhdGNoZXNgIGFsd2F5cyByZXR1cm5zIGEgdHVwbGVcbiAqIFtuZXh0U3RhdGUsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXSAoaW5zdGVhZCBvZiBqdXN0IHRoZSBuZXh0IHN0YXRlKVxuICovXG5leHBvcnQgY29uc3QgcHJvZHVjZVdpdGhQYXRjaGVzOiBJUHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG5cdGltbWVyXG4pXG5cbi8qKlxuICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAqXG4gKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBdXRvRnJlZXplID0gaW1tZXIuc2V0QXV0b0ZyZWV6ZS5iaW5kKGltbWVyKVxuXG4vKipcbiAqIFBhc3MgdHJ1ZSB0byB1c2UgdGhlIEVTMjAxNSBgUHJveHlgIGNsYXNzIHdoZW4gY3JlYXRpbmcgZHJhZnRzLCB3aGljaCBpc1xuICogYWx3YXlzIGZhc3RlciB0aGFuIHVzaW5nIEVTNSBwcm94aWVzLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGZlYXR1cmUgZGV0ZWN0aW9uIGlzIHVzZWQsIHNvIGNhbGxpbmcgdGhpcyBpcyByYXJlbHkgbmVjZXNzYXJ5LlxuICovXG5leHBvcnQgY29uc3Qgc2V0VXNlUHJveGllcyA9IGltbWVyLnNldFVzZVByb3hpZXMuYmluZChpbW1lcilcblxuLyoqXG4gKiBBcHBseSBhbiBhcnJheSBvZiBJbW1lciBwYXRjaGVzIHRvIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgcHJvZHVjZXIsIHdoaWNoIG1lYW5zIGNvcHktb24td3JpdGUgaXMgaW4gZWZmZWN0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpXG5cbi8qKlxuICogQ3JlYXRlIGFuIEltbWVyIGRyYWZ0IGZyb20gdGhlIGdpdmVuIGJhc2Ugc3RhdGUsIHdoaWNoIG1heSBiZSBhIGRyYWZ0IGl0c2VsZi5cbiAqIFRoZSBkcmFmdCBjYW4gYmUgbW9kaWZpZWQgdW50aWwgeW91IGZpbmFsaXplIGl0IHdpdGggdGhlIGBmaW5pc2hEcmFmdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVEcmFmdCA9IGltbWVyLmNyZWF0ZURyYWZ0LmJpbmQoaW1tZXIpXG5cbi8qKlxuICogRmluYWxpemUgYW4gSW1tZXIgZHJhZnQgZnJvbSBhIGBjcmVhdGVEcmFmdGAgY2FsbCwgcmV0dXJuaW5nIHRoZSBiYXNlIHN0YXRlXG4gKiAoaWYgbm8gY2hhbmdlcyB3ZXJlIG1hZGUpIG9yIGEgbW9kaWZpZWQgY29weS4gVGhlIGRyYWZ0IG11c3QgKm5vdCogYmVcbiAqIG11dGF0ZWQgYWZ0ZXJ3YXJkcy5cbiAqXG4gKiBQYXNzIGEgZnVuY3Rpb24gYXMgdGhlIDJuZCBhcmd1bWVudCB0byBnZW5lcmF0ZSBJbW1lciBwYXRjaGVzIGJhc2VkIG9uIHRoZVxuICogY2hhbmdlcyB0aGF0IHdlcmUgbWFkZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmlzaERyYWZ0ID0gaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcilcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGEgbm8tb3AsIGJ1dCBjYW4gYmUgdXNlZCB0byBjYXN0IGFuIGltbXV0YWJsZSB0eXBlXG4gKiB0byBhbiBkcmFmdCB0eXBlIGFuZCBtYWtlIFR5cGVTY3JpcHQgaGFwcHlcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc3REcmFmdDxUPih2YWx1ZTogVCk6IERyYWZ0PFQ+IHtcblx0cmV0dXJuIHZhbHVlIGFzIGFueVxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgYSBuby1vcCwgYnV0IGNhbiBiZSB1c2VkIHRvIGNhc3QgYSBtdXRhYmxlIHR5cGVcbiAqIHRvIGFuIGltbXV0YWJsZSB0eXBlIGFuZCBtYWtlIFR5cGVTY3JpcHQgaGFwcHlcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FzdEltbXV0YWJsZTxUPih2YWx1ZTogVCk6IEltbXV0YWJsZTxUPiB7XG5cdHJldHVybiB2YWx1ZSBhcyBhbnlcbn1cblxuZXhwb3J0IHtJbW1lcn1cblxuZXhwb3J0IHtlbmFibGVFUzV9IGZyb20gXCIuL3BsdWdpbnMvZXM1XCJcbmV4cG9ydCB7ZW5hYmxlUGF0Y2hlc30gZnJvbSBcIi4vcGx1Z2lucy9wYXRjaGVzXCJcbmV4cG9ydCB7ZW5hYmxlTWFwU2V0fSBmcm9tIFwiLi9wbHVnaW5zL21hcHNldFwiXG5leHBvcnQge2VuYWJsZUFsbFBsdWdpbnN9IGZyb20gXCIuL3BsdWdpbnMvYWxsXCJcbiIsIi8vIFNob3VsZCBiZSBubyBpbXBvcnRzIGhlcmUhXG5cbi8vIFNvbWUgdGhpbmdzIHRoYXQgc2hvdWxkIGJlIGV2YWx1YXRlZCBiZWZvcmUgYWxsIGVsc2UuLi5cblxuLy8gV2Ugb25seSB3YW50IHRvIGtub3cgaWYgbm9uLXBvbHlmaWxsZWQgc3ltYm9scyBhcmUgYXZhaWxhYmxlXG5jb25zdCBoYXNTeW1ib2wgPVxuXHR0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBTeW1ib2woXCJ4XCIpID09PSBcInN5bWJvbFwiXG5leHBvcnQgY29uc3QgaGFzTWFwID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIlxuZXhwb3J0IGNvbnN0IGhhc1NldCA9IHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCJcbmV4cG9ydCBjb25zdCBoYXNQcm94aWVzID1cblx0dHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdHR5cGVvZiBQcm94eS5yZXZvY2FibGUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0dHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCJcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIG1pbmkoKSB7fVxuZXhwb3J0IGNvbnN0IGlzTWluaWZpZWQgPSBtaW5pLm5hbWUgIT09IFwibWluaVwiXG5cbi8qKlxuICogVGhlIHNlbnRpbmVsIHZhbHVlIHJldHVybmVkIGJ5IHByb2R1Y2VycyB0byByZXBsYWNlIHRoZSBkcmFmdCB3aXRoIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IE5PVEhJTkc6IE5vdGhpbmcgPSBoYXNTeW1ib2xcblx0PyBTeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKVxuXHQ6ICh7W1wiaW1tZXItbm90aGluZ1wiXTogdHJ1ZX0gYXMgYW55KVxuXG4vKipcbiAqIFRvIGxldCBJbW1lciB0cmVhdCB5b3VyIGNsYXNzIGluc3RhbmNlcyBhcyBwbGFpbiBpbW11dGFibGUgb2JqZWN0c1xuICogKGFsYmVpdCB3aXRoIGEgY3VzdG9tIHByb3RvdHlwZSksIHlvdSBtdXN0IGRlZmluZSBlaXRoZXIgYW4gaW5zdGFuY2UgcHJvcGVydHlcbiAqIG9yIGEgc3RhdGljIHByb3BlcnR5IG9uIGVhY2ggb2YgeW91ciBjdXN0b20gY2xhc3Nlcy5cbiAqXG4gKiBPdGhlcndpc2UsIHlvdXIgY2xhc3MgaW5zdGFuY2Ugd2lsbCBuZXZlciBiZSBkcmFmdGVkLCB3aGljaCBtZWFucyBpdCB3b24ndCBiZVxuICogc2FmZSB0byBtdXRhdGUgaW4gYSBwcm9kdWNlIGNhbGxiYWNrLlxuICovXG5leHBvcnQgY29uc3QgRFJBRlRBQkxFOiB1bmlxdWUgc3ltYm9sID0gaGFzU3ltYm9sXG5cdD8gU3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKVxuXHQ6IChcIl9fJGltbWVyX2RyYWZ0YWJsZVwiIGFzIGFueSlcblxuZXhwb3J0IGNvbnN0IERSQUZUX1NUQVRFOiB1bmlxdWUgc3ltYm9sID0gaGFzU3ltYm9sXG5cdD8gU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpXG5cdDogKFwiX18kaW1tZXJfc3RhdGVcIiBhcyBhbnkpXG5cbi8vIEV2ZW4gYSBwb2x5ZmlsbGVkIFN5bWJvbCBtaWdodCBwcm92aWRlIFN5bWJvbC5pdGVyYXRvclxuZXhwb3J0IGNvbnN0IGl0ZXJhdG9yU3ltYm9sOiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID1cblx0KHR5cGVvZiBTeW1ib2wgIT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IpIHx8IChcIkBAaXRlcmF0b3JcIiBhcyBhbnkpXG5cbi8qKiBVc2UgYSBjbGFzcyB0eXBlIGZvciBgbm90aGluZ2Agc28gaXRzIHR5cGUgaXMgdW5pcXVlICovXG5leHBvcnQgY2xhc3MgTm90aGluZyB7XG5cdC8vIFRoaXMgbGV0cyB1cyBkbyBgRXhjbHVkZTxULCBOb3RoaW5nPmBcblx0Ly8gQHRzLWlnbm9yZVxuXHRwcml2YXRlIF8hOiB1bmlxdWUgc3ltYm9sXG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBSZWFjdFJlZHV4Q29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSZWFjdFJlZHV4Q29udGV4dC5kaXNwbGF5TmFtZSA9ICdSZWFjdFJlZHV4Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZWR1eENvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIHN0b3JlID0gX3JlZi5zdG9yZSxcbiAgICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICB9O1xuICB9LCBbc3RvcmVdKTtcbiAgdmFyIHByZXZpb3VzU3RhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgfSwgW3N0b3JlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb247XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgdmFyIENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICBzdG9yZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZ2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KSxcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUsIGlzQ29udGV4dENvbnN1bWVyIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnOyAvLyBEZWZpbmUgc29tZSBjb25zdGFudCBhcnJheXMganVzdCB0byBhdm9pZCByZS1jcmVhdGluZyB0aGVzZVxuXG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG5cbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSBmdW5jdGlvbiBzdHJpbmdpZnlDb21wb25lbnQoQ29tcCkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHVwZGF0ZUNvdW50ID0gc3RhdGVbMV07XG4gIHJldHVybiBbYWN0aW9uLnBheWxvYWQsIHVwZGF0ZUNvdW50ICsgMV07XG59XG5cbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVmZmVjdEZ1bmMuYXBwbHkodm9pZCAwLCBlZmZlY3RBcmdzKTtcbiAgfSwgZGVwZW5kZW5jaWVzKTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICAvLyBXZSB3YW50IHRvIGNhcHR1cmUgdGhlIHdyYXBwZXIgcHJvcHMgYW5kIGNoaWxkIHByb3BzIHdlIHVzZWQgZm9yIGxhdGVyIGNvbXBhcmlzb25zXG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTsgLy8gSWYgdGhlIHJlbmRlciB3YXMgZnJvbSBhIHN0b3JlIHVwZGF0ZSwgY2xlYXIgb3V0IHRoYXQgcmVmZXJlbmNlIGFuZCBjYXNjYWRlIHRoZSBzdWJzY3JpYmVyIHVwZGF0ZVxuXG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2gpIHtcbiAgLy8gSWYgd2UncmUgbm90IHN1YnNjcmliZWQgdG8gdGhlIHN0b3JlLCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjsgLy8gQ2FwdHVyZSB2YWx1ZXMgZm9yIGNoZWNraW5nIGlmIGFuZCB3aGVuIHRoaXMgY29tcG9uZW50IHVubW91bnRzXG5cbiAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIHZhciBsYXN0VGhyb3duRXJyb3IgPSBudWxsOyAvLyBXZSdsbCBydW4gdGhpcyBjYWxsYmFjayBldmVyeSB0aW1lIGEgc3RvcmUgc3Vic2NyaXB0aW9uIHVwZGF0ZSBwcm9wYWdhdGVzIHRvIHRoaXMgY29tcG9uZW50XG5cbiAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgIC8vIERvbid0IHJ1biBzdGFsZSBsaXN0ZW5lcnMuXG4gICAgICAvLyBSZWR1eCBkb2Vzbid0IGd1YXJhbnRlZSB1bnN1YnNjcmlwdGlvbnMgaGFwcGVuIHVudGlsIG5leHQgZGlzcGF0Y2guXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHZhciBuZXdDaGlsZFByb3BzLCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBBY3R1YWxseSBydW4gdGhlIHNlbGVjdG9yIHdpdGggdGhlIG1vc3QgcmVjZW50IHN0b3JlIHN0YXRlIGFuZCB3cmFwcGVyIHByb3BzXG4gICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlXG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKGxhdGVzdFN0b3JlU3RhdGUsIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH0gLy8gSWYgdGhlIGNoaWxkIHByb3BzIGhhdmVuJ3QgY2hhbmdlZCwgbm90aGluZyB0byBkbyBoZXJlIC0gY2FzY2FkZSB0aGUgc3Vic2NyaXB0aW9uIHVwZGF0ZVxuXG5cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2F2ZSByZWZlcmVuY2VzIHRvIHRoZSBuZXcgY2hpbGQgcHJvcHMuICBOb3RlIHRoYXQgd2UgdHJhY2sgdGhlIFwiY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGVcIlxuICAgICAgLy8gYXMgYSByZWYgaW5zdGVhZCBvZiBhIHVzZVN0YXRlL3VzZVJlZHVjZXIgYmVjYXVzZSB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSBpZiB0aGF0IHZhbHVlIGhhc1xuICAgICAgLy8gYmVlbiBwcm9jZXNzZWQuICBJZiB0aGlzIHdlbnQgaW50byB1c2VTdGF0ZS91c2VSZWR1Y2VyLCB3ZSBjb3VsZG4ndCBjbGVhciBvdXQgdGhlIHZhbHVlIHdpdGhvdXRcbiAgICAgIC8vIGZvcmNpbmcgYW5vdGhlciByZS1yZW5kZXIsIHdoaWNoIHdlIGRvbid0IHdhbnQuXG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTsgLy8gSWYgdGhlIGNoaWxkIHByb3BzIF9kaWRfIGNoYW5nZSAob3Igd2UgY2F1Z2h0IGFuIGVycm9yKSwgdGhpcyB3cmFwcGVyIGNvbXBvbmVudCBuZWVkcyB0byByZS1yZW5kZXJcblxuICAgICAgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTVE9SRV9VUERBVEVEJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vIEFjdHVhbGx5IHN1YnNjcmliZSB0byB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IgKG9yIHN0b3JlKVxuXG5cbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTsgLy8gUHVsbCBkYXRhIGZyb20gdGhlIHN0b3JlIGFmdGVyIGZpcnN0IHJlbmRlciBpbiBjYXNlIHRoZSBzdG9yZSBoYXNcbiAgLy8gY2hhbmdlZCBzaW5jZSB3ZSBiZWdhbi5cblxuICBjaGVja0ZvclVwZGF0ZXMoKTtcblxuICB2YXIgdW5zdWJzY3JpYmVXcmFwcGVyID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVXcmFwcGVyKCkge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG5cbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgd2UgY2F1Z2h0IGFuIGVycm9yIGR1ZSB0byBhIGJhZCBtYXBTdGF0ZSBmdW5jdGlvbiwgYnV0IHRoZVxuICAgICAgLy8gcGFyZW50IHJlLXJlbmRlcmVkIHdpdGhvdXQgdGhpcyBjb21wb25lbnQgYW5kIHdlJ3JlIGFib3V0IHRvIHVubW91bnQuXG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gYXMgbG9uZyBhcyB3ZSBkbyB0b3AtZG93biBzdWJzY3JpcHRpb25zIGNvcnJlY3RseSwgYnV0XG4gICAgICAvLyBpZiB3ZSBldmVyIGRvIHRob3NlIHdyb25nLCB0aGlzIHRocm93IHdpbGwgc3VyZmFjZSB0aGUgZXJyb3IgaW4gb3VyIHRlc3RzLlxuICAgICAgLy8gSW4gdGhhdCBjYXNlLCB0aHJvdyB0aGUgZXJyb3IgZnJvbSBoZXJlIHNvIGl0IGRvZXNuJ3QgZ2V0IGxvc3QuXG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5cbnZhciBpbml0U3RhdGVVcGRhdGVzID0gZnVuY3Rpb24gaW5pdFN0YXRlVXBkYXRlcygpIHtcbiAgcmV0dXJuIFtudWxsLCAwXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RBZHZhbmNlZChcbi8qXHJcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cclxuICBjb21wdXRlIG5ldyBwcm9wcyBmcm9tIHN0YXRlLCBwcm9wcywgYW5kIGRpc3BhdGNoLiBGb3IgZXhhbXBsZTpcclxuICAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdEFkdmFuY2VkKChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKHN0YXRlLCBwcm9wcykgPT4gKHtcclxuICAgICAgdGhpbmc6IHN0YXRlLnRoaW5nc1twcm9wcy50aGluZ0lkXSxcclxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxyXG4gICAgfSkpKFlvdXJDb21wb25lbnQpXHJcbiAgICBBY2Nlc3MgdG8gZGlzcGF0Y2ggaXMgcHJvdmlkZWQgdG8gdGhlIGZhY3Rvcnkgc28gc2VsZWN0b3JGYWN0b3JpZXMgY2FuIGJpbmQgYWN0aW9uQ3JlYXRvcnNcclxuICBvdXRzaWRlIG9mIHRoZWlyIHNlbGVjdG9yIGFzIGFuIG9wdGltaXphdGlvbi4gT3B0aW9ucyBwYXNzZWQgdG8gY29ubmVjdEFkdmFuY2VkIGFyZSBwYXNzZWQgdG9cclxuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxyXG4gICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcclxuICBwcm9wcy4gRG8gbm90IHVzZSBjb25uZWN0QWR2YW5jZWQgZGlyZWN0bHkgd2l0aG91dCBtZW1vaXppbmcgcmVzdWx0cyBiZXR3ZWVuIGNhbGxzIHRvIHlvdXJcclxuICBzZWxlY3Rvciwgb3RoZXJ3aXNlIHRoZSBDb25uZWN0IGNvbXBvbmVudCB3aWxsIHJlLXJlbmRlciBvbiBldmVyeSBzdGF0ZSBvciBwcm9wcyBjaGFuZ2UuXHJcbiovXG5zZWxlY3RvckZhY3RvcnksIC8vIG9wdGlvbnMgb2JqZWN0OlxuX3JlZikge1xuICBpZiAoX3JlZiA9PT0gdm9pZCAwKSB7XG4gICAgX3JlZiA9IHt9O1xuICB9XG5cbiAgdmFyIF9yZWYyID0gX3JlZixcbiAgICAgIF9yZWYyJGdldERpc3BsYXlOYW1lID0gX3JlZjIuZ2V0RGlzcGxheU5hbWUsXG4gICAgICBnZXREaXNwbGF5TmFtZSA9IF9yZWYyJGdldERpc3BsYXlOYW1lID09PSB2b2lkIDAgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBcIkNvbm5lY3RBZHZhbmNlZChcIiArIG5hbWUgKyBcIilcIjtcbiAgfSA6IF9yZWYyJGdldERpc3BsYXlOYW1lLFxuICAgICAgX3JlZjIkbWV0aG9kTmFtZSA9IF9yZWYyLm1ldGhvZE5hbWUsXG4gICAgICBtZXRob2ROYW1lID0gX3JlZjIkbWV0aG9kTmFtZSA9PT0gdm9pZCAwID8gJ2Nvbm5lY3RBZHZhbmNlZCcgOiBfcmVmMiRtZXRob2ROYW1lLFxuICAgICAgX3JlZjIkcmVuZGVyQ291bnRQcm9wID0gX3JlZjIucmVuZGVyQ291bnRQcm9wLFxuICAgICAgcmVuZGVyQ291bnRQcm9wID0gX3JlZjIkcmVuZGVyQ291bnRQcm9wID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmMiRyZW5kZXJDb3VudFByb3AsXG4gICAgICBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPSBfcmVmMi5zaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRzaG91bGRIYW5kbGVTdGEsXG4gICAgICBfcmVmMiRzdG9yZUtleSA9IF9yZWYyLnN0b3JlS2V5LFxuICAgICAgc3RvcmVLZXkgPSBfcmVmMiRzdG9yZUtleSA9PT0gdm9pZCAwID8gJ3N0b3JlJyA6IF9yZWYyJHN0b3JlS2V5LFxuICAgICAgX3JlZjIkd2l0aFJlZiA9IF9yZWYyLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX3JlZjIkd2l0aFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoUmVmLFxuICAgICAgX3JlZjIkZm9yd2FyZFJlZiA9IF9yZWYyLmZvcndhcmRSZWYsXG4gICAgICBmb3J3YXJkUmVmID0gX3JlZjIkZm9yd2FyZFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRmb3J3YXJkUmVmLFxuICAgICAgX3JlZjIkY29udGV4dCA9IF9yZWYyLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZjIkY29udGV4dCA9PT0gdm9pZCAwID8gUmVhY3RSZWR1eENvbnRleHQgOiBfcmVmMiRjb250ZXh0LFxuICAgICAgY29ubmVjdE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZ2V0RGlzcGxheU5hbWVcIiwgXCJtZXRob2ROYW1lXCIsIFwicmVuZGVyQ291bnRQcm9wXCIsIFwic2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzXCIsIFwic3RvcmVLZXlcIiwgXCJ3aXRoUmVmXCIsIFwiZm9yd2FyZFJlZlwiLCBcImNvbnRleHRcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHJlbmRlckNvdW50UHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJDb3VudFByb3AgaXMgcmVtb3ZlZC4gcmVuZGVyIGNvdW50aW5nIGlzIGJ1aWx0IGludG8gdGhlIGxhdGVzdCBSZWFjdCBEZXYgVG9vbHMgcHJvZmlsaW5nIGV4dGVuc2lvblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aFJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuXG4gICAgaWYgKHN0b3JlS2V5ICE9PSAnc3RvcmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0b3JlS2V5IGhhcyBiZWVuIHJlbW92ZWQgYW5kIGRvZXMgbm90IGRvIGFueXRoaW5nLiAnICsgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gcHJvcHMucmVhY3RSZWR1eEZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc107XG4gICAgICB9LCBbcHJvcHNdKSxcbiAgICAgICAgICBwcm9wc0NvbnRleHQgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpKSA/IHByb3BzQ29udGV4dCA6IENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7IC8vIFJldHJpZXZlIHRoZSBzdG9yZSBhbmQgYW5jZXN0b3Igc3Vic2NyaXB0aW9uIHZpYSBjb250ZXh0LCBpZiBhdmFpbGFibGVcblxuICAgICAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTsgLy8gVGhlIHN0b3JlIF9tdXN0XyBleGlzdCBhcyBlaXRoZXIgYSBwcm9wIG9yIGluIGNvbnRleHQuXG4gICAgICAvLyBXZSdsbCBjaGVjayB0byBzZWUgaWYgaXQgX2xvb2tzXyBsaWtlIGEgUmVkdXggc3RvcmUgZmlyc3QuXG4gICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBwYXNzIHRocm91Z2ggYSBgc3RvcmVgIHByb3AgdGhhdCBpcyBqdXN0IGEgcGxhaW4gdmFsdWUuXG5cbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIFxcXCJzdG9yZVxcXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIgKyAoXCJcXFwiXCIgKyBkaXNwbGF5TmFtZSArIFwiXFxcIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgXCIpICsgXCJvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgXCIgKyAoXCJSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvIFwiICsgZGlzcGxheU5hbWUgKyBcIiBpbiBjb25uZWN0IG9wdGlvbnMuXCIpKTtcbiAgICAgIH0gLy8gQmFzZWQgb24gdGhlIHByZXZpb3VzIGNoZWNrLCBvbmUgb2YgdGhlc2UgbXVzdCBiZSB0cnVlXG5cblxuICAgICAgdmFyIHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICB2YXIgY2hpbGRQcm9wc1NlbGVjdG9yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRoZSBjaGlsZCBwcm9wcyBzZWxlY3RvciBuZWVkcyB0aGUgc3RvcmUgcmVmZXJlbmNlIGFzIGFuIGlucHV0LlxuICAgICAgICAvLyBSZS1jcmVhdGUgdGhpcyBzZWxlY3RvciB3aGVuZXZlciB0aGUgc3RvcmUgY2hhbmdlcy5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNoaWxkU2VsZWN0b3Ioc3RvcmUpO1xuICAgICAgfSwgW3N0b3JlXSk7XG5cbiAgICAgIHZhciBfdXNlTWVtbzIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7IC8vIFRoaXMgU3Vic2NyaXB0aW9uJ3Mgc291cmNlIHNob3VsZCBtYXRjaCB3aGVyZSBzdG9yZSBjYW1lIGZyb206IHByb3BzIHZzLiBjb250ZXh0LiBBIGNvbXBvbmVudFxuICAgICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHN0b3JlIHZpYSBwcm9wcyBzaG91bGRuJ3QgdXNlIHN1YnNjcmlwdGlvbiBmcm9tIGNvbnRleHQsIG9yIHZpY2UgdmVyc2EuXG5cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IG51bGwgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uKTsgLy8gYG5vdGlmeU5lc3RlZFN1YnNgIGlzIGR1cGxpY2F0ZWQgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgc3Vic2NyaXB0aW9uYCB3aWxsIHRoZW4gYmUgbnVsbC4gVGhpcyBjYW5cbiAgICAgICAgLy8gcHJvYmFibHkgYmUgYXZvaWRlZCBpZiBTdWJzY3JpcHRpb24ncyBsaXN0ZW5lcnMgbG9naWMgaXMgY2hhbmdlZCB0byBub3QgY2FsbCBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdGhhdCBoYXZlIGJlZW4gdW5zdWJzY3JpYmVkIGluIHRoZSAgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcC5cblxuICAgICAgICB2YXIgbm90aWZ5TmVzdGVkU3VicyA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pLFxuICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IF91c2VNZW1vMlswXSxcbiAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzID0gX3VzZU1lbW8yWzFdOyAvLyBEZXRlcm1pbmUgd2hhdCB7c3RvcmUsIHN1YnNjcmlwdGlvbn0gdmFsdWUgc2hvdWxkIGJlIHB1dCBpbnRvIG5lc3RlZCBjb250ZXh0LCBpZiBuZWNlc3NhcnksXG4gICAgICAvLyBhbmQgbWVtb2l6ZSB0aGF0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGNvbnRleHQgdXBkYXRlcy5cblxuXG4gICAgICB2YXIgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgaXMgZGlyZWN0bHkgc3Vic2NyaWJlZCB0byBhIHN0b3JlIGZyb20gcHJvcHMuXG4gICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBkZXNjZW5kYW50cyByZWFkaW5nIGZyb20gdGhpcyBzdG9yZSAtIHBhc3MgZG93biB3aGF0ZXZlclxuICAgICAgICAgIC8vIHRoZSBleGlzdGluZyBjb250ZXh0IHZhbHVlIGlzIGZyb20gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yLlxuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBwdXQgdGhpcyBjb21wb25lbnQncyBzdWJzY3JpcHRpb24gaW5zdGFuY2UgaW50byBjb250ZXh0LCBzbyB0aGF0XG4gICAgICAgIC8vIGNvbm5lY3RlZCBkZXNjZW5kYW50cyB3b24ndCB1cGRhdGUgdW50aWwgYWZ0ZXIgdGhpcyBjb21wb25lbnQgaXMgZG9uZVxuXG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0VmFsdWUsIHtcbiAgICAgICAgICBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7IC8vIFdlIG5lZWQgdG8gZm9yY2UgdGhpcyB3cmFwcGVyIGNvbXBvbmVudCB0byByZS1yZW5kZXIgd2hlbmV2ZXIgYSBSZWR1eCBzdG9yZSB1cGRhdGVcbiAgICAgIC8vIGNhdXNlcyBhIGNoYW5nZSB0byB0aGUgY2FsY3VsYXRlZCBjaGlsZCBjb21wb25lbnQgcHJvcHMgKG9yIHdlIGNhdWdodCBhbiBlcnJvciBpbiBtYXBTdGF0ZSlcblxuICAgICAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihzdG9yZVN0YXRlVXBkYXRlc1JlZHVjZXIsIEVNUFRZX0FSUkFZLCBpbml0U3RhdGVVcGRhdGVzKSxcbiAgICAgICAgICBfdXNlUmVkdWNlciQgPSBfdXNlUmVkdWNlclswXSxcbiAgICAgICAgICBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0ID0gX3VzZVJlZHVjZXIkWzBdLFxuICAgICAgICAgIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2ggPSBfdXNlUmVkdWNlclsxXTsgLy8gUHJvcGFnYXRlIGFueSBtYXBTdGF0ZS9tYXBEaXNwYXRjaCBlcnJvcnMgdXB3YXJkc1xuXG5cbiAgICAgIGlmIChwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0ICYmIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdC5lcnJvcjtcbiAgICAgIH0gLy8gU2V0IHVwIHJlZnMgdG8gY29vcmRpbmF0ZSB2YWx1ZXMgYmV0d2VlbiB0aGUgc3Vic2NyaXB0aW9uIGVmZmVjdCBhbmQgdGhlIHJlbmRlciBsb2dpY1xuXG5cbiAgICAgIHZhciBsYXN0Q2hpbGRQcm9wcyA9IHVzZVJlZigpO1xuICAgICAgdmFyIGxhc3RXcmFwcGVyUHJvcHMgPSB1c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIHZhciBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gdXNlUmVmKCk7XG4gICAgICB2YXIgcmVuZGVySXNTY2hlZHVsZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgICAgdmFyIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VQdXJlT25seU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUcmlja3kgbG9naWMgaGVyZTpcbiAgICAgICAgLy8gLSBUaGlzIHJlbmRlciBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSBhIFJlZHV4IHN0b3JlIHVwZGF0ZSB0aGF0IHByb2R1Y2VkIG5ldyBjaGlsZCBwcm9wc1xuICAgICAgICAvLyAtIEhvd2V2ZXIsIHdlIG1heSBoYXZlIGdvdHRlbiBuZXcgd3JhcHBlciBwcm9wcyBhZnRlciB0aGF0XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbmV3IGNoaWxkIHByb3BzLCBhbmQgdGhlIHNhbWUgd3JhcHBlciBwcm9wcywgd2Uga25vdyB3ZSBzaG91bGQgdXNlIHRoZSBuZXcgY2hpbGQgcHJvcHMgYXMtaXMuXG4gICAgICAgIC8vIEJ1dCwgaWYgd2UgaGF2ZSBuZXcgd3JhcHBlciBwcm9wcywgdGhvc2UgbWlnaHQgY2hhbmdlIHRoZSBjaGlsZCBwcm9wcywgc28gd2UgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGluZ3MuXG4gICAgICAgIC8vIFNvLCB3ZSdsbCB1c2UgdGhlIGNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlIG9ubHkgaWYgdGhlIHdyYXBwZXIgcHJvcHMgYXJlIHRoZSBzYW1lIGFzIGxhc3QgdGltZS5cbiAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgIH0gLy8gVE9ETyBXZSdyZSByZWFkaW5nIHRoZSBzdG9yZSBkaXJlY3RseSBpbiByZW5kZXIoKSBoZXJlLiBCYWQgaWRlYT9cbiAgICAgICAgLy8gVGhpcyB3aWxsIGxpa2VseSBjYXVzZSBCYWQgVGhpbmdzIChUTSkgdG8gaGFwcGVuIGluIENvbmN1cnJlbnQgTW9kZS5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGRvIHRoaXMgYmVjYXVzZSBvbiByZW5kZXJzIF9ub3RfIGNhdXNlZCBieSBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRoZSBsYXRlc3Qgc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZS5cblxuXG4gICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgIH0sIFtzdG9yZSwgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCwgd3JhcHBlclByb3BzXSk7IC8vIFdlIG5lZWQgdGhpcyB0byBleGVjdXRlIHN5bmNocm9ub3VzbHkgZXZlcnkgdGltZSB3ZSByZS1yZW5kZXIuIEhvd2V2ZXIsIFJlYWN0IHdhcm5zXG4gICAgICAvLyBhYm91dCB1c2VMYXlvdXRFZmZlY3QgaW4gU1NSLCBzbyB3ZSB0cnkgdG8gZGV0ZWN0IGVudmlyb25tZW50IGFuZCBmYWxsIGJhY2sgdG9cbiAgICAgIC8vIGp1c3QgdXNlRWZmZWN0IGluc3RlYWQgdG8gYXZvaWQgdGhlIHdhcm5pbmcsIHNpbmNlIG5laXRoZXIgd2lsbCBydW4gYW55d2F5LlxuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW2xhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBhY3R1YWxDaGlsZFByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzXSk7IC8vIE91ciByZS1zdWJzY3JpYmUgbG9naWMgb25seSBydW5zIHdoZW4gdGhlIHN0b3JlL3N1YnNjcmlwdGlvbiBzZXR1cCBjaGFuZ2VzXG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhzdWJzY3JpYmVVcGRhdGVzLCBbc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaF0sIFtzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3JdKTsgLy8gTm93IHRoYXQgYWxsIHRoYXQncyBkb25lLCB3ZSBjYW4gZmluYWxseSB0cnkgdG8gYWN0dWFsbHkgcmVuZGVyIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBtZW1vaXplIHRoZSBlbGVtZW50cyBmb3IgdGhlIHJlbmRlcmVkIGNoaWxkIGNvbXBvbmVudCBhcyBhbiBvcHRpbWl6YXRpb24uXG5cbiAgICAgIHZhciByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIGFjdHVhbENoaWxkUHJvcHMsIHtcbiAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfSAvLyBJZiB3ZSdyZSBpbiBcInB1cmVcIiBtb2RlLCBlbnN1cmUgb3VyIHdyYXBwZXIgY29tcG9uZW50IG9ubHkgcmUtcmVuZGVycyB3aGVuIGluY29taW5nIHByb3BzIGhhdmUgY2hhbmdlZC5cblxuXG4gICAgdmFyIENvbm5lY3QgPSBwdXJlID8gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pIDogQ29ubmVjdEZ1bmN0aW9uO1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gaG9pc3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5pbXBvcnQgZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcERpc3BhdGNoVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcFN0YXRlVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tZXJnZVByb3BzJztcbmltcG9ydCBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vc2VsZWN0b3JGYWN0b3J5Jztcbi8qXHJcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcclxuICBzZWxlY3RvckZhY3RvcnksIHdoaWNoIGhhcyB0aGUgc2lnbmF0dXJlOlxyXG5cclxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xyXG4gIFxyXG4gIGNvbm5lY3QgcGFzc2VzIGl0cyBhcmdzIHRvIGNvbm5lY3RBZHZhbmNlZCBhcyBvcHRpb25zLCB3aGljaCB3aWxsIGluIHR1cm4gcGFzcyB0aGVtIHRvXHJcbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXHJcblxyXG4gIHNlbGVjdG9yRmFjdG9yeSByZXR1cm5zIGEgZmluYWwgcHJvcHMgc2VsZWN0b3IgZnJvbSBpdHMgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXHJcbiAgbWVyZ2VQcm9wc0ZhY3RvcmllcywgYW5kIHB1cmUgYXJncy5cclxuXHJcbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXHJcbiAgaXQgcmVjZWl2ZXMgbmV3IHByb3BzIG9yIHN0b3JlIHN0YXRlLlxyXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2goYXJnLCBmYWN0b3JpZXMsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IGZhY3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciByZXN1bHQgPSBmYWN0b3JpZXNbaV0oYXJnKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgb2YgdHlwZSBcIiArIHR5cGVvZiBhcmcgKyBcIiBmb3IgXCIgKyBuYW1lICsgXCIgYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCBcIiArIG9wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWUgKyBcIi5cIik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59IC8vIGNyZWF0ZUNvbm5lY3Qgd2l0aCBkZWZhdWx0IGFyZ3MgYnVpbGRzIHRoZSAnb2ZmaWNpYWwnIGNvbm5lY3QgYmVoYXZpb3IuIENhbGxpbmcgaXQgd2l0aFxuLy8gZGlmZmVyZW50IG9wdGlvbnMgb3BlbnMgdXAgc29tZSB0ZXN0aW5nIGFuZCBleHRlbnNpYmlsaXR5IHNjZW5hcmlvc1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25uZWN0KF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGNvbm5lY3RIT0MgPSBfcmVmLmNvbm5lY3RIT0MsXG4gICAgICBjb25uZWN0SE9DID0gX3JlZiRjb25uZWN0SE9DID09PSB2b2lkIDAgPyBjb25uZWN0QWR2YW5jZWQgOiBfcmVmJGNvbm5lY3RIT0MsXG4gICAgICBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPSBfcmVmLm1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwU3RhdGVUb1Byb3BzRixcbiAgICAgIF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9IF9yZWYubWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBEaXNwYXRjaFRvUHJvID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBEaXNwYXRjaFRvUHJvLFxuICAgICAgX3JlZiRtZXJnZVByb3BzRmFjdG9yID0gX3JlZi5tZXJnZVByb3BzRmFjdG9yaWVzLFxuICAgICAgbWVyZ2VQcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9PT0gdm9pZCAwID8gZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1lcmdlUHJvcHNGYWN0b3IsXG4gICAgICBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYuc2VsZWN0b3JGYWN0b3J5LFxuICAgICAgc2VsZWN0b3JGYWN0b3J5ID0gX3JlZiRzZWxlY3RvckZhY3RvcnkgPT09IHZvaWQgMCA/IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgOiBfcmVmJHNlbGVjdG9yRmFjdG9yeTtcblxuICByZXR1cm4gZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgX3JlZjIpIHtcbiAgICBpZiAoX3JlZjIgPT09IHZvaWQgMCkge1xuICAgICAgX3JlZjIgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjMgPSBfcmVmMixcbiAgICAgICAgX3JlZjMkcHVyZSA9IF9yZWYzLnB1cmUsXG4gICAgICAgIHB1cmUgPSBfcmVmMyRwdXJlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjMkcHVyZSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVzRXF1YWwgPSBfcmVmMy5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9PT0gdm9pZCAwID8gc3RyaWN0RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgX3JlZjMkYXJlT3duUHJvcHNFcXVhID0gX3JlZjMuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU93blByb3BzRXF1YSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlT3duUHJvcHNFcXVhLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPSBfcmVmMy5hcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlU3RhdGVQcm9wc0VxLFxuICAgICAgICBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPSBfcmVmMy5hcmVNZXJnZWRQcm9wc0VxdWFsLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVNZXJnZWRQcm9wc0UsXG4gICAgICAgIGV4dHJhT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBbXCJwdXJlXCIsIFwiYXJlU3RhdGVzRXF1YWxcIiwgXCJhcmVPd25Qcm9wc0VxdWFsXCIsIFwiYXJlU3RhdGVQcm9wc0VxdWFsXCIsIFwiYXJlTWVyZ2VkUHJvcHNFcXVhbFwiXSk7XG5cbiAgICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hdGNoKG1hcFN0YXRlVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXRjaChtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWVyZ2VQcm9wcyA9IG1hdGNoKG1lcmdlUHJvcHMsIG1lcmdlUHJvcHNGYWN0b3JpZXMsICdtZXJnZVByb3BzJyk7XG4gICAgcmV0dXJuIGNvbm5lY3RIT0Moc2VsZWN0b3JGYWN0b3J5LCBfZXh0ZW5kcyh7XG4gICAgICAvLyB1c2VkIGluIGVycm9yIG1lc3NhZ2VzXG4gICAgICBtZXRob2ROYW1lOiAnY29ubmVjdCcsXG4gICAgICAvLyB1c2VkIHRvIGNvbXB1dGUgQ29ubmVjdCdzIGRpc3BsYXlOYW1lIGZyb20gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZGlzcGxheU5hbWUuXG4gICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gXCJDb25uZWN0KFwiICsgbmFtZSArIFwiKVwiO1xuICAgICAgfSxcbiAgICAgIC8vIGlmIG1hcFN0YXRlVG9Qcm9wcyBpcyBmYWxzeSwgdGhlIENvbm5lY3QgY29tcG9uZW50IGRvZXNuJ3Qgc3Vic2NyaWJlIHRvIHN0b3JlIHN0YXRlIGNoYW5nZXNcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpLFxuICAgICAgLy8gcGFzc2VkIHRocm91Z2ggdG8gc2VsZWN0b3JGYWN0b3J5XG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzOiBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wczogaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzOiBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIHB1cmU6IHB1cmUsXG4gICAgICBhcmVTdGF0ZXNFcXVhbDogYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsOiBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsOiBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsOiBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfSwgZXh0cmFPcHRpb25zKSk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdFxuLyojX19QVVJFX18qL1xuY3JlYXRlQ29ubmVjdCgpOyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgIH07XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdChtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnb2JqZWN0JyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcsIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdF07IiwiaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24obWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmcobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZ107IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3duUHJvcHMsIHt9LCBzdGF0ZVByb3BzLCB7fSwgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiLlwiKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCAnZGVwZW5kc09uT3duUHJvcHMnKSkge1xuICAgICAgd2FybmluZyhcIlRoZSBzZWxlY3RvciBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgb2YgXCIgKyBkaXNwbGF5TmFtZSArIFwiIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5cIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJywgZGlzcGxheU5hbWUpO1xufSIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cblxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn0gLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vL1xuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vL1xuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIGhhbmRsZXMgbWFwVG9Qcm9wcyBpZiByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24sIGFuZCB0cmVhdHMgdGhhdFxuLy8gICAgbmV3IGZ1bmN0aW9uIGFzIHRoZSB0cnVlIG1hcFRvUHJvcHMgZm9yIHN1YnNlcXVlbnQgY2FsbHMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCk7XG4gICAgfTsgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcblxuXG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuXG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgdmFyIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVN0b3JlID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0U3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VEaXNwYXRjaCgpIHtcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fGZ1bmN0aW9ufSByZWR1eCBzdG9yZSdzIGBkaXNwYXRjaGAgZnVuY3Rpb25cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gKiAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gKiAgIGNvbnN0IGluY3JlYXNlQ291bnRlciA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlYXNlLWNvdW50ZXInIH0pLCBbXSlcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGRpdj5cclxuICogICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIClcclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VEaXNwYXRjaCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVEaXNwYXRjaEhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgLiBUaGlzIGlzIGEgbG93LWxldmVsXHJcbiAqIGhvb2sgdGhhdCB5b3Ugc2hvdWxkIHVzdWFsbHkgbm90IG5lZWQgdG8gY2FsbCBkaXJlY3RseS5cclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHZhbHVlIG9mIHRoZSBgUmVhY3RSZWR1eENvbnRleHRgXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gKiAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dCgpXHJcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQoKSB7XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KFJlYWN0UmVkdXhDb250ZXh0KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj4nKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0VmFsdWU7XG59IiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlUmVmLCB1c2VNZW1vLCB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5cbnZhciByZWZFcXVhbGl0eSA9IGZ1bmN0aW9uIHJlZkVxdWFsaXR5KGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiB1c2VTZWxlY3RvcldpdGhTdG9yZUFuZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgZXF1YWxpdHlGbiwgc3RvcmUsIGNvbnRleHRTdWIpIHtcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzICsgMTtcbiAgfSwgMCksXG4gICAgICBmb3JjZVJlbmRlciA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBzdWJzY3JpcHRpb24gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSwgY29udGV4dFN1Yik7XG4gIH0sIFtzdG9yZSwgY29udGV4dFN1Yl0pO1xuICB2YXIgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFN0b3JlU3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdGVkU3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICB2YXIgc2VsZWN0ZWRTdGF0ZTtcblxuICB0cnkge1xuICAgIGlmIChzZWxlY3RvciAhPT0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudCB8fCBzdG9yZVN0YXRlICE9PSBsYXRlc3RTdG9yZVN0YXRlLmN1cnJlbnQgfHwgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gc2VsZWN0b3Ioc3RvcmVTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICBlcnIubWVzc2FnZSArPSBcIlxcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XFxuXCIgKyBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2sgKyBcIlxcblxcblwiO1xuICAgIH1cblxuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgICBsYXRlc3RTdG9yZVN0YXRlLmN1cnJlbnQgPSBzdG9yZVN0YXRlO1xuICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IHNlbGVjdGVkU3RhdGU7XG4gICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICB9KTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5ld1NlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50KHN0b3JlLmdldFN0YXRlKCkpO1xuXG4gICAgICAgIGlmIChlcXVhbGl0eUZuKG5ld1NlbGVjdGVkU3RhdGUsIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBuZXdTZWxlY3RlZFN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHdlIGlnbm9yZSBhbGwgZXJyb3JzIGhlcmUsIHNpbmNlIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpcyByZS1yZW5kZXJlZCwgdGhlIHNlbGVjdG9ycyBhcmUgY2FsbGVkIGFnYWluLCBhbmRcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBhZ2FpbiwgaWYgbmVpdGhlciBwcm9wcyBub3Igc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlZFxuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSBlcnI7XG4gICAgICB9XG5cbiAgICAgIGZvcmNlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb25dKTtcbiAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG59XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VsZWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmUsXG4gICAgICAgIGNvbnRleHRTdWIgPSBfdXNlUmVkdXhDb250ZXh0LnN1YnNjcmlwdGlvbjtcblxuICAgIHZhciBzZWxlY3RlZFN0YXRlID0gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgICB1c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlJ3Mgc3RhdGUuIFRoaXMgaG9vayB0YWtlcyBhIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIGFzIGFuIGFyZ3VtZW50LiBUaGUgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIHN0b3JlIHN0YXRlLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgdGFrZXMgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyaXNvbiBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiB0aGF0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSB3YXkgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGNvbXBhcmVkIHRvIGRldGVybWluZVxyXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIHRoZSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyKVxyXG4gKiAgIHJldHVybiA8ZGl2Pntjb3VudGVyfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgdmFyIHVzZVNlbGVjdG9yID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVNlbGVjdG9ySG9vaygpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0Jztcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmU7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBFeGFtcGxlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgdmFyIHVzZVN0b3JlID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN0b3JlSG9vaygpOyIsImltcG9ydCBQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vayB9IGZyb20gJy4vaG9va3MvdXNlRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vayB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi91dGlscy9zaGFsbG93RXF1YWwnO1xuc2V0QmF0Y2goYmF0Y2gpO1xuZXhwb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgUmVhY3RSZWR1eENvbnRleHQsIGNvbm5lY3QsIGJhdGNoLCB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rLCB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rLCB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rLCBzaGFsbG93RXF1YWwgfTsiLCJpbXBvcnQgeyBnZXRCYXRjaCB9IGZyb20gJy4vYmF0Y2gnOyAvLyBlbmNhcHN1bGF0ZXMgdGhlIHN1YnNjcmlwdGlvbiBsb2dpYyBmb3IgY29ubmVjdGluZyBhIGNvbXBvbmVudCB0byB0aGUgcmVkdXggc3RvcmUsIGFzXG4vLyB3ZWxsIGFzIG5lc3Rpbmcgc3Vic2NyaXB0aW9ucyBvZiBkZXNjZW5kYW50IGNvbXBvbmVudHMsIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGVcbi8vIGFuY2VzdG9yIGNvbXBvbmVudHMgcmUtcmVuZGVyIGJlZm9yZSBkZXNjZW5kYW50c1xuXG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICB2YXIgYmF0Y2ggPSBnZXRCYXRjaCgpO1xuICB2YXIgZmlyc3QgPSBudWxsO1xuICB2YXIgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIGJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBTdWJzY3JpcHRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnBhcmVudFN1YiA9IHBhcmVudFN1YjtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyID0gdGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaXB0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkTmVzdGVkU3ViID0gZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5TmVzdGVkU3VicyA9IGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMubm90aWZ5KCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmICh0aGlzLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5zdWJzY3JpYmUpO1xuICB9O1xuXG4gIF9wcm90by50cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5wYXJlbnRTdWIgPyB0aGlzLnBhcmVudFN1Yi5hZGROZXN0ZWRTdWIodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHRoaXMuc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJ5VW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpO1xuXG5leHBvcnQgeyBTdWJzY3JpcHRpb24gYXMgZGVmYXVsdCB9OyIsIi8vIERlZmF1bHQgdG8gYSBkdW1teSBcImJhdGNoXCIgaW1wbGVtZW50YXRpb24gdGhhdCBqdXN0IHJ1bnMgdGhlIGNhbGxiYWNrXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7IC8vIEFsbG93IGluamVjdGluZyBhbm90aGVyIGJhdGNoaW5nIGZ1bmN0aW9uIGxhdGVyXG5cbmV4cG9ydCB2YXIgc2V0QmF0Y2ggPSBmdW5jdGlvbiBzZXRCYXRjaChuZXdCYXRjaCkge1xuICByZXR1cm4gYmF0Y2ggPSBuZXdCYXRjaDtcbn07IC8vIFN1cHBseSBhIGdldHRlciBqdXN0IHRvIHNraXAgZGVhbGluZyB3aXRoIEVTTSBiaW5kaW5nc1xuXG5leHBvcnQgdmFyIGdldEJhdGNoID0gZnVuY3Rpb24gZ2V0QmF0Y2goKSB7XG4gIHJldHVybiBiYXRjaDtcbn07IiwiLyoqXHJcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICB2YXIgYmFzZVByb3RvID0gcHJvdG87XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cblxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICdyZWFjdC1kb20nOyIsImZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCB0byBlbnN1cmUgdGhlIHN0b3JlXG4vLyBzdWJzY3JpcHRpb24gY2FsbGJhY2sgYWx3YXlzIGhhcyB0aGUgc2VsZWN0b3IgZnJvbSB0aGUgbGF0ZXN0IHJlbmRlciBjb21taXRcbi8vIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBoYXBwZW4gYmV0d2VlbiByZW5kZXIgYW5kIHRoZSBlZmZlY3QsXG4vLyB3aGljaCBtYXkgY2F1c2UgbWlzc2VkIHVwZGF0ZXM7IHdlIGFsc28gbXVzdCBlbnN1cmUgdGhlIHN0b3JlIHN1YnNjcmlwdGlvblxuLy8gaXMgY3JlYXRlZCBzeW5jaHJvbm91c2x5LCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IG9jY3VyIGJlZm9yZSB0aGVcbi8vIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkIGFuZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgbWF5IGJlIG9ic2VydmVkXG5cbmV4cG9ydCB2YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7IiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vd2FybmluZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcobWV0aG9kTmFtZSArIFwiKCkgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkIFwiICsgdmFsdWUgKyBcIi5cIik7XG4gIH1cbn0iLCIvKipcclxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG5cbn0iLCJmdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydCBkZWZhdWx0IHRodW5rOyIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH07XG4iLCJmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChlcXVhbGl0eUNoZWNrLCBwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cbiAgdmFyIGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jKSB7XG4gIHZhciBlcXVhbGl0eUNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0RXF1YWxpdHlDaGVjaztcblxuICB2YXIgbGFzdEFyZ3MgPSBudWxsO1xuICB2YXIgbGFzdFJlc3VsdCA9IG51bGw7XG4gIC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgbGFzdEFyZ3MsIGFyZ3VtZW50cykpIHtcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICBsYXN0UmVzdWx0ID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGNyZWF0b3JzIGV4cGVjdCBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgJyArICgnaW5zdGVhZCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbJyArIGRlcGVuZGVuY3lUeXBlcyArICddJykpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZnVuY3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG5cbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh1bmRlZmluZWQsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZWNvbXB1dGF0aW9ucysrO1xuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG4gICAgdmFyIHNlbGVjdG9yID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgYW5kIG11dGF0ZSBhIGxvY2FsIGxpc3Qgb2YgcGFyYW1zIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgICAgcGFyYW1zLnB1c2goZGVwZW5kZW5jaWVzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgcmV0dXJuIG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0b3IucmVzdWx0RnVuYyA9IHJlc3VsdEZ1bmM7XG4gICAgc2VsZWN0b3IuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICAgIHNlbGVjdG9yLnJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zO1xuICAgIH07XG4gICAgc2VsZWN0b3IucmVzZXRSZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycykge1xuICB2YXIgc2VsZWN0b3JDcmVhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBjcmVhdGVTZWxlY3RvcjtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKCd3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSAnICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgcmV0dXJuIHNlbGVjdG9yQ3JlYXRvcihvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHZhbHVlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xufSIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV29ya3NwYWNlU2xpY2UudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDkvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NwYWNlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnV29ya3NwYWNlJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBOZXc6IHN0YXRlID0+IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBEZWxldGU6IHN0YXRlID0+IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBOZXcsIERlbGV0ZSB9ID0gV29ya3NwYWNlU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgV29ya3NwYWNlU2xpY2UucmVkdWNlcjsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU3RvcmUudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDkvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBXb3Jrc3BhY2VSZWR1Y2VyIGZyb20gJy4uL0ZlYXR1cmUvV29ya3NwYWNlL1dvcmtzcGFjZVNsaWNlJztcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIFdvcmtzcGFjZTogV29ya3NwYWNlUmVkdWNlcixcclxuICAgIH1cclxufSk7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRyZW5EQVAudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzA4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS9TdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcblxyXG5jb25zdCBUcmVuREFQOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH19PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci10b2dnbGVhYmxlLXNtIG5hdmJhci1saWdodCBiZy13aGl0ZSBib3JkZXItYm90dG9tIGJveC1zaGFkb3cgbWItM1wiIHN0eWxlPXt7IGhlaWdodDogNzUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1tZC0yIG1yLTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGhyZWY9XCJodHRwczovL3d3dy5ncmlkcHJvdGVjdGlvbmFsbGlhbmNlLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3R5bGU9e3sgd2lkdGg6IDE5MCwgbWFyZ2luOiAwIH19IHNyYz17YCR7aG9tZVBhdGh9SW1hZ2UvdHJlbmRhcGxvZ28ucG5nYH0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgZC1zbS1pbmxpbmUtZmxleCBmbGV4LXNtLXJvdy1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgdG9wOiA3NSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDc1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2luaGVyaXQnLCBwYWRkaW5nOiAnMCAwIDAgMCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+PFRyZW5EQVAvPjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93JykpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==
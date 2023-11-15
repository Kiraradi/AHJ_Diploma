/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/services/DOMElementHelper.js
function createDOMElement(tagName, classNameArray, textContent) {
  const DOMElement = document.createElement(tagName);
  if (classNameArray && classNameArray.length > 0) {
    classNameArray.forEach(className => {
      DOMElement.classList.add(className);
    });
  }
  if (textContent) {
    DOMElement.textContent = textContent;
  }
  return DOMElement;
}
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js


var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

//# sourceMappingURL=BehaviorSubject.js.map
;// CONCATENATED MODULE: ./src/models/Message.js
class Message {
  constructor(message) {
    this.number = message.number;
    this.text = message.text;
    this.date = message.creationTime;
    this.geolocation = message.geolocation;
    this.type = message.type;
    this.fileInfo = message.fileInfo;
    this.isFixed = message.isFixed;
  }
}
;// CONCATENATED MODULE: ./src/constants.js
const SERVERURL = "http://localhost:7000";
const WEBSOCKETURL = "ws://localhost:7000/ws";
;// CONCATENATED MODULE: ./src/services/requestService.js

class RequestService {
  static sendMessage(message) {
    fetch(`${SERVERURL}/message/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(message)
    });
  }
  static uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    fetch(`${SERVERURL}/file/upload`, {
      method: 'POST',
      body: formData
    });
  }
  static async downloadFile(address, name) {
    let request = await fetch(`${SERVERURL}/file/download?path=${address}&fileName=${name}`, {
      method: 'GET'
    });
    return await request.blob();
  }
  static async getMessages(lastMessageNumber) {
    let request = await fetch(`${SERVERURL}/messages?lastMessageNumber=${lastMessageNumber}`, {
      method: 'GET'
    });
    return request.json();
  }
  static async fixedMessage(messageNumber) {
    let request = await fetch(`${SERVERURL}/fixedMessage?messageNumber=${messageNumber}`, {
      method: 'GET'
    });
    return request.json();
  }
}
;// CONCATENATED MODULE: ./src/services/messageService.js




class MessageService {
  constructor() {
    this.messagesSubject = new BehaviorSubject({});
    this.messageNumberSubject = new BehaviorSubject(0);
    this.fixedMessadeSubject = new Subject(false);
    this.createWebSocket();
  }
  sendMessage(text) {
    let geolocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
    RequestService.sendMessage({
      text: text,
      geolocation: geolocation,
      type: type
    });
  }
  createWebSocket() {
    this.ws = new WebSocket(WEBSOCKETURL);
    this.ws.addEventListener('message', e => {
      const obj = JSON.parse(e.data);
      const messages = obj.response.map(item => new Message(item));
      this.messagesSubject.next({
        status: obj.status,
        messages: messages
      });
    });
  }
  async getMessadesArray(lastMessageNumber) {
    const respons = await RequestService.getMessages(lastMessageNumber);
    const messagesArray = respons.messages.map(item => new Message(item));
    return messagesArray;
  }
  async downloadFile(address, name) {
    const respons = await RequestService.downloadFile(address, name);
    return respons;
  }
}
;// CONCATENATED MODULE: ./src/modules/Chat/TopBar/TopBar.js


class TopBar {
  constructor(container, messageService) {
    this.container = container;
    this.messageService = messageService;
    this.drawUi();
  }
  drawUi() {
    const topBarElementWrapper = createDOMElement("div", ["topBar_Wrapper"]);
    const topBarTitle = createDOMElement("h2", ["topBar_Title"], "Useful Chat");
    topBarElementWrapper.appendChild(topBarTitle);
    //topBarElementWrapper.appendChild(this.createButtomListEl());

    const fixedMessageWrapperEl = createDOMElement("div", ["fixed-message-wrapper"]);
    const fixedMessageTitleEl = createDOMElement("h2", ["fixed-message-title"], "Закрепленное сообщение :");
    fixedMessageWrapperEl.appendChild(fixedMessageTitleEl);
    this.fixedMessageContentEl = createDOMElement("div", ["fixed-message-content"]);
    fixedMessageWrapperEl.appendChild(this.fixedMessageContentEl);
    //this.fixedMessageContentEl.appendChild(createDOMElement('div', ['test']));
    topBarElementWrapper.appendChild(fixedMessageWrapperEl);
    this.container.appendChild(topBarElementWrapper);
    this.messageService.fixedMessadeSubject.subscribe(message => {
      if (message) {
        console.log(message);
        this.createFixedMessage(message);
      }
    });
  }
  createButtomListEl() {
    const buttomList = createDOMElement("ul", ["button_list"]);
    const settingMenuToggleButton = createDOMElement("li", ["fa", "fa-window-maximize", "button-style"]);
    buttomList.appendChild(settingMenuToggleButton);
    return buttomList;
  }
  createFixedMessage(message) {
    console.log(Array.from(this.fixedMessageContentEl.childNodes));
    if (Array.from(this.fixedMessageContentEl.childNodes).length !== 0) {
      this.removeFixedElement(Array.from(this.fixedMessageContentEl.childNodes));
    }
    let fixedMessageText;
    if (message.type === "text") {
      fixedMessageText = createDOMElement("div", ["fixed-message-text"], message.text);
      this.fixedMessageContentEl.appendChild(fixedMessageText);
    } else if (message.type === "geolocation") {
      fixedMessageText = createDOMElement("div", ["fixed-message-geolocation"], `geolocation: ${message.geolocation[0]} - ${message.geolocation[1]}`);
      this.fixedMessageContentEl.appendChild(fixedMessageText);
    } else if (message.type === "file") {
      console.log(message);
      const linkEl = createDOMElement("div", ["fileLink"], message.fileInfo.name);
      linkEl.addEventListener("click", e => {
        e.preventDefault();
        this.messageService.downloadFile(message.fileInfo.address, message.fileInfo.name).then(res => {
          const newBlob = new Blob([res]);
          const url = window.URL.createObjectURL(newBlob);
          const link = createDOMElement("a");
          link.href = url;
          link.rel = "noopener";
          link.download = message.fileInfo.name;
          link.click();
        });
      });
      this.fixedMessageContentEl.appendChild(linkEl);
    }
    const fixedMessageDate = createDOMElement("div", ["fixed-message-date"], message.date);
    this.fixedMessageContentEl.appendChild(fixedMessageDate);
  }
  removeFixedElement(elementsArray) {
    elementsArray.forEach(element => {
      element.remove();
    });
  }
}
;// CONCATENATED MODULE: ./src/services/textHelper.js
function fromTextToHtml(text) {
  const regex =
  //eslint-disable-next-line no-useless-escape
  /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/g;
  const linksMatchAll = text.matchAll(regex);
  const linksMatchAllArray = Array.from(linksMatchAll);
  for (let i = linksMatchAllArray.length - 1; i >= 0; i--) {
    const match = linksMatchAllArray[i];
    let link = `<a href="${match[0]}" target="_blank">${text.slice(match.index, match.index + match[0].length)}</a>`;
    text = (match.index > 0 ? text.slice(0, match.index) : "") + link + (match.index + match[0].length < text.length ? text.slice(match.index + match[0].length) : "");
  }
  return text;
}
;// CONCATENATED MODULE: ./node_modules/ymaps/dist/ymaps.esm.js
var ymaps$1 = {
  load: function load() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '//api-maps.yandex.ru/2.1/?lang=en_RU';

    var getNsParamValue = function getNsParamValue() {
      var results = src.match(/[\\?&]ns=([^&#]*)/);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    if (!this.promise) {
      this.promise = new Promise(function (resolve, reject) {
        var scriptElement = document.createElement('script');
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        scriptElement.type = 'text/javascript';
        scriptElement.src = src;
        document.body.appendChild(scriptElement);
      }).then(function () {
        var ns = getNsParamValue();

        if (ns && ns !== 'ymaps') {
          (0, eval)("var ymaps = ".concat(ns, ";"));
        }

        return new Promise(function (resolve) {
          return ymaps.ready(resolve);
        });
      });
    }

    return this.promise;
  }
};

/* harmony default export */ const ymaps_esm = (ymaps$1);

;// CONCATENATED MODULE: ./src/services/mapService.js

//eslint-disable-next-line
async function getPosition(container, position) {
  const mapLibrary = await ymaps_esm.load();
  let map = new mapLibrary.Map(container, {
    center: position,
    zoom: 18
  });
  let placemark = new mapLibrary.Placemark(position, {}, {});
  map.geoObjects.add(placemark);
}
;// CONCATENATED MODULE: ./src/modules/Chat/contentMenu/ContentMenu.js




class ContentMenu {
  constructor(container, position, messageEl, messageService) {
    this.container = container;
    this.position = position;
    this.messageEl = messageEl;
    this.messageService = messageService;
    this.isElementRemoved = new Subject(false);
    this.drawUi();
  }
  drawUi() {
    this.contentMenuWrapperEl = createDOMElement("div", ["content-menu-wrapper"]);
    const contentMenuList = createDOMElement("ul", ["content-menu-list"]);
    contentMenuList.appendChild(this.createFavoriteMessageEl());
    //contentMenuList.appendChild(this.createRemoveMessageEl());

    this.contentMenuWrapperEl.appendChild(contentMenuList);
    this.contentMenuWrapperEl.style.left = this.position.x + "px";
    this.contentMenuWrapperEl.style.top = this.position.y + "px";
    this.container.appendChild(this.contentMenuWrapperEl);
    setTimeout(() => {
      this.contentMenuWrapperEl.classList.add("content-menu-wrapper-opend");
    }, 10);
  }
  createContentMenuButton(buttonText) {
    const contentMenuButtonEl = createDOMElement("li", ["content-menu-button"], buttonText);
    return contentMenuButtonEl;
  }
  createFavoriteMessageEl() {
    const favoriteMessageEl = this.createContentMenuButton("Добавить в избранное");
    favoriteMessageEl.addEventListener("click", e => {
      e.preventDefault();
      RequestService.fixedMessage(this.messageEl.dataset.number);
      this.removeContentMenuEl();
    });
    return favoriteMessageEl;
  }
  createRemoveMessageEl() {
    const removeMessageEl = this.createContentMenuButton("Удалить сообщение");
    removeMessageEl.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked by remove message button ");
    });
    return removeMessageEl;
  }
  removeContentMenuEl() {
    this.contentMenuWrapperEl.classList.remove("content-menu-wrapper-opend");
    setTimeout(() => {
      this.contentMenuWrapperEl.remove();
      this.isElementRemoved.next(true);
    }, 900);
  }
}
;// CONCATENATED MODULE: ./src/modules/Chat/ChatWindow/ChatWindow.js







class ChatWindow {
  constructor(container, messageService) {
    this.container = container;
    this.messageService = messageService;
    this.drawUi();
    this.addDragAndDropEventListeners();
    this.contextMenuOpenedStatus = false;
  }
  drawUi() {
    this.messageService.messagesSubject.subscribe(response => {
      if (response.status === "connectionWs") {
        this.cleanChatWindow();
        response.messages.forEach(message => {
          this.container.appendChild(this.getMessageElement(message));
        });
        setTimeout(() => {
          if (this.messageService.messagesSubject.value.messages && this.messageService.messagesSubject.value.messages.length > 0) {
            if (this.messageService.messageNumberSubject.value == 0) {
              this.container.scroll({
                top: this.container.scrollHeight,
                behavior: "instant"
              });
            }
            this.messageService.messageNumberSubject.next(response.messages[0].number);
            this.addScrollEventListener();
          }
        }, 10);
      }
    });
    this.messageService.messagesSubject.subscribe(response => {
      if (response.status === "sendMessage") {
        this.container.appendChild(this.getMessageElement(response.messages[0]));
      }
    });
    this.messageService.messagesSubject.subscribe(response => {
      if (response.status === "toFixMessage") {
        console.log("toFixMessage");
        this.messageService.fixedMessadeSubject.next(response.messages[0]);
      }
    });
    this.container.addEventListener("contextmenu", e => {
      e.preventDefault();
      const messageEl = e.target.closest(".message-wrapper");
      if (messageEl && !this.contextMenuOpenedStatus) {
        const position = {
          x: e.clientX,
          y: e.clientY
        };
        this.contextMenu = new ContentMenu(this.container, position, messageEl, this.messageService);
        this.contextMenuOpenedStatus = true;
        this.contextMenu.isElementRemoved.subscribe(isElementRemove => {
          if (isElementRemove) {
            this.closeContextMenu();
          }
        });
      }
    });
    this.container.addEventListener("click", e => {
      e.preventDefault();
      if (this.contextMenuOpenedStatus && !e.target.closest(".content-menu-wrapper")) {
        console.log("remove ContextMenu");
        this.contextMenu.removeContentMenuEl();
      }
    });
  }
  closeContextMenu() {
    this.contextMenu = undefined;
    this.contextMenuOpenedStatus = false;
  }
  getMessageElement(message) {
    const messageWrapperEl = createDOMElement("div", ["message-wrapper"]);
    if (message.type === "text") {
      const messageTextEl = createDOMElement("div", ["message-text"]);
      messageTextEl.innerHTML = fromTextToHtml(message.text);
      messageWrapperEl.appendChild(messageTextEl);
    }
    if (message.type === "geolocation") {
      const messageGeolocationEl = createDOMElement("div", ["message-geolocation"]);
      messageWrapperEl.appendChild(messageGeolocationEl);
      getPosition(messageGeolocationEl, message.geolocation).then(() => {});
    }
    if (message.type === "file") {
      const fileType = message.fileInfo.type.split("/")[0];
      if (fileType === "image") {
        const messageImageEl = this.createImageEl(message.fileInfo);
        messageWrapperEl.appendChild(messageImageEl);
      } else {
        messageWrapperEl.appendChild(this.createLinkEl(message.fileInfo));
      }
    }
    const messageDateEl = createDOMElement("div", ["message-date"], message.date);
    messageWrapperEl.appendChild(messageDateEl);
    messageWrapperEl.setAttribute("data-number", message.number);
    return messageWrapperEl;
  }
  createImageEl(fileInfo) {
    const imageEl = createDOMElement("img", ["img"]);
    imageEl.src = SERVERURL + "/" + fileInfo.address + "/" + fileInfo.name;
    return imageEl;
  }
  createLinkEl(fileInfo) {
    const linkWrapperEl = createDOMElement("div", ["fileLinkWrapper"]);
    linkWrapperEl.appendChild(createDOMElement("i", ["fileLinkIcon", "fa", "fa-file-o", "fa-2x"]));
    const linkEl = createDOMElement("div", ["fileLink"], fileInfo.name);
    linkWrapperEl.appendChild(linkEl);
    linkWrapperEl.addEventListener("click", e => {
      e.preventDefault();
      this.messageService.downloadFile(fileInfo.address, fileInfo.name).then(res => {
        const newBlob = new Blob([res]);
        const url = window.URL.createObjectURL(newBlob);
        const link = createDOMElement("a");
        link.href = url;
        link.rel = "noopener";
        link.download = fileInfo.name;
        link.click();
      });
    });
    return linkWrapperEl;
  }
  cleanChatWindow() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.lastChild);
    }
  }
  addScrollEventListener() {
    this.container.addEventListener("scroll", e => {
      if (!e.target.scrollTop && this.messageService.messageNumberSubject.value) {
        this.messageService.getMessadesArray(this.messageService.messageNumberSubject.value).then(res => {
          const arrayMessages = res;
          let lastElement = this.getMessageElement(arrayMessages[arrayMessages.length - 1]);
          this.container.prepend(lastElement);
          for (let i = arrayMessages.length - 2; i >= 0; i--) {
            this.container.prepend(this.getMessageElement(arrayMessages[i]));
          }
          this.messageService.messageNumberSubject.next(arrayMessages[0].number);
          this.scrollInToElememt(lastElement);
        });
      }
    });
  }
  scrollInToElememt(element) {
    element.scrollIntoView();
  }
  addDragAndDropEventListeners() {
    let element = createDOMElement("div", ["dragenter"]);
    const elementImg = createDOMElement("i", ["fa", "fa-file-o", "fa-4x"]);
    element.appendChild(elementImg);
    document.body.addEventListener("dragenter", e => {
      e.preventDefault();
      if (!document.body.querySelector(".dragenter")) {
        document.body.appendChild(element);
      }
    });
    element.addEventListener("dragover", e => {
      e.preventDefault();
    });
    element.addEventListener("dragleave", e => {
      e.preventDefault();
      const elementInDom = document.body.querySelector(".dragenter");
      if (elementInDom) {
        elementInDom.remove();
      }
    });
    element.addEventListener("drop", e => {
      e.preventDefault();
      const elementInDom = document.body.querySelector(".dragenter");
      if (elementInDom) {
        elementInDom.remove();
      }
      const files = Array.from(e.dataTransfer.files);
      RequestService.uploadFile(files[0]);
    });
  }
}
;// CONCATENATED MODULE: ./src/modules/Chat/BottomBar/BottomBar.js



class BottomBar {
  constructor(container, messageService) {
    this.container = container;
    this.drawUi();
    this.messageService = messageService;
  }
  drawUi() {
    const bottomBarWrapperElement = createDOMElement('div', ['bottomBar_wrapper']);
    const bottomBarFormEl = createDOMElement('form', ['bottomBar_form']);
    bottomBarFormEl.appendChild(this.getFileContainerEl());
    bottomBarFormEl.appendChild(this.getMyPositionButtonEl());
    const inputField = createDOMElement('input', ['input_field']);
    bottomBarFormEl.appendChild(inputField);
    const sendMessadeButtom = createDOMElement('buttom', ['send_messade_buttom', 'fa', 'fa-paper-plane-o', 'fa-2x']);
    bottomBarFormEl.appendChild(sendMessadeButtom);
    this.clickSendMessadeButtom(sendMessadeButtom, inputField);
    this.submitForm(bottomBarFormEl, inputField);
    bottomBarWrapperElement.appendChild(bottomBarFormEl);
    this.container.appendChild(bottomBarWrapperElement);
  }
  getFileContainerEl() {
    const fileContainer = createDOMElement('div', ['file_container']);
    const inputFileEl = createDOMElement('input', ['input-file']);
    inputFileEl.setAttribute('type', 'file');
    fileContainer.appendChild(inputFileEl);
    const inputFileButtonEl = createDOMElement('span', ['input_file_button', 'fa', 'fa-paperclip', 'fa-2x']);
    fileContainer.appendChild(inputFileButtonEl);
    this.openInputFileCallback(fileContainer, inputFileEl);
    return fileContainer;
  }
  getMyPositionButtonEl() {
    const myPositionButtonEl = createDOMElement('span', ['my_position_button', 'fa', 'fa-map-marker', 'fa-2x']);
    myPositionButtonEl.addEventListener('click', event => {
      event.preventDefault();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(data => {
          const {
            latitude,
            longitude
          } = data.coords;
          const position = [latitude, longitude];
          this.messageService.sendMessage(null, position, 'geolocation');
        }, err => {
          console.log(err);
        });
      }
    });
    return myPositionButtonEl;
  }
  openInputFileCallback(containerEl, input) {
    containerEl.addEventListener('click', () => {
      input.dispatchEvent(new MouseEvent('click'));
    });
    input.addEventListener('change', async () => {
      const file = input.files && input.files[0];
      if (!file) return;
      RequestService.uploadFile(file);
    });
  }
  submitForm(form, input) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (input.value.trim()) {
        this.messageService.sendMessage(input.value);
      }
      input.value = '';
    });
  }
  clickSendMessadeButtom(buttom, input) {
    buttom.addEventListener('click', e => {
      e.preventDefault;
      this.messageService.sendMessage(input.value);
      input.value = '';
    });
  }
}
;// CONCATENATED MODULE: ./src/modules/Chat/Chat.js






class Chat {
  constructor(container) {
    this.container = container;
    this.messageService = new MessageService();
  }
  drawUi() {
    const topBarElement = createDOMElement("div", ["topBar"]);
    this.container.appendChild(topBarElement);
    const chatWindowElement = createDOMElement("div", ["chat-window"]);
    this.container.appendChild(chatWindowElement);
    const bottomBarElement = createDOMElement("div", ["bottom-bar"]);
    this.container.appendChild(bottomBarElement);
    const topBar = new TopBar(topBarElement, this.messageService);
    this.chatWindow = new ChatWindow(chatWindowElement, this.messageService);
    const bottomBar = new BottomBar(bottomBarElement, this.messageService);
  }
}
;// CONCATENATED MODULE: ./src/app.js

const chatWrapperElement = document.querySelector(".chat_wrapper");
const chat = new Chat(chatWrapperElement);
chat.drawUi();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;
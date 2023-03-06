"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_rootReducer["default"], {}, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"]), (0, _reduxDevtoolsExtension.composeWithDevTools)()));
var _default = store;
exports["default"] = _default;
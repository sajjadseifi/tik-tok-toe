"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalReducer = exports.initialGlobalState = void 0;

var _default = require("../../config/default.cofig");

var _app = require("../../constants/app");

var _utils = require("../../utils");

var actionTypes = _interopRequireWildcard(require("../actions/action-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialGlobalState = {
  messages: _default.appMessages,
  gameCofnig: _default.gameConfigs,
  app: _default.app,
  icon: _default.icon,
  lang: _default.app.language.persian,
  page: "start"
};
exports.initialGlobalState = initialGlobalState;

var globalReducer = function globalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.GLOBAL_CHANGE_PAGE:
      return changePage(state, action);

    case actionTypes.GLOBAL_CHANGE_LANGUAGE:
      return changeLanguage(state, action);
  }

  return state;
};

exports.globalReducer = globalReducer;

var changePage = function changePage(state, action) {
  var page = action.page;

  var exist = _app.screenKeys.some(function (pk) {
    return "".concat(page) == "".concat(pk);
  });

  if (exist) return (0, _utils.updateObject)(state, {
    page: page
  });
  return state;
};

var changeLanguage = function changeLanguage(state, action) {
  var lang = action.lang;
  if (!_default.languages[lang]) return state;
  return (0, _utils.updateObject)(state, {
    messages: _default.languages[lang],
    lang: lang
  });
};
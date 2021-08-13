"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _default = require("../../config/default.cofig");

var _globalHook = require("../../hook/global-hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Languages = function Languages() {
  var langs = (0, _globalHook.useGlobalSeletor)(function (state) {
    return state.app.language;
  });
};

var styles = _reactNative.StyleSheet.create({});
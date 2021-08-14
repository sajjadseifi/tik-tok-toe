"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmConfig = void 0;

var _constants = require("../../constants");

var confirmConfig = function confirmConfig(conf) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {};
  var messages = conf.messages,
      icon = conf.icon;
  return {
    cancel: {
      type: "outline",
      iconName: icon.cancel,
      title: messages.cancel,
      titleColor: _constants.color.purple,
      backgroundColor: _constants.color.white,
      onPress: function onPress() {
        return handler(false);
      }
    },
    ok: {
      iconName: icon.ok,
      title: messages.ok,
      titleColor: _constants.color.white,
      backgroundColor: _constants.color.purple,
      onPress: function onPress() {
        return handler(true);
      }
    }
  };
};

exports.confirmConfig = confirmConfig;
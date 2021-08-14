"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endRoundConfig = void 0;

var _constants = require("../../../constants");

var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));

var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var endRoundConfig = function endRoundConfig(_ref) {
  var config = _ref.config,
      onClose = _ref.onClose,
      cbsFunc = _ref.cbsFunc;
  var messages = config.messages;
  var baseModal = messages.baseModal,
      confirmed = messages.confirmed;
  var next = cbsFunc.next,
      reRun = cbsFunc.reRun,
      exit = cbsFunc.exit,
      newPlay = cbsFunc.newPlay,
      playof = cbsFunc.playof;
  var icon = config.icon.endRound.baseModal;
  return {
    next: {
      Icon: _AntDesign["default"],
      iconName: icon.next,
      title: baseModal.next,
      titleColor: _constants.color.white,
      backgroundColor: _constants.color.purple,
      onPress: function onPress() {
        return onClose("nextTurn", confirmed.nextTurn, next);
      }
    },
    reRun: {
      type: "outline",
      Icon: _Entypo["default"],
      iconName: icon.reRun,
      title: baseModal.reRun,
      titleColor: _constants.color.purple,
      backgroundColor: _constants.color.white,
      onPress: function onPress() {
        return onClose("reRunTurn", confirmed.reTurn, reRun);
      }
    },
    newPlay: {
      Icon: _AntDesign["default"],
      iconName: icon.newPlay,
      title: baseModal.newPlay,
      titleColor: _constants.color.white,
      backgroundColor: _constants.color.purple,
      onPress: function onPress() {
        return onClose("play", confirmed.newPlay, newPlay);
      }
    },
    playof: {
      type: "outline",
      Icon: _AntDesign["default"],
      iconName: icon.playof,
      title: baseModal.playof,
      titleColor: _constants.color.purple,
      backgroundColor: _constants.color.white,
      onPress: function onPress() {
        return onClose("playofTurn", confirmed.playofTurn, playof);
      }
    },
    exit: {
      Icon: _AntDesign["default"],
      iconName: icon.exit,
      title: baseModal.exit,
      titleColor: _constants.color.purple,
      backgroundColor: _constants.color.white,
      onPress: function onPress() {
        return onClose("closed", confirmed.closed, exit);
      }
    }
  };
};

exports.endRoundConfig = endRoundConfig;
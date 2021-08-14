"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.soundsLoader = exports.audios = void 0;
var audios = {
  MIXKIT: "mixkit",
  NICE: "nice",
  NOTIFICATION: "notification"
};
exports.audios = audios;

var soundsLoader = function soundsLoader() {
  return {
    mixkit: require('../../assets/sounds/mixkit.wav'),
    nice: require('../../assets/sounds/nice.mp3'),
    notification: require('../../assets/sounds/notification.wav')
  };
};

exports.soundsLoader = soundsLoader;
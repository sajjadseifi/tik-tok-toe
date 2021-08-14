"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trasnformScale = exports.sinAnimateLooping = exports.animateLooping = exports.sinAnimate = exports.animateTiming = void 0;

var _reactNative = require("react-native");

var one = new _reactNative.Animated.Value(1);

var animateTiming = function animateTiming(to, value, duration) {
  var next = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  return _reactNative.Animated.timing(to, {
    toValue: value,
    duration: duration,
    useNativeDriver: true
  }).start(next);
};

exports.animateTiming = animateTiming;

var sinAnimate = function sinAnimate(to) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return animateTiming(to, end, duration, function () {
    return animateTiming(to, start, duration);
  });
};

exports.sinAnimate = sinAnimate;

var animateLooping = function animateLooping(to, value, duration) {
  var next = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

  _reactNative.Animated.loop(_reactNative.Animated.timing(to, {
    toValue: value,
    duration: duration
  })).start(next);
};

exports.animateLooping = animateLooping;

var sinAnimateLooping = function sinAnimateLooping(to) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  animateLooping(to, end, duration, function () {
    animateLooping(to, start, duration);
  });
};

exports.sinAnimateLooping = sinAnimateLooping;

var trasnformScale = function trasnformScale() {
  var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : one;
  var horizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : one;
  return {
    transform: [{
      scaleX: horizontal
    }, {
      scaleY: vertical
    }]
  };
};

exports.trasnformScale = trasnformScale;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageLoader = imageLoader;
exports.infinity = exports.logo = void 0;
var logo = null;
exports.logo = logo;
var infinity = null;
exports.infinity = infinity;

function imageLoader() {
  exports.logo = logo = require("../../assets/images/logo.jpg");
  exports.infinity = infinity = require("../../assets/gif/infinity.gif");
  return [logo, infinity];
}
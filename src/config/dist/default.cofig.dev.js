"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.icon = exports.appMessages = exports.defaultGameCfig = exports.gameConfigs = void 0;

var _models = require("../models");

var _shape = require("../components/shape");

var _language = require("../constants/language");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = require("./app.config.json");

exports.app = app;

var icon = require("./icon.config.json");

exports.icon = icon;

var gameConfigs = require("./game.config.json");

exports.gameConfigs = gameConfigs;
var player1 = gameConfigs.player1,
    player2 = gameConfigs.player2;

var defaultGameCfig = _objectSpread({}, gameConfigs, {
  player1: new _models.Player(1, player1.name, player1.score, player1.color, _shape.CircleShape),
  player2: new _models.Player(2, player2.name, player2.score, player2.color, _shape.TimesShape)
});

exports.defaultGameCfig = defaultGameCfig;

var appMessages = _objectSpread({}, _language.languages.fa);

exports.appMessages = appMessages;
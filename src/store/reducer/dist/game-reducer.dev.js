"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameReducer = exports.initialGameState = void 0;

var actionTypes = _interopRequireWildcard(require("../actions/action-types"));

var _utils = require("../../utils");

var _functionality = require("./functionality");

var _tiktoktoeRecuder = require("./tiktoktoe-recuder");

var _default = require("../../config/default.cofig");

var _ticktoktoe = require("../../models/ticktoktoe");

var _models = require("../../models");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialGameState = Object.assign(_default.defaultGameCfig, {});
exports.initialGameState = initialGameState;

var gameReducer = function gameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialGameState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.INITIAL_GAME_STATE:
      return init(state, action);

    case actionTypes.NEXT_GAME_ROUND:
      return next(state, action);

    case actionTypes.CURRENT_GAME_PLAYER:
      return (0, _functionality.setCurrentPlayer)(state, action.turn);

    case actionTypes.GAME_PLAYER_NEXT_TURN:
      return nextTrun(state, action);

    case actionTypes.GAME_PLAY_END_ROUNDS:
      return (0, _utils.updateObject)(state, {
        endRound: true
      });

    case actionTypes.RE_GAME_ROUND:
      return reRoundGame(state, action);

    case actionTypes.GAME_PLAY_PLATOF:
      return startPlayofGame(state, action);

    case actionTypes.GAME_PLAY_NEW_PLAY:
      return startNewPlay(state, action);
  }

  return (0, _tiktoktoeRecuder.tiktoktoeReducer)(state, action);
};

exports.gameReducer = gameReducer;

var init = function init(state, action) {
  var player1 = action.player1,
      player2 = action.player2,
      maxRounds = action.maxRounds;
  var round = action.round ? action.round : state.round;
  var gift = {
    player1: _models.Player.restScorePlayer(player1),
    player2: _models.Player.restScorePlayer(player2),
    turn: (0, _functionality.getTurn)(round),
    maxRounds: maxRounds
  };
  var updatedState = (0, _utils.ifExistenceComing)(state, gift);
  return (0, _functionality.setCurrentPlayer)(updatedState, updatedState.turn);
};

var next = function next(state, _) {
  var player1 = state.player1,
      player2 = state.player2;
  var newRound = state.round + 1;
  var newTurn = (0, _functionality.getTurn)(newRound);
  var updatedState = (0, _functionality.updateScore)(state);
  updatedState = (0, _functionality.clearBoard)(updatedState);

  if (newRound > updatedState.maxRounds) {
    updatedState = player1.socre == player2.socre ? (0, _functionality.startPlayof)(updatedState) : (0, _functionality.gameOver)(updatedState);
  } else if (updatedState.playof) updatedState = (0, _functionality.nextRoundWithKey)(updatedState, "playofRounds");else updatedState = (0, _functionality.nextRoundWithKey)(updatedState, "round");

  var updateCurerent = (0, _functionality.setCurrentPlayer)(updatedState, newTurn);
  return (0, _utils.updateObject)(updateCurerent, {
    round: newRound
  });
};

var reRoundGame = function reRoundGame(state, _) {
  var newTurn = (state.round - 1) % 2;
  var updatedBoard = (0, _functionality.clearBoard)(state);
  if (newTurn == state.turn) return updatedBoard;
  return (0, _functionality.setCurrentPlayer)(updatedBoard, newTurn);
};

var startPlayofGame = function startPlayofGame(state) {
  var round = state.round,
      playofRounds = state.playofRounds;
  var newTurn = (0, _functionality.getTurn)(round, playofRounds);
  var updatedState = (0, _functionality.clearBoard)(state);
  return (0, _utils.updateObject)((0, _functionality.setCurrentPlayer)(updatedState, newTurn), {
    playof: true,
    playofRounds: state.playofRounds + 1,
    turn: newTurn
  });
};

var startNewPlay = function startNewPlay(state, action) {
  var player1 = action.player1,
      player2 = action.player2;
  var reInitedSatte = init(initialGameState, {
    player1: player1 || state.player1,
    player2: player2 || state.player2
  });
  return (0, _utils.updateObject)(reInitedSatte, {
    board: new _ticktoktoe.TikTokToe()
  });
};
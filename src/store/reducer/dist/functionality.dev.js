"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateScore = exports.getTurn = exports.nextRoundWithKey = exports.startPlayof = exports.gameOver = exports.checkWinner = exports.clearBoard = exports.setCurrentPlayer = void 0;

var _models = require("../../models");

var _utils = require("../../utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setCurrentPlayer = function setCurrentPlayer(state, turn) {
  return (0, _utils.updateObject)(state, {
    turn: turn,
    currentPlayer: turn == 0 ? state.player1 : state.player2
  });
};

exports.setCurrentPlayer = setCurrentPlayer;

var clearBoard = function clearBoard(state) {
  var board = state.board;
  board.clear();
  return (0, _utils.updateObject)(state, {
    board: board,
    endRound: false
  });
};

exports.clearBoard = clearBoard;

var getWinner = function getWinner(player1, player2) {
  if (player1.score == player2.score) return null;
  return player1.score > player2.score ? player1 : player2;
};

var checkWinner = function checkWinner(state) {
  var round = state.round,
      maxRounds = state.maxRounds;
  var endPlay = round >= maxRounds;
  if (!endPlay) return (0, _utils.updateObject)(state, {
    endPlay: endPlay
  });
  var updatedState = updateScore(state);
  var player1 = updatedState.player1,
      player2 = updatedState.player2;
  var winner = getWinner(player1, player2);
  console.log("Player1", player1, "PLayer2", player2);
  return (0, _utils.updateObject)(updatedState, {
    winner: winner,
    endPlay: endPlay
  });
};

exports.checkWinner = checkWinner;

var gameOver = function gameOver(state) {
  return (0, _utils.updateObject)(state, {
    gameOver: true
  });
};

exports.gameOver = gameOver;

var startPlayof = function startPlayof(state) {
  return (0, _utils.updateObject)(state, {
    playof: true,
    playofRounds: 1
  });
};

exports.startPlayof = startPlayof;

var nextRoundWithKey = function nextRoundWithKey(state, key) {
  return (0, _utils.updateObject)(state, _defineProperty({}, key, state[key] + 1));
};

exports.nextRoundWithKey = nextRoundWithKey;

var getTurn = function getTurn(round) {
  var playof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (round + playof - 1) % 2;
};

exports.getTurn = getTurn;

var updateScore = function updateScore(state) {
  var player1 = state.player1,
      player2 = state.player2,
      turn = state.turn,
      board = state.board;
  if (!board.isWin) return state;
  var player = turn == 0 ? player1 : player2;
  player.addScore();
  var upState = turn == 0 ? {
    player1: player
  } : {
    player2: player
  };
  return (0, _utils.updateObject)(state, upState);
};

exports.updateScore = updateScore;
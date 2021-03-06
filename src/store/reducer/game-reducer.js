import * as actionTypes  from "../actions/action-types";
import {ifExistenceComing, updateObject} from "../../utils"
import { clearBoard, gameOver, getTurn, nextRoundWithKey, setCurrentPlayer, startPlayof, updateScore } from "./functionality";
import { tiktoktoeReducer } from "./tiktoktoe-recuder";
import { defaultGameCfig } from "../../config/default.cofig";
import { TikTokToe } from "../../models/ticktoktoe";
import { Player } from "../../models";

export const initialGameState= Object.assign(defaultGameCfig,{});

export const gameReducer =(state=initialGameState,action)=>{
   switch(action.type){
      case actionTypes.INITIAL_GAME_STATE:return init(state,action);
      case actionTypes.NEXT_GAME_ROUND: return next(state,action);
      case actionTypes.CURRENT_GAME_PLAYER:return setCurrentPlayer(state,action.turn);
      case actionTypes.GAME_PLAYER_NEXT_TURN:return nextTrun(state,action);
      case actionTypes.GAME_PLAY_END_ROUNDS:return updateObject(state,{endRound:true});
      case actionTypes.RE_GAME_ROUND:return reRoundGame(state,action);
      case actionTypes.GAME_PLAY_PLATOF:return startPlayofGame(state,action);
      case actionTypes.GAME_PLAY_NEW_PLAY:return startNewPlay(state,action);
      case actionTypes.GAME_PLAY_CHANGE_DEGREE: return changeDegree(state,action);   
   }

    return tiktoktoeReducer(state,action)     
}

const init=(state,action)=>{
   const {player1,player2,maxRounds,playState}=action;
   const round = action.round ? action.round : state.round ;

   const gift = {
      maxRounds,
      playState,
      roboot:false,
      turn:getTurn(round),
      player1:Player.restScorePlayer(player1),
      player2:Player.restScorePlayer(player2),
   };
   let updatedState = ifExistenceComing(state,gift)

   return  setCurrentPlayer(updatedState, updatedState.turn)
}

const next=(state,_)=>{
   const {player1,player2} =state;
   const newRound = (state.round+1);
   const newTurn = getTurn(newRound);
   
   let updatedState =  updateScore(state)
   updatedState = clearBoard(updatedState)

   if(newRound > updatedState.maxRounds){      
      updatedState = player1.socre == player2.socre
         ?  startPlayof(updatedState) 
         :  gameOver(updatedState)
   }
   else if(updatedState.playof)
      updatedState = nextRoundWithKey(updatedState,"playofRounds")
   else 
      updatedState = nextRoundWithKey(updatedState,"round")
         
   const updateCurerent =  setCurrentPlayer(updatedState,newTurn)   
   return updateObject(updateCurerent,{
       round:newRound
   })
}

const reRoundGame=(state,_)=>{

   const newTurn = (state.round - 1) % 2;
   const updatedBoard = clearBoard(state)
   if(newTurn == state.turn) 
      return updatedBoard;

   return setCurrentPlayer(updatedBoard,newTurn)   
};

const startPlayofGame = (state) =>{
   const {round,playofRounds} = state;
   const newTurn =   getTurn(round,playofRounds);
   let updatedState = clearBoard(state)
   
   return updateObject(
      setCurrentPlayer(updatedState,newTurn),{
      playof:true,
      playofRounds:state.playofRounds+1,
      turn:newTurn
   });    
}

const startNewPlay = (state,action)=>{

   const {player1,player2} = action;
   
   const reInitedSatte  =init(initialGameState,{
      player1:player1 || state.player1,
      player2:player2 || state.player2 
   });

   return updateObject(reInitedSatte,{
      board : new TikTokToe()
   });
}

const changeDegree=(state,action)=>{
   
   return updateObject(state,{
      degree:action.degree
   })
}

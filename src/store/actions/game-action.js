import { actionTypes } from ".";
import { reducerAction } from "./action-types";

export const initialGame=({player1,player2,maxRounds,turn})=>{
   return reducerAction(actionTypes.INITIAL_GAME_STATE,{
      player1,
      player2,
      maxRounds,
      turn
   })
}

export const setPlayer=(turn,player)=>{
   return reducerAction(actionTypes.SET_GAME_PLAYER,{
      turn,
      player
   })
}

export const setCurrentPlayer =(turn)=>reducerAction(actionTypes.CURRENT_GAME_PLAYER,{turn})

export const nextRound=()=>reducerAction(actionTypes.NEXT_GAME_ROUND,{})

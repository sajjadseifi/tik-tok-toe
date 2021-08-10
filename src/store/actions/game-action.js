import * as actionTypes  from "./action-types";
const { reducerAction } = actionTypes ;

export const initialGame=({player1,player2,maxRounds,turn})=>{
   return reducerAction(actionTypes.INITIAL_GAME_STATE,{
      player1,
      player2,
      maxRounds,
      turn
   })
}

export const endRound= ()=>reducerAction(actionTypes.GAME_PLAY_END_ROUNDS)

export const setPlayer=(turn,player)=>{
   return reducerAction(actionTypes.SET_GAME_PLAYER,{
      turn,
      player
   })
}

export const setCurrentPlayer =(turn)=>reducerAction(actionTypes.CURRENT_GAME_PLAYER,{
   turn
})

export const nextRound=()=> reducerAction(actionTypes.NEXT_GAME_ROUND)

export const reRound=()=> reducerAction(actionTypes.RE_GAME_ROUND)

export const nextTurn=(board)=> reducerAction(actionTypes.GAME_PLAYER_NEXT_TURN,{
   board
})
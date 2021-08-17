import * as actionTypes  from "./action-types";
const { reducerAction } = actionTypes ;

export const initialGame=({player1,player2,maxRounds,turn,playState})=>{
   return reducerAction(actionTypes.INITIAL_GAME_STATE,{
      player1,
      player2,
      maxRounds,
      turn,
      playState
   })
}

export const endRound= ()=>reducerAction(actionTypes.GAME_PLAY_END_ROUNDS)

export const setPlayer=(turn,player)=> reducerAction(
   actionTypes.SET_GAME_PLAYER,
   {
      turn,
      player
   }
)


export const setCurrentPlayer =(turn)=>reducerAction(actionTypes.CURRENT_GAME_PLAYER,{
   turn
})

export const nextRound=()=> reducerAction(actionTypes.NEXT_GAME_ROUND)

export const reRound=()=> reducerAction(actionTypes.RE_GAME_ROUND)

export const nextTurn=(board)=> reducerAction(actionTypes.GAME_PLAYER_NEXT_TURN,{
   board
})

export const newPlay =()=> reducerAction(actionTypes.GAME_PLAY_NEW_PLAY)

export const playof =()=> reducerAction(actionTypes.GAME_PLAY_PLATOF)

export const chahngeDgree=(degree)=>reducerAction(
   actionTypes.GAME_PLAY_CHANGE_DEGREE,
   {
      degree
   }
);
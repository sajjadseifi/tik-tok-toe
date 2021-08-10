import { updateObject } from "../../utils"

export const setCurrentPlayer=(state,turn)=>{
   return updateObject(state,{
      turn:turn,
      currentPlayer :( turn == 0 )
      ? state.player1
      : state.player2 
   })
}

export const clearBoard=(state)=>{
   const {board} = state;
   board.clear();   
   return updateObject(state,{ board ,endRound:false }) 
}
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
export const checkWinner = (state)=>{
   const {round,player1,player2 ,maxRounds}=state;
   let winner=null;
   let endPlaye=false;
   if(round >= maxRounds) 
      if(player1.round != player2.round){
         winner = player1.round > player2.round ? player1 : player2; 
         endPlaye = true;
      }
   
   return updateObject(state,{
      winner,
      endPlaye
   })
};
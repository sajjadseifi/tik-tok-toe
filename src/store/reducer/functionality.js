import { statesGamePlay } from "../../constants/app";
import { updateObject } from "../../utils"

export const setCurrentPlayer=(state,turn)=>{
   const roboot = 
      turn ==  1 //player 2
   &&  
      state.playState == statesGamePlay.single;
   const currentPlayer= ( turn == 0 )  ? state.player1 : state.player2;
   return updateObject(state,{
      turn:turn,
      currentPlayer,
      roboot
   })
}

export const clearBoard=(state)=>{
   const {board} = state;
   board.clear();   
   return updateObject(state,{ board ,endRound:false }) 
}

const getWinner = (player1,player2)=>{
   if(player1.score == player2.score) 
      return null;

   return player1.score > player2.score ? player1 : player2; 
}
export const checkWinner = (state)=>{
   const {round,maxRounds}=state;
   let endPlay =round >= maxRounds;
   
   if(!endPlay) return updateObject(state,{endPlay})

   let updatedState =  updateScore(state)
   
   const {player1,player2} = updatedState;
   const winner  = getWinner(player1,player2);

   return updateObject(updatedState,{
      winner,
      endPlay
   })
};

export const gameOver=(state)=>updateObject(state,{gameOver:true});

export const startPlayof=(state)=> updateObject(state,{playof:true,playofRounds:1})

export const nextRoundWithKey=(state,key) => updateObject(state,{ [key]:state[key] + 1});


export const getTurn =(round,playof=0)=> (round + playof -1) % 2;

export const updateScore =(state)=> {
   const {player1,player2,turn,board} = state;

   if(!board.isWin) return state;

   const player = (turn == 0) ? player1 : player2;
   
   player.addScore();
   let  upState =(turn == 0)
   ?  { player1 : player }
   :   { player2 : player };
  
   return updateObject(state,upState)
}
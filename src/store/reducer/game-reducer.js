import {updateObject} from "../../utils"
import { actionTypes } from "../actions";

export const initialGameState={
   player1:null,//new Player(null,0,color.white),//new Player()
   player2:null,//new Player(null,0,color.white),//new Player()
   currentPlayer:null,//player (1 or 2)
   turn:0,//player 1
   maxRounds:10,
   round:1,
   playof:false,
   playofRounds:0,
   gameOver:false,
   children:null,
};

export const gameReducer =(state=initialGameState,action)=>{
      switch(action.type){
            case actionTypes.INITIAL_GAME_STATE:return init(state,action);
            case actionTypes.NEXT_GAME_ROUND: return next(state,action);
            case actionTypes.CURRENT_GAME_PLAYER:return currentPlayer(state,action);
      }
      return state;
}

const init=(state,action)=>{
   
   const gift = {
      player1:action.player1,
      player2:action.player2,
      turn:action.turn,
      maxRounds:action.maxRounds,
   };

   const updatedState = ifExistenceComing(state,gift)
   
   updatedState.currentPlayer =  updatedState.turn == 0 ?
            updatedState.player1:updatedState.player2;

   return newState;
}

const next=(state,_action)=>{
   const {player1,player2,turn} =state;
   const newTurn = (turn+1) %2;
   const currentPlayer = newTurn == 0 ?player1:player2; 
   let update={};
   
   if(state.round == state.maxRounds){      
      if(player1.round == player2.round) 
         update = updateObject(state,{playof:true,playofRounds:1})
      else  
         update = updateObject(state,{gameOver:true})
   }
   else if(checker.playof)
         update = nextRoundWithKey(state,"playofRounds")
   else 
         update = nextRoundWithKey(state,"round")
      
   return currentPlayer(update,{turn:newTurn})
}

const nextRoundWithKey=(state,key) => updateObject(state,{ [key]:state[key] + 1})

const currentPlayer=(state,action)=>{
   return updateObject(state,{
      turn:action.turn,
      currentPlayer : action.turn == 0 
      ? state.player1
      : state.player2 
   })
}

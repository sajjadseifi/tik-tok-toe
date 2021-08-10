import * as actionTypes  from "../actions/action-types";
import {updateObject} from "../../utils"
import { clearBoard, setCurrentPlayer } from "./functionality";
import { tiktoktoeReducer } from "./tiktoktoe-recuder";

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
   endRound:false,
   board:null,
};

export const gameReducer =(state=initialGameState,action)=>{
   
   switch(action.type){
            case actionTypes.INITIAL_GAME_STATE:return init(state,action);
            case actionTypes.NEXT_GAME_ROUND: return next(state,action);
            case actionTypes.CURRENT_GAME_PLAYER:return setCurrentPlayer(state,action.turn);
            case actionTypes.GAME_PLAYER_NEXT_TURN:return nextTrun(state,action);
            case actionTypes.GAME_PLAY_END_ROUNDS:return updateObject(state,{endRound:true});
            case actionTypes.RE_GAME_ROUND:return reRoundGame(state,action);
   }

    return tiktoktoeReducer(state,action)     
}

const init=(state,action)=>{
   const gift = {
      player1:action.player1,
      player2:action.player2,
      turn:action.turn,
      maxRounds:action.maxRounds,
   };
   
   let updatedState = ifExistenceComing(state,gift)
   return  setCurrentPlayer(updatedState, updatedState.turn)
}
const gameOver=(state)=>updateObject(state,{gameOver:true});
const startPlayof=(state)=> updateObject(state,{playof:true,playofRounds:1})
const updateScore =(state,turn)=> {
   const {player1,player2,board} = state;
   console.log("board.isWin",board.isWin)
   if(!board.isWin) return state;

   const player = (turn == 0) ? player1 : player2;
   
   player.addScore();
   let  upState =(turn == 0)
   ?  { player1 : player }
   :   { player2 : player };

   
   return updateObject(state,upState)
}

const next=(state,_)=>{
   const {player1,player2} =state;
   const newRound = (state.round+1);
   const newTurn = (newRound-1) % 2;
      
   let updatedState =  updateScore(state,state.turn)
   
   console.log(updatedState.player1,updatedState.player2);

   updatedState = clearBoard(updatedState)

   if(updatedState.round == updatedState.maxRounds){      
      updatedState = player1.round == player2.round
         ?  startPlayof(updatedState) 
         :  gameOver(updatedState)
   }
   else if(updatedState.playof)
      updatedState = nextRoundWithKey(updatedState,"playofRounds")
   else 
      updatedState = nextRoundWithKey(updatedState,"round")
         
   const updateCurerent =  setCurrentPlayer(updatedState,newTurn)   
   return updateObject(updateCurerent,{ round:newRound})
}

const reRoundGame=(state,_)=>{

   const newTurn = (state.round - 1) % 2;
   const updatedBoard = clearBoard(state)
   if(newTurn == state.turn) 
      return updatedBoard;

   return setCurrentPlayer(updatedBoard,newTurn)   
};

const nextRoundWithKey=(state,key) => updateObject(state,{ [key]:state[key] + 1});
import * as actionTypes  from "../actions/action-types";
import { TikTokToe } from "../../models/ticktoktoe";
import { updateObject } from "../../utils";
import { setCurrentPlayer } from "./functionality";

export const initialTikTokToeState ={
   board:null,
};
export const tiktoktoeReducer =(state,action)=>{
   switch(action.type){
         case actionTypes.TIKTOKTOE_INITIAL: return init(state,action);
         case actionTypes.TIKTOKTOE_CLEAR:return clear(state,action);
         case actionTypes.TIKTOKTOE_CLEAR_BOARD:return clearBoard(state,action);
         case actionTypes.TIKTOKTOE_DUMP_BOARD:return dumpBoard(state,action);
         case actionTypes.TIKTOKTOE_SIT_PLAYER:return sitPlayer(state,action);
   }
   return state;
}

export const init = (state,_)=>{
   const board = new TikTokToe();
   return updateObject(state,{ board });
}
const clear=()=>initialTikTokToeState;
export  const dumpBoard=()=>{
   const board = state.board;
   board.clear();
   return updateObject(state,{ board })   
}
export  const clearBoard=()=>{
   const board = state.board;
   board.clear();
   return updateObject(state,{ board })   
}

export  const sitPlayer=(state,action)=>{
   const board = state.board;
   const {player,place}=action;
   
   board.setInPlace(player,place.row,place.col);
   
   return nextTrun(state,{ board })
};

const nextTrun=(state,action)=>{   
   const {board } = action;
   let updatedState=updateObject(state,{ board })

   if(board.endOfGame())
      return updateObject(updatedState,{endRound:true})
   
   const newTurn = (state.turn +1) % 2;
   return  setCurrentPlayer(state, newTurn);
};
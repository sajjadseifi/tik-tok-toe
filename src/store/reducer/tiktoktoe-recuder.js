import { TikTokToe } from "../../models/ticktoktoe";
import { updateObject } from "../../utils";
import { actionTypes } from "../actions";

export const initialTikTokToeState ={
   board:null,
};
export const tiktoktoeReducer =(state=initialTikTokToeState,action)=>{
   switch(action.type){
         case actionTypes.TIKTOKTOE_INITIAL: return init(state,action);
         case actionTypes.TIKTOKTOE_CLEAR:return clear(state,action);
         case actionTypes.TIKTOKTOE_CLEAR_BOARD:return clearBoard(state,action);
         case actionTypes.TIKTOKTOE_DUMP_BOARD:return dumpBoard(state,action);
         case actionTypes.TIKTOKTOE_SIT_PLAYER:return sitPlayer(state,action);
         // case actionTypes.TIKTOKTOE_WIN:return currentPlayer(state,action);
   }
   return state;
}

const init = (state,_)=>{
   const board = new TikTokToe();
   //board.init();
   return updateObject(state,{ board });
}
const clear=()=>initialTikTokToeState;
const dumpBoard=()=>{
   const board = state.board;
   board.clear();
   return updateObject(state,{ board })   
}
const clearBoard=()=>{
   const board = state.board;
   board.clear();
   return updateObject(state,{ board })   
}

const sitPlayer=(state,action)=>{
   const board = state.board;
   const {player,place}=action;
   board.setInPlace(player,place.row,place.col);

   return updateObject(state,{ board })
};


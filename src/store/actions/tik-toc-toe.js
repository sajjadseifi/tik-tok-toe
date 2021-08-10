import * as actionTypes  from "./action-types";
const { reducerAction } = actionTypes ;

export const initial=()=>reducerAction(actionTypes.TIKTOKTOE_INITIAL)

export const clear=()=>reducerAction(actionTypes.TIKTOKTOE_CLEAR);

export const clearBoard=()=>reducerAction(actionTypes.TIKTOKTOE_CLEAR_BOARD);

export const dumpBoard=()=>reducerAction(actionTypes.TIKTOKTOE_DUMP_BOARD);

export const sitDownToPlace=(player,place)=>reducerAction(actionTypes.TIKTOKTOE_SIT_PLAYER,{
   player,
   place,
})

export const nextPlayer = () => reducerAction(actionTypes.TIKTOKTOE_NEXT_PLAYER)
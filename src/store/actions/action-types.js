//Game Action
export const SET_GAME_PLAYER="[SET_GAME_PLAYER]";
export  const NEXT_GAME_ROUND="[NEXT_GAME_ROUND]";
export  const MAX_GAME_ROUDS="[MAX_GAME_ROUDS]";
export  const CURRENT_GAME_PLAYER="[CURRENT_GAME_PLAYER]";
export const INITIAL_GAME_STATE= "[INITIAL_GAME_STATE]";

//Tik Tok Toe
export const TIKTOKTOE_INITIAL= "[TIKTOKTOE_INITIAL]";
export const TIKTOKTOE_SIT_PLAYER= "[TIKTOKTOE_SIT_PLAYER]";
export const TIKTOKTOE_CLEAR = "[TIKTOKTOE_CLEAR]";
export const TIKTOKTOE_CLEAR_BOARD = "[TIKTOKTOE_CLEAR_BOARD]";
export const TIKTOKTOE_DUMP_BOARD = "[TIKTOKTOE_DUMP_BOARD]";
export const TIKTOKTOE_WIN= "[TIKTOKTOE_WIN]";
export const reducerAction = (type, payload) => ({ type, ...payload })
import { appMessages,gameConfigs,icon,app } from "../../config/default.cofig";
import { screenKeys } from "../../constants/app";
import { languages } from "../../constants/language";
import { updateObject } from "../../utils";
import * as actionTypes  from "../actions/action-types";

export const initialGlobalState={
   messages:appMessages,
   gameCofnig:gameConfigs,
   app,
   icon,
   lang:"fa",
   page:"start",
}

export const globalReducer=(state=initialState,action)=>{
   switch(action.type){
      case actionTypes.GLOBAL_CHANGE_PAGE:return changePage(state,action);
      case actionTypes.GLOBAL_CHANGE_LANGUAGE:return changeLanguage(state,action);
   }
   return state;
};

const changePage=(state,action)=>{
   const {page,payload} = action;
   const exist = screenKeys.some((pk)=>`${page}` == `${pk}`)

   if(!exist) return state;

   return updateObject(state,{page, payload })
}

const changeLanguage=(state,action)=>{
   const {lang} =action;
   if(!languages[lang]) return state;

   return updateObject(state,{
      messages:languages[lang],
      lang
   })
}

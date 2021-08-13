import { appMessages,gameConfigs,icon,app, languages } from "../../config/default.cofig";
import { screenKeys } from "../../constants/app";
import { updateObject } from "../../utils";
import * as actionTypes  from "../actions/action-types";

export const initialGlobalState={
   messages:appMessages,
   gameCofnig:gameConfigs,
   app,
   icon,
   lang:app.language.persian,
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
   const {page} = action;
   const exist = screenKeys.some((pk)=>`${page}` == `${pk}`)

   if(exist) return updateObject(state,{page})

   return state;
}

const changeLanguage=(state,action)=>{
   const {lang} =action;
   if(!languages[lang]) return state;

   return updateObject(state,{
      messages:languages[lang],
      lang
   })
}

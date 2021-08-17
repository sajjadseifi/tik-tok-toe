import * as actionTypes  from "./action-types";
const  { reducerAction }=actionTypes;

export const changePage=(page,payload={})=>reducerAction(
   actionTypes.GLOBAL_CHANGE_PAGE,
   {
      page,
      payload
   }
);

export const  changeLanguage=(lang)=>reducerAction(
   actionTypes.GLOBAL_CHANGE_LANGUAGE,
   {
      lang
   }
);

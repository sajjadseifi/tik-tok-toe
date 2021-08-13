import React from "react";
import { Pressable} from "react-native";
import {  useGlobalDispatch,useGlobalSeletor} from "../../hook/global-hook";
import * as  globalActions from "../../store/actions/global-actions"

export const LanguageChanger =({children})=>{
   const appLang  = useGlobalSeletor(state=>state.lang);
   const dispatch  = useGlobalDispatch();

   const swtichHandler =()=>{
      let lang =  (appLang == "fa") ? "en" : "fa";
      
      dispatch(globalActions.changeLanguage(lang))
   };
   
   return(
         <Pressable onTouchEnd={swtichHandler}>
            {children}
         </Pressable>  
      ) 
};
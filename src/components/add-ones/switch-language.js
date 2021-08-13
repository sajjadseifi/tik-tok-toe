import React from "react";
import { StyleSheet } from "react-native";
import {  useGlobalDispatch,useGlobalSeletor} from "../../hook/global-hook";
import * as  globalActions from "../../store/actions/global-actions"
import { color } from "../../constants";
import { TextJumber } from "../../shared/animate";
import { ScaleButton } from "../../shared/ui/scale-button";
export const SwitchLanguage =()=>{
   const {language}  = useGlobalSeletor(state=>state.messages);
   const appLang  = useGlobalSeletor(state=>state.lang);
   const dispatch  = useGlobalDispatch();

   const swtichHandler =()=>{
      let lang =  (appLang == "fa") ? "en" : "fa";
      dispatch(globalActions.changeLanguage(lang))
   };
   
   return (
         <ScaleButton style={styles.container} onPress={swtichHandler}>
               <TextJumber style={styles.lang} text={language[appLang]} />
         </ScaleButton>
   )   
};
const styles = StyleSheet.create({
   boxlang:{
      width:50,
      height:35,
      alignItems:"center",
      justifyContent:"center",
   }, 
   lang:{
      fontSize:24,
      fontWeight:"bold",
      color:color.white,
   }
});

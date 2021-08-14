import React from "react";
import { StyleSheet, Text } from "react-native";
import {  useGlobalDispatch,useGlobalSeletor} from "../../hook/global-hook";
import * as  globalActions from "../../store/actions/global-actions"
import { color } from "../../constants";
import { TextJumber } from "../../shared/animate";
import { ScaleButton } from "../../shared/ui/scale-button";
import { LanguageChanger } from "../shared/language-changer";
export const SwitchLanguage =()=>{
   const {language}  = useGlobalSeletor(state=>state.app);
   const appLang  = useGlobalSeletor(state=>state.lang);
   
   return (
      <LanguageChanger>
         <ScaleButton style={styles.container}>
               <TextJumber style={styles.lang} text={`${language[appLang]}`} />
         </ScaleButton>
      </LanguageChanger>
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

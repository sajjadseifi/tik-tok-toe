import React from "react";
import { StyleSheet,View } from "react-native";
import { useGlobalDispatch, useGlobalSeletor } from "../../hook/global-hook";
import { LanguageList } from "./language-list";
import * as  globalActions from "../../store/actions/global-actions";
import { color } from "../../constants";

export const LanguagesBox =({onChanged=()=>{},darkMode=true})=>{   
   const {messages,app, lang:appLang} = useGlobalSeletor();
   const dispatch = useGlobalDispatch();
   
   const changeHandler =(keyLang)=>{
      if(keyLang == appLang)
          return;
      
      dispatch(globalActions.changeLanguage(keyLang));
      // onChanged();
   };
   const arredObj = Object.keys(app.language).map(lk=>({
      keyLang :lk,
      value:messages.language[lk]
   })) 

   return(
      <View style={[styles.container,darkMode? styles.darkMode:styles.lightMode]}>
         <LanguageList 
            appLanguage={appLang}
            onChangeLang={changeHandler} 
            langs={arredObj}
          />
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   darkMode:{
      backgroundColor:color.darkbeautiful,
   },
   lightMode:{
      backgroundColor:color.white,
   },
})
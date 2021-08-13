import React from "react";
import { StyleSheet,View,Text, Pressable } from "react-native";
import { useGlobalSeletor } from "../../hook/global-hook";
import { LanguageList } from "./language-list";

export const LanguagesBox =()=>{   
   const langs = useGlobalSeletor(state=>state.app.language);

   const arredObj = Object.keys(langs).map(lk=>({
      keyLang :lk,
      value:langs[lk]
   })) 

   return(
      <View style={styles.container}>
         <LanguageList langs={arredObj} />
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      position:"absolute",
      width:"100%",
      height:"100%",
      backgroundColor:"white",
   },
})
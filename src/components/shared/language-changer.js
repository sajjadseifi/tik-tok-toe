import React from "react";
import { Pressable, View, Switch,StyleSheet} from "react-native";
import {  useBackdropDispatch} from "../../shared/backdrop/backdrop-hook";
import * as  backdropActions from "../../shared/backdrop/backdrop-action";
import { LanguagesBox } from "../language/languages-box";
import { APP_HEIGTH, APP_WIDTH } from "../../constants/size";
import { color } from "../../constants";
import { IconButton } from "../ui/icon-button";
import { useState } from "react";

const LagnguageModalContent =({
   onClose=()=>{},
   onChangedLang=()=>{},
})=>{
   const [darkMode,setDarkMode]= useState(true);
   
   return(
      <View style={styles.contianer}>
      <View style={styles.closeContainer}>
         <Switch value={darkMode} onTouchEnd={()=>setDarkMode(!darkMode)} />
         <IconButton 
            name="times"
            size={30}
            color={color.white}
            onPress={onClose}
         />
      </View>
      <View style={styles.langContainer}>
         <LanguagesBox
            darkMode={darkMode}
            onChanged={onChangedLang}
         />
      </View>
   </View>
   )
};
const exitKey = "langs-box"; 
export const LanguageChanger =({children})=>{
   const dispatchBkdrp = useBackdropDispatch();
   const closeCahnger =()=>dispatchBkdrp(backdropActions.close(exitKey));

   const onCahngeLangHandler =()=>{
      const content = (
         <LagnguageModalContent  
            exitKey={exitKey}
            onClose={closeCahnger}
            onChangedLang={closeCahnger}
         />
      )
      dispatchBkdrp(backdropActions.addBackdrop(exitKey,content,true,true));
   }   
   return(
         <Pressable onTouchEnd={onCahngeLangHandler}>
            {children}
         </Pressable>  
      ) 
};
const WIDTH_LANG_BOX_MODAL=APP_WIDTH * 6/7;
const HEIGTH_LANG_BOX_MODAL=APP_HEIGTH * 3/4;

const styles = StyleSheet.create({
   contianer:{
      width:WIDTH_LANG_BOX_MODAL,
      minHeight:HEIGTH_LANG_BOX_MODAL * 2/3,
      maxHeight:HEIGTH_LANG_BOX_MODAL,
      backgroundColor:color.white,
      borderRadius:6,
      overflow:"hidden",
   },
   langContainer:{
      flex:1,
   }, 
   closeContainer:{
      paddingHorizontal:20,
      paddingVertical:10,
      alignItems:'flex-end',  
      backgroundColor:"#282828",
      flexDirection:"row",
      justifyContent:"space-between"
   },
})
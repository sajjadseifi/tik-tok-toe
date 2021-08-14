import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { Flex } from "../ui";
import Icon  from 'react-native-vector-icons/Ionicons'
import { useGlobalSeletor } from "../../hook/global-hook";
import { color } from "../../constants";
import { updateObject } from "../../utils";
export const LanguageItem = ({keyLang,value,selected=false})=>{
   const {changeLanguage} = useGlobalSeletor(state=>state.icon.screens.home);
   let withIcon = styles.withIcon;
   let langValue = styles.langValue;
   if(selected){
      withIcon = updateObject(styles.withIcon,stylesSelected.withIcon);
      langValue = updateObject(styles.langValue,stylesSelected.langValue);
   }
   return(
      <View style={styles.base}>
      <View style={styles.language}>
         <Flex  between alignCenter>
            <View style={withIcon}>
               <Text style={styles.langKey}>{keyLang}</Text>
               <Icon name={changeLanguage} size={20} color={color.white} />
            </View>
            <Text style={langValue}>{value}</Text>
         </Flex>
      </View>
         {selected && <View style={styles.selectedOver}></View>}
      </View>
   )
};

const  styles = StyleSheet.create({
   selectedOver:{
      position:"absolute",
      width:"100%",
      height:"100%",
      left:0,
      top:0,
      backgroundColor:"#4a4a4a",
      opacity:0.3,
   }, 
   base:{
         // backgroundColor:"#2a2a2a"
   },
   language:{
      paddingHorizontal:40,
      paddingVertical:8,
   },
   withIcon:{
      alignItems:"center",
      backgroundColor:color.darkgrey,
      width:46,
      height:46,
      borderRadius:4,
   }, 
   langKey:{
      color:color.white,
      fontWeight:"bold",
   },
   langValue:{
      fontWeight:"bold",
      fontSize:18,
      color:color.darkgrey
   }
}) ;

const stylesSelected = StyleSheet.create({
   withIcon:{
      backgroundColor:color.blueGreen,
   }, 
   langValue:{
      color:color.blueGreen
   }
})
import React from "react"
import { StyleSheet, View } from "react-native";
import { alignItems as aitems, justifyContent as jcontents } from "../../constants";
import {  firstInSameKey, ifExistenceComing, updateObject } from "../../utils";
export const flexProps = {
   justCenter:null,
   justEnd:null,
   justStart:null,
   around:null,
   between:null,
   evenly:null,
   alignCenter:null,
   alignStart:null,
   alignEnd:null,
   baseline:null,
   stretch:null,
   children:null,
   justifyContent:null,
   alignItems:null,
   flexDirection:"row",
};

export const Flex =({children,style,justifyContent,alignItems,flexDirection ,...props}=flexProps)=>{
   let jckey = justifyContent?
         justifyContent: firstInSameKey(jcontents,props);
   let aikey = alignItems ?
         alignItems : firstInSameKey(aitems,props);   
   
   const flexGifts = {
      flexDirection,
      justifyContent :  jcontents[jckey],
      alignItems : aitems[aikey]
   };

   const userFlex =  ifExistenceComing(styles.flex,flexGifts);
   const updatedStyle = updateObject(userFlex,style);
   return <View {...props} style={updatedStyle}>{children}</View>
};

const styles = StyleSheet.create({
   flex:{
      flexDirection:"row",
   } 
})

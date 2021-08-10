import React from "react";
import { StyleSheet, View } from "react-native";
import { color as Colors } from "../../constants";
import { ifExistenceComing, updateObject } from "../../utils";

export const WhiteWindow=({
   style={},
   width=null,
   height=null,
   backgroundColor,
   children
})=>{

   let  winStyle = updateObject(styles.window,style);
   winStyle = ifExistenceComing(winStyle,{
      width,
      height,
      backgroundColor
   })

   return<View style={winStyle}>{children}</View>
};

const styles = StyleSheet.create({
   window:{
      backgroundColor:Colors.white,
      borderRadius:5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 3,
      padding:5,
   }
})
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { APP_HEIGTH, APP_WIDTH } from "../../constants/size";

export const FullScrenContainer=({style={},absolute,children})=>{
   const stylArr = [styles.fullScreen,style];

   if(absolute) stylArr.push(styles.abs)
   
   return <View style={stylArr}>{children}</View>
};

const styles = StyleSheet.create({
   fullScreen:{
      width:APP_WIDTH,
      height:APP_HEIGTH,
      // alignItems:"center",
      // justifyContent:"center",
   },
   abs:{
      left:0,
      top:0,
      position:"absolute",
   },
})
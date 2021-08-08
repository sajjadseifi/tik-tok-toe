import React from "react";
import {StyleSheet, View} from "react-native"
import { color } from "../../constants";
import { ifExistenceComing, updateObject } from "../../utils";

export const WinNodePlayer =({style,color})=>{
   let turnStyle = updateObject(styles.win,style)
   turnStyle = ifExistenceComing(turnStyle,{ backgroundColor:color   });

   return (<View style={turnStyle}></View>)
};

const styles = StyleSheet.create({
   win:{
      backgroundColor:color.white,
      borderRadius:16,
      width:16,
      height:16,
   }
})
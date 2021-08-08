import React from "react";
import {StyleSheet, View} from "react-native"
import { color } from "../../constants";
import { cleverPluckedCombination } from "../../utils";
export const MyTurnPlayer =({style={},color,isMyTurn=false})=>{
   const turnStyle = cleverPluckedCombination(styles.myTurn,{
      backgroundColor:color,
      opacity:isMyTurn?1:0.3
   });
   return (
      <View style={style}>
            <View style={turnStyle}></View>
      </View>
   )
};

const styles = StyleSheet.create({
   myTurn:{
      backgroundColor:color.white,
      borderRadius:20,
      width:20,
      height:20,
   }
})
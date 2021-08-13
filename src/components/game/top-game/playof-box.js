import React from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../../../constants";
import { TextJumber } from "../../../shared/animate";
import { updateObject } from "../../../utils";

export const PayofBox=({playofRounds,style})=>{
   const opacity  = playofRounds > 0? 1 : 0;
   return (
      <View style={[styles.playofContainer,{opacity},style]}>
      <View style={styles.playofBox}>
         <TextJumber  text={`${playofRounds}`} style={[styles.playof,{opacity}]}  />
      </View>
   </View>
   )
};

const styles = StyleSheet.create({
   playofContainer:{
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#ffffff44",
      width:46,
      height:46,
      borderRadius:18
   }, 
   playof:{
      color:color.white,
      fontSize:26,
      fontWeight:"bold",
      opacity:0,
      color:color.darkblue,
   },
   playofBox:{
      backgroundColor:color.white,
      width:40,
      height:40,
      borderRadius:17,
      alignItems:"center",
      shadowColor: "#000",
      shadowOffset: {
         width: 12,
         height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 25,
   }
})

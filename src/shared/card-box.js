import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { color } from "../constants";

export const CardBox = ({children,style})=>{
   return(
      <View style={[styles.cardBox,style]}>
         {children}
      </View>
   )
};

const styles = StyleSheet.create({
   cardBox:{
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity:0.6,
      shadowRadius: 10,
      elevation: 4,
      backgroundColor:color.white,
      borderRadius:5,
      paddingHorizontal:5,
      paddingVertical:1,
   }
})
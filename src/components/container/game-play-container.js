import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../constants";
import { cleverPluckedCombination } from "../../utils";

export const GamePlayContainer = ({style,children})=>{
   
   return  (
      <LinearGradient
         style={cleverPluckedCombination(styles.linearGradient,style)}
         //****
         colors={[color.indigo,color.darkblue]} 
         start={{x: 0, y: 0}} 
         end={{x:1, y: 1.5}}
      >        
        {children}
      </LinearGradient>
   )
};
const styles = StyleSheet.create({
   linearGradient:{
      flex: 1,
   }
})
import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import  color from "../../constants/color" ;
import { cleverPluckedCombination } from "../../utils";
import { TextView } from "../ui";

const props ={
   score:0,
   color:color.white
};
export const ScorePlayer=({score,color}=props)=>{
   const scoreStyle = cleverPluckedCombination(styles.score,{color}) 
   return (
      <TextView 
         style={scoreStyle}
         viewStyle={styles.container}
         text={`${score}`} 
      />
   )
}

const styles = StyleSheet.create({
   container:{
   
   },
   score:{
      fontSize:30,
      fontWeight:"bold"  
   }
});
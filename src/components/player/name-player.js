import React  from "react";
import { StyleSheet } from "react-native";
import { cleverPluckedCombination } from "../../utils";
import { TextView } from "../ui";

export const NamePlayer=({name,color})=>{
   return (
      <TextView 
         style={cleverPluckedCombination(styles.name,{color})}
         viewStyle={styles.container}
         text={`${name}`} 
      />
   )
}

const styles = StyleSheet.create({
   container:{
   
   },
   name:{
      fontSize:26,
   }
});
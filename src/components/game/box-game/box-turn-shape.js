import React from "react";
import { StyleSheet, View } from "react-native";
import { useGamePlaySeletor } from "../../../hook/game-hook";

export const TurnShape = ({})=>{
   const {currentPlayer ,board} = useGamePlaySeletor(state=>state);
   if(!currentPlayer || !board)   return null;

   const Shape = currentPlayer.shape;

   return (
      <View  style={styles.container}>
         <Shape play={false} color={currentPlayer.color} coefficient={3/2} />
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      justifyContent:"center",
      alignContent:"center",
      marginTop:10,
      height:120,
   }
})
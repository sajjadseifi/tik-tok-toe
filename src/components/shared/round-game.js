import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../constants";

export const RoundGame =({rounds,maxRounds})=>{
   rounds=`${rounds}`;
   maxRounds=`${maxRounds}`;

   return (
      <View style={styles.gameRounds}>
         <Text style={styles.round}>{rounds}</Text>
         <Text style={styles.splitor}>/</Text>
         <Text style={styles.round}>{maxRounds}</Text>
      </View>
   )
};

const styles = StyleSheet.create({
   gameRounds:{
      flexDirection:"row",
      alignItems:"center"
   },
   splitor:{
      paddingHorizontal:5,
      color:color.darkgrey,
      fontWeight:"bold"
   },
   round:{
      fontSize:18,
      fontWeight:"bold",
      color:color.darkgrey
   }
})
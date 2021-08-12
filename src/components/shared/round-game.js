import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../constants";
import { TextJumber } from "../../shared/animate";

export const RoundGame =({rounds,maxRounds})=>{
   rounds=`${rounds}`;
   maxRounds=`${maxRounds}`;

   return (
      <View style={styles.gameRounds}>
         <TextJumber defaultValue={0} text={rounds} style={styles.round} />
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
      paddingHorizontal:10,
      color:color.white,
      fontWeight:"bold",
      fontSize:22,
   },
   round:{
      fontSize:22,
      fontWeight:"bold",
      color:"#ccc"
   }
})
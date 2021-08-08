import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundGame,VSPlayer } from "../../shared";

export const TopGameCenter=({maxRounds,rounds})=>{
   return(
      <View style={styles.topGameCetner}>
         <VSPlayer/>
         <RoundGame rounds={rounds} maxRounds={maxRounds} />
      </View>
   )
}

const styles = StyleSheet.create({
   topGameCetner:{
      paddingVertical:15,
      alignItems:"center"
   }
})
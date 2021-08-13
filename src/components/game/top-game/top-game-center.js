import React from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../../../constants";
import { TextJumber } from "../../../shared/animate";
import { updateObject } from "../../../utils";
import { RoundGame,VSPlayer } from "../../shared";
import { PayofBox } from "./playof-box";

export const TopGameCenter=({maxRounds,round,playofRounds})=>{
   return(
      <View style={styles.topGameCetner}>
         {/* <VSPlayer/> */}
         <RoundGame rounds={round} maxRounds={maxRounds} />
         <PayofBox style={styles.playofBox} playofRounds={playofRounds} />
      </View>
   )
}

const styles = StyleSheet.create({
   topGameCetner:{
      alignItems:"center",
   },
   playofBox:{
      marginVertical:10, 
   }
})
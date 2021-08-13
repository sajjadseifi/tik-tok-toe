import React from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../../../constants";
import { TextJumber } from "../../../shared/animate";
import { updateObject } from "../../../utils";
import { RoundGame,VSPlayer } from "../../shared";

export const TopGameCenter=({maxRounds,round,playofRounds})=>{
   const opacity  = playofRounds > 0? 1 : 0;
   const stylePlayof = updateObject(styles.playofContainer,{opacity})
   return(
      <View style={styles.topGameCetner}>
         <VSPlayer/>
         <RoundGame rounds={round} maxRounds={maxRounds} />
         <View style={stylePlayof}>
            <View style={styles.playofBox}>
               <TextJumber  text={`${playofRounds}`} style={styles.playof}  />
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   topGameCetner:{
      alignItems:"center"
   },
   playofContainer:{
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#ffffff44",
      width:46,
      height:46,
      marginVertical:5,
      borderRadius:18
   }, 
   playof:{
      color:color.white,
      fontSize:26,
      fontWeight:"bold",
      opacity:0,
      color:color.darkblue,
      flex:1,
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
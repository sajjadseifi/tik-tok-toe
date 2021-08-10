import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useGlobalSeletor } from "../../hook/global-hook";
import { Player } from "../../models";
import { updateObject } from "../../utils";

// this.isWin
export const WinPlayer =({style={},textStyle={},currentPlayer= new Player(),isWin=false})=>{
   const strNotWinner = useGlobalSeletor(state=>state.messages.endRound.winthoutWinner);
   
   const playerName = (isWin  &&  currentPlayer)
    ? currentPlayer.name 
    :  strNotWinner;
   
   return (
      <View style={updateObject(styles.winer,style)}>
            <Text style={updateObject(styles.playerName,textStyle)}>
               {`${playerName}`}
            </Text>
      </View>
   )
};

const styles = StyleSheet.create({
   winer:{

   },
   playerName:{

   }
});
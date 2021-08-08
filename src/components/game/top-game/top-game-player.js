import React from "react";
import { StyleSheet, View } from "react-native";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Player } from "../../../models";
import { cleverPluckedCombination } from "../../../utils";
import { ScorePlayer ,NamePlayer } from "../../player";
import { MyTurnPlayer } from "../../player/mtTurn-player";
import { WinListTopGame } from "./wind-list-top-game";

export const TopGamePlayer=({style={},player= new Player()})=>{
   const currentPlayer = useGamePlaySeletor(state => state.currentPlayer)
   return(
      <View style={cleverPluckedCombination(styles.topGamePalyer,style)}>
         <NamePlayer name={player.name} color={player.color}  />
         <MyTurnPlayer 
            color={player.color}
            style={styles.myTurn}
            isMyTurn={currentPlayer &&  player.id == currentPlayer.id} 
         />      
         <WinListTopGame player={player} />
      </View>
   )
};

const styles = StyleSheet.create({
      topGamePalyer:{
         alignItems:"flex-start",   
         width:"30%",
         maxWidth:"30%"      
      },
      myTurn:{
         marginTop:10
      }
});
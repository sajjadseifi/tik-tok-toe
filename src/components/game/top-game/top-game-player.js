import React from "react";
import { StyleSheet, View } from "react-native";
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Player } from "../../../models";
import { cleverPluckedCombination } from "../../../utils";
import { NamePlayer } from "../../player";
import { WinListTopGame } from "./wind-list-top-game";

export const TopGamePlayer=({right=false,style={},player= new Player()})=>{

   return(
      <View style={cleverPluckedCombination(styles.topGamePalyer,style)}>
         <NamePlayer name={player.name} color={player.color}  />
         <WinListTopGame revers={right} player={player} />
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
import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useGlobalSeletor } from "../../hook/global-hook";
import { Player } from "../../models";
import { updateObject } from "../../utils";
import { ScoreBox } from "../game/modal/score-box";

export const WinPlayer =({
   style={},
   textStyle={},
   players=[],
   currentPlayer= new Player(),
   isWin=false,
   showScores=false,
   allRounds=0,
})=>{
   const strNotWinner = useGlobalSeletor(state=>state.messages.endRound.winthoutWinner);
   const eq = allRounds - players.reduce((total =0 ,{score})=> {
      return total.score + parseInt(score);
   })

   const Scores = !showScores  ? null : (
      <ScoreBox
         player1={players[0]}
         player2={players[1]}
         eq={eq}
      />
   );

   const Shape =  currentPlayer && currentPlayer.shape;
  let  renderd= null;

  if(!(isWin  &&  currentPlayer))
      renderd=  <Text style={styles.playerName}>{`${strNotWinner}`}</Text>
   else 
      renderd= Shape &&  <Shape size={30} color={currentPlayer.color}  />

   return (
      <View style={styles.container}>
         <View style={updateObject(styles.winer,style)}>
            {renderd}
         </View>
         {Scores}
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
      width:"100%"
   },
   winer:{
      paddingVertical:10,
      alignItems:'center',
   },
   playerName:{
         justifyContent:'center',
         alignItems:"center",
         fontSize:20,
         fontWeight:"bold"
   }
});
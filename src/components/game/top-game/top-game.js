import React from "react"
import { StyleSheet } from "react-native"
import { useGamePlaySeletor } from "../../../hook/game-hook";
import { Flex } from "../../ui";
import { TopGameCenter } from "./top-game-center";
import { TopGamePlayer } from "./top-game-player";

export const TopGame = () =>{
   const {player1,player2,round,maxRounds } =useGamePlaySeletor(state=>state);

   return(
      <Flex   between style={styles.topGame}>
            <TopGamePlayer style={styles.player1} player={player1}/>
            <TopGameCenter maxRounds={maxRounds} rounds={round}/>
            <TopGamePlayer right={true} style={styles.player2} player={player2}/>
      </Flex>
   )
}

const styles = StyleSheet.create({
      topGame:{
      },
      player1:{
            alignItems:"flex-start"
      },
      player2:{
            alignItems:"flex-end"
      }
});
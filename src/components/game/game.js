import React from "react";
import { StyleSheet } from "react-native";
import { GamePlayContainer } from '../container'
import { TopGame } from './top-game/top-game'
import { TrunPlayer } from '../player'
import {  useGamePlaySeletor } from "../../hook/game-hook";
import { ContainerBoxGame } from "./box-game/container-box-game";
import { TikTokToeProvider } from "../../context/tiktoktoe-context";

export const Game =()=>{
   const currentPlayer = useGamePlaySeletor(state=>state.currentPlayer);
   return(
      <GamePlayContainer style={styles.container}>        
        <TopGame />
        <TikTokToeProvider>
            <ContainerBoxGame/>
        </TikTokToeProvider>
    </GamePlayContainer>
   )
};

const styles = StyleSheet.create({
   container:{
      padding:30
   }
});
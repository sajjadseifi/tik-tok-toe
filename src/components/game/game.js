import React from "react";
import { StyleSheet, View } from "react-native";
import { GamePlayContainer } from '../container'
import { TopGame } from './top-game/top-game'
import {  useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
import { ContainerBoxGame } from "./box-game/container-box-game";
import { useEffect } from "react";
import { useBackdropDispatch } from "../../shared/backdrop/backdrop-hook";
import  * as backdropActionTypes from "../../shared/backdrop/backdrop-action";
import { EndRoundGameModal } from "./modal/endround-game-modal";
import { SoundPlayer } from "../../models/sounds-player";
import { audios } from "../../helpers/loader/sounds-loader";
import { NavbarHeader } from "../navbar/navbar-header";

const MODAL_KEY ="END_ROUND"
export const Game =()=>{
   const state = useGamePlaySeletor(state=>state);
   const {endRound} = state;
   const dispatch = useBackdropDispatch();
   const gamePlayDispatch = useGamePlayDispatch()
   useEffect(()=>{
      if(endRound) addModal();
   },[endRound])
   
   const addModal =()=>{
      SoundPlayer.playSound(audios.NICE);
      const Modal =   (     
         <EndRoundGameModal 
            state={state}
            modalKey={MODAL_KEY} 
            gamePlayDispatch={gamePlayDispatch}
         />
      );

      dispatch(backdropActionTypes.addBackdrop(MODAL_KEY,Modal,true))
   };
   return(
      <GamePlayContainer style={styles.container}>   
         <NavbarHeader />     
        <TopGame />
        <View style={styles.gamePlayContianer}>
            <ContainerBoxGame/>
        </View>
    </GamePlayContainer>
   )
};

const styles = StyleSheet.create({
   container:{
      padding:30,
   },
   gamePlayContianer:{
      padding:20,
      flex:1,
   },
});
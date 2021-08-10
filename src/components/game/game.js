import React from "react";
import { StyleSheet } from "react-native";
import { GamePlayContainer } from '../container'
import { TopGame } from './top-game/top-game'
import {  useGamePlayDispatch, useGamePlaySeletor } from "../../hook/game-hook";
import { ContainerBoxGame } from "./box-game/container-box-game";
import { useEffect } from "react";
import { useBackdropDispatch } from "../../shared/backdrop/backdrop-hook";
import  * as backdropActionTypes from "../../shared/backdrop/backdrop-action";
import { EndRoundGameModal } from "./modal/endround-game-modal";

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
        <TopGame />
        <ContainerBoxGame/>
    </GamePlayContainer>
   )
};

const styles = StyleSheet.create({
   container:{
      padding:30
   }
});
import React,{ Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../../constants";
import { Flex } from "../../ui";
import { ExplosiveModal } from "../../../shared/modal/explosive-modal";
import { useBackdropDispatch } from "../../../shared/backdrop/backdrop-hook";
import * as backdropActions  from "../../../shared/backdrop/backdrop-action";
import { ConfirmModal } from "../../../shared/modal/confirm-modal";
import * as gameActionTypes from "../../../store/actions/game-action";
import { WhiteWindow } from "../../../shared/ui/white-window";
import { useGlobalDispatch, useGlobalSeletor } from "../../../hook/global-hook";
import * as globalActions from "../../../store/actions/global-actions";
import { ButtonIcon } from "../../../shared/ui/button-icon";
import { endRoundConfig } from "./config-modals";
import { WinPlayer } from "../../player/win-plater";
import { Ninja } from "../../../shared/ninja";

export const EndRoundGameModal=({state,gamePlayDispatch,modalKey})=>{
   const {messages,icon} = useGlobalSeletor(state=>state);
   const {titleHeader} = messages.endRound;

   const dispatch = useBackdropDispatch();
   const dispatchGlobal = useGlobalDispatch();

   const onCloseBtn=(key,title,onConfirm=()=>{})=>{
      const Cmp = (
         <ConfirmModal
            modalKey={key} 
            question={title} 
            onConfirmed={()=>{
               onConfirm();
               dispatch(backdropActions.close(modalKey));
            }}
            onCancel={()=> {}}
         />
      );
      dispatch(backdropActions.addBackdrop(key,Cmp,true,true));
   }
   
   const conf = endRoundConfig( {
      config:{
         messages:messages.endRound,
         icon,
      },
      onClose:onCloseBtn,
      cbsFunc:{
         next        : ()  => gamePlayDispatch(gameActionTypes.nextRound()),
         reRun      : ()  => gamePlayDispatch(gameActionTypes.reRound()),
         newPlay   : ()  => gamePlayDispatch(gameActionTypes.newPlay()),
         exit         : ()  => dispatchGlobal(globalActions.changePage("start")),
         playof      : ()  => gamePlayDispatch(gameActionTypes.playof()),
      }
   });
   
   return(
      <ExplosiveModal onClosed={()=>onClosed(modalKey)}>
         <WhiteWindow style={styles.window} shadow>
            <View style={styles.top}>
            <Ninja condition={state.endPlay}>
               <Text style={styles.topStaticText}>{titleHeader.play}</Text>
               <Text style={styles.topStaticText}>{titleHeader.round}</Text>
            </Ninja>
               <WinPlayer 
                   textStyle={styles.playerName}
                   currentPlayer={state.endPlay ? state.winner: state.currentPlayer}
                   isWin={state.board.isWin || !!state.winner}
               />
            </View>
            <Flex evenly style={styles.bottom}>
               <Ninja condition={state.endPlay}>
                        <Fragment>
                           <ButtonIcon {...conf.newPlay} />
                           {!state.winner && <ButtonIcon {...conf.playof} />}
                           <ButtonIcon  {...conf.exit} />
                        </Fragment>
                        <Fragment>
                           <ButtonIcon {...conf.next} />
                           <ButtonIcon {...conf.reRun} />
                           <ButtonIcon  {...conf.exit} />
                        </Fragment>
               </Ninja>
            </Flex>
         </WhiteWindow>
      </ExplosiveModal>
   )
};

const styles = StyleSheet.create({
   top:{
      alignItems:"center",
   },
   window:{
      paddingVertical:10,
   },
   topStaticText:{
      fontSize:23,
      fontWeight:"bold",
      color:color.darkgrey
   },
   playerName:{
      paddingVertical:20,
   },
   bottom:{
      paddingVertical:10,
   },
});
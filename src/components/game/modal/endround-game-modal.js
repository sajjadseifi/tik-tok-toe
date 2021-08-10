import React,{ useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../../constants";
import { Flex } from "../../ui";
import { ExplosiveModal } from "../../../shared/modal/explosive-modal";
import { useBackdropDispatch } from "../../../shared/backdrop/backdrop-hook";
import * as backdropActions  from "../../../shared/backdrop/backdrop-action";
import { ConfirmModal } from "../../../shared/modal/confirm-modal";
import * as gameActionTypes from "../../../store/actions/game-action";
import { WhiteWindow } from "../../../shared/ui/white-window";
import { useGlobalSeletor } from "../../../hook/global-hook";
import { ButtonIcon } from "../../../shared/ui/button-icon";
import { endRoundConfig } from "./config-modals";
import { WinPlayer } from "../../player/win-plater";

export const EndRoundGameModal=({state,gamePlayDispatch,modalKey})=>{
   const [close ,setClose]=useState(false);

   const dispatch = useBackdropDispatch();
   const endRoundConf = useGlobalSeletor(state=>state.messages.endRound);
   const {titleHeader} = endRoundConf;
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
   
   const closedBtn= ()=> console.log("Close Game");

   const reRoundBtn = () => gamePlayDispatch(gameActionTypes.reRound())
   
   const nextRoundBtn = () => gamePlayDispatch(gameActionTypes.nextRound())

   const conf = endRoundConfig( {
      messages:endRoundConf,
      onClose:onCloseBtn,
      cbsFunc:{
         next:nextRoundBtn,
         reRun:reRoundBtn,
         exit:closedBtn,
      }
   });

   return(
      <ExplosiveModal close={close} onClosed={()=>onClosed(modalKey)}>
         <WhiteWindow style={styles.window} shadow>
            <View style={styles.top}>
               <Text style={styles.topStaticText}>{titleHeader}</Text>
               <WinPlayer 
                   textStyle={styles.playerName}
                   currentPlayer={state.currentPlayer}
                   isWin={state.board.isWin}
               />
            </View>
            <Flex evenly style={styles.bottom}>
               <ButtonIcon   onPress={nextRoundBtn}  {...conf.next} />
               <ButtonIcon   onPress={reRoundBtn}  {...conf.reRun} />
               <ButtonIcon   onPress={closedBtn}  {...conf.exit} />
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
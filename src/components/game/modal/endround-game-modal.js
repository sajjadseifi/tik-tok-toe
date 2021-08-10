import React,{ useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../../constants";
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Flex } from "../../ui";
import { IconButton } from "../../ui/icon-button";
import { ExplosiveModal } from "../../../shared/modal/explosive-modal";
import { useBackdropDispatch } from "../../../shared/backdrop/backdrop-hook";
import * as backdropActions  from "../../../shared/backdrop/backdrop-action";
import { ConfirmModal } from "../../../shared/modal/confirm-modal";
import * as gameActionTypes from "../../../store/actions/game-action";
import { WhiteWindow } from "../../../shared/ui/white-window";
import { useGlobalSeletor } from "../../../hook/global-hook";

export const EndRoundGameModal=({state,gamePlayDispatch,modalKey})=>{
   const [close ,setClose]=useState(false);

   const dispatch = useBackdropDispatch();
   const {confirmed,titleHeader} = useGlobalSeletor(state=>state.messages.endRound);
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
   
   const closedBtn= ()=>onCloseBtn("closed",confirmed.closed,()=>{
         console.log("Close Game");
   });

   const reRoundBtn = () =>  onCloseBtn("reTurn",confirmed.reTurn,()=>{
      gamePlayDispatch(gameActionTypes.reRound())
   });
   
   const nextRoundBtn = () => onCloseBtn("nextTurn",confirmed.nextTurn,()=>{
         gamePlayDispatch(gameActionTypes.nextRound())
   });
   
   return(
      <ExplosiveModal close={close} onClosed={()=>onClosed(modalKey)}>
         <WhiteWindow style={styles.window} shadow>
            <View style={styles.top}>
               <Text style={styles.topStaticText}>{titleHeader}</Text>
               <Text style={styles.playerName}>{`${(state.currentPlayer && state.currentPlayer.name)}`}</Text>
            </View>
            <Flex evenly style={styles.bottom}>
               <IconButton name="close" size={30} color="red"  onPress={closedBtn} />
               <IconButton Icon={EntypoIcon} name="ccw" size={30} color="blue" onPress={reRoundBtn} />
               <IconButton  Icon={AntIcon} name="rightcircle" size={30} color="green" onPress={nextRoundBtn} />
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
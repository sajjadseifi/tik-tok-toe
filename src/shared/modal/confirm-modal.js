import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { ExplosiveModal } from "./explosive-modal";
import { WhiteWindow } from "../ui/white-window";
import { APP_WIDTH } from "../../constants/size";
import { Flex } from "../../components/ui";
import * as backdropActions from "../backdrop/backdrop-action"
import { useBackdropDispatch, useBackdropSeletor } from "../backdrop/backdrop-hook";
import { useGlobalSeletor } from "../../hook/global-hook";
import { TitleModal } from "./title-modal";
import { ButtonIcon } from "../ui/button-icon";
import { confirmConfig } from "./config";

const CONFIRN_WIDTH =APP_WIDTH  * 3/4;

export const ConfirmModal=({
   modalKey="",
   wrapper=ExplosiveModal,
   title=null,
   question="",
   onConfirmed=()=>{},
   onCancel=()=>{},
   showOk=true,
   showCance=true,
})=>{
   const confMessages = useGlobalSeletor(state=>state.messages.modal.confirm);
   const icon = useGlobalSeletor(state=>state.icon.modal.confirm);
   const {contents}  = useBackdropSeletor(state=>state);
   const findIndex = contents.findIndex(c=>`${c.key}` == `${modalKey}`);
   const close = !(findIndex < 0 ? false :contents[findIndex].show);
   
   const dispatch = useBackdropDispatch();

   const onEventHandler =(state=false)=>{
      const onSelect =state?onConfirmed: onCancel;
      onSelect();
      dispatch(backdropActions.close(modalKey));
   }  
   const Wrapper = wrapper;
   const conf = confirmConfig({
      messages:confMessages,
      icon,
   },onEventHandler);
   return (
      <Wrapper speed={1.5}  width={CONFIRN_WIDTH} close={close}>
         <WhiteWindow shadow  style={styles.container}>
               {title && <TitleModal text={title} />}
               <View style={styles.question}>
                  <Text style={styles.questionText}>{question}</Text>
               </View>
               <Flex justCenter style={styles.formButton}>
                  {showOk && <ButtonIcon {...conf.ok} />}
                  {showCance && <ButtonIcon {...conf.cancel} />}
               </Flex>
         </WhiteWindow>
      </Wrapper>
   )
};

const styles = StyleSheet.create({
   container:{
      paddingVertical:13,
      paddingHorizontal:10,
   },
   question:{

   },
   questionText:{

   },
   formButton:{
      marginTop:25,
   }
})
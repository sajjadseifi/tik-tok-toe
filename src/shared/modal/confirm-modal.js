import React from "react";
import {  StyleSheet, View } from "react-native";
import { ExplosiveModal } from "./explosive-modal";
import { WhiteWindow } from "../ui/white-window";
import { APP_WIDTH } from "../../constants/size";
import { Flex } from "../../components/ui";
import * as backdropActions from "../backdrop/backdrop-action"
import { useBackdropDispatch, useBackdropSeletor } from "../backdrop/backdrop-hook";
import { useGlobalSeletor } from "../../hook/global-hook";
import { TitleModal } from "./title-modal";
import { color } from "../../constants";
import { ButtonIcon } from "../ui/button-icon";

const CONFIRN_WIDTH =APP_WIDTH  * 3/4;

export const ConfirmModal=({
   modalKey="",
   wrapper=ExplosiveModal,
   question="",
   onConfirmed=()=>{},
   onCancel=()=>{},
})=>{
   const {contents}  = useBackdropSeletor(state=>state);
   const confirmConfig = useGlobalSeletor(state=>state.messages.modal.confirm);
   const findIndex = contents.findIndex(c=>`${c.key}` == `${modalKey}`);
   const close = !(findIndex < 0 ? false :contents[findIndex].show);
   
   const dispatch = useBackdropDispatch();

   const onEventHandler =(state=false)=>{
      dispatch(backdropActions.close(modalKey));
      
      if(state) onConfirmed()
      else onCancel()
   }
   const Wrapper = wrapper;
   return (
      <Wrapper speed={1.5}  width={CONFIRN_WIDTH} close={close}>
         <WhiteWindow shadow  style={styles.container}>
               <TitleModal text={question} />
               <Flex justCenter style={styles.formButton}>
                     <ButtonIcon
                        iconName="check"
                        title={confirmConfig.ok}
                        titleColor={color.white}
                        backgroundColor={color.purple}
                        onPress={()=>onEventHandler(true)}
                     />
                     <ButtonIcon
                        type="outline"
                        iconName="remove"
                        title={confirmConfig.cancel}
                        titleColor={color.purple}
                        backgroundColor={color.white}
                        onPress={()=>onEventHandler(true)}
                     />
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
   question:{},
   questionText:{},
   formButton:{
      marginTop:25,
   }
})
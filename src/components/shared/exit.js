import React from "react";
import {  BackHandler, Pressable } from "react-native";
import { useGlobalDispatch, useGlobalSeletor } from "../../hook/global-hook";
import * as  globalAxtions from "../../store/actions/global-actions"
import * as  backdropActions from "../../shared/backdrop/backdrop-action"
import { useBackdropDispatch } from "../../shared/backdrop/backdrop-hook";
import { ConfirmModal } from "../../shared/modal/confirm-modal";

export const Exit=({force,style={},children})=>{
   
   const {force:asForce,recomended} = useGlobalSeletor(state=>state.messages.modal.exit);
   const dispatch = useGlobalDispatch();
   const dispatchBkdrp = useBackdropDispatch();
   const onConfirm=()=>{
      if(force)  
         setTimeout(() => BackHandler.exitApp(),1000); 
      else 
         dispatch(globalAxtions.changePage("start"))
   };
   
   const exitHandler =()=>{
      const exitKey = "exit"; 
      const content = <ConfirmModal 
            question={force ?asForce:recomended}
            modalKey={exitKey}
            onConfirmed={onConfirm}
      /> 
      dispatchBkdrp(backdropActions.addBackdrop(exitKey,content,true,true));
   }   

   return <Pressable style={style} onTouchStart={exitHandler}>{children}</Pressable>
};

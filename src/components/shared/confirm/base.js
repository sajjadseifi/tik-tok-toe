import React from "react";
import { Pressable } from "react-native";
import * as  backdropActions from "../../../shared/backdrop/backdrop-action"
import { useBackdropDispatch } from "../../../shared/backdrop/backdrop-hook";
import { ConfirmModal } from "../../../shared/modal/confirm-modal";

export const BaseConfirm=({
   modalKey="",
   question="",
   style={},
   onConfirm=()=>{},
   children=null,
})=>{
   const dispatchBkdrp = useBackdropDispatch();

   const exitHandler =()=>{
      const content = <ConfirmModal 
            question={question}
            modalKey={modalKey}
            onConfirmed={onConfirm}
      /> 
      dispatchBkdrp(backdropActions.addBackdrop(modalKey,content,true,true));
   }   

   return <Pressable style={style} onTouchStart={exitHandler}>{children}</Pressable>
};

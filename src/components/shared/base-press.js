import React from "react";
import {  Pressable } from "react-native";
import {addBackdrop} from "../../shared/backdrop/backdrop-action"
import { useBackdropDispatch } from "../../shared/backdrop/backdrop-hook";

export const BasePress =({modalKey,render=(props)=>{},children})=>{
   const Render = render;
   const dispatchBkdrp = useBackdropDispatch();

   const onTouched=()=>   dispatchBkdrp(addBackdrop(
      modalKey,
      <Render/>,
      true,
      true
   ));   
   
   return <Pressable onTouchEnd={onTouched} >{children}</Pressable>   
};
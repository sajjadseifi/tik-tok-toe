import React from "react";
import { useBackdropSeletor } from "./backdrop-hook";
import { BackDropView } from "./backdrop-view";

export const BackdropMulti=()=>{
   const contents = useBackdropSeletor(state=>state.contents);
   return contents.map((content,index)=>(
      <BackDropView zIndex={(index+1) * 1000}  key={index} detail={content}  />
   )) 
};
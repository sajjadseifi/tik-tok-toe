import React from "react";

export const Ninja = ({condition,children})=>{
   let chs = [null,null];
   if(!(children instanceof Array))
      chs[0] = children;
   else {
      chs[0] = children[0];
      chs[1] = children[1];
   }

   return null;
   
   return condition ? chs[0]:chs[1];
};

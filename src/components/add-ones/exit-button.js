import React from "react";
import { color } from "../../constants";
import { Exit } from "../shared/exit";
import { IconButton } from "../ui/icon-button";

export const ExitButton =({force})=>{
   return(
      <Exit force={force}>
         <IconButton 
            name="home" 
            color={color.white}
            size={30}
         />
      </Exit>
   )
};
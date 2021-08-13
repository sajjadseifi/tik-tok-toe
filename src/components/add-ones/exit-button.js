import React from "react";
import Icon  from "react-native-vector-icons/Ionicons"
import { color } from "../../constants";
import { ScaleButton } from "../../shared/ui/scale-button";
import { Exit } from "../shared/exit";
export const ExitButton =({force})=>{
   return(
      <Exit force={force}>
            <ScaleButton 
               startScaleX={1}
               startScaleY={1}
               endScaleX={0.6}
               endScaleY={0.6}
             >
               <Icon  name="exit" color={color.white}  size={30} />
           </ScaleButton>
      </Exit>
   )
};
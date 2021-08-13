import React from "react";
import { ScaleButton } from "../../shared/ui/scale-button";
import { Reround } from "../shared/confirm/re-round";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { color } from "../../constants";
const animJson = {
   startScaleX:1,
   startScaleY:1,
   endScaleX:0.6,
   endScaleY:0.6,
   duration:500
};
export const ReRoundButton = ()=> (
      <Reround>
         <ScaleButton {...animJson}>
            <EvilIcons
               color={color.white}
               name="refresh"
               size={42}
            />
         </ScaleButton>
      </Reround>
);
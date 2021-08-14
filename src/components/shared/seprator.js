import React from "react";
import {View} from "react-native"
export const Seperator=({row=true,space=0})=><View style={{ 
   ...(row ?
       {marginHorizontal:space}
       :
       {marginVertical:space}
   )
}}></View>;


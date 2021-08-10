import React from "react"
import { ScaleButton } from "../../shared/ui/scale-button";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const IconButton =({
   name,
   size=30,
   color,
   onPress=()=>{},
   Icon=FontAwesomeIcon,
   ...props
})=>(
   <ScaleButton onPress={onPress}>
      <Icon
         name={name}
         size={size}
         color={color}
         {...props}
      />
   </ScaleButton> 
);



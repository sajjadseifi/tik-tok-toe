import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { color } from "../../constants";
import { IconButton } from "./icon-button";
import Entypo from "react-native-vector-icons/Entypo";

export const CloseRedButton =({onClose=()=>{},style={},size=24})=>{
   return(
      <View style={style}>
         <IconButton 
            name="controller-record" 
            size={size} 
            color={color.red} 
            onPress={onClose}
            Icon={Entypo}
         />
      </View>
   )
};



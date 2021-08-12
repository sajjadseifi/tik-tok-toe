import React from "react";
import { StyleSheet } from "react-native";
import { color as Colors } from "../../constants";
import { updateObject } from "../../utils";
import { BaseShape } from "./base-shape";
import Icon  from "react-native-vector-icons/Entypo"
import { audios } from "../../helpers/loader/sounds-loader";
export const CircleShape=({color=Colors.black,size,coefficient=1,...props})=>{
   
   const styled = updateObject(styles.circle,{
      borderColor:color,
      borderWidth:size
   });
   
   const iconSize = Math.ceil(coefficient * (size|| 70));
   return (
      <BaseShape {...props}  audio={audios.MIXKIT}>
         <Icon  color={color} name="circle" size={iconSize}  />
      </BaseShape>
   )
};

const styles = StyleSheet.create({
   circle:{
      width:"100%", 
      height:"100%",
      borderRadius:100, 
      borderWidth:1,
      borderColor:Colors.black   
   },
});
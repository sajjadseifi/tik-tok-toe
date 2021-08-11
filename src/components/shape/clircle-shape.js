import React from "react";
import { StyleSheet,View } from "react-native";
import { color as Colors } from "../../constants";
import { updateObject } from "../../utils";
import { BaseShape } from "./base-shape";
import Icon  from "react-native-vector-icons/Entypo"
export const CircleShape=({color=Colors.black,size=1,onAnimated=()=>{}})=>{
   
   const styled = updateObject(styles.circle,{
      borderColor:color,
      borderWidth:size
   });

   return (
      <BaseShape onAnimated={onAnimated}>
         <Icon  color={color} name="circle" size={80}  />
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
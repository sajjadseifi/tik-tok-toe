import React from "react";
import { StyleSheet } from "react-native";
import { color as Colors } from "../../constants";
import { BaseShape } from "./base-shape";
import Icon  from "react-native-vector-icons/FontAwesome"
import { audios } from "../../helpers/loader/sounds-loader";

export const TimesShape =({color= Colors.black,size,coefficient=1,...props})=>{
      
   // const styledProps = updateObject(styles.line,{
   //    backgroundColor:color,
   //    width:size
   // });
   const iconSize = Math.ceil(coefficient * (size||  80));

   return (
      <BaseShape {...props} audio={audios.MIXKIT}>
         <Icon  color={color} name="times" size={iconSize}  />
      </BaseShape>
   )
};

const styles = StyleSheet.create({
   line:{
      height:"100%",
      backgroundColor:Colors.black, 
   },
   less90:{},
   grate90:{}
});
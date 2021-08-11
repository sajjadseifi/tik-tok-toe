import React from "react";
import { StyleSheet } from "react-native";
import { color as Colors } from "../../constants";
import { BaseShape } from "./base-shape";
import Icon  from "react-native-vector-icons/FontAwesome"

export const TimesShape =({color= Colors.black,size=1,onAnimated=()=>{}})=>{
      
   // const styledProps = updateObject(styles.line,{
   //    backgroundColor:color,
   //    width:size
   // });

   return (
      <BaseShape onAnimated={onAnimated}>
         <Icon  color={color} name="times" size={80}  />
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
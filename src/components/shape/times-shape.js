import React from "react";
import { StyleSheet, View } from "react-native";
import { color as Colors } from "../../constants";
import { updateObject } from "../../utils";
import { BaseShape } from "./base-shape";

export const TimesShape =({color= Colors.black,size=1})=>{
      
   const styledProps = updateObject(styles.line,{
      backgroundColor:color,
      width:size
   });

   return (
      <BaseShape>
         <View style={updateObject(styles.less90,styledProps)}></View>
         {/* <View style={updateObject(styles.grate90,styledProps)}></View> */}
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
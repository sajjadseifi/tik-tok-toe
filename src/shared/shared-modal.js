import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {StyleSheet, Text, View } from "react-native"
import { color } from "../constants";
import { APP_HEIGTH, APP_WIDTH } from "../constants/size";

export const SharedModal =({})=>{
   const [show ,setShow]=useState(false); 
   useEffect(()=>{
      setTimeout(() => setShow(true), 1000);
      setTimeout(() => setShow(false),4000);
   },[])
   return (
      <View show={show}  duration={1000}>
            <Text style={{color:color.white}}>{`width  : ${APP_WIDTH}`}</Text>
            <Text style={{color:color.white}} >{`height : ${APP_HEIGTH}`}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   modal:{
         justifyContent:"center",
         alignItems:"center",
         position:"absolute",
         width:APP_WIDTH,
         height:APP_HEIGTH,
         backgroundColor:"#00000055",
   },
});   

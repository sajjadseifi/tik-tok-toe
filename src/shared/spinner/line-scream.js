import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View,Animated } from "react-native";
import { StyleSheet } from "react-native";
import { color } from "../../constants";

export const LineScream = ()=>{
   const [state,setState]=useState(0);
   useEffect(()=>{

   },[])
   const animate = ()=>{
         
   }
   return (
      <View style={styles.container}>
         <View style={styles.lineScream}>
            <View style={styles.boxColos}>
               <Animated.View style={[styles.color,styles.red]}></Animated.View>
               <Animated.View style={[styles.color,styles.blue]}></Animated.View>
               <Animated.View style={[styles.color,styles.green]}></Animated.View>
               <Animated.View style={[styles.color,styles.yellow]}></Animated.View>
            </View>
         </View>
      </View>
   )
};

const styles = StyleSheet.create({
   container:{
   },
   lineScream:{
      borderRadius:20,
      width:120,
      height:24,
      padding:1,
      borderColor:"red",
      backgroundColor:"white",
      borderWidth:3,
      alignItems:"center",
      justifyContent:"center",
      overflow:"hidden"
   },
   boxColos:{
      overflow:"hidden",
      flex:1,
      borderRadius:20,
      flexDirection:"row",
   },
   color:{
      flex:1,
      height:50,
      backgroundColor:"green",
      transform:[
         {rotateZ:"45deg"},
         {translateY:-10},
         {translateX:-10},
         {scale:1.4,}
      ]
   },
   red:{
      backgroundColor:color.red,
   },
   blue:{
      backgroundColor:color.blue,
   },
   green:{
      backgroundColor:color.green,
   },
   yellow:{
      backgroundColor:color.gold,
   },
})
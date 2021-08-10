import React,{ useEffect, useRef } from "react";
import { StyleSheet,Animated } from "react-native";
import { updateObject } from "../../utils";
import { animateTiming } from "../../utils/animate";

export const OpacityAnimate = ({style={},from=0.5,to=1,duration=500, active = true,children})=>{
   const opacity = useRef(new Animated.Value(from)).current;

   useEffect(()=>{
      if(active)
      animateTiming(opacity,to,duration)
   },[active])
   
   const withStyleProp = updateObject(styles.opacity,style) 
   const animateOpcity = updateObject(withStyleProp,{
      opacity
   });

   return(
      <Animated.View style={animateOpcity}>
         {children}
      </Animated.View>
   )
};

const styles = StyleSheet.create({
   opacity:{      
      alignItems:"center",
      justifyContent:"center",
   }
});
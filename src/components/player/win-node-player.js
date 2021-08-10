import React, {useRef, useEffect } from "react";
import {StyleSheet,Animated} from "react-native"
import { color } from "../../constants";
import { ifExistenceComing, updateObject } from "../../utils";
import {  animateTiming, trasnformScale} from "../../utils/animate";

const LOAD_TIMER = 600;
const LOAD_TIMER_DIV3 = LOAD_TIMER/4;
const zoomOut = {
   0: {
     opacity: 1,
     scale: 1,
   },
   0.5: {
     opacity: 1,
     scale: 0.3,
   },
   1: {
     opacity: 0,
     scale: 0,
   },
 };
export const WinNodePlayer =({style,color})=>{
   const opacity = useRef(new Animated.Value(0)).current;
   const scaleX = useRef(new Animated.Value(1)).current;
   const scaleY = useRef(new Animated.Value(1)).current;
   
   useEffect(()=>{
      //opacity
      animateTiming(opacity,1,LOAD_TIMER);
      horisontalAnimate();
      verticalAnimate();
   },[])
   const verticalAnimate =()=>{
      //vertical scale
      animateTiming(scaleY,0.8,LOAD_TIMER_DIV3,
         ()=>animateTiming(scaleY,1.3,LOAD_TIMER_DIV3,
                        ()=>animateTiming(scaleY,1,LOAD_TIMER_DIV3)
         )
      );
   };
   const horisontalAnimate =()=>{
      //horisontal scale
      animateTiming(scaleX,1.3,LOAD_TIMER_DIV3,
         ()=>animateTiming(scaleX,0.8,LOAD_TIMER_DIV3,
                        ()=>animateTiming(scaleX,1,LOAD_TIMER_DIV3)
         )
      );
   };

   let turnStyle = updateObject(styles.win,style)
   turnStyle = ifExistenceComing(turnStyle,{ backgroundColor:color   });
   const transfStyle = trasnformScale(scaleY,scaleX);
   const styleCombined = updateObject(turnStyle,transfStyle);
   const animatedStyle = updateObject(styleCombined,{ opacity   });

   return (<Animated.View  style={animatedStyle}></Animated.View>)
};

const styles = StyleSheet.create({
   win:{
      backgroundColor:color.white,
      borderRadius:16,
      width:16,
      height:16,
      opacity:1,
   }
})
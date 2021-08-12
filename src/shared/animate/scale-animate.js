
import React, { useEffect,useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import { updateObject } from "../../utils";
import { animateTiming, trasnformScale } from "../../utils/animate";


export const ScaleAnimate  =({
   startScaleX=0.8,
   startScaleY=0.8,
   endScaleX=1,
   endScaleY=1,
   scales=[],
   duration=50,
   show=false,
   children,
})=>{
   const [inited,setInited] =useState(false);
   const vertical = useRef(new Animated.Value(scales.length>0?scales[0].x:startScaleY)).current;
   const horizontal = useRef(new Animated.Value(scales.length>0?scales[0].y:startScaleX)).current;

   console.log("OUT useffect inited")
   useEffect(()=>{
      console.log("BEFOR inited")
      if(!show && inited) return;
      console.log("AFTER inited")
      setInited(true);

      if(scales.length > 0) arrayAnimate();
      else animate(); 
   });

   const animate = ()=>{
      animateTiming(horizontal,endScaleX,duration);
      animateTiming(vertical,endScaleY,duration);  
   }
   const arrayAnimate=()=>{
      const amimate=(isVertical=false,index=1)=>{
         if(index >=  scales.length || index < 0) return;
         const {x,y,dx,dy, duration : d} = scales[index];
         
         const anim ={
            to :isVertical?vertical:horizontal,
            val: isVertical?y:x,
            dur:(isVertical ? dy:dx )  ||  (d || duration),
            recFun:()=>amimate(isVertical,index+1)
         };
         console.log(anim.val,anim.dur);
         animateTiming(anim.to,anim.val,anim.dur,anim.recFun);
      }
      //horizontal
      amimate();
      //vertical
      amimate(true);
   };

   const scalableStyle = trasnformScale(vertical,horizontal);
   const style = updateObject(styles.scalable,scalableStyle);

   return (
      <Animated.View style={style}>
         {children}
      </Animated.View>
   )
};

const styles = StyleSheet.create({
   scalable:{
      transform:[
         {scaleY:1},
         {scaleX:1}
      ]
   }
});
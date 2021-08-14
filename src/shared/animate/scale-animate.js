
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
   reverse=false,
   afterAnimated=()=>{},
   children,
})=>{

   const [inited,setInited] =useState(false);
   const vertical = useRef(new Animated.Value(scales.length>0?scales[0].x:startScaleY)).current;
   const horizontal = useRef(new Animated.Value(scales.length>0?scales[0].y:startScaleX)).current;

   useEffect(()=>{
      let showable =false;
      if(typeof show == "function") showable = show()
      
      if(!showable && inited) return;
      
      if(!inited) setInited(true);

      if(scales.length > 0) arrayAnimate();
      else animate(); 

      return ()=> setInited(true);
   });

   const animate = ()=>{
      animateTiming(horizontal,endScaleX,duration);
      animateTiming(vertical,endScaleY,duration);  
      setTimeout(() => afterAnimated(), duration);
   }
   const arrayAnimate=()=>{
      const arr =  reverse ?scales.reverse() : scales;
      const amimate=(isVertical=false,index=1)=>{
         if(index >=  arr.length || index < 0) return;
         
         const {x,y,dx,dy, duration : d} = arr[index];

         const anim ={
            to :isVertical?vertical:horizontal,
            val: isVertical?y:x,
            dur:(isVertical ? dy:dx )  ||  (d || duration),
            recFun:()=>amimate(isVertical,index+1)
         };
         
         animateTiming(anim.to,anim.val,anim.dur,anim.recFun);
      }
      //horizontal
      amimate();
      //vertical
      amimate(true);
      
      let timer = 20; 
      for (const scale of scales) {
         let t=0;
         const {dx=0,dy=0, duration=0} = scale;  
         if(dx || dy) t = dy > dx ? dy:dx;
         else if (duration) t = duration;
         timer+=t;
      }
      setTimeout(() => afterAnimated(), timer);
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
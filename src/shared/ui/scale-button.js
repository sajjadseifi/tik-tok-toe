import React from "react";
import { useRef } from "react";
import { StyleSheet ,Animated, TouchableOpacity} from "react-native";
import { updateObject } from "../../utils";
import { animateTiming, sinAnimate, trasnformScale } from "../../utils/animate";

export const ScaleButton=({
   startScaleX=1,
   startScaleY=1,
   endScaleX=0.9,
   endScaleY=0.9,
   duration=100,
   children,
   onPress=(e)=>{}
})=>{
   const horizontal = useRef(new Animated.Value(startScaleX)).current;
   const vertical = useRef(new Animated.Value(startScaleY)).current;

   const onPressIn=()=>{
      animateTiming(horizontal,endScaleX,duration);
      animateTiming(vertical,endScaleY,duration);
   };
   const onPressOut=(e)=>{
      animateTiming(horizontal,startScaleX,duration);
      animateTiming(vertical,startScaleY,duration);
   };

   const scalableStyle = trasnformScale(vertical,horizontal);
   const style = updateObject(styles.scalable,scalableStyle);

   return (
      <TouchableOpacity
         onPress={onPress}
         onPressIn={onPressIn}
         onPressOut={onPressOut}
         activeOpacity={0.7}
      >
         <Animated.View style={style}>
            {children}
         </Animated.View>
      </TouchableOpacity>
   )
};

const styles = StyleSheet.create({
   scalable:{
      // backgroundColor:"red",
      transform:[
         {scaleY:1},
         {scaleX:1}
      ]
   }
})
import { Animated } from "react-native"

const one = new Animated.Value(1);
export const animateTiming = (to,value,duration,next=()=>{})=>{
   Animated.timing(to,{
      toValue:value,         
      duration:duration,
      useNativeDriver: true,
   }).start(next)
}

export const sinAnimate=(to,start=0,end=0,duration=0)=>{
   animateTiming(to,end,duration,()=>{
      animateTiming(to,start,duration)
   })
}

export const trasnformScale=(vertical=one,horizontal=one)=>{
   return{
      transform:[
         {scaleX:horizontal},
         {scaleY:vertical}
      ]
   }
};
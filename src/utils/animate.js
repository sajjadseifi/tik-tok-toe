import { Animated } from "react-native"

const one = new Animated.Value(1);
export const animateTiming = (to,value,duration,next=()=>{})=>{
   return Animated.timing(to,{
      toValue:value,         
      duration:duration,
      useNativeDriver: true,
   }).start(next)
}

export const sinAnimate=(to,start=0,end=0,duration=0)=>{
   return animateTiming(to,end,duration,
      ()=> animateTiming(to,start,duration)
   )
}
export const animateLooping=(to,value,duration,next=()=>{})=>{
   Animated.loop(
      Animated.timing(to, {
        toValue: value,
        duration: duration,
      })
    ).start(next);
 };
 export const sinAnimateLooping=(to,start=0,end=0,duration=0)=>{
   animateLooping(to,end,duration,()=>{
      animateLooping(to,start,duration)
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

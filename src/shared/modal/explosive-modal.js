import React,{useEffect ,useRef,} from "react";
import { StyleSheet, Animated } from "react-native";
import { APP_WIDTH } from "../../constants/size";
import { ifExistenceComing, updateObject } from "../../utils";
import { trasnformScale } from "../../utils/animate";

const MINES_HALF_WIDTH = APP_WIDTH * 7/8;

const times ={
   TOTAL_TIMER : 320,
   T200:200,
   T120:120,
   T100:100
};
export const ExplosiveModal=({
   width=null,
   close=false,
   reAnimate=false,
   onClosed=()=>{},
   speed=1,
   children
})=>{

   const verticalSize = useRef(new Animated.Value(0)).current;
   const horizontalSize = useRef(new Animated.Value(0)).current;
   
   useEffect(()=>{
      explosion();
   },[reAnimate])

   useEffect(()=>{
      if(close) {
         explosionBlackout();
         setTimeout(() => onClosed(), times.TOTAL_TIMER * speed + 50);
      }
   },[close])

   const animated = (to,value,duration,speed,next=()=>{})=>{
      Animated.timing(to,{
         toValue:value,         
         duration:duration / (speed || 1),
         useNativeDriver: true,
      }).start(next)
   }
    const explosionBlackout=()=>{
      animated(verticalSize,0.5,times.T120,speed,()=>
                     animated(verticalSize,0.8,times.T100,speed,()=>
                                    animated(verticalSize,0,times.T100,speed)));
                  
      animated(horizontalSize,3,times.T200,speed,()=>
                     animated(horizontalSize,0,times.T120,speed));
    }

   const explosion=()=>{

      animated(verticalSize,0.7,times.T120,speed,()=>  
                     animated(verticalSize,1.3,times.T100,speed,()=>  
                                    animated(verticalSize,1,times.T100,speed)));

      animated(horizontalSize,4,times.T200,speed,()=>
                     animated(horizontalSize,1,times.T120,speed));
   };
   const trasfStyle = trasnformScale(verticalSize,horizontalSize);
   const cntStyle = updateObject(styles.container,trasfStyle);

   return(
      <Animated.View  style={ifExistenceComing(cntStyle,{width})}>
        {children}
      </Animated.View>
   )
};
const styles = StyleSheet.create({
   container:{
      width:MINES_HALF_WIDTH,
      // backgroundColor:color.white,
      borderRadius:5,
      // padding:10,
   },
});